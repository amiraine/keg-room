import { Component, OnInit } from '@angular/core';
import { Taps } from '../models/employee-tap.model';
import {Till} from '../models/till.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  taps: Taps[] = [
    new Taps('Ecliptic Starburst IPA', 'Ecliptic', 6, 7.8,124),
    new Taps('Level Let\'s Play Pilsner', 'Level Brewing', 6, 4.9,124),
    new Taps('Ninkasi Yours Truly Pale Ale','Ninkasi', 6, 4.3,124),
    new Taps('Logsdon Seizoen','Logsdon',5,7.5,124),
    new Taps('Pabst Blue Ribbon', 'Pabst Brewing',2,4.7,124),
    new Taps('Passion Statement','2 Towns Ciderhouse',5,5.2,124),
    new Taps('Wild Plum', 'WildCraft Cidery',5,7.5,124),
  ];
  currentTill = new Till(150,0,0);
  refill(currentTap){
    if (currentTap.volume <=10){
      return "bg-danger";
    }
  }
  sellBeer(currentTap,currentTill){
    currentTap.volume --; //remove pint from volume
    currentTill.end += currentTap.price; //add price to till
    return currentTap.volume;
    return currentTill.end;
    return currentTill.netProfit;
  }
}
