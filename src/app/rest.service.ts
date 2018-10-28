import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';



let url = 'http://localhost:8080/api/';


@Injectable({
  providedIn: 'root'
})
export class RestService {

	


  constructor(public http: HttpClient) { 
}
  
  		private _headers = {headers: new HttpHeaders().set('Content-Type','application/json')};

	 	getData(type) {
	  	 return this.http.get(url+type, this._headers);
	    
	  };
	   addData(type,form){
	   	return this.http.post(url+type,form, this._headers);

	   }
	    deleteData(type) {
	    
	   		return this.http.delete(url+type,this._headers);

	   }
	   updateData(type,form){

	   	return this.http.put(url+type,form, this._headers);

	   }
	
}




