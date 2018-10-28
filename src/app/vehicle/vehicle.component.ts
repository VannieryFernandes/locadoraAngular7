import { Component, OnInit } from '@angular/core';
import {RestService} from "../rest.service";

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
	vehicles: any; 
	 displayedColumns: string[] = ['placa', 'cor', 'disponivel', 'ações'];
	 dataSource:any;
  	
	
	

  constructor(public restService: RestService) { 
  	
  	this.listar();
  }	
  

  ngOnInit() {
  }


  listar(){
  	this.restService.getData("veiculos").subscribe(

                      data => {
                      	this.vehicles= data;
                      	this.dataSource = this.vehicles;
                      	console.log(data);
                      	console.log(this.vehicles);
                      	},
                      error => console.log("erro"));
  
  }

  add(){
  	this.restService.addData("veiculo",this.productObj).subscribe((res:Response) => {
    })

    onSubmit(){

    	
    }



  }

}
}
