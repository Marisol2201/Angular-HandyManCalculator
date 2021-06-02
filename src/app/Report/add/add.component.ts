import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moment } from 'moment';
import { ReportInput } from 'src/app/Model/reportInput';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  ReportInput = new ReportInput;
  // selected: { startDate: Moment; endDate: Moment; } | undefined;

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {}
  // tslint:disable-next-line: typedef
  Guardar(reportInput: ReportInput) {
    this.service.createReport(reportInput)
    .subscribe(data => {
      alert('Se agregó con éxito');
      this.router.navigate(['listar']);
    });
  }

}
