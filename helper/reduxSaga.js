import { put, takeEvery, call, all } from 'redux-saga/effects';
import axios from 'axios';

 function* writeFacts(){
    console.log('klao')
   let res = yield call(axios.get,'https://uselessfacts.jsph.pl/random.json?language=en')
   yield put({type:'write',data:res.text})
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