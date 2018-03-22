export class Quotes {
    votes: number;
    author: string;
    quotes: string;
    date: any;
    constructor(quotes: string, author: string, date: any, votes ?: number) {
        this.quotes = quotes;
        this.author = author;
        this.date = date;
        this.votes = votes || 0;
    }
    voteUp(): void {
        this.votes += 1;
    }
    voteDown(): void {
        this.votes -= 1;
    }
}
