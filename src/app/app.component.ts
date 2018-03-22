import { Component, Input } from '@angular/core';
import { Quotes} from './quotes';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  quotes: Quotes[];
  constructor() {
    this.quotes = [
      new Quotes('Chamkufu mwanafu hukula huu', 'Wesley', new Date(), 0),
      new Quotes('Am God when you enter my scope', 'James muriuki', new Date(), 2),
      new Quotes('its a true story my child', 'Andrw anampiu', new Date(), 1),
    ];
  }
  addQuote(quote: HTMLInputElement, author: HTMLInputElement, date: HTMLInputElement): boolean {
    console.log(`Adding article quote: ${quote.value} and author: ${author.value}, lastly ${date.value}`);
    this.quotes.push(new Quotes(quote.value, author.value, date.value));
    return false;
  }
  sortedQuotes(): Quotes[] {
    return this.quotes.sort((a: Quotes, b: Quotes) => b.votes - a.votes);
  }
}

