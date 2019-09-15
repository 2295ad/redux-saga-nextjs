
function reducer(state='',action){
    switch(action.type){
        case 'fact':return{...state,fact:action.data}
          break;
        case 'dissolve': return{...state,sub:action.data}
          break;
        default:return state;
    }
}


export default reducer;