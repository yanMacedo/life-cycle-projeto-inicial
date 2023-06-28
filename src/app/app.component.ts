import { Component, OnInit, DoCheck,} from '@angular/core';
import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'app-lista-de-compras';
  itemParaSerEditado!: Item;
  listaDeCompras!: Array<Item>;
  constructor(private listaService: ListaDeCompraService) { }

  ngOnInit(): void{
    this.listaDeCompras = this.listaService.getListaDeCompra();
  }
  ngDoCheck(): void {
    this.listaService.atualizarLocalStorage();
  }

  editarItem(item: Item){
    this.itemParaSerEditado = item;
  }
  deletarItem(id: number){
    const index = this.listaDeCompras.findIndex((item)=>
      item.id === id);
    this.listaDeCompras.splice(index, 1);
  }
  limparLista(){
    this.listaDeCompras = [];
  }
}
