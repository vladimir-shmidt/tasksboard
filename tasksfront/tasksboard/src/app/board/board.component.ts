import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  tabs: [1, 2, 3];

  constructor() {
  }

  ngOnInit() {
  }
}
