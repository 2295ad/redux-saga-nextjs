
function reducer(state='',action){
    switch(action.type){
        case 'fact':return state
          break;
        case 'dissolve': return{...state,sub:action.data}
          break;
        case 'write': return {...state, fact:action.data}
        default:return state;
    }
}


export default reducer;