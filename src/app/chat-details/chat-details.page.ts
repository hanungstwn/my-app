import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.page.html',
  styleUrls: ['./chat-details.page.scss'],
})
export class ChatDetailsPage implements OnInit {
  chat: any[] = [];
  items: any[] = [];

  constructor(private router: ActivatedRoute, private route: ActivatedRoute) {}

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('id');
    console.log(`category: ${category}`);
    this.generateItems();
  }

  private generateItems() {
    this.items.push({
      name: faker.name.firstName(),
    });
  }
}
