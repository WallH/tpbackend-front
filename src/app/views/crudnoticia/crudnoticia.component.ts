import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Noticia } from 'src/app/models/noticia';
import { GenericService } from 'src/app/services/generic-service.service';
import { NoticiaService } from 'src/app/services/noticia-service.service';

@Component({
  selector: 'app-crudnoticia',
  templateUrl: './crudnoticia.component.html',
  styleUrls: ['./crudnoticia.component.css']
})
export class CrudnoticiaComponent implements OnInit {

  noticiaForm = this.formBuilder.group({
    titulo: ['', [Validators.required, Validators.minLength(4)]],
    noticia: ['', [Validators.required, Validators.minLength(50)]],
    img: ['', [Validators.required]],
  });

  constructor(private formBuilder:FormBuilder, private noticiaService?:NoticiaService) {
   }
  
  ngOnInit(): void {
  }

  processIMG(e)
  {
    console.log(e);
    this.noticiaForm.get('img').setValue(e[0].base64);
  }
  
  getErrorMessage(field:AbstractControl | null) {
    if (field?.hasError('required'))
      return 'Campo requerido.';
    if (field?.hasError('minlength'))
      return `Debe superar los ${field?.errors?.minlength?.requiredLength} caracteres`;
    if (field?.hasError('maxlength'))
      return `No debe superar los ${field?.errors?.maxlength?.requiredLength} caracteres`;
    return '';
   }

  save()
  {
    let noticia = new Noticia(this.noticiaForm.get('titulo').value, this.noticiaForm.get('noticia').value,
    this.noticiaForm.get('img').value, true);
    this.noticiaService.add(noticia).then(
      res=>{ 
        this.noticiaForm.setValue({
          titulo: '',
          noticia: '',
          img: ''
        })
        console.log("Noticia agregada")
      }).catch(err=> {
        console.log("Noticia error")
      });
  }
}
