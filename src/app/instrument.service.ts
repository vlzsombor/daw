import { Injectable } from '@angular/core';
import Wad from 'web-audio-daw';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {



  private playNote = (notes: string[], settings: { source: "sine" | "square" | "sawtooth" | "triangle" | "noise"; volume?: number | undefined; pitch?: string | number | undefined; detune?: number | undefined; env?: { attack?: number | undefined; decay?: number | undefined; sustain?: number | undefined; hold?: number | undefined; release?: number | undefined; } | undefined; destination?: object | undefined; offset?: number | undefined; loop?: boolean | undefined; tuna?: object | undefined; rate?: number | undefined; sprite?: object | undefined; filter?: { type?: "lowpass" | "highpass" | "bandpass" | "lowshelf" | "highshelf" | "peaking" | "notch" | "allpass" | undefined; frequency?: number | undefined; q?: number | undefined; env?: { frequency?: number | undefined; attack?: number | undefined; } | undefined; } | { type?: "lowpass" | "highpass" | "bandpass" | "lowshelf" | "highshelf" | "peaking" | "notch" | "allpass" | undefined; frequency?: number | undefined; q?: number | undefined; env?: { frequency?: number | undefined; attack?: number | undefined; } | undefined; }[] | undefined; vibrato?: { shape?: "sine" | "square" | "sawtooth" | "triangle" | undefined; magnitude?: number | undefined; speed?: number | undefined; attack?: number | undefined; } | undefined; tremolo?: { shape?: "sine" | "square" | "sawtooth" | "triangle" | undefined; magnitude?: number | undefined; speed?: number | undefined; attack?: number | undefined; } | undefined; panning?: number | any[] | undefined; panningModel?: "equalpower" | "HRTF" | undefined; rolloffFactor?: string | undefined; reverb?: { wet?: number | undefined; impulse?: string | undefined; } | undefined; delay?: { delayTime?: number | undefined; wet?: number | undefined; feedback?: number | undefined; } | undefined; useCache?: boolean | undefined; }) => {
    const wads = notes.map(note =>
      new Wad({ ...settings, pitch: note })
    );
    const instrument = new Wad.Poly({});
    wads.forEach(wad => instrument.add(wad));
    instrument.play();
  }
  
  public play = (notes: string[], settings: { source: "sine" | "square" | "sawtooth" | "triangle" | "noise"; volume?: number | undefined; pitch?: string | number | undefined; detune?: number | undefined; env?: { attack?: number | undefined; decay?: number | undefined; sustain?: number | undefined; hold?: number | undefined; release?: number | undefined; } | undefined; destination?: object | undefined; offset?: number | undefined; loop?: boolean | undefined; tuna?: object | undefined; rate?: number | undefined; sprite?: object | undefined; filter?: { type?: "lowpass" | "highpass" | "bandpass" | "lowshelf" | "highshelf" | "peaking" | "notch" | "allpass" | undefined; frequency?: number | undefined; q?: number | undefined; env?: { frequency?: number | undefined; attack?: number | undefined; } | undefined; } | { type?: "lowpass" | "highpass" | "bandpass" | "lowshelf" | "highshelf" | "peaking" | "notch" | "allpass" | undefined; frequency?: number | undefined; q?: number | undefined; env?: { frequency?: number | undefined; attack?: number | undefined; } | undefined; }[] | undefined; vibrato?: { shape?: "sine" | "square" | "sawtooth" | "triangle" | undefined; magnitude?: number | undefined; speed?: number | undefined; attack?: number | undefined; } | undefined; tremolo?: { shape?: "sine" | "square" | "sawtooth" | "triangle" | undefined; magnitude?: number | undefined; speed?: number | undefined; attack?: number | undefined; } | undefined; panning?: number | any[] | undefined; panningModel?: "equalpower" | "HRTF" | undefined; rolloffFactor?: string | undefined; reverb?: { wet?: number | undefined; impulse?: string | undefined; } | undefined; delay?: { delayTime?: number | undefined; wet?: number | undefined; feedback?: number | undefined; } | undefined; useCache?: boolean | undefined; }) => {
    try {
      this.playNote(notes, settings);
    }
    catch (e) {
      console.error(e);
    }
  };

  constructor() { }
}
