import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links: {name: string, path: string}[];

  constructor() { 
    this.links = [{name: "About", path: "#"},
    {name: "Gallery", path: "#"},
    {name: "Discography", path: "#"},
    {name: "Gear", path: "#"},
    {name: "Contact", path: "#"}
];

  }


  ngOnInit() {
  }

}
