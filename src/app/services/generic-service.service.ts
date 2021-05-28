import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import axios from "axios";
import { environment } from 'src/environments/environment';
declare var $:any;

export class GenericService<T>{
protected urlFinal: string;

  constructor(protected url: string) { 
    this.urlFinal =  environment.apiHost + url;
  }

async getAll(){

    return await axios.get(this.urlFinal, {
      withCredentials: true
    });
  }

 async add(ent: T, file?: File){
  for (const property in ent) {
    if(ent[property] == undefined || ent[property] == null) delete ent[property];
  }
    return await axios.post(this.urlFinal+'?'+ $.param(ent), {}, 
    {
      withCredentials: true
    });
  }

  async edit(id:any, ent:T){
    for (const property in ent) {
      if(ent[property] == undefined || ent[property] == null) delete ent[property];
    }
    
    return await axios.put(this.urlFinal+ "/" + id + `?${$.param(ent)}`,ent, {
      withCredentials: true
    });
  }

  async delete(id:any){
    return await axios.delete(this.urlFinal+"/"+id, 
    {
      withCredentials: true
    });
  }
  
  async findById(id:any){
    return await axios.get(this.urlFinal+"/"+id, 
    {
      withCredentials: true
    });
  }


}