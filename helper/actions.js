export const getFacts=()=>({type:'fact'})
export const dissolve = (data)=>({type:'dissolve',data:data})
export const error = (data)=>({type:'error',data:data})
export const writeFact = (data) =>({type:'write',data:data})
