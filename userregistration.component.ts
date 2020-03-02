import {Component, OnInit} from '@angular/core';
import {Personslist} from './persons';
import {stringify} from 'querystring';

@Component({
 selector: 'app-userregistration',
 templateUrl: './userregistration.component.html',
 styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {
 public validate = '';
 public theText = '';
 public theagreed = 'Yes';
 public count = 0 ;

 //state = ['State A', 'State B', 'State C', 'State D'];
 thePersons = new Personslist('myfirst', 'mylast', 'myusername', 'myname@mailid.com', '7829333365', 'State C', 'bangalore', '560068', 'Country A', 'male', true);
 public theFormList = [
  {
      "form_element": "input",
      "optional": false,
      "type": "text",
      "label": "First name",
      "place_holder": "Enter  Name",
      "icon": ""
  },
  {
      "form_element": "input",
      "optional": false,
      "type": "text",
      "label": "Last name",
      "place_holder": "Enter Last Name",
      "icon": ""
  },
  {
      "form_element": "input",
      "optional": false,
      "type": "text",
      "label": "Username",
      "place_holder": "UserName",
      "icon": "@"
  },
  {
      "form_element": "input",
      "optional": true,
      "type": "text",
      "label": "Email (Optional)",
      "place_holder": "Enter First Name",
      "icon": ""
  },
  {
      "form_element": "input",
      "optional": false,
      "type": "text",
      "label": "Address",
      "place_holder": "1234 Main St",
      "icon": ""
  },
  {
      "form_element": "input",
      "optional": true,
      "type": "text",
      "label": "Address 2",
      "place_holder": "1234 Main St",
      "icon": ""
  },
  {
      "form_element": "input",
      "optional": true,
      "type": "dropdown",
      "options": [
          {
              "label": "Country A",
              "value": 1
          },
          {
              "label": "Country A",
              "value": 1
          },
          {
              "label": "Country B",
              "value": 1
          },
          {
              "label": "Country C",
              "value": 1
          },
          {
              "label": "Country D",
              "value": 1
          }
      ],
      "label": "Country",
      "place_holder": "Choose...",
      "icon": ""
  },
  {
      "form_element": "input",
      "optional": true,
      "type": "dropdown",
      "options": [
          {
              "label": "State A",
              "value": 1
          },
          {
              "label": "State A",
              "value": 1
          },
          {
              "label": "State B",
              "value": 1
          },
          {
              "label": "State C",
              "value": 1
          },
          {
              "label": "State D",
              "value": 1
          }
      ],
      "label": "State",
      "place_holder": "Choose...",
      "icon": ""
  },
  {
      "form_element": "input",
      "optional": true,
      "type": "text",
      "label": "Zip",
      "place_holder": "",
      "icon": ""
  }
];

 constructor() {}

 ngOnInit() {}

 handleClick(theLast: boolean, theUser: boolean, theEmail: boolean, thePhone: boolean, theCity: boolean, thePin: boolean, theCountry: boolean, ag: string) {
  this.count = 0;
  this.theText = '';
  if (!theLast) {
    this.theText = ' Last name,';
    this.count++;
   }

  if (!theUser) {
   this.theText = ' User name,';
   this.count++;
  }
  if (!theEmail) {
   this.theText += ' Email ID,';
   this.count++;
  }
  if (thePhone === false) {
    this.theText += '' + ' Phone,';
    this.count++;
  }
  if (theCity === false) {
   this.theText += '' + ' City,';
   this.count++;
  }
  if (thePin === false) {
   this.theText += '' + ' Pin,';
   this.count++;
  }
  if (theCountry === false) {
   this.theText += '' + ' Country,';
   this.count++;
  }
  if (!ag) { this.theagreed = 'No'; this.theText = '' + '- Its not agreed!';  this.count++;
} else { this.theagreed = 'Yes' ;
}
  }
}
/*
Inside : import { Personslist } from './persons';

export class Personslist {
  constructor(
    public uname: string,
    public email: string,
    public phone: string,
    public state: string,
    public city: string,
    public pin: string,
    public country: string,
    public gender: string,
     public agree: boolean
    ) {}
}

*/
