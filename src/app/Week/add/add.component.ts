import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'moment';
import { Week } from 'src/app/Model/week';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  selected: { startDate: Moment; endDate: Moment; } | undefined;

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {}
  // tslint:disable-next-line: typedef
  Guardar(week: Week) {
    this.service.createWeek(week)
    .subscribe(data => {
      alert('Se agregó con éxito');
      this.router.navigate(['listar']);
    });
  }

}
