import { Component, Input, OnInit } from '@angular/core';
import { Cat } from 'src/app/models/cat';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {

  @Input() cat : Cat

  constructor(private catService : CatService) { }

  ngOnInit(): void {}

  deleteCat(cat) {
    this.catService.delete(cat.id).subscribe(() => {
      alert(`Le chat nommé ${cat.nom} a été supprimé !`)
    });
  }

}
