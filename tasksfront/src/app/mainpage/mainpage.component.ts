import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { TaskSelectedService } from '../TaskSelectedService';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})

export class MainpageComponent implements OnInit {
  activeTab: string;
  constructor(private route: ActivatedRoute, private router: Router, private service: TaskSelectedService) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.activeTab = this.route.snapshot.url[0].path;
    });
  }

  tabChanged(event) {
    event.preventDefault();
    this.router.navigate([event.nextId]);
  }
}
