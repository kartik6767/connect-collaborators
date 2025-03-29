
import { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import CategoryFilter from '@/components/CategoryFilter';
import SkillsSection from '@/components/SkillsSection';
import HowItWorks from '@/components/HowItWorks';
import TestimonialSection from '@/components/TestimonialSection';
import CallToAction from '@/components/CallToAction';
import { mockProjects, mockSkills } from '@/mockData';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  
  const filteredProjects = selectedCategory === 'All Categories'
    ? mockProjects
    : mockProjects.filter(project => project.category === selectedCategory);

  return (
    <MainLayout>
      <HeroSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />
        
        <FeaturedProjects projects={filteredProjects} />
      </div>
      
      <SkillsSection popularSkills={mockSkills} />
      <HowItWorks />
      <TestimonialSection />
      <CallToAction />
    </MainLayout>
  );
};

export default Index;
