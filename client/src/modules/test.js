const CHANGE_ID = 'test/CHANGE_ID';

export const changeId = id => ({type: CHANGE_ID, id})

export default (state = {id: null}, action) => {
  switch(action.type){
    case CHANGE_ID:
      return {...state, id: action.id}
    default:
      return state;
  }
}