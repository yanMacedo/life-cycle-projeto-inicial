import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!:Item;
  editando: boolean = false;
  btnTexto = 'Salvar Item';

  itemValor!: string;
  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges){
    if(!changes['itemQueVaiSerEditado'].firstChange){
      this.editando = true;
      this.btnTexto = "Editar Item"
      this.itemValor = this.itemQueVaiSerEditado.nome;
    }
  }

  editarItem(){
    this.listaService.editarItem(this.itemQueVaiSerEditado, this.itemValor)
    this.limparCampo();
    this.editando = false;
    this.btnTexto = "Salvar Item";
  }

  adicionarItem(){
    this.listaService.adicionarItem(this.itemValor);
    this.limparCampo();
  }

  limparCampo(){
    this.itemValor = '';
  }

}
