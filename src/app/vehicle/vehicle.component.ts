import { Component, OnInit } from '@angular/core';
import {RestService} from "../rest.service";
import {MatDialog,  MatDialogRef,MAT_DIALOG_DATA} from '@angular/material';
import { VehicleModalComponent } from '../vehicle-modal/vehicle-modal.component';


@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {
	vehicles: any; 
	 displayedColumns: string[] = ['placa', 'cor', 'disponivel', 'ações'];
	 dataSource:any;
	 dados: any;
  	

  constructor(public restService: RestService,public dialog: MatDialog) { 
  	    
  	
		  	this.listar();

        


		  }	
		  

  ngOnInit() {


  }

  openDialog(){
          const dialogRef = this.dialog.open(VehicleModalComponent, {
            width: '300px',/*,
            data: {name: this.name, animal: this.animal}*/
          });

          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            /*this.animal = result;*/
          });
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


  getVehicle(id){
  	if (confirm('Atualizar Veiculo?')) {
  	this.restService.getData("veiculo/"+id).subscribe(res => {
  		this.dados = res;
      this.updateDialog(this.dados);
    	});
    
  	}
    
  }
  updateDialog(dado:any){
      const dialogRef = this.dialog.open(VehicleModalComponent, {
            width: '300px',
            data: {dado}
          });

          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            /*this.animal = result;*/
          });


    }


  delete(id){
  	
  	if (confirm('Excluir Veiculo?')) {
  		
     	this.restService.deleteData("veiculo/"+id).subscribe((res:Response) => {
  		console.log("deu certo");
  		this.listar();
    
  	
    });

   } 
  }
  	

    
    	

}



  



