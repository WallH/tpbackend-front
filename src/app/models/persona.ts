export class Persona
{
    constructor(public apellido?:string, public nombre?:string, public nro_documento?:string, public email?:string)
    {
        this.apellido = apellido;
        this.nombre = nombre;
        this.nro_documento = nro_documento;
        this.email = email;
    }
}