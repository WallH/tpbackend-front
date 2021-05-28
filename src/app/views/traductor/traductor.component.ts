import { Component, OnInit } from '@angular/core';
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
  constructor(private translateService:TraductorService) { }

  ngOnInit(): void {
  }

  translate()
  {
    this.translateService.goTranslate(this.queryTranslate).subscribe((data:any)=>
      {
        console.log(data);
        this.translated = data.outputs[0].output;
        
      });
  }

}
