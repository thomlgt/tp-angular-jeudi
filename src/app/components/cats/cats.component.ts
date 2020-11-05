import { Component, OnInit } from '@angular/core';
import { Cat } from 'src/app/models/cat';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  cats : Cat[]

  constructor(private catService : CatService) { }

  ngOnInit(): void {
    this.catService.getAll().subscribe(list => {
      this.cats = list;
    })
  }

}
