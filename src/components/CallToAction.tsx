
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function CallToAction() {
  return (
    <section className="bg-brand-blue-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white">Ready to find your perfect project team?</h2>
        <p className="mt-4 text-xl text-brand-blue-100 max-w-2xl mx-auto">
          Join CollabQuest today and connect with talented students who share your passion
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-white text-brand-blue-800 hover:bg-gray-100"
          >
            <Link to="/sign-up">Sign Up Now</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-white border-white hover:bg-brand-blue-700"
          >
            <Link to="/projects">Browse Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
