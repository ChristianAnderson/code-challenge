import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/api/food.service';

@Component({
  selector: 'app-basic-report',
  templateUrl: './basic-report.page.html',
  styleUrls: ['./basic-report.page.scss'],
})
export class BasicReportPage implements OnInit {
  public foodId : string;
  currentFood: [] = [];
  foodName: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService
    ) { }

  ngOnInit() {
    this.foodId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.foodId);
    if(this.foodId.length > 0) {
      this.foodService.getItem(this.foodId)
        .subscribe( (data: any) => {
          console.log(data);
          this.currentFood = data[0].foodNutrients;
          this.foodName = data[0].description;
          console.log(this.currentFood);
        }) 
    }
  }

}
