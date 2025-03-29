
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="bg-gradient-to-r from-brand-blue-800 to-brand-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl animate-fade-in">
            Find your perfect project team
          </h1>
          <p className="mt-6 text-xl max-w-2xl mx-auto animate-slide-up">
            Connect with students who share your interests and complement your skills. 
            From class projects to hackathons, find your ideal collaborators.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-slide-up">
            <div className="relative rounded-md shadow-sm max-w-md w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                type="text"
                placeholder="Search for projects or skills"
                className="block w-full pl-10 pr-3 py-3 border border-transparent text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white sm:text-sm"
              />
            </div>
            <Button 
              size="lg" 
              className="bg-brand-orange-500 hover:bg-brand-orange-600 text-white"
            >
              <Link to="/projects">Explore Projects</Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-brand-blue-800 hover:bg-gray-100 border border-transparent"
            >
              <Link to="/projects/new">Create Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
