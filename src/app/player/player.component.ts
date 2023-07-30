import { InstrumentService } from '../instrument.service'
import Wad from 'web-audio-daw';
import { MidiButton } from '../Model/MidiButton';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { MidSideCompressor, Transport } from 'tone';
import { Component, Inject, ViewChild, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Pianoroll } from 'webaudio-pianoroll';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  public static LENGTH = 16;
  @ViewChild('myname') input;
  waveForm: waveForm[] = ['sine', 'square', 'sawtooth', 'triangle', 'noise'];

  selectedWaveForm = this.waveForm[0];

  private scale = [
    "E3",
    "G3",
    "A3",
    "B3",
    "D4",
    "E4",
    "G4",
    "A4",
    "B4",
    "D5",
    "E5",
    "G5",
    "A5",
    "B5",
    "D6",
    "E6",
  ];


  constructor(@Inject(DOCUMENT) private document: Document) {
  }


  timebase = 480;

  Callback(ev: { t: number, g: number, n: number }) {

    // 52 - 88
    //52 = 0
    // 88 = 16
    // 57 -> A4 440hz
    console.log('Button clicked!');
    // Add your desired logic here
    let saw = new Wad({ source: this.selectedWaveForm, env: { decay: 0.25, sustain: 0, release: 0.5 } });

    let a = this.scale;
    saw.play({ pitch: this.scale[ev.n], label: 'A4' });
  }
  Play() {
    this.input.nativeElement.play(Wad.audioContext, this.Callback.bind(this));
  }

  Layout(k) {
    switch (k.id) {
      case "xrange":
        this.input.nativeElement.xrange = k.value * 16;
        break;
      case "xoffset":
        this.input.nativeElement.xoffset = k.value * 16;
        break;
      case "yrange":
        this.input.nativeElement.yrange = k.value;
        break;
      case "yoffset":
        this.input.nativeElement.yoffset = k.value;
        break;
    }
  }

  Layout2(k) {

    var a: number = k.value / 20;

    if (a === 5) {
      a = 4;
    }

    this.selectedWaveForm = this.waveForm[Math.floor(a)];
  }


}
type waveForm = 'sine' | 'square' | 'sawtooth' | 'triangle' | 'noise';
