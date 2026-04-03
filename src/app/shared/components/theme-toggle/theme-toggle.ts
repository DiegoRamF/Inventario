import { Component, inject } from '@angular/core';
import { ThemeService } from '@shared/services/Theme.service';

@Component({
  selector: 'theme-toggle',
  imports: [],
  templateUrl: './theme-toggle.html',
})
export class ThemeToggle {

  themeService = inject(ThemeService);

  currentTheme = this.themeService.theme;

  toggle() {
    this.themeService.toggleTheme();
  };

};
