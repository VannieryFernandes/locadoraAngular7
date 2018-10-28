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
	   addData(type,obj){
	   	return this.http.post(url+type, obj,this._headers);

	   }
	
}




