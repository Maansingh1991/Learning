import React from 'react';
import PropTypes from 'prop-types';





class HelloComponent extends React.Component {

    static getDerivedStateFromProps(props, state){
        console.log(props);
        console.log(state);

    }
    render() {
      return (
       <div>
           <div>Name :- {this.props.name}</div>
           <div>Age :- {this.props.age}</div>
           <div>Place :- {this.props.place}</div>




       </div>
      );
    }
  }


  HelloComponent.propTypes={
      name:PropTypes.string,
      age:PropTypes.number.isRequired,
      place:PropTypes.string
     
      
  }
  HelloComponent.defaultProps={
    name:'Demo',
    place:'Delhi'
   
    
}
  export default HelloComponent;
  