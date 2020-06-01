import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as DirectoryActions from './../actions/directory.actions';
import { Directory } from '../model/directory.model';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
  }


  saveData(form){
    console.log(form.value);
    let dir:Directory = {
      name : form.value.name,
      phone : form.value.phone,
      email : form.value.email,
    };
    this.store.dispatch(new DirectoryActions.AddDirectory(dir));
    form.reset();
  }
}
