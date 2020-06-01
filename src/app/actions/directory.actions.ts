import { Action } from '@ngrx/store';
import { Directory } from '../model/directory.model';

export const ADD_DIRECTORY = '[DIRECTORY] Add';
export const REMOVE_DIRECTORY  = '[DIRECTORY] Remove';



export class AddDirectory implements Action{
  readonly type: string = ADD_DIRECTORY;

  constructor(public payload: Directory){

  }
}

export class DeleteDirectory implements Action{
  readonly type: string = REMOVE_DIRECTORY;

  constructor(public payload: number){

  }
}


export type Actions = AddDirectory | DeleteDirectory;
