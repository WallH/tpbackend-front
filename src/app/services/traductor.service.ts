import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
declare var $:any;
@Injectable({
  providedIn: 'root'
})
export class TraductorService {

  constructor(private _http:HttpClient) { 
  }

  goTranslate(query)
  {

    console.log($.param(query));
    return this._http.get<any[]>('https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?'+ $.param(query), 
    {
      headers:
      {
        "x-rapidapi-key": environment.apiKey,
        "x-rapidapi-host": environment.rapidapihost,
      }
    } );
  }
}
