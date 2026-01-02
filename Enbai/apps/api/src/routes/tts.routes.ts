import { FastifyInstance } from 'fastify';
import { z } from 'zod';
import { authenticate } from '../middleware/auth';
import { config } from '../config';

const ttsSchema = z.object({
  text: z.string().min(1).max(4096),
  voice: z.enum(['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer']).default('nova'),
  speed: z.number().min(0.25).max(4.0).default(1.0),
});

export async function ttsRoutes(app: FastifyInstance) {
  app.addHook('preHandler', authenticate);

  /**
   * POST /tts/speak
   * Convert text to speech using OpenAI TTS
   * Returns audio/mpeg stream
   */
  app.post('/speak', async (request, reply) => {
    if (!config.OPENAI_API_KEY) {
      // Fallback: return empty response, client will use Web Speech API
      return reply.code(503).send({
        success: false,
        error: { code: 'TTS_NOT_CONFIGURED', message: 'TTS not available' },
      });
    }

    const parsed = ttsSchema.safeParse(request.body);
    if (!parsed.success) {
      return reply.code(400).send({
        success: false,
        error: { code: 'VALIDATION_ERROR', message: 'Invalid input' },
      });
    }

    const { text, voice, speed } = parsed.data;

    try {
      const response = await fetch('https://api.openai.com/v1/audio/speech', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${config.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'tts-1-hd', // High quality model
          input: text,
          voice: voice,
          speed: speed,
          response_format: 'mp3',
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error('OpenAI TTS error:', error);
        return reply.code(response.status).send({
          success: false,
          error: { code: 'TTS_ERROR', message: 'Failed to generate speech' },
        });
      }

      // Stream the audio response
      const audioBuffer = await response.arrayBuffer();

      return reply
        .header('Content-Type', 'audio/mpeg')
        .header('Cache-Control', 'public, max-age=86400') // Cache for 24h
        .send(Buffer.from(audioBuffer));

    } catch (error) {
      console.error('TTS error:', error);
      return reply.code(500).send({
        success: false,
        error: { code: 'TTS_ERROR', message: 'Internal error' },
      });
    }
  });
}
