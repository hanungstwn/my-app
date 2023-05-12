import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-call-details',
  templateUrl: './call-details.page.html',
  styleUrls: ['./call-details.page.scss'],
})
export class CallDetailsPage implements OnInit {
  chat: any[] = [];
  items: any[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const itemName = this.route.snapshot.queryParamMap.get('itemName');
    const item = this.items.find(i => i.name === itemName);
    if (item !==null) {
      this.items = [itemName];
    }
  }

}
