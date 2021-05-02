import { Quote } from '@angular/compiler';
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private _data: DataService) { }

  motivationQuotes: Array<Quote>;
  motivationToDisplay: Quote;
  randomNum: number;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._data.getMotivation().subscribe((d: Array<Quote>) => {
      this.motivationQuotes = d;
      this.motivationToDisplay = this.motivationQuotes[Math.floor((Math.random() * this.motivationQuotes.length) + 1)];
    });
  }

  getNewMotivation() {
    this.motivationToDisplay = this.motivationQuotes[Math.floor((Math.random() * this.motivationQuotes.length) + 1)];
  }

}
