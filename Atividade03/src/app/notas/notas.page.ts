import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {

  titulo: string = 'Suas notas'
  
  constructor(private notasService: NotasService, notas: Nota[]) { }

  ngOnInit() {
    this.notas = notasService.getNotas();
  }

}
