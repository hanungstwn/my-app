import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { faker } from '@faker-js/faker';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  segment = 'Chats';
  value = 'Chats, Calls, Status';
  items: any[] = [];
  loadingCtrl: any;
  contentLoaded: boolean = false;
  ChatServicesService: any;
  currentPage: any;
  chats: any[] = [];

  constructor(private router: Router) {}

  // navigateFromCode(itemName: string) {
  //   const item = this.items.find(i => i.name === itemName);
  //   if (item) {
  //     // const itemId = this.items.indexOf(item);
  //     this.router.navigateByUrl(`/chat?id=${itemName}-${this.generateRandomTime()}`);
  //   }
  // }
  
  navigateFromCode(itemName: string) {
    const item = this.items.find(i => i.name === itemName);
    if (item) {
      this.router.navigateByUrl(`/chat?itemName=${itemName}`);
    }
  }
  

  ngOnInit() {
    this.generateItems();
    this.contentLoaded = true;
  }

  // Loop Ion-Item chats
  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 100; i++) {
      this.items.push({
        name: faker.name.firstName(),
      });
    }
  }

  // infinite scroll
  onIonInfinite(event: any) {
    setTimeout(() => {
      this.generateItems();
      (event as InfiniteScrollCustomEvent).target.complete();
    }, 2000);
  }

  // create random time
  generateRandomTime(): string {
    const now = new Date();
    const hour = Math.floor(Math.random() * 24);
    const minute = Math.floor(Math.random() * 60);

    now.setHours(hour);
    now.setMinutes(minute);
    now.setSeconds(0);
    now.setMilliseconds(0);

    const formattedTime = now.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });
    return formattedTime;
  }

  // generate random number
  generateRandomNumber(min: any, max: any): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // call generateRandomNumber to get a random number
  randomNumber(): string {
    const randomNum = this.generateRandomNumber(1, 59);
    return randomNum.toString();
  }

  generateRandomWords(): string {
    const randomWords = faker.lorem.words(5);
    return randomWords.toString();
  }

  //refresher
  handleRefresh(event: any) {
    this.contentLoaded = false;
    setTimeout(() => {
      event.target.complete();
      this.contentLoaded = true;
    }, 2000);
  }


}