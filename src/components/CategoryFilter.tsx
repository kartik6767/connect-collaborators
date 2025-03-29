
import { Button } from '@/components/ui/button';

const categories = [
  'All Categories',
  'Web Development',
  'Mobile Development',
  'Data Science',
  'Artificial Intelligence',
  'Design',
  'Business',
  'Research'
];

type CategoryFilterProps = {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium text-gray-900 mb-3">Categories</h3>
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={`${
              selectedCategory === category
                ? "bg-brand-blue-600 text-white hover:bg-brand-blue-700"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
