import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  theme = signal<string>(localStorage.getItem('theme') || 'emerald');

  private themeEffect = effect( () => {
    const value = this.theme();
    document.documentElement.setAttribute( 'data-theme', value );
    localStorage.setItem('theme', value);
  });

  toggleTheme() {
    this.theme.update( theme => theme === 'emerald' ? 'sunset' : 'emerald')
  };
};
