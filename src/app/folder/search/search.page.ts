import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodService } from 'src/app/api/food.service';
import { LocalService } from 'src/app/services/local.service';


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
    private router: Router,
    private localStore: LocalService
    ) { }

  ngOnInit() {
    if(this.localStore.getData('currentFood')){
      this.search(this.localStore.getData('currentFood'))
    }
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

  goToBasicReport(itemId: string) {
    this.localStore.saveData('currentFood', itemId)
    const link = `${this.router.url}/basic-report/`
    this.router.navigate([link, itemId]);
  }

  addToFavs(name: string, id: string) {
    let favsArray : any
    if(this.localStore.getData('favoriteFood')) {
      favsArray = JSON.parse(this.localStore.getData('favoriteFood'));
    } else {
      favsArray = [];
    }
    console.log(favsArray);
    favsArray.push(
      { 'name' : name,
        'fdcId' : id
     }
      );
    this.localStore.saveData('favoriteFood', JSON.stringify(favsArray))
  }

  deleteFav(id: string) {
    let favsArray = JSON.parse(this.localStore.getData('favoriteFood'));
    favsArray = favsArray.filter(function( obj ) {
      return obj.fdcId !== id;
    });
    console.log(favsArray)
    this.localStore.saveData('favoriteFood', JSON.stringify(favsArray))
  }

  checkIfItsInFavList(id: string){
    let favsArray = JSON.parse(this.localStore.getData('favoriteFood'));
    favsArray = favsArray.filter(function( obj ) {
      return obj.fdcId == id;
    });
    if( favsArray.length > 0)
      return true;
    return false; 
  }
}
