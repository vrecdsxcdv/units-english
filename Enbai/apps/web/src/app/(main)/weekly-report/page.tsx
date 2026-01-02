'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn, capitalizeFirst, getSkillBgColor } from '@/lib/utils';
import {
  TrendingUp,
  TrendingDown,
  Minus,
  Trophy,
  AlertTriangle,
  Target,
  Clock,
  CheckCircle2,
  XCircle,
  Flame,
  Calendar,
  Lightbulb,
} from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';

// Types based on WeeklyReportV1
interface SkillProgress {
  skill: string;
  skillName: string;
  skillNameRu: string;
  weekStart: number;
  weekEnd: number;
  delta: number;
  trend: 'up' | 'down' | 'stable';
}

interface Achievement {
  id: string;
  name: string;
  nameRu: string;
  description: string;
  descriptionRu: string;
  icon: string;
  unlockedAt: string;
}

interface Challenge {
  id: string;
  skill: string;
  description: string;
  descriptionRu: string;
  severity: 'low' | 'medium' | 'high';
  suggestedFix: string;
  suggestedFixRu: string;
}

interface Risk {
  id: string;
  type: string;
  description: string;
  descriptionRu: string;
  severity: 'low' | 'medium' | 'high';
  recommendation: string;
  recommendationRu: string;
}

interface Recommendation {
  id: string;
  type: string;
  priority: 'low' | 'medium' | 'high';
  title: string;
  titleRu: string;
  description: string;
  descriptionRu: string;
  estimatedMinutes?: number;
}

interface NextWeekPlan {
  primaryFocus: string;
  secondaryFocus: string;
  suggestedDailyMinutes: number;
  goals: string[];
  goalsRu: string[];
}

interface WeeklyReport {
  schemaVersion: string;
  generatedAt: string;
  userId: string;
  weekStart: string;
  weekEnd: string;
  summary: {
    totalTasks: number;
    correctTasks: number;
    accuracyPercent: number;
    totalMinutes: number;
    streakDays: number;
    daysActive: number;
    cefrLevel: string;
    cefrProgress: number;
    mostImprovedSkill: string | null;
    needsWorkSkill: string | null;
    textSummary: string;
    textSummaryRu: string;
  };
  skillProgress: SkillProgress[];
  achievements: Achievement[];
  challenges: Challenge[];
  risks: Risk[];
  recommendations: Recommendation[];
  nextWeekPlan: NextWeekPlan;
}

export default function WeeklyReportPage() {
  const { token } = useAuth();
  const [report, setReport] = useState<WeeklyReport | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchReport() {
      if (!token) return;

      try {
        setLoading(true);
        const res = await fetch('/api/progress/weekly-report', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch report');
        }

        const data = await res.json();
        setReport(data.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchReport();
  }, [token]);

  const getTrendIcon = (trend: 'up' | 'down' | 'stable') => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-400" />;
  };

  const getSeverityColor = (severity: 'low' | 'medium' | 'high') => {
    switch (severity) {
      case 'high':
        return 'border-red-200 bg-red-50';
      case 'medium':
        return 'border-yellow-200 bg-yellow-50';
      default:
        return 'border-blue-200 bg-blue-50';
    }
  };

  const getPriorityBadge = (priority: 'low' | 'medium' | 'high') => {
    const colors = {
      high: 'bg-red-100 text-red-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800',
    };
    return (
      <span className={cn('px-2 py-0.5 rounded text-xs font-medium', colors[priority])}>
        {priority === 'high' ? 'Важно' : priority === 'medium' ? 'Средне' : 'Низкий'}
      </span>
    );
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-muted rounded w-1/3" />
          <div className="h-48 bg-muted rounded" />
          <div className="h-64 bg-muted rounded" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto py-8">
        <Card variant="bordered" className="border-red-200 bg-red-50">
          <CardContent className="py-6">
            <div className="flex items-center gap-3 text-red-700">
              <XCircle className="w-5 h-5" />
              <p>Ошибка загрузки отчёта: {error}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!report) {
    return (
      <div className="max-w-4xl mx-auto py-8">
        <Card variant="bordered">
          <CardContent className="py-12 text-center text-muted-foreground">
            <p>Нет данных для отчёта. Начните заниматься, чтобы увидеть прогресс!</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Еженедельный отчёт</h1>
          <p className="text-muted-foreground">
            {report.weekStart} — {report.weekEnd}
          </p>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">Уровень</div>
          <div className="text-2xl font-bold text-primary">{report.summary.cefrLevel}</div>
        </div>
      </div>

      {/* Summary Card */}
      <Card variant="bordered">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            Итоги недели
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg mb-6">{report.summary.textSummaryRu}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold text-primary">
                {report.summary.totalTasks}
              </div>
              <div className="text-sm text-muted-foreground">Заданий</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold text-green-600">
                {report.summary.accuracyPercent}%
              </div>
              <div className="text-sm text-muted-foreground">Точность</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold flex items-center justify-center gap-1">
                <Flame className="w-6 h-6 text-orange-500" />
                {report.summary.streakDays}
              </div>
              <div className="text-sm text-muted-foreground">Дней подряд</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-3xl font-bold flex items-center justify-center gap-1">
                <Clock className="w-5 h-5" />
                {report.summary.totalMinutes}
              </div>
              <div className="text-sm text-muted-foreground">Минут</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skill Progress */}
      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Прогресс по навыкам</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {report.skillProgress.map((skill) => (
              <div key={skill.skill} className="flex items-center gap-4">
                <div className="w-28 text-sm font-medium truncate">
                  {skill.skillNameRu}
                </div>
                <div className="flex-1">
                  <div className="h-3 bg-muted rounded-full overflow-hidden relative">
                    {/* Previous value (faded) */}
                    <div
                      className="absolute h-full bg-gray-300 rounded-full"
                      style={{ width: `${skill.weekStart}%` }}
                    />
                    {/* Current value */}
                    <div
                      className={cn('h-full rounded-full transition-all relative z-10', getSkillBgColor(skill.weekEnd / 100))}
                      style={{ width: `${skill.weekEnd}%` }}
                    />
                  </div>
                </div>
                <div className="w-12 text-right text-sm font-medium">
                  {skill.weekEnd}%
                </div>
                <div className="w-16 flex items-center justify-end gap-1">
                  {getTrendIcon(skill.trend)}
                  <span
                    className={cn(
                      'text-xs font-medium',
                      skill.delta > 0 ? 'text-green-600' : skill.delta < 0 ? 'text-red-500' : 'text-gray-500'
                    )}
                  >
                    {skill.delta > 0 ? '+' : ''}{skill.delta}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      {report.achievements.length > 0 && (
        <Card variant="bordered">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-500" />
              Достижения недели
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2">
              {report.achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="flex items-center gap-3 p-3 border rounded-lg bg-yellow-50 border-yellow-200"
                >
                  <div className="text-3xl">{achievement.icon}</div>
                  <div>
                    <div className="font-medium">{achievement.nameRu}</div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.descriptionRu}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Challenges */}
      {report.challenges.length > 0 && (
        <Card variant="bordered">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              Сложности
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {report.challenges.map((challenge) => (
                <div
                  key={challenge.id}
                  className={cn('p-4 border rounded-lg', getSeverityColor(challenge.severity))}
                >
                  <div className="font-medium">{challenge.descriptionRu}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {challenge.suggestedFixRu}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Risks */}
      {report.risks.length > 0 && (
        <Card variant="bordered">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              Риски
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {report.risks.map((risk) => (
                <div
                  key={risk.id}
                  className={cn('p-4 border rounded-lg', getSeverityColor(risk.severity))}
                >
                  <div className="font-medium">{risk.descriptionRu}</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {risk.recommendationRu}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recommendations */}
      {report.recommendations.length > 0 && (
        <Card variant="bordered">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-blue-500" />
              Рекомендации
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {report.recommendations.map((rec) => (
                <div
                  key={rec.id}
                  className="flex items-start gap-3 p-4 border rounded-lg"
                >
                  <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{rec.titleRu}</span>
                      {getPriorityBadge(rec.priority)}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {rec.descriptionRu}
                    </div>
                    {rec.estimatedMinutes && (
                      <div className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        ~{rec.estimatedMinutes} мин
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Next Week Plan */}
      <Card variant="bordered" className="border-primary/20 bg-primary/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            План на следующую неделю
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 min-w-[200px] p-4 bg-background rounded-lg">
                <div className="text-sm text-muted-foreground">Основной фокус</div>
                <div className="font-medium text-lg capitalize">
                  {report.nextWeekPlan.primaryFocus?.replace('_', ' ') || 'Grammar'}
                </div>
              </div>
              <div className="flex-1 min-w-[200px] p-4 bg-background rounded-lg">
                <div className="text-sm text-muted-foreground">Дополнительно</div>
                <div className="font-medium text-lg capitalize">
                  {report.nextWeekPlan.secondaryFocus?.replace('_', ' ') || 'Vocabulary'}
                </div>
              </div>
              <div className="flex-1 min-w-[200px] p-4 bg-background rounded-lg">
                <div className="text-sm text-muted-foreground">Рекомендуемое время</div>
                <div className="font-medium text-lg">
                  {report.nextWeekPlan.suggestedDailyMinutes} мин/день
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-medium mb-2">Цели:</div>
              <ul className="space-y-2">
                {report.nextWeekPlan.goalsRu?.map((goal, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
