
import { Skill } from '@/types';
import SkillTag from '@/components/SkillTag';

type SkillsSectionProps = {
  popularSkills: Skill[];
};

export function SkillsSection({ popularSkills }: SkillsSectionProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Find Projects by Skill</h2>
          <p className="mt-4 text-lg text-gray-600">
            Browse projects looking for your specific skills and expertise
          </p>
        </div>
        
        <div className="flex justify-center flex-wrap gap-3">
          {popularSkills.map((skill) => (
            <div key={skill.id} className="transition-transform hover:scale-105">
              <SkillTag skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
