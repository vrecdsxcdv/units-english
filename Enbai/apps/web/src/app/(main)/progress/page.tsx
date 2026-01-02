'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn, capitalizeFirst, getSkillBgColor } from '@/lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const SKILLS = [
  'grammar',
  'vocabulary',
  'pronunciation',
  'listening',
  'speaking',
  'slang',
  'word_formation',
  'fluency',
  'writing',
  'comprehension',
] as const;

// Mock progress data
const mockProgress = {
  overall: 0.52,
  weeklyChange: 0.03,
  skills: {
    grammar: { current: 0.65, change: 0.05 },
    vocabulary: { current: 0.58, change: 0.02 },
    pronunciation: { current: 0.45, change: -0.01 },
    listening: { current: 0.52, change: 0.03 },
    speaking: { current: 0.48, change: 0.04 },
    slang: { current: 0.35, change: 0.02 },
    word_formation: { current: 0.42, change: 0.01 },
    fluency: { current: 0.50, change: 0.00 },
    writing: { current: 0.55, change: 0.03 },
    comprehension: { current: 0.60, change: 0.02 },
  },
  recentSessions: [
    { date: '2024-12-28', duration: 15, tasksCompleted: 5 },
    { date: '2024-12-27', duration: 20, tasksCompleted: 7 },
    { date: '2024-12-26', duration: 10, tasksCompleted: 3 },
  ],
};

export default function ProgressPage() {
  const getChangeIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-600" />;
    if (change < 0) return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-gray-400" />;
  };

  const getChangeText = (change: number) => {
    if (change > 0) return `+${(change * 100).toFixed(0)}%`;
    if (change < 0) return `${(change * 100).toFixed(0)}%`;
    return '0%';
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Progress Tracking</h1>
        <p className="text-muted-foreground mt-1">
          Monitor your English learning journey
        </p>
      </div>

      {/* Overall Progress */}
      <Card variant="bordered" className="mb-8">
        <CardHeader>
          <CardTitle>Overall Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end gap-4">
            <div className="text-6xl font-bold text-[hsl(var(--primary))]">
              {Math.round(mockProgress.overall * 100)}%
            </div>
            <div className="flex items-center gap-2 pb-2">
              {getChangeIcon(mockProgress.weeklyChange)}
              <span className={cn(
                'text-sm font-medium',
                mockProgress.weeklyChange > 0 ? 'text-green-600' :
                mockProgress.weeklyChange < 0 ? 'text-red-500' : 'text-gray-500'
              )}>
                {getChangeText(mockProgress.weeklyChange)} this week
              </span>
            </div>
          </div>
          <div className="mt-4 h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-[hsl(var(--primary))] transition-all"
              style={{ width: `${mockProgress.overall * 100}%` }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Skills Breakdown */}
      <Card variant="bordered" className="mb-8">
        <CardHeader>
          <CardTitle>Skills Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {SKILLS.map((skill) => {
              const data = mockProgress.skills[skill];
              return (
                <div key={skill} className="flex items-center gap-4">
                  <div className="w-32 text-sm font-medium">
                    {capitalizeFirst(skill.replace('_', ' '))}
                  </div>
                  <div className="flex-1">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={cn('h-full rounded-full transition-all', getSkillBgColor(data.current))}
                        style={{ width: `${data.current * 100}%` }}
                      />
                    </div>
                  </div>
                  <div className="w-12 text-right text-sm font-medium">
                    {Math.round(data.current * 100)}%
                  </div>
                  <div className="w-16 flex items-center justify-end gap-1">
                    {getChangeIcon(data.change)}
                    <span className={cn(
                      'text-xs',
                      data.change > 0 ? 'text-green-600' :
                      data.change < 0 ? 'text-red-500' : 'text-gray-500'
                    )}>
                      {getChangeText(data.change)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Recent Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {mockProgress.recentSessions.map((session, i) => (
              <div
                key={i}
                className="flex items-center justify-between p-3 border rounded-lg"
              >
                <div>
                  <p className="font-medium">{session.date}</p>
                  <p className="text-sm text-muted-foreground">
                    {session.tasksCompleted} tasks completed
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{session.duration} min</p>
                  <p className="text-sm text-muted-foreground">duration</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
