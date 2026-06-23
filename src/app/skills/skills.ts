import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  activeTab = 'backend';

  tabs = ['backend', 'frontend', 'database', 'tools'];

  skills: Record<string, { icon: string; name: string; level: string; pct: number }[]> = {
    backend: [
      { icon: '🔷', name: 'ASP.NET Core', level: 'Expert', pct: 90 },
      { icon: '💠', name: 'C#', level: 'Expert', pct: 92 },
      { icon: '🌐', name: 'Web API', level: 'Expert', pct: 88 },
      { icon: '🔐', name: 'JWT Auth', level: 'Advanced', pct: 82 },
      { icon: '📦', name: 'EF Core', level: 'Advanced', pct: 80 },
      { icon: '🔴', name: 'Redis', level: 'Intermediate', pct: 68 },
      { icon: '☁️', name: 'Azure DevOps', level: 'Intermediate', pct: 65 },
    ],
    frontend: [
      { icon: '🅰️', name: 'Angular', level: 'Expert', pct: 90 },
      { icon: '⚛️', name: 'React', level: 'Advanced', pct: 78 },
      { icon: '📜', name: 'TypeScript', level: 'Advanced', pct: 85 },
      { icon: '🟨', name: 'JavaScript', level: 'Expert', pct: 88 },
      { icon: '🎨', name: 'HTML / CSS', level: 'Expert', pct: 92 },
      { icon: '🟩', name: 'Node.js', level: 'Intermediate', pct: 70 },
    ],
    database: [
      { icon: '🗄️', name: 'SQL Server', level: 'Expert', pct: 90 },
      { icon: '🐬', name: 'MySQL', level: 'Advanced', pct: 80 },
      { icon: '📦', name: 'Stored Procs', level: 'Expert', pct: 88 },
      { icon: '🔍', name: 'Query Tuning', level: 'Advanced', pct: 85 },
    ],
    tools: [
      { icon: '🐙', name: 'Git / GitHub', level: 'Advanced', pct: 82 },
      { icon: '🖥️', name: 'VS Code', level: 'Expert', pct: 92 },
      { icon: '🏗️', name: 'Visual Studio', level: 'Advanced', pct: 85 },
      { icon: '🧩', name: 'Postman', level: 'Advanced', pct: 80 },
      { icon: '🔥', name: 'Firebase', level: 'Intermediate', pct: 70 },
      { icon: '🔗', name: 'ADO.NET', level: 'Advanced', pct: 78 },
    ],
  };
}
