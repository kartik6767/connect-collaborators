
import { UserProfile, Project, Skill } from './types';

// Mock Skills
export const mockSkills: Skill[] = [
  { id: '1', name: 'React', category: 'programming' },
  { id: '2', name: 'JavaScript', category: 'programming' },
  { id: '3', name: 'TypeScript', category: 'programming' },
  { id: '4', name: 'UI/UX Design', category: 'design' },
  { id: '5', name: 'Node.js', category: 'programming' },
  { id: '6', name: 'Project Management', category: 'soft' },
  { id: '7', name: 'Python', category: 'programming' },
  { id: '8', name: 'Machine Learning', category: 'programming' },
  { id: '9', name: 'Data Analysis', category: 'programming' },
  { id: '10', name: 'Figma', category: 'design' },
  { id: '11', name: 'Marketing', category: 'business' },
  { id: '12', name: 'Communication', category: 'soft' },
];

// Mock User Profiles
export const mockUsers: UserProfile[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex@university.edu',
    avatar: 'https://i.pravatar.cc/150?img=1',
    bio: 'Computer Science student with a passion for web development and AI.',
    university: 'Tech University',
    major: 'Computer Science',
    skills: [mockSkills[0], mockSkills[1], mockSkills[2], mockSkills[6]],
    interests: ['Artificial Intelligence', 'Web Development', 'Hackathons'],
    experience: [
      {
        title: 'Frontend Developer Intern',
        description: 'Worked on React-based web applications',
        startDate: '2023-05-01',
        endDate: '2023-08-30'
      }
    ]
  },
  {
    id: '2',
    name: 'Samantha Lee',
    email: 'sam@university.edu',
    avatar: 'https://i.pravatar.cc/150?img=5',
    bio: 'UI/UX design student looking to collaborate on innovative projects.',
    university: 'Design Institute',
    major: 'Digital Design',
    skills: [mockSkills[3], mockSkills[9], mockSkills[11]],
    interests: ['User Experience', 'Interface Design', 'Product Development'],
    experience: [
      {
        title: 'Design Intern',
        description: 'Created UI mockups for mobile applications',
        startDate: '2023-01-15',
        endDate: '2023-04-15'
      }
    ]
  },
  {
    id: '3',
    name: 'Marcus Wong',
    email: 'marcus@university.edu',
    avatar: 'https://i.pravatar.cc/150?img=3',
    bio: 'Graduate student specializing in machine learning and data science.',
    university: 'State University',
    major: 'Data Science',
    skills: [mockSkills[6], mockSkills[7], mockSkills[8]],
    interests: ['Machine Learning', 'Data Visualization', 'Research'],
    experience: [
      {
        title: 'Research Assistant',
        description: 'Worked on ML algorithms for natural language processing',
        startDate: '2022-09-01',
        endDate: '2023-05-30'
      }
    ]
  },
];

// Mock Projects
export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'Campus Sustainability App',
    description: 'Developing a mobile application to track and improve sustainability efforts across campus.',
    createdBy: '1',
    createdAt: '2023-10-15',
    deadline: '2023-12-20',
    category: 'Mobile Development',
    skillsNeeded: [mockSkills[0], mockSkills[3], mockSkills[4], mockSkills[11]],
    teamSize: {
      min: 3,
      max: 5
    },
    status: 'recruiting',
    members: [
      {
        userId: '1',
        role: 'Project Lead',
        joinedAt: '2023-10-15'
      }
    ],
    applications: []
  },
  {
    id: '2',
    title: 'Student Mental Health Dashboard',
    description: 'Creating a dashboard to visualize and analyze student mental health data to help university counseling services.',
    createdBy: '3',
    createdAt: '2023-10-10',
    deadline: '2024-01-15',
    category: 'Data Science',
    skillsNeeded: [mockSkills[6], mockSkills[7], mockSkills[8], mockSkills[3]],
    teamSize: {
      min: 2,
      max: 4
    },
    status: 'recruiting',
    members: [
      {
        userId: '3',
        role: 'Data Scientist',
        joinedAt: '2023-10-10'
      }
    ],
    applications: []
  },
  {
    id: '3',
    title: 'Course Recommendation System',
    description: 'Building an ML-powered system to recommend courses to students based on their interests and career goals.',
    createdBy: '2',
    createdAt: '2023-09-28',
    deadline: '2023-12-10',
    category: 'Artificial Intelligence',
    skillsNeeded: [mockSkills[6], mockSkills[7], mockSkills[2], mockSkills[5]],
    teamSize: {
      min: 3,
      max: 6
    },
    status: 'recruiting',
    members: [
      {
        userId: '2',
        role: 'UI Designer',
        joinedAt: '2023-09-28'
      }
    ],
    applications: []
  },
  {
    id: '4',
    title: 'Virtual Study Group Platform',
    description: 'Developing a web platform to facilitate virtual study groups and collaborative learning.',
    createdBy: '1',
    createdAt: '2023-10-05',
    deadline: '2024-02-28',
    category: 'Web Development',
    skillsNeeded: [mockSkills[0], mockSkills[1], mockSkills[4], mockSkills[11]],
    teamSize: {
      min: 4,
      max: 7
    },
    status: 'recruiting',
    members: [
      {
        userId: '1',
        role: 'Frontend Developer',
        joinedAt: '2023-10-05'
      }
    ],
    applications: []
  },
];
