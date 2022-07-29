import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/api/food.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  foodName : string = 'pizza'
  list : [] = [];
  constructor(
    private foodService: FoodService,
    private loadingCtrl: LoadingController
    ) { }

  ngOnInit() {
  }
  loading : boolean = false; 
  search = (foodName: string) => {
    this.loading = true;
    if(foodName.length > 0) {
      this.foodService.getItem(foodName)
        .subscribe( (data: any) => {
          console.log(data);
          this.list = data;
          this.loading = false;
        }) 
    }
  }

}
