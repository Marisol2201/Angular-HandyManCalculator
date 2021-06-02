// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Report } from 'src/app/Model/report';
// import { ServiceService } from 'src/app/Service/service.service';

// @Component({
//   selector: 'app-edit',
//   templateUrl: './edit.component.html',
//   styleUrls: ['./edit.component.css']
// })
// export class EditComponent implements OnInit {

//   report: Report = new Report();
//   constructor(private router: Router, private service: ServiceService) { }

//   // tslint:disable-next-line: typedef
//   ngOnInit() {
//     this.Editar();
//   }

//   // tslint:disable-next-line: typedef
//   Editar() {
//     // tslint:disable-next-line: prefer-const
//     let id = localStorage.getItem('id');
//     this.service.getReportId(+id)
//     .subscribe(data => {
//       this.report = data;
//     });
//   }

//   // tslint:disable-next-line: typedef
//   Actualizar(report: Report) {
//     this.service.updateReport(report)
//     .subscribe(data => {
//       this.report = data;
//       alert('Se actualizó con éxito');
//       this.router.navigate(['listar']);
//     });
//   }
// }
