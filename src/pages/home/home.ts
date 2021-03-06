import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  searchQuery: string = '';
  items: string[][];
  images: string[];


  currentUser = "Martin";

  attending:boolean = true;


  constructor() {
    this.initializeItems();
  }

    initializeItems() {
    this.items = [
      ['Peter', 'img/1'],
      ['Nanna', 'img/nanna'],
      ['Cecilie', 'img/cecilie'],
      ['Pernille', 'img/pernille'],
      ['Mark', 'img/mark'],
      ['Søren', 'img/6'],
      ['Henning', 'img/7'],
      ['John', 'img/8'],
      ['Birgitte', 'img/9'],
      ['Ole', 'img/10'],
      ['Helga', 'img/11'],
    ];
  }

  showFriends(){
  	    this.items = [
      ['Nanna', 'img/nanna'],
      ['Cecilie', 'img/cecilie'],
      ['Pernille', 'img/pernille'],
      ['Mark', 'img/mark'],
    ];
  }


  setColor(){
  	if (this.attending == true) {
  		this.attending = false;
  		this.items.push([this.currentUser, 'img/12']);
  	}else
  	{
  		this.attending = true;
  		this.items.pop();
  	}
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item[0].toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}

