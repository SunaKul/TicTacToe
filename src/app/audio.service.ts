import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {

  private turnSound: HTMLAudioElement;

  constructor() {
    this.turnSound = new Audio('assets/sound1.mp3');
  }

  playTurnSound() {
    this.turnSound.play();
  }
}
