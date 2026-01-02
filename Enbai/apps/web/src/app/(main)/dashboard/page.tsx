'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn, capitalizeFirst, getSkillBgColor } from '@/lib/utils';
import { useAuthStore } from '@/stores/authStore';
import { api } from '@/lib/api/client';
import { Target, Flame, Clock, TrendingUp } from 'lucide-react';
import type { SkillType } from '@enbai/types';

// Skill types for display
const SKILLS: SkillType[] = [
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
];

export default function DashboardPage() {
  const { profile } = useAuthStore();
  const [skillVector, setSkillVector] = useState<Record<string, number> | null>(null);
  const [stats, setStats] = useState({
    tasksCompleted: 0,
    streak: 0,
    minutesToday: 0,
    level: 'B1',
  });

  useEffect(() => {
    // Fetch user stats and skill vector
    const fetchData = async () => {
      try {
        const me = await api.get<any>('/auth/me');
        if (me.skillVector) {
          setSkillVector({
            grammar: Number(me.skillVector.grammar),
            vocabulary: Number(me.skillVector.vocabulary),
            pronunciation: Number(me.skillVector.pronunciation),
            listening: Number(me.skillVector.listening),
            speaking: Number(me.skillVector.speaking),
            slang: Number(me.skillVector.slang),
            word_formation: Number(me.skillVector.wordFormation),
            fluency: Number(me.skillVector.fluency),
            writing: Number(me.skillVector.writing),
            comprehension: Number(me.skillVector.comprehension),
          });
        }
      } catch (error) {
        console.error('Failed to fetch user data:', error);
      }
    };

    fetchData();
  }, []);

  // Calculate overall level from skill vector
  const getOverallLevel = () => {
    if (!skillVector) return 'B1';
    const avg = Object.values(skillVector).reduce((a, b) => a + b, 0) / 10;
    if (avg < 0.17) return 'A1';
    if (avg < 0.33) return 'A2';
    if (avg < 0.50) return 'B1';
    if (avg < 0.67) return 'B2';
    if (avg < 0.83) return 'C1';
    return 'C2';
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Welcome header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back! 👋
        </h1>
        <p className="text-gray-500 mt-1">
          Ready to continue your English learning journey?
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={<Target className="w-5 h-5 text-primary-500" />}
          label="Tasks Today"
          value={`${stats.tasksCompleted}/3`}
        />
        <StatCard
          icon={<Flame className="w-5 h-5 text-orange-500" />}
          label="Streak"
          value={`${stats.streak} days`}
        />
        <StatCard
          icon={<Clock className="w-5 h-5 text-blue-500" />}
          label="Time Today"
          value={`${stats.minutesToday} min`}
        />
        <StatCard
          icon={<TrendingUp className="w-5 h-5 text-success-500" />}
          label="Level"
          value={getOverallLevel()}
        />
      </div>

      {/* Skill Vector */}
      <Card variant="bordered" className="mb-8">
        <CardHeader>
          <CardTitle>Your Skills</CardTitle>
        </CardHeader>
        <CardContent>
          {skillVector ? (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {SKILLS.map((skill) => (
                <SkillBar
                  key={skill}
                  skill={skill}
                  value={skillVector[skill] || 0.5}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">
                Complete the onboarding test to see your skills!
              </p>
              <Button>Start Assessment</Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Quick actions */}
      <Card variant="bordered">
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <ActionCard
              title="Practice Grammar"
              description="Strengthen your grammar skills with targeted exercises"
              action="Start"
            />
            <ActionCard
              title="Vocabulary Builder"
              description="Learn new words and expand your vocabulary"
              action="Start"
            />
            <ActionCard
              title="Speaking Practice"
              description="Improve your pronunciation and fluency"
              action="Start"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <Card variant="bordered">
      <CardContent className="p-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-100 rounded-lg">{icon}</div>
          <div>
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-lg font-semibold text-gray-900">{value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function SkillBar({ skill, value }: { skill: string; value: number }) {
  const percentage = Math.round(value * 100);

  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-600">{capitalizeFirst(skill)}</span>
        <span className="text-gray-900 font-medium">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={cn('h-full rounded-full transition-all', getSkillBgColor(value))}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

function ActionCard({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action: string;
}) {
  return (
    <div className="p-4 border rounded-lg hover:border-primary-300 hover:bg-primary-50/50 transition-colors cursor-pointer">
      <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-500 mb-3">{description}</p>
      <Button size="sm">{action}</Button>
    </div>
  );
}
