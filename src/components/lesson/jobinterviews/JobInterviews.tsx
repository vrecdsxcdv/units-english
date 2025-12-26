"use client";

import { useState } from "react";
import CheckableExercise, { FillItem } from "@/components/lesson/CheckableExercise";

interface Props {
  step: number;
}

export default function JobInterviews({ step }: Props) {
  // Hooks must be at the top level
  const [expandedStep3, setExpandedStep3] = useState<number | null>(null);
  const [expandedStep4, setExpandedStep4] = useState<number | null>(null);

  // ═══════════════════════════════════════════════════════════════════
  // STEP 1: Introduction
  // ═══════════════════════════════════════════════════════════════════
  if (step === 1) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-3">💼 Job Interviews: Questions & Answers</h2>
          <p className="text-lg opacity-90">
            Master the art of job interviews in English and land your dream job
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">🎯 What you&apos;ll learn:</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">✓</span>
              <span className="text-slate-700">Common interview questions and best answers</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">✓</span>
              <span className="text-slate-700">STAR method for behavioral questions</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">✓</span>
              <span className="text-slate-700">Salary negotiation techniques</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-purple-600 mt-1">✓</span>
              <span className="text-slate-700">Body language and communication skills</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 text-center">
            <div className="text-4xl mb-3">📞</div>
            <p className="text-sm font-medium text-slate-700">Phone Interview</p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 text-center">
            <div className="text-4xl mb-3">💻</div>
            <p className="text-sm font-medium text-slate-700">Video Interview</p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 text-center">
            <div className="text-4xl mb-3">🤝</div>
            <p className="text-sm font-medium text-slate-700">In-Person Interview</p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 border border-slate-200 text-center">
            <div className="text-4xl mb-3">👥</div>
            <p className="text-sm font-medium text-slate-700">Panel Interview</p>
          </div>
        </div>

        <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
          <p className="text-purple-800">
            <strong>💡 Pro Tip:</strong> The key to a successful interview is preparation.
            Practice makes perfect!
          </p>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 2: Before the Interview — Preparation
  // ═══════════════════════════════════════════════════════════════════
  if (step === 2) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">📋 Preparation Checklist</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-3">🔍 Research the Company</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Company mission and values</li>
                <li>• Recent news and achievements</li>
                <li>• Company culture and work environment</li>
                <li>• Products/services they offer</li>
              </ul>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
              <h4 className="font-bold text-pink-800 mb-3">📄 Prepare Documents</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Updated CV/Resume</li>
                <li>• Cover letter</li>
                <li>• Portfolio (if applicable)</li>
                <li>• References list</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-3">📖 Understand the Job</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Read job description carefully</li>
                <li>• Match your skills to requirements</li>
                <li>• Prepare examples of relevant experience</li>
                <li>• Know the job title and responsibilities</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-3">👔 Professional Appearance</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Business or business casual attire</li>
                <li>• Clean and well-groomed</li>
                <li>• Minimal accessories and fragrance</li>
                <li>• Test video setup (for online interviews)</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">⏰ On the Day</h4>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Arrive 10-15 minutes early (in-person) or log in 5 minutes early (video)</li>
              <li>• Bring extra copies of your resume</li>
              <li>• Have a pen and notepad ready</li>
              <li>• Turn off your phone</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 3: Common Interview Questions (Part 1)
  // ═══════════════════════════════════════════════════════════════════
  if (step === 3) {
    const questions = [
      {
        q: "Tell me about yourself",
        tips: "Start with present, go to past, end with future. Focus on professional experience.",
        good: "I&apos;m currently a software developer at TechCorp with 3 years of experience in web development. I graduated from MIT with a degree in Computer Science and have been passionate about coding since then. I&apos;m looking to take on more leadership responsibilities, which is why I&apos;m excited about this senior developer role.",
        bad: "Um, well, I was born in Moscow, I like playing video games, I have a dog...",
      },
      {
        q: "Why do you want this job?",
        tips: "Show enthusiasm. Connect company values with your career goals.",
        good: "I&apos;m impressed by your company&apos;s commitment to innovation and sustainability. Your recent project on green technology aligns perfectly with my passion for environmental solutions. I believe my experience in renewable energy systems would be valuable to your team.",
        bad: "I need money and this job pays well.",
      },
      {
        q: "What are your strengths?",
        tips: "Pick 2-3 relevant strengths. Give specific examples.",
        good: "One of my key strengths is problem-solving. For example, at my last job, I identified a bottleneck in our production process and developed a solution that increased efficiency by 30%. I&apos;m also highly organized and excel at managing multiple projects simultaneously.",
        bad: "I&apos;m good at everything. I&apos;m perfect for this job.",
      },
      {
        q: "What are your weaknesses?",
        tips: "Choose a real weakness, but show how you&apos;re working to improve it.",
        good: "I tend to be overly detail-oriented, which sometimes slows me down. However, I&apos;ve been working on this by setting time limits for tasks and prioritizing what truly needs detailed attention versus what needs quick turnaround.",
        bad: "I&apos;m always late to work and I don&apos;t work well with others.",
      },
    ];

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">❓ Common Questions (Part 1)</h2>

          <div className="space-y-4">
            {questions.map((item, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedStep3(expandedStep3 === idx ? null : idx)}
                  className="w-full text-left p-4 hover:bg-slate-50 transition flex items-center justify-between"
                >
                  <span className="font-bold text-slate-800">{item.q}</span>
                  <span className="text-2xl text-slate-400">{expandedStep3 === idx ? "−" : "+"}</span>
                </button>

                {expandedStep3 === idx && (
                  <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3">
                    <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                      <p className="text-sm font-medium text-purple-800">💡 Tips:</p>
                      <p className="text-sm text-slate-700 mt-1">{item.tips}</p>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p className="text-sm font-medium text-green-800">✓ Good Answer:</p>
                      <p className="text-sm text-slate-700 mt-1 italic">&quot;{item.good}&quot;</p>
                    </div>

                    <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                      <p className="text-sm font-medium text-red-800">✗ Bad Answer:</p>
                      <p className="text-sm text-slate-700 mt-1 italic">&quot;{item.bad}&quot;</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
          <p className="text-sm text-purple-800">
            <strong>Remember:</strong> Keep answers between 1-2 minutes. Be specific and use examples.
          </p>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 4: Common Interview Questions (Part 2)
  // ═══════════════════════════════════════════════════════════════════
  if (step === 4) {
    const questions = [
      {
        q: "Where do you see yourself in 5 years?",
        tips: "Show ambition but be realistic. Align with company growth.",
        good: "In five years, I see myself as a senior team leader, managing projects and mentoring junior developers. I want to grow with the company and contribute to its success while developing my leadership skills.",
        bad: "I don&apos;t know, maybe traveling the world or starting my own business.",
      },
      {
        q: "Why should we hire you?",
        tips: "Summarize your unique value. Match your skills to their needs.",
        good: "You should hire me because I bring a unique combination of technical expertise and strong communication skills. My experience in agile development and my track record of delivering projects on time make me an ideal fit for this role. I&apos;m passionate about your mission and ready to contribute from day one.",
        bad: "Because I need a job and I applied here.",
      },
      {
        q: "Describe a challenge you faced and how you overcame it",
        tips: "Use STAR method (next lesson). Focus on your actions and results.",
        good: "At my previous job, we lost a key team member right before a major deadline. I took the initiative to redistribute tasks, worked extra hours, and coordinated with other departments. We successfully delivered the project on time, and I learned valuable lessons about adaptability and teamwork.",
        bad: "I can&apos;t think of any challenges. Everything always goes smoothly for me.",
      },
      {
        q: "Tell me about a time when you failed",
        tips: "Be honest but focus on what you learned. Show growth.",
        good: "Early in my career, I underestimated the time needed for a project and missed the deadline. I learned the importance of realistic planning and now always build buffer time into my estimates. This experience made me a better project manager.",
        bad: "I never fail. I&apos;m perfect at everything I do.",
      },
    ];

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">❓ Common Questions (Part 2)</h2>

          <div className="space-y-4">
            {questions.map((item, idx) => (
              <div key={idx} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedStep4(expandedStep4 === idx ? null : idx)}
                  className="w-full text-left p-4 hover:bg-slate-50 transition flex items-center justify-between"
                >
                  <span className="font-bold text-slate-800">{item.q}</span>
                  <span className="text-2xl text-slate-400">{expandedStep4 === idx ? "−" : "+"}</span>
                </button>

                {expandedStep4 === idx && (
                  <div className="p-4 bg-slate-50 border-t border-slate-200 space-y-3">
                    <div className="bg-purple-50 p-3 rounded-lg border border-purple-200">
                      <p className="text-sm font-medium text-purple-800">💡 Tips:</p>
                      <p className="text-sm text-slate-700 mt-1">{item.tips}</p>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <p className="text-sm font-medium text-green-800">✓ Good Answer:</p>
                      <p className="text-sm text-slate-700 mt-1 italic">&quot;{item.good}&quot;</p>
                    </div>

                    <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                      <p className="text-sm font-medium text-red-800">✗ Bad Answer:</p>
                      <p className="text-sm text-slate-700 mt-1 italic">&quot;{item.bad}&quot;</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 5: STAR Method
  // ═══════════════════════════════════════════════════════════════════
  if (step === 5) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">⭐ The STAR Method</h2>

          <p className="text-slate-700 mb-6">
            STAR is a structured method for answering behavioral interview questions.
            It helps you tell compelling stories about your experience.
          </p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <span className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold shrink-0 text-lg">S</span>
              <div>
                <h4 className="font-bold text-slate-800">Situation</h4>
                <p className="text-sm text-slate-600">Set the scene. Describe the context.</p>
                <p className="text-sm text-indigo-700 mt-2 italic">
                  &quot;At my previous company, we were losing customers due to slow response times...&quot;
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
              <span className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold shrink-0 text-lg">T</span>
              <div>
                <h4 className="font-bold text-slate-800">Task</h4>
                <p className="text-sm text-slate-600">What was your role? What needed to be done?</p>
                <p className="text-sm text-purple-700 mt-2 italic">
                  &quot;I was tasked with improving our customer support process and reducing response time by 50%...&quot;
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-pink-50 rounded-lg border border-pink-200">
              <span className="w-12 h-12 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold shrink-0 text-lg">A</span>
              <div>
                <h4 className="font-bold text-slate-800">Action</h4>
                <p className="text-sm text-slate-600">What did YOU do? Be specific.</p>
                <p className="text-sm text-pink-700 mt-2 italic">
                  &quot;I implemented a new ticketing system, trained the team on best practices, and created response templates for common issues...&quot;
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <span className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold shrink-0 text-lg">R</span>
              <div>
                <h4 className="font-bold text-slate-800">Result</h4>
                <p className="text-sm text-slate-600">What was the outcome? Use numbers if possible.</p>
                <p className="text-sm text-emerald-700 mt-2 italic">
                  &quot;As a result, we reduced response time by 60%, customer satisfaction increased by 25%, and we retained 90% of at-risk customers.&quot;
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-xl border border-slate-200">
            <h3 className="font-bold text-slate-800 mb-3">📝 Complete STAR Example</h3>
            <p className="text-sm text-slate-700 mb-2">
              <strong>Question:</strong> &quot;Tell me about a time you solved a difficult problem.&quot;
            </p>
            <div className="bg-white p-4 rounded-lg text-sm text-slate-700 space-y-2">
              <p><strong className="text-indigo-600">S:</strong> At my previous company, we were losing customers due to slow response times in our support department.</p>
              <p><strong className="text-purple-600">T:</strong> I was tasked with improving our customer support process and reducing response time by 50% within 3 months.</p>
              <p><strong className="text-pink-600">A:</strong> I implemented a new ticketing system, trained the team on best practices, and created response templates for common issues.</p>
              <p><strong className="text-emerald-600">R:</strong> We reduced response time by 60%, customer satisfaction increased by 25%, and we retained 90% of at-risk customers.</p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
          <p className="text-sm text-amber-800">
            <strong>💡 Pro Tip:</strong> Prepare 5-7 STAR stories covering different skills before your interview.
          </p>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 6: Questions About Experience
  // ═══════════════════════════════════════════════════════════════════
  if (step === 6) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">💼 Experience Questions</h2>

          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">Describe your previous role</h4>
              <p className="text-sm text-slate-700 mb-3">
                <strong>Framework:</strong> Role → Responsibilities → Achievements
              </p>
              <p className="text-sm text-slate-700 italic">
                &quot;I was a project manager at XYZ Corp, leading a team of 5 developers. My responsibilities included planning sprints, coordinating with stakeholders, and ensuring timely delivery. During my tenure, I successfully delivered 10 major projects with a 95% on-time rate.&quot;
              </p>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
              <h4 className="font-bold text-pink-800 mb-2">What was your biggest achievement?</h4>
              <p className="text-sm text-slate-700 mb-3">
                <strong>Tip:</strong> Use quantifiable results
              </p>
              <p className="text-sm text-slate-700 italic">
                &quot;My biggest achievement was leading the redesign of our mobile app, which increased user engagement by 40% and downloads by 50,000 in the first month. This project required coordination across 3 departments and was completed 2 weeks ahead of schedule.&quot;
              </p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-2">How do you handle pressure/deadlines?</h4>
              <p className="text-sm text-slate-700 mb-3">
                <strong>Show:</strong> Organizational skills + calm under pressure
              </p>
              <p className="text-sm text-slate-700 italic">
                &quot;I thrive under pressure by staying organized and prioritizing tasks. When facing tight deadlines, I break projects into smaller milestones, communicate clearly with my team, and focus on the most critical deliverables first. For example, when we had to launch a product 2 weeks early, I created a detailed action plan that allowed us to meet the deadline without sacrificing quality.&quot;
              </p>
            </div>

            <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-2">Tell me about a conflict at work</h4>
              <p className="text-sm text-slate-700 mb-3">
                <strong>Focus on:</strong> Resolution, not blame
              </p>
              <p className="text-sm text-slate-700 italic">
                &quot;I once had a disagreement with a colleague about the direction of a project. Instead of escalating the issue, I scheduled a one-on-one meeting to understand their perspective. We found common ground and combined our ideas, which resulted in a better solution than either of us had originally proposed. This experience taught me the value of open communication.&quot;
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-3">🔑 Key Phrases</h3>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="font-medium">• I was responsible for...</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="font-medium">• My key achievement was...</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="font-medium">• I successfully managed...</p>
            </div>
            <div className="bg-slate-50 p-3 rounded-lg">
              <p className="font-medium">• This resulted in...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 7: Technical & Behavioral Questions
  // ═══════════════════════════════════════════════════════════════════
  if (step === 7) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">🎯 Technical & Behavioral Questions</h2>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <h3 className="font-bold text-purple-800 mb-3">💻 Technical Questions</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Describe your technical skills</li>
                <li>• Walk me through your problem-solving process</li>
                <li>• What tools/technologies do you use?</li>
                <li>• How do you stay updated in your field?</li>
              </ul>
              <div className="mt-3 p-3 bg-white rounded-lg text-sm italic">
                &quot;I stay current by reading industry blogs, attending webinars, and working on side projects. Recently, I completed a certification in cloud computing to better understand modern infrastructure.&quot;
              </div>
            </div>

            <div className="bg-pink-50 p-5 rounded-lg border border-pink-200">
              <h3 className="font-bold text-pink-800 mb-3">🤝 Teamwork Questions</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Describe your ideal team environment</li>
                <li>• How do you handle disagreements?</li>
                <li>• Give an example of successful collaboration</li>
                <li>• What role do you usually take in a team?</li>
              </ul>
              <div className="mt-3 p-3 bg-white rounded-lg text-sm italic">
                &quot;I work best in collaborative environments where everyone&apos;s input is valued. I naturally take on a facilitator role, ensuring all voices are heard while keeping the team focused on our goals.&quot;
              </div>
            </div>

            <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-200">
              <h3 className="font-bold text-indigo-800 mb-3">💡 Problem-Solving Questions</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• How do you approach complex problems?</li>
                <li>• Describe a creative solution you developed</li>
                <li>• How do you prioritize tasks?</li>
                <li>• What do you do when stuck?</li>
              </ul>
              <div className="mt-3 p-3 bg-white rounded-lg text-sm italic">
                &quot;When faced with a complex problem, I break it down into smaller components, research best practices, and consult with experts if needed. I&apos;m not afraid to ask for help.&quot;
              </div>
            </div>

            <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-200">
              <h3 className="font-bold text-emerald-800 mb-3">👑 Leadership Questions</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Describe your leadership style</li>
                <li>• How do you motivate team members?</li>
                <li>• Tell me about a time you led a project</li>
                <li>• How do you handle underperforming team members?</li>
              </ul>
              <div className="mt-3 p-3 bg-white rounded-lg text-sm italic">
                &quot;My leadership style is collaborative yet decisive. I believe in empowering team members while providing clear direction. When someone underperforms, I have a private conversation to understand the root cause and offer support.&quot;
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 8: Asking Your Own Questions
  // ═══════════════════════════════════════════════════════════════════
  if (step === 8) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">❓ Questions to Ask the Interviewer</h2>

          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6">
            <p className="text-sm text-purple-800">
              <strong>Important:</strong> Always prepare questions to ask! It shows interest and engagement.
              Asking no questions is a red flag.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h4 className="font-bold text-indigo-800 mb-3">💼 About the Role</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• What does a typical day look like in this role?</li>
                <li>• What are the key priorities for the first 90 days?</li>
                <li>• How do you measure success in this position?</li>
                <li>• What challenges might I face in this role?</li>
                <li>• Who would I be working with most closely?</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h4 className="font-bold text-pink-800 mb-3">👥 About the Team</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Can you tell me about the team I&apos;d be joining?</li>
                <li>• How is the team structured?</li>
                <li>• What&apos;s the team&apos;s working style?</li>
                <li>• How does the team handle collaboration?</li>
                <li>• What do you enjoy most about working here?</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h4 className="font-bold text-purple-800 mb-3">🏢 About the Company</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• What are the company&apos;s goals for the next year?</li>
                <li>• How would you describe the company culture?</li>
                <li>• What makes your company different from competitors?</li>
                <li>• What are the biggest challenges facing the company?</li>
                <li>• How has the company changed in recent years?</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h4 className="font-bold text-emerald-800 mb-3">📈 About Growth</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• What opportunities for professional development exist?</li>
                <li>• How does the company support continued learning?</li>
                <li>• What does the career path look like for this role?</li>
                <li>• How do you handle performance reviews?</li>
                <li>• What skills should I develop to excel here?</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-red-50 p-4 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-800 mb-2">🚫 Questions to AVOID</h4>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>✗ What does your company do? (Research this beforehand!)</li>
              <li>✗ How much vacation time do I get? (Ask this after the offer)</li>
              <li>✗ When can I get promoted?</li>
              <li>✗ Do you monitor internet usage?</li>
              <li>✗ How soon can I work from home?</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 9: Salary Negotiation
  // ═══════════════════════════════════════════════════════════════════
  if (step === 9) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">💰 Salary Negotiation</h2>

          <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 mb-6">
            <h4 className="font-bold text-purple-800 mb-2">Golden Rules</h4>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Let them make the first offer if possible</li>
              <li>• Never lie about your current salary</li>
              <li>• Research market rates beforehand</li>
              <li>• Consider the entire compensation package (benefits, bonuses, etc.)</li>
            </ul>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h4 className="font-bold text-indigo-800 mb-3">When Asked About Salary Expectations</h4>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                  <p className="text-sm font-medium text-green-800">✓ Good Response:</p>
                  <p className="text-sm text-slate-700 mt-1 italic">
                    &quot;Based on my research and experience, I&apos;m looking for a salary in the range of $70,000 to $80,000. However, I&apos;m flexible and would like to learn more about the full compensation package and growth opportunities.&quot;
                  </p>
                </div>
                <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-200">
                  <p className="text-sm font-medium text-indigo-800">Alternative:</p>
                  <p className="text-sm text-slate-700 mt-1 italic">
                    &quot;I&apos;d prefer to learn more about the role and responsibilities before discussing salary. Could you share the budget range for this position?&quot;
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-slate-200">
              <h4 className="font-bold text-pink-800 mb-3">Negotiation Phrases</h4>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="font-medium">Opening:</p>
                  <p className="text-slate-600 italic">&quot;I&apos;m excited about this opportunity...&quot;</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="font-medium">Justifying:</p>
                  <p className="text-slate-600 italic">&quot;Based on my X years of experience...&quot;</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="font-medium">Proposing:</p>
                  <p className="text-slate-600 italic">&quot;Would it be possible to consider...&quot;</p>
                </div>
                <div className="bg-slate-50 p-3 rounded-lg">
                  <p className="font-medium">Asking for Time:</p>
                  <p className="text-slate-600 italic">&quot;Can I have a few days to consider?&quot;</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
            <h4 className="font-bold text-emerald-800 mb-2">What to Negotiate Beyond Salary</h4>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Signing bonus</li>
              <li>• Start date (more time to prepare)</li>
              <li>• Remote work flexibility</li>
              <li>• Professional development budget</li>
              <li>• Vacation days</li>
              <li>• Performance bonus structure</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 10: Body Language & Communication
  // ═══════════════════════════════════════════════════════════════════
  if (step === 10) {
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">🗣️ Body Language & Communication</h2>

          <p className="text-slate-700 mb-6">
            Non-verbal communication is just as important as what you say. Here&apos;s how to make a great impression.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
                <span>✓</span> DO
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Maintain good eye contact (but don&apos;t stare)</li>
                <li>• Smile genuinely</li>
                <li>• Sit up straight with shoulders back</li>
                <li>• Use hand gestures naturally</li>
                <li>• Lean slightly forward (shows interest)</li>
                <li>• Give a firm handshake</li>
                <li>• Nod to show you&apos;re listening</li>
                <li>• Mirror the interviewer&apos;s energy level</li>
              </ul>
            </div>

            <div className="bg-red-50 p-5 rounded-lg border border-red-200">
              <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
                <span>✗</span> DON&apos;T
              </h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>• Cross your arms (appears defensive)</li>
                <li>• Fidget or play with objects</li>
                <li>• Look at your phone</li>
                <li>• Slouch or lean back too much</li>
                <li>• Touch your face or hair repeatedly</li>
                <li>• Avoid eye contact</li>
                <li>• Interrupt the interviewer</li>
                <li>• Use filler words excessively (um, like, uh)</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">👂 Active Listening</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Let the interviewer finish before answering</li>
                <li>• Take brief notes if appropriate</li>
                <li>• Ask clarifying questions if needed</li>
                <li>• Paraphrase to confirm understanding: &quot;So what you&apos;re asking is...&quot;</li>
              </ul>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
              <h4 className="font-bold text-pink-800 mb-2">🎤 Speaking Confidently</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Speak clearly and at a moderate pace</li>
                <li>• Vary your tone to sound enthusiastic</li>
                <li>• Take a breath before answering to collect your thoughts</li>
                <li>• It&apos;s okay to say &quot;That&apos;s a great question, let me think...&quot;</li>
              </ul>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-2">💻 Video Interview Tips</h4>
              <ul className="text-sm text-slate-700 space-y-1">
                <li>• Look at the camera, not the screen</li>
                <li>• Ensure good lighting (face the window or lamp)</li>
                <li>• Check your background (clean, professional)</li>
                <li>• Test your tech beforehand</li>
                <li>• Wear professional attire (even bottom half!)</li>
                <li>• Minimize distractions (turn off notifications)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 11: Exercise — Practice Questions
  // ═══════════════════════════════════════════════════════════════════
  if (step === 11) {
    const items: FillItem[] = [
      {
        left: "Tell me",
        right: "yourself.",
        answers: ["about"],
      },
      {
        left: "What are your",
        right: "?",
        answers: ["strengths", "weaknesses"],
      },
      {
        left: "Why do you want to",
        right: "here?",
        answers: ["work"],
      },
      {
        left: "Where do you",
        right: "yourself in 5 years?",
        answers: ["see"],
      },
      {
        left: "Why should we",
        right: "you?",
        answers: ["hire"],
      },
      {
        left: "Can you describe a",
        right: "you faced?",
        answers: ["challenge", "problem", "difficulty"],
      },
      {
        left: "How do you handle",
        right: "?",
        answers: ["pressure", "stress", "deadlines"],
      },
      {
        left: "What questions do you have",
        right: "me?",
        answers: ["for"],
      },
      {
        left: "What are your salary",
        right: "?",
        answers: ["expectations", "requirements"],
      },
      {
        left: "When can you",
        right: "?",
        answers: ["start"],
      },
    ];

    return (
      <div className="space-y-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">✏️ Practice Exercise</h2>
          <p className="text-slate-600 mb-6">
            Complete the common interview questions. Fill in the missing words.
          </p>
          <CheckableExercise
            title="Interview Questions — Fill in the Blanks"
            items={items}
          />
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════
  // STEP 12: Final Tips & Summary
  // ═══════════════════════════════════════════════════════════════════
  if (step === 12) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-3">🎉 You&apos;re Ready!</h2>
          <p className="text-lg opacity-90">
            You now have the tools to ace your job interview in English
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">📋 Pre-Interview Checklist</h3>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Research the company thoroughly</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Prepare 5-7 STAR stories</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Practice common questions out loud</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Prepare questions to ask the interviewer</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Plan your outfit</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Print extra copies of your resume</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Know the interview location/link</span>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Get a good night&apos;s sleep</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">📧 Thank You Email Template</h3>
          <p className="text-sm text-slate-600 mb-3">Send within 24 hours after your interview:</p>
          <div className="bg-slate-50 p-4 rounded-lg text-sm space-y-2">
            <p><strong>Subject:</strong> Thank You — [Your Name] — [Position Title]</p>
            <p className="mt-3">Dear [Interviewer&apos;s Name],</p>
            <p>Thank you for taking the time to meet with me today to discuss the [Position Title] role at [Company Name]. I enjoyed learning more about the team and the exciting projects you&apos;re working on.</p>
            <p>I&apos;m particularly excited about [specific detail from the interview] and believe my experience in [relevant skill] would allow me to contribute immediately to your team.</p>
            <p>Please don&apos;t hesitate to reach out if you need any additional information. I look forward to hearing from you about the next steps.</p>
            <p>Best regards,<br/>[Your Name]</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4">🚀 Key Takeaways</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">✓ Remember</h4>
              <p className="text-sm text-slate-700">
                Preparation is key. Use the STAR method. Be authentic and enthusiastic. Ask thoughtful questions.
              </p>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
              <h4 className="font-bold text-pink-800 mb-2">✓ Practice</h4>
              <p className="text-sm text-slate-700">
                Do mock interviews with friends. Record yourself answering questions. The more you practice, the more confident you&apos;ll be.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200 text-center">
          <h3 className="font-bold text-emerald-800 mb-2">💪 You&apos;ve Got This!</h3>
          <p className="text-sm text-slate-700">
            Remember: The interviewer wants you to succeed. They&apos;re looking for reasons to hire you, not reject you.
            Be yourself, be prepared, and believe in your abilities. Good luck!
          </p>
        </div>
      </div>
    );
  }

  return null;
}
