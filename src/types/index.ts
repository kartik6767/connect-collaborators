
export type Skill = {
  id: string;
  name: string;
  category: 'programming' | 'design' | 'business' | 'soft' | 'other';
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  university: string;
  major: string;
  skills: Skill[];
  interests: string[];
  experience: {
    title: string;
    description: string;
    startDate: string;
    endDate?: string;
  }[];
};

export type Project = {
  id: string;
  title: string;
  description: string;
  createdBy: string;
  createdAt: string;
  deadline?: string;
  category: string;
  skillsNeeded: Skill[];
  teamSize: {
    min: number;
    max: number;
  };
  status: 'recruiting' | 'in-progress' | 'completed';
  members: {
    userId: string;
    role: string;
    joinedAt: string;
  }[];
  applications: {
    userId: string;
    message: string;
    submittedAt: string;
    status: 'pending' | 'accepted' | 'rejected';
  }[];
};
