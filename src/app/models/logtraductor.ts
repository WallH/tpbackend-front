export class LogTraductor
{
    constructor(public textoOrigen?:string, public idiomaOrigen?:string, public textoDestino?:string, public idiomaDestino?:string)
    {
        this.textoOrigen = textoOrigen;
        this.idiomaOrigen = idiomaOrigen;
        this.textoDestino = textoDestino;
        this.idiomaDestino = idiomaDestino;
    }
}