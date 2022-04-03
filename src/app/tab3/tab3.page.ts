import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public tab3: string;
  public items = [
    {
      id: 0,
      name: 'Jerry Vargas',
      number: '09218217865'
    },
    {
      id: 2,
      name: 'Jelian Mae',
      number: '09161651678'
    },
     {
      id: 4,
      name: 'Jestoni Alamang',
      number: '09218217865'
    },
    {
      id: 6,
      name: 'Nica Obrero',
      number: '09161651678'
    }
  ]

  constructor(private activatedRoute: ActivatedRoute, 
              private alertCtrl:AlertController) {}

  ngOnInit() {
    this.tab3 = this.activatedRoute.snapshot.paramMap.get('id');
  }
  
  async alertThis(index: number){
    await this.alertCtrl.create({
      header: "Alert",
      message: " Are you sure?",
      buttons: [{
        text: 'yes',
        role: 'destructive',
        handler: () => {   
                this.items.splice(index, 1);  
          console.log ('delete Clicked');
        }
      },
      {
        text: 'cancel'
      }
      ]

    }).then (res=> res.present());
  }
}
