import { Component } from '@angular/core';

@Component({
  selector: 'app-consol',
  templateUrl: './consol.component.html',
  styleUrls: ['./consol.component.css']
})
export class ConsolComponent {

  public main() {
    this.play(n => this.b("hello", n))
  }

  b(cc: string, c: number): number {
    console.log(cc);
    console.log(c);
    return 34;
  }

  play(callback: (data: number) => number) {
    console.log('cb method bitch');
    callback(23);
  }
}