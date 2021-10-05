import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'restCountriesApi';

  // Declaring Variables
  allCountriesArr: any = [];
  regionalCountries: any = [];

  constructor(private ApiService: ApiService) { }

  ngOnInit(): void {
    this.fetchAllCountries();
  }

  fetchAllCountries() {
    this.ApiService.allCountries()
    .subscribe((res: any) => { 
      this.allCountriesArr = res;
      console.log(this.allCountriesArr);
    }, 
    (err: any) => {
      console.log(err);
    }) 
  }

  receivefilterData(selectedRegion: any) { 

    if(selectedRegion == 'All') {
      this.fetchAllCountries();
    }else {
      this.ApiService.CountriesByRegion(selectedRegion).subscribe(res => {
        this.allCountriesArr = res;
      })
    }

   
  }

  getSearchTerm(searchTerm: any) {
    this.ApiService.searchByCountryName(searchTerm).subscribe((res: any) => {
      console.log(res);
      this.allCountriesArr = res;
    },
    (err: any) => {
      console.log(err);
      if(err.error.status == '404') {
        alert(err.error.message);
      }
    })
  }

 

}
