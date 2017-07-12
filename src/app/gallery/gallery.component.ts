import { Component, OnInit } from '@angular/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
 photoList: { path: string; title: string; }[];
  currentPhoto: { path: string; title: string; };
  
  currentIndex = 0;

  private tick: string;
  private subscription: Subscription;

  constructor() {
    this.photoList = [
      { path: '/assets/makeup1.jpg', title: 'Makeup' },
      { path: '/assets/makeup2.jpg', title: 'Brushes' },
      { path: '/assets/makeup3.jpg', title: 'Face Makeup' },
      { path: '/assets/makeup4.jpg', title: 'Makeup box' },
      { path: '/assets/makeup5.jpg', title: 'Makeup box 2' }];

    this.currentPhoto = this.photoList[0];
   
   
  }

  ngOnInit() {
    this.startTimer();
  }

   ngOnDestroy() {
    this.killTimer();
  }


  photoClicked(photo) {
    this.currentIndex = this.photoList.indexOf(photo);
    this.killTimer();
    this.startTimer();
  

  }

  leftArrowClicked() {
     this.killTimer();
    this.startTimer();
    if ( this.currentIndex>= 1) {
      this.currentIndex -=1;
      return;
    }

    this.currentIndex = this.photoList.length - 1;
    
  }

  rightArrowClicked() {
     this.killTimer();
    this.startTimer();
    if ( this.currentIndex < this.photoList.length - 1) {
      this.currentIndex +=1;
      return;
    }

    this.currentIndex = 0;
  }

  moveIndex(){
    this.currentIndex = (this.currentIndex + 1) % this.photoList.length;
  }

  startTimer () {
    let timer = TimerObservable.create(7000, 7000);
    this.subscription = timer.subscribe(t => {
      this.moveIndex();
       });
  }  
  
  killTimer() {
    this.subscription.unsubscribe();
  }

}
