import React, { Component } from 'react'
import {DataContext} from '../Context'

import '../css/Details.css'
import '../css/Cart.css'
import result from "./Dbcon"
import PopUp from "./Popup";

export class Cart extends Component {
   
    static contextType = DataContext;
    componentDidMount(){
        this.context.getTotal();
    }
    constructor() {
      super();
    this.state = {
      Name: '',
      Email: '',
      Address: '',
      Total: '',
      OrderIteam:[],
      seen: false
    }}
   
    togglePop = () => {
      this.setState({
       seen: !this.state.seen
      });
     };
    handleSubmit = (e) => {
      e.preventDefault();
      const {cart,total} = this.context;
      cart.map(item =>(this.state.OrderIteam.push({item_name:item.title,
      item_count:item.count})))

       const Data ={
     
      Name:this.state.Name,
      Email:this.state.Email,
      Address:this.state.Address,
      Total:total,
      OrderIteam:this.state.OrderIteam
      }
      result.post('/marks.json',Data).then(Response=>{
        console.log(Response);
      })
    
    }

    render() {
        const {cart,increase,reduction,removeProduct,total} = this.context;
        if(cart.length === 0){
            return <h2 style={{textAlign:"center"}}>No Product</h2>
        }else{
            return (
                <>
                    {
                        cart.map(item =>(
                            <div className="details cart" key={item._id}>
                                <img src={item.src} alt=""/>
                                <div className="box">
                                    <div className="row">
                                        <h2>{item.title}</h2>
                                        <span>Rs {item.price * item.count}</span>
                                    </div>
                                    <p>{item.description}</p>
                                    <p>{item.content}</p>
                                    <div className="amount">
                                        <button className="count" onClick={() => reduction(item._id)}> - </button>
                                        <span>{item.count}</span>
                                        <button className="count" onClick={() => increase(item._id)}> + </button>
                                    </div>
                                </div>
                                <div className="delete" onClick={() => removeProduct(item._id)}>X</div>
                            </div>
                        ))
                    }
                    <div className="cart">

                    <form onSubmit={this.handleSubmit}>
                      <ul className="form-container">
                        <li>
                          <label>Email</label>
                          <input type="text" id='Email' value={this.state.Email}
             onChange={(e)=>this.setState({Email:e.target.value})} />
                        </li>
                        <li>
                          <label>Name</label>
                          <input type="text" id='Name' value={this.state.Name}
             onChange={(e)=>this.setState({Name:e.target.value})} />
                        </li>
                        <li>
                          <label>Address</label>
                          <input type="text" id='Address' value={this.state.Address}
              onChange={(e)=>this.setState({Address:e.target.value})} />
                        </li>
                        <div className="total">
                        <h3>Total: Rs.{total}</h3>
                        <div className="input-field" onClick={this.togglePop}>
               <button className="btn pink lighten-1 z-depth-0">order</button>
               </div>  
                        {this.state.seen ? <PopUp toggle={this.togglePop}  /> : null}
                      </div>  
                    </ul>
                  </form>
                  </div>
                 
                </>
                )
            }
        }
}
export default Cart

