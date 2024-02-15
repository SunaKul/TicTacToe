import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'latestApp';

  playSound(){
    let audio =new Audio();
    audio.src="C:/Users/sunak/angular-with-module/latestApp/src/assets/sound1.mp3";
    audio.load();
    audio.play();
    }
}


