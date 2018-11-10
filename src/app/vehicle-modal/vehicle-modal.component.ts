import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import {RestService} from "../rest.service";


@Component({
  selector: 'app-vehicle-modal',
  templateUrl: './vehicle-modal.component.html',
  styleUrls: ['./vehicle-modal.component.scss']
})
export class VehicleModalComponent implements OnInit {


	myGroup = new FormGroup({
  		idVeiculo: new FormControl(''),
       placa: new FormControl(''),
       cor: new FormControl(''),
       disponivel: new FormControl()
    });


   constructor(public restService: RestService,
    public dialogRef: MatDialogRef<VehicleModalComponent>,
    @Inject(MAT_DIALOG_DATA) public dados: any) {
   			console.log(dados);
   			if(this.dados==null){

   			}else{
   			this.myGroup.setValue({
			"idVeiculo": this.dados.dado.idVeiculo,	 	
	       "placa": this.dados.dado.placa,
	       "cor": this.dados.dado.cor,
	       "disponivel": this.dados.dado.disponivel
    	},{});
		}
   		

   }

  	
  

  ngOnInit() {
  	
  }



  add(){
  	this.restService.addData("veiculo",this.myGroup.value).subscribe((res:Response) => {

  	
    });
    
  }


  update(){

    	this.restService.updateData("veiculo",this.myGroup.value).subscribe((res:Response) => {
  		
  	
    	});

  }

  onSubmit(){
    	


    	this.add();
    	this.myGroup.reset();
    	
    
    }




}
