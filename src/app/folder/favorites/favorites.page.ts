import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/services/local.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favsArray: [] = [];
  constructor(
    private localStore: LocalService,
    private router: Router
  ) { }

  ngOnInit() {
    this.FetchFavs();
  }
  
  FetchFavs(){
    this.favsArray = JSON.parse(this.localStore.getData('favoriteFood')) 
    ? JSON.parse(this.localStore.getData('favoriteFood')) : [];
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
      { 'lowercaseDescription' : name,
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
