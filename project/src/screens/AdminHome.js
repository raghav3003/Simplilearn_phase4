import { ModalProvider } from "react-simple-modal-provider";
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { format } from 'react-string-format';
import '../App.css';

const AdminHome = (props) => {
    const history = useHistory();
    const [searchQuery, setSearchQuery] = useState('');
    const [productPrivew, setProductPrivew] = useState([]);
    const [productList, setProductList] = useState([]);

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

    const sendData = (event) => {
        // event.preventDefault();
        const pname = event.target.pname.value;
        const pbrand = event.target.pbrand.value;
        const price = event.target.price.value;
        
        const requestOptions = {
            method: 'post',
        };

        const path = format("http://localhost:8080/product/add?name={0}&brand={1}&price={2}", pname, pbrand, price);
        fetch(path, requestOptions)
            .then(response => {
                alert("Addition successful!");
                fetchData();
            });
    }

    const removeClicked = (data) => {
        const id = data.id;
        const requestOptions = {
            method: 'delete',
        };

        const path = format("http://localhost:8080/product/delete?id={0}", id);
        fetch(path, requestOptions)
            .then(response => {
                fetchData();
            });
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
                                            <button value='Remove' onClick={() => removeClicked(data)}>Remove</button>
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
            <div style={{display:"flex", width:"50%", "justifyContent": "center", "alignItems": "center", "alignContent": "center"}}>
                <form onSubmit={sendData}>
                    <pre>
                    <label for="pname">Product name:</label>
                    <input type="text" id="pname" name="pname" />
                    <br />

                    <label for="pbrand">Brand:       </label>
                    <input type="text" id="pbrand" name="pbrand" />
                    <br />

                    <label for="price">Price:       </label>
                    <input type="float" id="price" name="price" />
                    <br />

                    <input　type="submit" value="submit" />
                    </pre>
                </form>
            </div>
        </div>
        
      </>
     );
  }

export default AdminHome;