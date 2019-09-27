import React from 'react'
import {Button} from 'react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {getFacts, dissolve, error} from '../helper/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Card from 'react-bootstrap/Card'

// https://uselessfacts.jsph.pl/random.json?language=en
class IndexCompont extends React.Component{

  constructor(props){
    super(props)
    this.getFact = this.getFact.bind(this)
  }

  componentDidMount(){

  }

  async getFact(){
   try{
    const {getFacts, error} = this.props
    console.log('p')
    console.log('iiii')
    getFacts()
    // let resp = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
    // if(resp.data.text){
    //   getFacts(resp.data.text)
    // }else{
    // } 
   }catch(e){
     error('LOADING API FAILED!!!')
     console.log("API ERROR",e)
   }
  }

  render(){
    return(
      <div className="demo">
       <img src="static/beer.jpg"/>
       <br/>
       <br/>
       <i> KNOW SOME COOL FACTS!!</i>
       <br/>
       <Button variant="primary" onClick={()=>this.getFact()}> Click Me!</Button>
       <br/>
       <br/>
       <Card className="text-center">
        <Card.Header>RANDOM FACTS</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
           {this.props.info}
          </Card.Text>
          <Button variant="primary" size="sm" onClick={()=>this.props.dissolve('close')}>X</Button>
        </Card.Body>
        {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
      </Card>

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
        info:state.fact
      })

const mapDispatchToProps = (dispatch)=>
  bindActionCreators({getFacts, dissolve, error},dispatch)


export default (connect)(mapStateToProps, mapDispatchToProps)(IndexCompont);