"use client";
import React from "react";
import CourseSidebar from "./CourseSidebar";

export default function LessonShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-6xl p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row gap-6">
        <CourseSidebar />
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}








