import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  formulario: FormGroup;
  mensagens_validacao = {
    nome_required: 'Nome é obrigatório',
    nome_minlenght: 'Nome deve conter no mínimo 5 caracteres',
    email_required: 'Email é obrigatório',
    email_pattern: 'O email contém caracteres  proibidos',
  }

  constructor() { }

  salvar(){
    alert('Contato salvo!');
  }

  ngOnInit() {
    this.formulario = new FormGroup({
      nome: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(null, [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      telefone: new FormControl(null, Validators.required),
      favorito: new FormControl(true, Validators.required),
    });
  }

}
