import { Component, OnInit } from '@angular/core';
import { Nota } from './nota.model';
import { NotasService } from './notas.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {

  titulo: string = 'Suas notas'
  notas: Nota[]
  
  constructor(private notasService: NotasService) { }

  ngOnInit() {
    this.notas = this.notasService.getNotas();
  }

}
