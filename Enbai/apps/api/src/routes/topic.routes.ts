import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { authenticate, getCurrentUserId } from '../middleware/auth';
import { Errors } from '../utils/errors';
import { prisma } from '../db';
import {
  ALL_TOPIC_TEMPLATES,
  getTemplateById,
  getTemplatesForLevel,
  getTemplatesForSkill,
} from '../data/topic-templates';
import { grammarClinicB1TechExample } from '../data/topic-templates/examples/grammar-clinic-b1-tech';

const generateTopicSchema = z.object({
  templateId: z.string().optional(),
  targetSkill: z.string().optional(),
});

export async function topicRoutes(app: FastifyInstance) {
  // All topic routes require authentication
  app.addHook('preHandler', authenticate);

  /**
   * GET /topics/templates
   * Get all available topic templates
   */
  app.get('/templates', async (request, reply) => {
    const templates = ALL_TOPIC_TEMPLATES.map(t => ({
      id: t.id,
      name: t.name,
      description: t.description,
      icon: t.icon,
      category: t.category,
      applicableCEFR: t.applicableCEFR,
      primarySkills: t.primarySkills,
      secondarySkills: t.secondarySkills,
      estimatedMinutes: t.estimatedTotalMinutes,
      pageCount: t.pages.length,
    }));

    return reply.send({
      success: true,
      data: {
        templates,
        total: templates.length,
      },
    });
  });

  /**
   * GET /topics/templates/:id
   * Get specific template details
   */
  app.get<{ Params: { id: string } }>('/templates/:id', async (request, reply) => {
    const { id } = request.params;
    const template = getTemplateById(id);

    if (!template) {
      throw Errors.notFound('Template');
    }

    return reply.send({
      success: true,
      data: { template },
    });
  });

  /**
   * GET /topics/templates/for-level/:level
   * Get templates applicable for CEFR level
   */
  app.get<{ Params: { level: string } }>('/templates/for-level/:level', async (request, reply) => {
    const { level } = request.params;
    const templates = getTemplatesForLevel(level);

    return reply.send({
      success: true,
      data: {
        templates: templates.map(t => ({
          id: t.id,
          name: t.name,
          description: t.description,
          icon: t.icon,
          primarySkills: t.primarySkills,
        })),
        total: templates.length,
      },
    });
  });

  /**
   * GET /topics/templates/for-skill/:skill
   * Get templates for specific skill
   */
  app.get<{ Params: { skill: string } }>('/templates/for-skill/:skill', async (request, reply) => {
    const { skill } = request.params;
    const templates = getTemplatesForSkill(skill);

    return reply.send({
      success: true,
      data: {
        templates: templates.map(t => ({
          id: t.id,
          name: t.name,
          description: t.description,
          icon: t.icon,
          primarySkills: t.primarySkills,
        })),
        total: templates.length,
      },
    });
  });

  /**
   * POST /topics/generate
   * Generate a topic from template (returns example for now)
   */
  app.post('/generate', async (request, reply) => {
    const userId = getCurrentUserId(request);

    const parsed = generateTopicSchema.safeParse(request.body);
    if (!parsed.success) {
      throw Errors.validationError('Invalid input', {
        errors: parsed.error.flatten().fieldErrors,
      });
    }

    // For now, return the example filled template
    // TODO: Integrate with AI to generate real content
    const generatedTopic = {
      ...grammarClinicB1TechExample,
      id: `topic-${Date.now()}`,
      userId,
      startedAt: new Date().toISOString(),
    };

    return reply.send({
      success: true,
      data: {
        topic: generatedTopic,
      },
    });
  });

  /**
   * GET /topics/example
   * Get example of filled template (for testing)
   */
  app.get('/example', async (request, reply) => {
    return reply.send({
      success: true,
      data: {
        topic: grammarClinicB1TechExample,
      },
    });
  });
}
