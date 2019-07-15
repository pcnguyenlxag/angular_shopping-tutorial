import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {SelectItem} from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string>();
  items: MenuItem[];
  cities: SelectItem[];
  selectedCity: City;

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  constructor() { }

  ngOnInit() {
    this.items = [
      {label: 'Recipe', icon: 'fa fa-fw fa-bar-chart'},
      {label: 'Shopping list', icon: 'fa fa-fw fa-calendar'},
    ];

    this.cities = [
      {label: 'Select City', value: null},
      {label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}},
      {label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}},
      {label: 'London', value: {id: 3, name: 'London', code: 'LDN'}},
      {label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}},
      {label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}}
    ];

  }

}
