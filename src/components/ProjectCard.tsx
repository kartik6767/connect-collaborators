
import { Link } from 'react-router-dom';
import { CalendarIcon, Users } from 'lucide-react';
import { format } from 'date-fns';
import { Project } from '@/types';
import { Button } from '@/components/ui/button';
import SkillTag from '@/components/SkillTag';
import { Badge } from '@/components/ui/badge';
import { mockUsers } from '@/mockData';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const creator = mockUsers.find(user => user.id === project.createdBy);
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'recruiting':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Recruiting</Badge>;
      case 'in-progress':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">In Progress</Badge>;
      case 'completed':
        return <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">Completed</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="project-card animate-fade-in">
      <div className="project-card-header">
        <div className="flex justify-between items-start">
          <div>
            <Link to={`/projects/${project.id}`} className="block">
              <h3 className="text-lg font-semibold text-gray-900 hover:text-brand-blue-600">{project.title}</h3>
            </Link>
            <p className="text-sm text-gray-500 mt-1">
              by {creator?.name || 'Unknown'} • {format(new Date(project.createdAt), 'MMM d, yyyy')}
            </p>
          </div>
          {getStatusBadge(project.status)}
        </div>
      </div>
      <div className="project-card-body">
        <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.skillsNeeded.map(skill => (
            <SkillTag key={skill.id} skill={skill} />
          ))}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{project.members.length} / {project.teamSize.max} members</span>
          </div>
          {project.deadline && (
            <div className="flex items-center">
              <CalendarIcon className="h-4 w-4 mr-1" />
              <span>Due {format(new Date(project.deadline), 'MMM d, yyyy')}</span>
            </div>
          )}
        </div>
      </div>
      <div className="project-card-footer">
        <div className="flex justify-between items-center">
          <Link to={`/projects/${project.id}`} className="text-brand-blue-600 hover:text-brand-blue-700 text-sm font-medium">
            View details
          </Link>
          {project.status === 'recruiting' && (
            <Button variant="outline" className="text-sm">
              Apply
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
