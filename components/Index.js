import React from 'react'
import {Button} from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {getData, getMoreData} from '../helper/actions';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
class IndexCompont extends React.Component{

  componentDidMount(){

  }

  render(){
    return(
      <div className="demo">
       <img src="static/beer.jpg"/>
       <br/>
       <br/>
       <Button variant="primary"> Click Me!</Button>
      <style jsx>{`
      img {
        width: 25%;
      }
      .demo {
        text-align:center;
      }
      `}
      </style>
      </div>
    )
  }

}

const mapStateToProps = (state)=>({
    return{
        info:state.add,
        moreInfo:state.moreInfo
    }
})

export default (connect)(mapStateToProps, mapDispatchToProps)(IndexCompont);