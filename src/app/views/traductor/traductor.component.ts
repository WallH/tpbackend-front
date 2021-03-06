import { Component, OnInit } from '@angular/core';
import { LogTraductor } from 'src/app/models/logtraductor';
import { LogTraductorService } from 'src/app/services/logtraductor-service.service';
import { TraductorService } from 'src/app/services/traductor.service';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit {
  queryTranslate = {
    source: "",
    target: "",
    input: "",
  }
  translated = "";
  constructor(private translateService:TraductorService, private logService:LogTraductorService) { 
  }

  ngOnInit(): void {
  }

  translate()
  {
    this.translateService.goTranslate(this.queryTranslate).subscribe((data:any)=>
      {
        console.log(data);
        this.translated = data.outputs[0].output;
        this.logService.add(new LogTraductor(this.queryTranslate.input, this.queryTranslate.source, data.outputs[0].output, this.queryTranslate.target)).then();        
      });
  }

}
