import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() emitSearch = new EventEmitter<any>()

  searchTerm: string;

  

  constructor() { }

  search(searchTerm){
    this.emitSearch.emit(this.searchTerm);
  }

  ngOnInit() {
  }

}
