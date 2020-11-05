import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cat } from 'src/app/models/cat';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  catForm : FormGroup
  cat : Cat

  constructor(private fb : FormBuilder, private catService : CatService) { 
    this.catForm = this.fb.group({
      nom : [''],
      couleur : [''],
      age : ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.cat = this.catForm.value;
    this.catService.create(this.cat).subscribe(() => {
      alert(`Le chat nommé ${this.cat.nom} a été ajouté`);
    });
  }

}
