import { Report } from '../../Model/report';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  reports?: Report[];
  constructor(private service: ServiceService, private router: Router) { }

  
  ngOnInit(){
    this.service.getReports()
    .subscribe((data) => {
      this.reports = data;
    });
  }

  // tslint:disable-next-line: typedef
  // Editar(report: Report): void {
  //   localStorage.setItem('id', report.id.toString());
  //   this.router.navigate(['edit']);
  // }
}
