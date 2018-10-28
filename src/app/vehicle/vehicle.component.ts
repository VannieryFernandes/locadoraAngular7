import { Component, OnInit } from '@angular/core';
import {RestService} from "../rest.service";
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
	vehicles: any; 
	 displayedColumns: string[] = ['placa', 'cor', 'disponivel', 'ações'];
	 dataSource:any;
  	
  		myGroup = new FormGroup({
       placa: new FormControl(''),
       cor: new FormControl(''),
       disponivel: new FormControl()
    });


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
                      	
                      	console.log(this.vehicles);
                      	},
                      error => console.log("erro"));
  
  }

  add(){
  	this.restService.addData("veiculo",this.myGroup.value).subscribe((res:Response) => {
  		this.listar();
    });
    
  }
  update(id){
  	if (confirm('Atualizar Veiculo?')) {
  	this.restService.getData("veiculo/"+id).subscribe((res:Response) => {
  		
	  	this.myGroup.setValue({
	       placa: res.placa,
	       cor: res.cor,
	       disponivel: res.disponivel
    	},{});
    	this.restService.deleteData("veiculo/"+id).subscribe((res:Response) => {
  		console.log("deu certo");
  		this.listar();
    
  	
    	});
    });

 
  	
    }
  }

  delete(id){
  	
  	if (confirm('Excluir Veiculo?')) {
  		
     	this.restService.deleteData("veiculo/"+id).subscribe((res:Response) => {
  		console.log("deu certo");
  		this.listar();
    
  	
    });

   } 
  }
  	

    onSubmit(){
    
    	this.add();
    	this.myGroup.reset();
    	
    
    }
    	

}



  



