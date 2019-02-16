
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  recipeValue: any;

  itemList = [];

  currentLat: any;
  currentLong: any;
  geolocationPosition: any;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat= position.coords.latitude;
        this.currentLong= position.coords.longitude;
      })
  }

  getVenues() {

    this.recipeValue = this.recipes.nativeElement.value;



    if(this.recipeValue !== null) {
      this._http.get(' https://api.nutritionix.com/v1_1/search/' + this.recipeValue + '?results=0:1&fields=*&appId=2f4dfe58&appKey=fa010fc8a8b398e8caaec60da3f6acd1')
        .subscribe((data:any)=>{
          console.log(data);
          for (var i = 0; i < data.hits.length; i++) {
            this.itemList[i] = {
              "name": data.hits[i].fields.item_name,
              "weight": data.hits[i].fields.nf_serving_weight_grams,
              "calories": data.hits[i].fields.nf_calories,
              "txt":"https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=f61d1286-72ec-4d67-a0a2-16969a62acac&password=4AmGC8jSSy5G&text=the item description is "+data.hits[i].fields.item_name+"and the weight is"+data.hits[i].fields.nf_serving_weight_grams+"then the calories is"+data.hits[i].fields.nf_calories+""
            };
          }


        });
    }




  }


}
