import { Component } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ias-angular-handymancalculator';

  constructor(private router: Router){}

  Listar(): void {
    this.router.navigate(['listar']);
  }

  Nuevo(): void {
    this.router.navigate(['add']);
  }
}
