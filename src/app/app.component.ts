import { Component, QueryList, ViewChildren } from '@angular/core';
import { PlayerComponent } from './player/player.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Piano';


  @ViewChildren(PlayerComponent) children: QueryList<PlayerComponent>;

  play() {
    console.log(this.children)
    this.children.forEach((child) => { child.play() })
  }

  stop() {
    console.log(this.children)
    this.children.forEach((child) => { child.stop() })
  }
}
