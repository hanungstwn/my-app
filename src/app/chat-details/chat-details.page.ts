import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-details',
  templateUrl: './chat-details.page.html',
  styleUrls: ['./chat-details.page.scss'],
})
export class ChatDetailsPage implements OnInit {
  chat: any[] = [];
  items: any[] = [];
  times: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const itemName = this.route.snapshot.queryParamMap.get('itemName');
    const item = this.items.find(i => i.name === itemName);
    if (item) {
      this.items = [item];
    }
  }
}
