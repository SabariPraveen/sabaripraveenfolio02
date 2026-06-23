import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
    projects = [
    {
      icon: '🏦', locked: true,
      name: 'DigiFin — Demat Onboarding Platform',
      desc: 'Full-stack financial onboarding platform for Demat account opening. Covers KYC, Re-CKYC, DigiLocker, KRA, eSign, VCIP, and mandate workflows with role-based access and audit logging.',
      stack: ['Angular JS', 'SQL Server', 'C#']
    },
    {
      icon: '🏦', locked: true,
      name: 'DigiFin — Mutual Fund',
      desc: 'Full-stack mutual fund investment platform supporting SIP, Lumpsum, Redemption, Switch, STP, and SWP workflows with secure role-based operations and high-performance APIs.',
      stack: ['Angular', 'ASP.NET Core 8', 'MySQL', 'C#', 'TypeScript', 'EF Core', 'Azure DevOps']
    }
  ];
}
