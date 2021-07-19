import { ModalProvider } from "react-simple-modal-provider";
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

const Home = (props) => {
    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState('');
    const [productPrivew, setProductPrivew] = useState([]);
    const [productList, setProductList] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const fetchData = async () => {
        return await fetch('http://localhost:8080/product/all')
            .then(response => response.json())
            .then(data => {
                setProductList(data) 
                setProductPrivew(data)
            });
    }
  
    const updateInput = async (input) => {
        const filtered = productPrivew.filter(product => {
            return (product.name.toLowerCase().includes(input.toLowerCase()) || product.brand.toLowerCase().includes(input.toLowerCase()))
        })
        setSearchQuery(input);
        setProductList(filtered);
    }
  
    useEffect( () => {fetchData()},[]);

    const onProductPressed = (product) => {
        setTotalProducts(totalProducts + 1);
        setTotalPrice(totalPrice + product.price);
        const product_copy = {
            name: product.name,
            brand: product.brand,
            price: product.price,
            id: totalProducts
        }
        setSelectedProducts([...selectedProducts, product_copy]);
        console.log(selectedProducts);
    }

    const onRemovePressed = (product) => {
        setTotalPrice(totalPrice - product.price);
        setSelectedProducts(selectedProducts.filter(function(product_) { 
            return product.id !== product_.id
        }));
        // console.log(selectedProducts);
    }

    const checkout = (event) => {
        event.preventDefault();        
        alert("Order placed, total amount: " + totalPrice)
        setSelectedProducts([]);
        setTotalPrice(0);
    }
    
    return (
      <>
        <h1>Product List</h1>
        <div className="row_div">
            
            <div className="main_div">
                <div style={{align: "center", "justifyContent": "center", "alignItems": "center"}}>
                    <input
                        key="random1"
                        value={searchQuery}
                        placeholder={"search product"}
                        onChange={(e) => updateInput(e.target.value)}
                        // style={{"text-align": "center"}}
                    />
                </div>
                
                {
                    productList.map((data,index) => {
                        if (data) {
                            return (
                                <div key={data.id}>
                                    <div className="CardWrapper">
                                        <div className="ColTitle">
                                            <div className="ProductTitle">{data.name}</div>
                                        </div>
                                        <div className="ColDetail">
                                        <div className="Header">
                                            <div className="ProductTitle">{data.brand}</div>
                                        </div>
                                        </div>
                                        <div className="ColDetail">
                                            <div className="Price">{data.price}</div>
                                        </div>
                                        <div className="ColDetail">
                                            <button value='Add to cart' onClick={() => onProductPressed(data)}>Add to cart</button>
                                        </div>
                                    </div>
                                </div>	
                            )
                        }
                        return null
                    }) 
                }
            </div>
            <hr></hr>
            <div className="main_div">
                <h3 style={{margin: 0, align: "center", justify: "center", "textAlign": "center"}}>Cart</h3>
                {
                    selectedProducts.map((data,index) => {
                        if (data) {
                            return (
                                <div key={data.id}>
                                    <div className="CardWrapper">
                                        <div className="ColTitle">
                                            <div className="ProductTitle">{data.name}</div>
                                        </div>
                                        <div className="ColDetail">
                                        <div className="Header">
                                            <div className="ProductTitle">{data.brand}</div>
                                        </div>
                                        </div>
                                        <div className="ColDetail">
                                            <div className="Price">{data.price}</div>
                                        </div>
                                        <div className="ColDetail">
                                            <button value='Remove' onClick={() => onRemovePressed(data)}>Remove</button>
                                        </div>
                                    </div>
                                </div>	
                            )	
                        }
                        return null
                    }) 
                }
                <div className="row_div">
                    <p>Total amount: {totalPrice}</p>                    
                    <button style={{"margin": 10}} onClick={(event) => checkout(event)}>Checkout</button>
                </div>       
            </div>
        </div>
        
      </>
     );
  }

export default Home;