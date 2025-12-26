"use client";

import { useState } from "react";
import Link from "next/link";
import { Save, Bell, Zap, Globe } from "lucide-react";

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    language: "en",
    autoSpeak: false,
    notifications: true,
    model: "gpt-4o-mini",
    temperature: 0.7,
  });

  const handleSave = () => {
    // Save to localStorage or API
    localStorage.setItem("tutor-settings", JSON.stringify(settings));
    alert("Settings saved!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/tutor"
            className="text-indigo-600 hover:text-indigo-700 mb-4 inline-block"
          >
            ← Back to chat
          </Link>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
            Settings
          </h1>
          <p className="text-gray-600 mt-2">
            Customize your Speakly AI experience
          </p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Language */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-semibold text-gray-900">
                Interface Language
              </h2>
            </div>
            <select
              value={settings.language}
              onChange={(e) =>
                setSettings({ ...settings, language: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </div>

          {/* Model */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-semibold text-gray-900">AI Model</h2>
            </div>
            <select
              value={settings.model}
              onChange={(e) =>
                setSettings({ ...settings, model: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="gpt-4o-mini">GPT-4o Mini (Faster)</option>
              <option value="gpt-4">GPT-4 (More accurate)</option>
              <option value="claude-3-sonnet">Claude 3 Sonnet</option>
            </select>
            <p className="text-xs text-gray-500 mt-2">
              GPT-4o Mini is faster and cheaper, GPT-4 gives more detailed
              answers
            </p>
          </div>

          {/* Temperature */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">
                Creativity Level
              </h2>
              <span className="text-sm text-gray-600">
                {settings.temperature}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={settings.temperature}
              onChange={(e) =>
                setSettings({
                  ...settings,
                  temperature: parseFloat(e.target.value),
                })
              }
              className="w-full accent-indigo-600"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>Precise answers</span>
              <span>Creative answers</span>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="w-5 h-5 text-indigo-600" />
              <h2 className="text-lg font-semibold text-gray-900">
                Additional Features
              </h2>
            </div>
            <div className="space-y-4">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-700">Auto-play voice responses</span>
                <input
                  type="checkbox"
                  checked={settings.autoSpeak}
                  onChange={(e) =>
                    setSettings({ ...settings, autoSpeak: e.target.checked })
                  }
                  className="w-5 h-5 text-indigo-600 accent-indigo-600"
                />
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-gray-700">Notifications</span>
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      notifications: e.target.checked,
                    })
                  }
                  className="w-5 h-5 text-indigo-600 accent-indigo-600"
                />
              </label>
            </div>
          </div>

          {/* Save Button */}
          <button
            onClick={handleSave}
            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-lg shadow-indigo-500/20"
          >
            <Save className="w-5 h-5" />
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
