import { Directory } from '../model/directory.model';
import * as DirectoryActions from './../actions/directory.actions';


const initialState: Directory[] = [];


export function reducer(state: Directory[] = initialState, action: DirectoryActions.Actions) {
  switch (action.type){
    case DirectoryActions.ADD_DIRECTORY:
      return [...state, action.payload];

    case DirectoryActions.REMOVE_DIRECTORY:
      return state.filter( (val, key) => key !== action.payload );
    default:
      return state;

  }

}
