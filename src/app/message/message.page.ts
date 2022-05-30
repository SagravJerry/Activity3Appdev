import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {

  contacts = [
    {
      name: 'Danilo',
      phoneNumber: '09488745380',
      image: 'a.jpg',
    },
    {
      name: 'Lemuel',
      phoneNumber: '09355543564',
      image: 'd.png',
    },
    {
      name: 'Robin',
      phoneNumber: '09517664573',
      image: 'b.png',
    },
    {
      name: 'Allan',
      phoneNumber: '09518515381',
      image: 'e.png',
    },
    {
      name: 'Rose',
      phoneNumber: '09503376844',
      image: 'd.png',
    },
    {
      name: 'Leo',
      phoneNumber: '09367656690',
      image: 'c.png',
    },
    {
      name: 'Tali',
      phoneNumber: '09164412267',
      image: 'f.png',
    },
  ];

  customAlertOptions: any = {
    header: 'Contacts',
    translucent: true
  };

  constructor() { }

  ngOnInit() {
  }

}
