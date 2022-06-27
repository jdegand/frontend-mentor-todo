import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todo';
  showVar: Boolean = true;

  /* On the completed tab - can't clear completed selections  */

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'Complete online JavaScript course', done: true },
    { description: 'Jog around the park 3x', done: false },
    { description: '10 minutes meditation', done: false },
    { description: 'Read for 1 hour', done: false },
    { description: 'Pick up groceries', done: false },
    { description: 'Complete Todo App on Frontend Mentor', done: false },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done);
  }

  addItem(description: any) {
    if(description === '') return; //wasn't a problem then became one
    this.allItems.unshift({
      description,
      done: false
    });
  }

  remove(item:any) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

  removeAll() {
    if(this.filter === 'all'){
      let filtered = this.allItems.filter(item => this.filter === 'done' ? item.done : !item.done)
      this.allItems = filtered;
    }
  }

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.allItems, event.previousIndex, event.currentIndex);
  }

  toggle() {
   // const toggler = document.querySelector('.toggler') as HTMLImageElement; 
   // toggler.src = '../assets/images/icon-moon.svg';
    
    if(this.showVar){
      document.querySelector('.banner')?.classList.add('light');
      document.querySelector('body')?.classList.add('bg-light');
      document.querySelector('.drag-text')?.classList.add('text-light');
      document.querySelector('.main')?.classList.add('main-light');
    } else {
      document.querySelector('.banner')?.classList.remove('light');
      document.querySelector('body')?.classList.remove('bg-light');
      document.querySelector('.drag-text')?.classList.remove('text-light');
      document.querySelector('.main')?.classList.remove('main-light');
    }
    this.showVar = !this.showVar;
  }

}
