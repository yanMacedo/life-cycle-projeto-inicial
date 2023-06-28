import { Component, OnInit, Input,OnDestroy ,Output, EventEmitter } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem'
//import { EventEmitter } from 'stream';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {
  @Input() item!:Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();
  faPen = faPen;
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void { }

  editarItem(){
    this.emitindoItemParaEditar.emit(this.item);
  }
  checarItem(){
    if(this.item.comprado == true){
      this.item.comprado = false;
    } else{
      this.item.comprado = true;
    }
  }
  deletarItem(){
    console.log('estão tentando me calar')
    this.emitindoIdParaDeletar.emit(this.item.id);
  }
  ngOnDestroy(): void{
    console.log('conseguiram me calar')
  }

}
