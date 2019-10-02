import { put, takeEvery, call, all } from 'redux-saga/effects';
import axios from 'axios';

 function* writeFacts(){
   let res = yield call(axios.get,'https://uselessfacts.jsph.pl/random.json?language=en')
   console.log(res)
   yield put({type:'write',data:res.data.text})
 }


// export default(
//     yield all(takeEvery('fact', writeFacts))
// )


export default function* rootSaga() {
    yield all([
      takeEvery('fact',writeFacts)
    ])
    // code after all-effect
  }