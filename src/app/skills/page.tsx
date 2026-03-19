'use client';

import { skillsData } from '@/src/data/skills';
import GameCard from '@/src/components/ui/GameCard';

export default function Skills() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-gray-800 pt-40">
        <div className="container-custom">
          <h1 className="section-heading gradient-text text-center mb-4">My Skills</h1>
          <p className="text-gray-400 text-center text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise
          </p>
        </div>
      </section>

      {/* Skills Categories */}
      <section className="section-padding container-custom">
        <div className="space-y-16">
          {skillsData.map((category, catIdx) => (
            <div key={category.category}>
              <h2 className="text-2xl font-bold mb-8">{category.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIdx) => (
                  <GameCard key={skill.name} delay={(catIdx * 5 + skillIdx) * 50}>
                    <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          {skill.icon && <span className="text-2xl">{skill.icon}</span>}
                          <h3 className="font-semibold">{skill.name}</h3>
                        </div>
                        <span className="text-sm text-cyan-400 font-bold">{skill.proficiency}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="skill-bar-fill h-full rounded-full"
                          style={{
                            width: `${skill.proficiency}%`,
                            ['--skill-width' as string]: `${skill.proficiency}%`,
                            animation: `fillSkillBar 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards`,
                          }}
                        />
                      </div>
                    </div>
                  </GameCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes fillSkillBar {
          from {
            width: 0;
          }
          to {
            width: var(--skill-width, 100%);
          }
        }
      `}</style>
    </div>
  );
}
