import { Component } from '@angular/core';
import { Taps } from './models/employee-tap.model';
import { Till } from './models/till.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//age check and login screen
  title = 'Tapped In';
  visible = true;
  login = false;
  clickYes(){
    this.visible = false;
  }
  clickNo(){
    alert('You are not old enough to view this content! Please exit.');
  }
  clickEmployee(){
    this.login = true;
  }
//beer display
  taps: Taps[] = [
    new Taps('Ecliptic Starburst IPA', 'Ecliptic', 6, 7.8,124),
    new Taps('Level Let\'s Play Pilsner', 'Level Brewing', 6, 4.9,124),
    new Taps('Ninkasi Yours Truly Pale Ale','Ninkasi', 6, 4.3,124),
    new Taps('Logsdon Seizoen','Logsdon',5,7.5,124),
    new Taps('Pabst Blue Ribbon', 'Pabst Brewing',2,4.7,124),
    new Taps('Passion Statement','2 Towns Ciderhouse',5,5.2,124),
    new Taps('Wild Plum', 'WildCraft Cidery',5,7.5,124),
  ];
  //beer edits and adds
  refill(currentTap){
    if (currentTap.volume <=10){
      return "bg-danger";
    }
  }
  selectedTap = null;
  editTap(clickedTap){
    this.selectedTap = clickedTap;
  }
  finishEdit(){
    this.selectedTap = null;
  }
  addNewTap(name,brand,price,alcohol,volume){
    let newTap = new Taps(name,brand,price,alcohol,124);
    this.taps.push(newTap);
  }
  //cash money
  currentTill = new Till(150,0,0);
  sellBeer(currentTap,currentTill){
    this.selectedTap = currentTap;
    currentTap.volume --; //remove pint from volume
    currentTill.end += currentTap.price; //add price to till
    let soldBeer = [currentTap.volume,currentTill.end, currentTill.netProfit]
    return soldBeer;
  }
  // authenticate(userPin){
  //   const employeePin = 'beer';
  //   if(userPin === employeePin){
  //     return alert('You are now logged in!')
  //   } else {
  //     alert('You\'ve entered an incorrect PIN. Please try again or enter the site as a customer.');
  //   }
  // }
}
