import React from 'react';
import { connect } from 'react-redux';
import {printText,demoApiCall} from './action';
import axios from 'axios';


class DemoComponent extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        if(this.props.learningDemo.api_data){
            axios.get('https://jsonplaceholder.typicode.com/users').then((res)=>{
                this.props.dispatch(demoApiCall(res));
    
            });
        }
       
    }

    onchange(event)
    {
        
        this.props.dispatch(printText(event.target.value));

    }


    render() {
       console.log('****');
       
       console.log('****');
        return <div>
            <h1>This component is working.</h1>
            <input type="text"  placeholder="Enter Name" onChange={this.onchange.bind(this)}></input>
            <h2>{this.props.learningDemo.name}</h2>
            <h2>{this.props.learningDemo.api_data}</h2>
        </div>
    }


}

function mapStateToProps(state) {
    console.log(state);
    const  learningDemo  = state.get('learningDemo')
  
   
    return {learningDemo};
}

// const mapDispatchToProps = dispatch => {
//     return {
//       // dispatching actions returned by action creators
//       increment: () => dispatch(printText(event.target.value)()),
//       decrement: () => dispatch(decrement()),
//       reset: () => dispatch(reset())
//     }
//   }

export default connect(mapStateToProps)(DemoComponent);
