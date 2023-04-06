import Player from '@vimeo/player';
//import throttle from 'lodash.throttle';

//tworzę nowy obiekt new Player(odtwarzacz wideo)przypisany do zmiennej player.
//Właściwość 'vimeo-player' odnosi się do wartości id w HTML.
const player = new Player('vimeo-player');

//kod zapisujący czas odtwarzania w local storage
player.on('timeupdate', () => {
  localStorage.setItem('videoplayer-current-time', player.currentTime());
});

//zmienna currentTime odczytuje czas odtwarzania z local storage
//jeśli zmienna currentTime jest zdefiniowana to
//player.setCurrentTime(currentTime)- ustawia czas odtwarzania
//zapisuje czas zatrzymania i od niego wznawia
const currentTime = localStorage.getItem('videoplayer-current-time');
if (currentTime) {
  player.setCurrentTime(currentTime);
}
