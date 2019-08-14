import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
// import {MenuItem} from 'primeng/api';
import {SelectItem} from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  // @Output() featureSelected = new EventEmitter<string>();
  // items: MenuItem[];
  cities: SelectItem[];
  selectedCity: City;
  // onSelect(feature: string) {
  //   this.featureSelected.emit(feature);
  // }

  constructor() { }

  ngOnInit() {

    this.cities = [
      {label: 'Save Data', value: null},
      {label: 'Fetch Data', value: {id: 1, name: 'New York', code: 'NY'}},
    ];

  }

}
