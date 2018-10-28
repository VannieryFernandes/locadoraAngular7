import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { VehicleComponent} from './vehicle/vehicle.component';
import { RentComponent} from './rent/rent.component';
import { ClientComponent} from './client/client.component';
import { ReservComponent} from './reserv/reserv.component';


const routes: Routes = [
	{path: '' , component: HomeComponent},
	{path: 'vehicle' , component: VehicleComponent},
	{path: 'vehicle/add' , component: VehicleComponent},

	{path: 'rent' , component: RentComponent},
	{path: 'client' , component: ClientComponent},
	{path: 'reserv' , component: ReservComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
