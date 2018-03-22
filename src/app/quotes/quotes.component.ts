import { Component, OnInit, Input } from '@angular/core';
import { Quotes} from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input() quotes: Quotes;
  constructor() {
  }
  voteUp(): boolean {
    this.quotes.votes += 1;
    return false;
  }
  voteDown(): boolean {
    this.quotes.votes -= 1;
    return false;
  }
  ngOnInit() {
  }

}
