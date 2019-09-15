import React from 'react';
import IndexCompont from '../components/Index';
import {Provider} from 'react-redux';
import {storeState } from '../helper/store'

class Index extends React.Component{

  componentDidMount(){

  }

  render(){
    return(
      <div>
      <Provider store = {storeState}>
      <IndexCompont/>
      </Provider>
      </div>
    )
  }

}

export default Index;