  
import React, {Component} from 'react';

export default class Marker extends Component {


  static defaultProps = {};

  render() {
    return (
       <div style={{
           position: 'absolute',
        //    width: 20,
        //    height: 20,
        //    left: -40 / 2,
        //    top: -40 / 2,
        //    border: '1px solid red',
        //    borerRadius: '50%',
           backgroundColor: 'tomato',
        //    textAlign: 'center',
        //    color: 'white',
        height: '40px',
        width: '40px',
        border: '1px',
        borderRadius: '50%'
       }}>
    
       </div>
    );
  }
}
