import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/services/noticia-service.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  
  sliderIndex = 0; 
  noticias = [
    {
      titulo:"Zack Snyder's Justice League se hace realidad",
      texto: "La Zack Snyder’s Justice League ya tienen fecha de estreno para HBO Max.  Aunque si es cierto que no se trata de un día en concreto, se trata de un tiempo estimado.  Pues esto viene de la ejecutiva de HBO Max Sandra Dewey, quien habló en exclusiva con Variety.",
      img: "assets/img/zsnyderRelease.jpg",      
      alt: "ZackSnyderPoster",
      hotnew: true
    },
    {
      titulo:"HBO Max supera a Disney Plus gracias a La Liga de la Justicia de Zack Snyder",
      texto: "La más reciente aventura con los superhéroes DC levantó aplausos al por mayor, generando un precedente único para la franquicia, así como un gran acierto en la carrera del director. Nuevos reportes señalan un incremento sorprendente de consumidores en la plataforma de HBO, haciendo que el servicio destaque por encima de muchos otros en la competencia. Sin lugar a dudas, el Snyder Cut llegó para cambiar las reglas en el último minuto.",
      img: "assets/img/hbomaxsuperadisney.jpg",      
      alt: "ZackSnyderPoster2",
      hotnew: true
    },
    {
      titulo:'Zack Snyder responde a la campaña “Restore the Snyderverse”',
      texto: "Tras el estreno de su versión de Justice League, los fans siguen demandando que el cineasta concluya su visión del universo DC, y él mismo por fin ha hablado sobre la campaña lanzada por sus seguidores..",
      img: "assets/img/snyderrestore.jpg",      
      alt: "ZackSnyderPoster2",
      hotnew: true
    }
  ];

  constructor(private noticiaService:NoticiaService) { 
    this.noticiaService.getAll().then(
      (res:any)=>
      {
        this.noticias = res.response;
      }
    ).catch();
  }

  ngOnInit(): void {
  }

  /* Explicación lógica de actionSlider 
  * Si estamos parados en el index 0, lo que hará será lo siguiente: 
  * ((0+TAMAÑOARRAY)-1) % TAMAÑOARRAY
  * Suponiendo que TAMAÑOARRAY sea de 5, se resolverá 
  * (4)%5 = 4
  * Haciendo circular nuestro recorrido por el slider, esto evitaría tener un método que evalúe si estamos en el índice 0 o hacer un if ternario innecesario
  * Ahora en el caso de estar en index = 4 y TAMAÑOARRAY = 5, es decir, en la última imagen, la ecuación es mucho más sencilla, tan solo...
  * (index+1)%TAMAÑOARRAY, osea, (4+1)%5 = 0, quedando también de la misma forma la suma o resta. 
  * 
  */
  actionSlider(action)
  {
    return this.sliderIndex = (action) ? (this.sliderIndex+1)%this.noticias.length : ((this.sliderIndex+this.noticias.length)-1)%this.noticias.length;
  }
}
