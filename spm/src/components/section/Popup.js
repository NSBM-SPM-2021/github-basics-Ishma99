import React, { Component } from "react";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import '../css/Cart.css';




import {DataContext} from '../Context'

export default class PopUp extends Component {

  
  handleClick = () => {
   this.props.toggle();
  };
  static contextType = DataContext;

render() {
    const {cart,total} = this.context;
  return (
     
   <div   className="modal">
     <div   className="modal_content"  >
     
          <Modal isOpen={true}  >
          <span className="close"   onClick={this.handleClick}>&times;   </span>
            <Zoom>
           
              <div className="order-details" >
             
                <h3 style={{textAlign:"center",paddingBottom:"50px",color:"green"}} className="success-message">YOUR ORDER HAS BEEN PLACED</h3>
                
                {cart.map(item =>(
                    <ul>
                    <li style={{paddingLeft:"10px",marginLeft:"10px"}}>
                            <div key={item._id}>
                                <div className="box">
                                    <div className="row">
                                        <h2  style={{color:"black"}}>{item.title}</h2>
                                        <span style={{
    left: "0px"}}
>Rs {item.price * item.count}</span>
                                    </div>
                                </div>
                            </div>
                            </li>
                            
                            </ul>
                        ))}
                        <div className="total"><h3>Total: Rs {total}</h3></div>
              </div>
            </Zoom>
          </Modal>
    </div>
   </div>
 
  );
 }
}


