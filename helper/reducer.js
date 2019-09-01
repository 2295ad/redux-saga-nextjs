
function reducer(state='',action){
    switch(action.type){
        case 'ADD':return{...state,add:action.data+1}
          break;
        case 'SUB': return{...state,sub:action.data-1}
          break;
        default:return state;
    }
}


export default reducer;