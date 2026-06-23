import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  name = ''; email = ''; message = '';
  toast: { msg: string; type: string } | null = null;

  submit() {
    if (!this.name.trim() || !this.email.trim() || !this.message.trim()) {
      this.showToast('Please fill in all fields.', 'error'); return;
    }
    this.showToast("Message sent! I'll get back to you soon.", 'success');
    this.name = ''; this.email = ''; this.message = '';
  }

  private showToast(msg: string, type: string) {
    this.toast = { msg, type };
    setTimeout(() => this.toast = null, 3500);
  }
}
