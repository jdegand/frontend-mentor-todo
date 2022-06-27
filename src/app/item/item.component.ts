import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from "../item";

//after creating component with ng g c item - have to npm install 

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})

export class ItemComponent {

  editable = false;

  //Definite Assignment Assertion or initialize with empty object etc
  @Input() item: Item = {description: '', done: false};
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<Item>();

  saveItem(description:string) {
    if (!description) return;
    this.item.description = description;
  }
}


