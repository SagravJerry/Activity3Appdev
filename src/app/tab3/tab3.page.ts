import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  public tab3: string;
  public formData: FormGroup;
  public items = [
    
   
  ];
  constructor(private activatedRoute: ActivatedRoute, 
              private alertCtrl:AlertController) {}


  ngOnInit() {
    this.tab3 = this.activatedRoute.snapshot.paramMap.get('id');
    this.formData= new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      Phone: new FormControl()
    }); 
    

  }
  onSubmit() {
    this.items.push(this.formData.value);
    //  console.log(this.formData.value);
    this.formData.reset();
    
      };
  
  
    async alertThis(index: number): Promise<void>{
      await this.alertCtrl.create({
        header: "Alert",
        message: " Are you sure?",
        buttons: [{
          text: 'yes',
          role: 'destructive',
          handler: () => {   
                  this.items.splice(index, 1,);  
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