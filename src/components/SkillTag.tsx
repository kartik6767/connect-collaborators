
import { Skill } from '@/types';

type SkillTagProps = {
  skill: Skill;
  onRemove?: () => void;
};

export function SkillTag({ skill, onRemove }: SkillTagProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'programming':
        return 'bg-blue-100 text-blue-800';
      case 'design':
        return 'bg-purple-100 text-purple-800';
      case 'business':
        return 'bg-green-100 text-green-800';
      case 'soft':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(skill.category)}`}>
      {skill.name}
      {onRemove && (
        <button
          type="button"
          className="flex-shrink-0 ml-1.5 h-4 w-4 rounded-full inline-flex items-center justify-center text-gray-400 hover:bg-gray-200 hover:text-gray-500 focus:outline-none focus:bg-gray-500 focus:text-white"
          onClick={onRemove}
        >
          <span className="sr-only">Remove {skill.name}</span>
          <svg className="h-2 w-2" stroke="currentColor" fill="none" viewBox="0 0 8 8">
            <path strokeLinecap="round" strokeWidth="1.5" d="M1 1l6 6m0-6L1 7" />
          </svg>
        </button>
      )}
    </span>
  );
}

export default SkillTag;
