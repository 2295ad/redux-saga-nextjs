import { combineReducers } from 'redux'

 function fact(state='',action){
    switch(action.type){
        case 'fact':return state
          break;
        default: return state;
        
    }
}

 function dissolve(state=true,action){
  switch(action.type){
    case 'dissolve': return action.data
                    break;
    default: return state;
  }
}


function writeFact(state = '',action){
  switch(action.type){
    case 'write': return action.data
     break;
    default:return state;
    }
}

export default combineReducers({
  fact,
  dissolve,
  writeFact
})