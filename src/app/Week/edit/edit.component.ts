// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { Week } from 'src/app/Model/week';
// import { ServiceService } from 'src/app/Service/service.service';

// @Component({
//   selector: 'app-edit',
//   templateUrl: './edit.component.html',
//   styleUrls: ['./edit.component.css']
// })
// export class EditComponent implements OnInit {

//   week: Week = new Week();
//   constructor(private router: Router, private service: ServiceService) { }

//   // tslint:disable-next-line: typedef
//   ngOnInit() {
//     this.Editar();
//   }

//   // tslint:disable-next-line: typedef
//   Editar() {
//     // tslint:disable-next-line: prefer-const
//     let id = localStorage.getItem('id');
//     this.service.getWeekId(+id)
//     .subscribe(data => {
//       this.week = data;
//     });
//   }

//   // tslint:disable-next-line: typedef
//   Actualizar(week: Week) {
//     this.service.updateWeek(week)
//     .subscribe(data => {
//       this.week = data;
//       alert('Se actualizó con éxito');
//       this.router.navigate(['listar']);
//     });
//   }
// }
