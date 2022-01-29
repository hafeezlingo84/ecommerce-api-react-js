import React, { useState } from "react";
import  { useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";
import { setProducts} from '../redux/actions/productActions';
import Header from '../components/Header';
import {Carousel } from 'react-bootstrap';
import image from '../images/slider-1.jpg'


const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fatchProducts = async () => {

        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) =>{
            console.log("err",err);
        });
            dispatch(setProducts(response.data));
    };

        useEffect(() => {
            fatchProducts();
        },[])
        console.log("Products from servier",products);
    return (
        <div>
            <Header/>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={image}
      alt="First slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={image}
      alt="Second slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image}
      alt="Third slide"
    />
    <Carousel.Caption>

    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            <br/>
            <br/>
            <br/>
            <br/>

        <div className="ui grid container" >

            <ProductComponent/>

        </div>
        </div>


    );
};

export default ProductListing;