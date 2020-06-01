import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.store';
import { Observable } from 'rxjs';
import { Directory } from '../model/directory.model';
import * as DirectoryActions from './../actions/directory.actions';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit,OnDestroy {

  directory$: Observable<Directory[]> = this.store.pipe(select(state => state.directory));

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }


  ngOnDestroy(){

  }



  removeDir(index){
    this.store.dispatch(new DirectoryActions.DeleteDirectory(index));
  }

}
