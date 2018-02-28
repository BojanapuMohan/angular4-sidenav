import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-cmp-component',
  templateUrl: './new-cmp-component.component.html',
  styleUrls: ['./new-cmp-component.component.css']
})
export class NewCmpComponentComponent implements OnInit {
	
  newcomponent = "Entered in new component created";

  constructor() { }

  ngOnInit() {
  }

}
