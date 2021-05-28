import { Component, OnInit } from '@angular/core';
import { LogTraductorService } from 'src/app/services/logtraductor-service.service';

@Component({
  selector: 'app-viewlogs',
  templateUrl: './viewlogs.component.html',
  styleUrls: ['./viewlogs.component.css']
})
export class ViewlogsComponent implements OnInit {

  filters = 
  {
    idiomaDestino:'',
    idiomaOrigen: ''
  }
  constructor(private logService:LogTraductorService) { 
    this.loadLogs();
  }

  ngOnInit(): void {
  }
  
  loadLogs()
  {
    this.logService.getFilter(this.filters).then(
      res=>
      {
        
      }
    ).catch(err=>{
      console.log(":D");
    });
  }
  
}
