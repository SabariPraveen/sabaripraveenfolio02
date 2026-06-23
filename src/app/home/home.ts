import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   roleText = '';
  private roles = ['Full Stack .NET Developer', 'Angular & React Specialist', 'ASP.NET Core Engineer', 'SQL Server Expert'];
  private ri = 0; private ci = 0; private deleting = false;
  private timer: any;

  ngOnInit() { setTimeout(() => this.typeRole(), 1200); }
  ngOnDestroy() { clearTimeout(this.timer); }

  private typeRole() {
    const cur = this.roles[this.ri];
    if (!this.deleting) {
      this.roleText = cur.slice(0, ++this.ci);
      if (this.ci === cur.length) { this.deleting = true; this.timer = setTimeout(() => this.typeRole(), 2000); return; }
    } else {
      this.roleText = cur.slice(0, --this.ci);
      if (this.ci === 0) { this.deleting = false; this.ri = (this.ri + 1) % this.roles.length; }
    }
    this.timer = setTimeout(() => this.typeRole(), this.deleting ? 40 : 80);
  }
}
