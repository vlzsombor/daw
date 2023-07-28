import { Component } from '@angular/core';
import { InstrumentService } from '../instrument.service'
import Wad from 'web-audio-daw';
import { MidiButton } from '../Model/MidiButton';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { MidSideCompressor, Transport } from 'tone';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  private iteration: number = 0;
  public static LENGTH = 16;

  private scale = [
    "E6",
    "D6",
    "B5",
    "A5",
    "G5",
    "E5",
    "D5",
    "B4",
    "A4",
    "G4",
    "E4",
    "D4",
    "B3",
    "A3",
    "G3",
    "E3"
  ];


  constructor(private instrument: InstrumentService) {

    for (var i: number = 0; i < PlayerComponent.LENGTH; i++) {
      this.midiButtons[i] = [];
      for (var j: number = 0; j < PlayerComponent.LENGTH; j++) {
        this.midiButtons[i][j] = {
          row: i,
          column: j
        };
      }
    }

  }

  ngOnInit() {
    setInterval(() => { this.tick() }, 0.15 * 1000);
  }
  tick() {

    console.log('hello')

    this.midiButtons.map(d => d[this.iteration % PlayerComponent.LENGTH]).forEach(column => {
      let saw = new Wad({ source: 'triangle', env: { decay: 0.25, sustain: 0, release: 0.5 } });

      if (column.enabled) {
        saw.play({ pitch: this.scale[column.row], label: 'A4' });
      }

    });
    this.iteration++;
  }
  handleButtonClick() {
    // This function will be called when the button is clicked
    console.log('Button clicked!');
    // Add your desired logic here

    let saw = new Wad({ source: 'sine', env: { decay: 0.25, sustain: 0, release: 0.5 } });
    saw.play({ pitch: '440', label: 'A4' });

  }

  protected midiButtons: MidiButton[][] = [];


}
