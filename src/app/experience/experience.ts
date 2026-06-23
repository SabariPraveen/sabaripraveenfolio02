import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience implements AfterViewInit {
    experiences = [
    {
      date: 'Nov 2024 – Present',
      role: 'Software Engineer',
      company: 'Constient Global Solutions · Chennai, India',
      desc: 'Lead developer on DigiFin — a Demat account onboarding platform. Built and maintained the full stack including Angular SPAs, ASP.NET Core APIs, and MySQL stored procedures. Delivered a 40% SQL query performance improvement and 35% reduction in page load times. Implemented Re-CKYC, DigiLocker, KRA, eSign, and VCIP workflows.',
      tags: ['Angular', 'ASP.NET Core', 'SQL Server', 'C#', 'EF Core', 'Azure DevOps']
    }
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12 });
    document.querySelectorAll('.tl-item, .fade-up').forEach(el => observer.observe(el));
  }
}
