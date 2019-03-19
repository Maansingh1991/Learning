require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import HelloComponent from './HelloComponent';
let yeomanImage = require('../images/yeoman.png');

/**
 * 
 * Read about react.lazy for lazy loading
 * 
 * 
 */

class AppComponent extends React.Component {


/* Called before mouting
- Use for intializing local state
- Use for binding of events.
- Not to call setState.
*/  
constructor(props){
  super(props); //Need to call it other wise this.props will be undefined
  this.state={name:""}
 // this.onChange=this.onChange.bind(this);
}

    onChange(event){
      var obj = new Object;
      console.log(obj.target)
      obj[event.target.name]=event.target.value;
      this.setState(obj);
    }

/*
Invoked after mounting
We can call setState but it will face performance issues.

*/
    componentDidMount(){
      console.info(this.constructor.name+ 'Component mount process finished');
    }

/*
- Can be used for network calls
- Can be used for comparing 
- Not called at intial render
- can call setState but it will lead to infinite loop.Use set state with condition.


*/

    componentDidUpdate(prevProps, prevState, snapshot){
      console.info(this.constructor.name+' Did my component updated?');

    }  

    /* called before a component id unmouted - clean up method*/
    
    componentWillUnmount(){
      console.info(this.constructor.name+' Component unmounting');
    }

    //Gives you decision power to to decide component should update or not
    shouldComponentUpdate(nextProps, nextState){

      return true;
    }

    /*Called before render both on intial mount and updates */
    static getDerivedStateFromProps(){

    }

    /*
    -gives information about DOM,recent output and gives information based on DOM
    
    */
    getSnapshotBeforeUpdate(prevProps, prevState){



    }

/** Used when error raised in component  */
    static getDerivedStateFromError(){}
    componentDidCatch(error, info){}



  render() {
    return (
      <div className="index">
        <img src={yeomanImage} alt="Yeoman Generator" />
        <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
       Name:- <input type="text" name="name" onChange={this.onChange.bind(this)} />
        <HelloComponent name={this.state.name}  place="asdasd"/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
