import React, { Component } from 'react'
import ImgBg1 from '../images/cake1.jpg';
import ImgBg2 from '../images/cake2.jpg';
import ImgBg3 from '../images/cake3.jpg';
import ImgBg4 from '../images/cake4.jpg';
import ImgBg5 from '../images/cake5.jpg';
import ImgBg6 from '../images/cake6.jpg';


export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Chocolate Cake Slice",
                "src": ImgBg1,
                "description": "Super rich chocolate truffle and buttercream",
                "price": 280,
                "count": 1
            },
            {
                "_id": "2",
                "title": "Blueberry Muffin",
                "src": ImgBg2,
                "description": "Fluffy muffins packed with juicy blueberries",
                "price": 120,
                "count": 1
            },
            {
                "_id": "3",
                "title": "Doughnut",
                "src": ImgBg3,
                "description": "Fried doughnut with a chocolate ganache",
                "price": 200,
                "count": 1
            },
            {
                "_id": "4",
                "title": "Brownies",
                "src": ImgBg4,
                "description": "Gooey classic brownies with a cracky top",
                "price": 120,
                "count": 1
            },
            {
                "_id": "5",
                "title": "Chocolate Chip Cookie",
                "src": ImgBg5,
                "description": "Chewy centre filled with chunks of chocolate",
                "price": 80,
                "count": 1
            },
            {
                "_id": "6",
                "title": "Oreo Cookies & Cream",
                "src": ImgBg6,
                "description": "Milky buttercream packed with Oreos",
                "price": 450,
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


