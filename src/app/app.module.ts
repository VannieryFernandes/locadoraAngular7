import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { RentComponent } from './rent/rent.component';
import { ClientComponent } from './client/client.component';
import { ReservComponent } from './reserv/reserv.component';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { ReportComponent } from './report/report.component';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    VehicleComponent,
    RentComponent,
    ClientComponent,
    ReservComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
