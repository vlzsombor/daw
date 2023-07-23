import { Component } from '@angular/core';
import { InstrumentService } from '../instrument.service'
import Wad from 'web-audio-daw';
import { MidiButton } from '../Model/MidiButton';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {
  constructor(private instrument: InstrumentService) {

    for (var i: number = 0; i < 10; i++) {
      this.groups[i] = [];
      for (var j: number = 0; j < 10; j++) {
        this.groups[i][j] = {
          row: j,
          column: i
        };
      }
    }

  }
  async handleButtonClick() {
    // This function will be called when the button is clicked
    console.log('Button clicked!');
    // Add your desired logic here

    let saw = new Wad({ source: 'triangle', env: { decay: 0.25, sustain: 0, release: 0.5 } });
    saw.play({ pitch: '440', label: 'A4' });

    // this.instrument.play(['A2'], {
    //   source: 'sine', // sine, square, triangle, sawtooth
    //   volume: 0.25
    // })
  }
  protected groups: MidiButton[][] = [];


  protected changeEnabled(i: number, j: number){
      this.groups[i][j].enabled = !this.groups[i][j].enabled;
  }

}
