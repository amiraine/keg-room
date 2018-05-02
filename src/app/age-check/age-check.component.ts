import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age-check',
  templateUrl: './age-check.component.html',
  styleUrls: ['./age-check.component.css']
})
export class AgeCheckComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  clickYes(){
    return 'd-none';
  }
  clickNo(){
    return 'd-none';
  }
}
