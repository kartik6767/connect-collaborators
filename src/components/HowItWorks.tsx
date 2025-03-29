
import { 
  Search, 
  UserPlus, 
  MessageSquare, 
  CheckCircle 
} from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover Projects',
    description: 'Browse through projects seeking collaborators with your skills and interests.'
  },
  {
    icon: UserPlus,
    title: 'Join or Create Teams',
    description: 'Apply to join existing projects or start your own and recruit teammates.'
  },
  {
    icon: MessageSquare,
    title: 'Collaborate',
    description: 'Use built-in tools to communicate, manage tasks, and track progress.'
  },
  {
    icon: CheckCircle,
    title: 'Complete & Review',
    description: 'Finish projects and gain valuable peer reviews and skill endorsements.'
  }
];

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">How CollabQuest Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Find teammates, manage projects, and build your portfolio in four simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-brand-blue-100 text-brand-blue-600 mb-4">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
