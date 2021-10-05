import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { debounceTime,filter } from 'rxjs/operators';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  // Declaring variables
  @Output() searchTermFromSearchBar = new EventEmitter();

  searchForm: any;
  searchTerm: any;

  constructor(private FormBuilder: FormBuilder) { 
    this.gettingFormData();
      this.searchForm.get('search').valueChanges.pipe(filter((data: any) => data.trim().length >= 3),
      debounceTime(500))
       .subscribe((res: any) => {  
          this.searchTerm = res;
          this.searchTermFromSearchBar.emit(this.searchTerm);
          console.log(this.searchTerm);
      });
    
  }

  ngOnInit(): void {
  } 

    //Getting Form data
    gettingFormData() {
      this.searchForm = this.FormBuilder.group({
        search: ['', [Validators.required]]
      });
     }

}
