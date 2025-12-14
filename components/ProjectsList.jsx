'use client';

import { ProjectCard } from '../components/ProjectCard';

export function ProjectsList({ projects, serviceName }) {
  return (
    <div className="space-y-8">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project}
          serviceName={serviceName}
        />
      ))}
    </div>
  );
}