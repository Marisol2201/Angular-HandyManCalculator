import { Week } from './../../Model/week';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  weeks?: Week[];
  constructor(private service: ServiceService, private router: Router) { }

  // tslint:disable-next-line: typedef
  ngOnInit(){
    this.service.getWeeks()
    .subscribe(data => {
      this.weeks = data;
    });
  }

  // tslint:disable-next-line: typedef
  // Editar(week: Week): void {
  //   localStorage.setItem('id', week.id.toString());
  //   this.router.navigate(['edit']);
  // }
}
