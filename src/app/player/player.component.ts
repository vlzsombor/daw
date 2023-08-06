import { Component, Inject, ViewChild, } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OscillatorService } from './oscillator.service';
import Wad from 'web-audio-daw';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent {

  @ViewChild('myname') input;

  constructor(@Inject(DOCUMENT) private document: Document,
    @Inject(OscillatorService) protected OscillatorService: OscillatorService) {
  }
  waveForm: waveForm[] = ['sine', 'square', 'sawtooth', 'triangle', 'noise'];
  public selectedWaveForm = this.waveForm[0];

  public play() {
    this.input.nativeElement.play(Wad.audioContext, (this.Callback).bind(this));
  }

  public stop() {
    this.input.nativeElement.stop();
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

  public SelectWaveform(k) {
    var waveFormNumber: number = k.value / 20;
    if (waveFormNumber === 5) {
      waveFormNumber = 4;
    }
    this.selectedWaveForm = this.waveForm[Math.floor(waveFormNumber)];
  }

  public SelectFrequency(k) {
    this.frequency = k.value;
  }

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
  public frequency = 0;
  public Callback(ev: { t: number, g: number, n: number }) {
    let wad = new Wad({
      source: this.selectedWaveForm, env: { decay: 0.25, sustain: 0, release: 0.5 },
      filter: [
        { type: 'lowpass', frequency: this.frequency, q: 5 }
      ]
    });
    wad.play({ pitch: this.scale[ev.n], label: 'A4' });
  }

}
type waveForm = 'sine' | 'square' | 'sawtooth' | 'triangle' | 'noise';