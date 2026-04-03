import { Component, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from "@angular/router";
import { ThemeToggle } from '@shared/components/theme-toggle/theme-toggle';

@Component({
  selector: 'inventario',
  imports: [RouterOutlet, RouterLink, ThemeToggle],
  templateUrl: './inventario.html',
})
export default class Inventario {
  private titleService = inject(Title);

  curretTitle() {
    return this.titleService.getTitle()
  };

};

