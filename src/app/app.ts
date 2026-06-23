import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './common/header/header';
import { Home } from './home/home';
import { Footer } from './common/footer/footer';
import { AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home, Footer],
    template: `
    <div class="grid-bg"></div>
    <div class="cursor" id="cursor"></div>
    <div class="cursor-ring" id="cursorRing"></div>
    <app-header />
    <router-outlet />
    <app-footer />
    <button class="scroll-top" id="scrollTop" (click)="scrollTop()">↑</button>
    <div id="toast-container"></div>
  `
})
export class App implements AfterViewInit {
  protected readonly title = signal('sabaripraveenfolio02');
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  ngAfterViewInit() {
    // Cursor
    const cursor = document.getElementById('cursor')!;
    const ring = document.getElementById('cursorRing')!;
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0;
    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx - 6 + 'px';
      cursor.style.top = my - 6 + 'px';
    });
    const animRing = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx - 18 + 'px';
      ring.style.top = ry - 18 + 'px';
      requestAnimationFrame(animRing);
    };
    animRing();
  }

  @HostListener('window:scroll')
  onScroll() {
    const btn = document.getElementById('scrollTop');
    if (btn) btn.classList.toggle('visible', window.scrollY > 400);
  }
}
