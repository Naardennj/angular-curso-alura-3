import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item;
  @Output() emetindoItemParaEditar = new EventEmitter();

  faPen = faPen;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}
  ngOnChanges() {}

  editarItem() {
    this.emetindoItemParaEditar.emit(this.item);
  }

  checarItem() {
    if(this.item.comprado == true){
      this.item.comprado = false;
    }else{
      this.item.comprado = true;
    }
  }
}
