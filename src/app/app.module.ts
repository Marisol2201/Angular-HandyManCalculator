import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Report/listar/listar.component';
import { AddComponent } from './Report/add/add.component';
// import { EditComponent } from './Report/edit/edit.component';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';



@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    // EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    NgxDaterangepickerMd.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
