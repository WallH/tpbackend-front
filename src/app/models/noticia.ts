export class Noticia
{
    constructor(public titulo?:string, public noticia?:string, public img?:string, public vigente?:Boolean)
    {
        this.titulo = titulo;
        this.noticia = noticia;
        this.img = img;
        this.vigente = vigente;
    }
}