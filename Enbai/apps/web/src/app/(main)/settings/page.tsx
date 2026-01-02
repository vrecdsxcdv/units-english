'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuthStore } from '@/stores/authStore';

export default function SettingsPage() {
  const { user } = useAuthStore();
  const [dailyGoal, setDailyGoal] = useState(15);
  const [targetLevel, setTargetLevel] = useState('B2');

  const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
  const timeOptions = [5, 10, 15, 20, 30, 45, 60];

  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-1">
          Customize your learning experience
        </p>
      </div>

      {/* Account Info */}
      <Card variant="bordered" className="mb-6">
        <CardHeader>
          <CardTitle>Account</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-muted-foreground">Session ID</label>
              <p className="font-mono text-sm mt-1">{user?.id || 'Guest'}</p>
            </div>
            <div>
              <label className="text-sm text-muted-foreground">Account Type</label>
              <p className="font-medium mt-1">Guest Session</p>
              <p className="text-sm text-muted-foreground mt-1">
                Your progress will be saved during this session only
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Preferences */}
      <Card variant="bordered" className="mb-6">
        <CardHeader>
          <CardTitle>Learning Preferences</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Daily Goal */}
            <div>
              <label className="text-sm font-medium block mb-2">
                Daily Practice Goal
              </label>
              <div className="flex flex-wrap gap-2">
                {timeOptions.map((time) => (
                  <button
                    key={time}
                    onClick={() => setDailyGoal(time)}
                    className={`px-4 py-2 border-2 transition-colors ${
                      dailyGoal === time
                        ? 'bg-[hsl(var(--primary))] text-white border-[hsl(var(--primary))]'
                        : 'border-foreground hover:bg-muted'
                    }`}
                  >
                    {time} min
                  </button>
                ))}
              </div>
            </div>

            {/* Target Level */}
            <div>
              <label className="text-sm font-medium block mb-2">
                Target Level
              </label>
              <div className="flex flex-wrap gap-2">
                {levels.map((level) => (
                  <button
                    key={level}
                    onClick={() => setTargetLevel(level)}
                    className={`px-4 py-2 border-2 transition-colors ${
                      targetLevel === level
                        ? 'bg-[hsl(var(--primary))] text-white border-[hsl(var(--primary))]'
                        : 'border-foreground hover:bg-muted'
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {targetLevel === 'A1' && 'Beginner - Basic phrases and expressions'}
                {targetLevel === 'A2' && 'Elementary - Simple everyday topics'}
                {targetLevel === 'B1' && 'Intermediate - Main points on familiar matters'}
                {targetLevel === 'B2' && 'Upper Intermediate - Complex texts and discussions'}
                {targetLevel === 'C1' && 'Advanced - Fluent expression for academic/professional use'}
                {targetLevel === 'C2' && 'Proficient - Near-native level understanding'}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button className="btn-brutal-primary">
          SAVE CHANGES
        </Button>
      </div>
    </div>
  );
}
