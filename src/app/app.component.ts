import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tapped In';
  selectedTap = null;

  editTap(clickedTap){
    this.selectedTap = clickedTap;
  }
  finishEdit(){
    this.selectedTap = null;
  }
}
