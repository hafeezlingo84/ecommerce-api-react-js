import React from "react";
import { useSelector } from "react-redux";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { Container, Row, Col, Card } from 'bootstrap-4-react';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const [filter, setFilter] = useState('');

    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;

        if (category === filter) {
            return (
                <>

                    <Col col="md-4" style={{ marginBottom: '30px' }} data-aos="zoom-in">
                        <Card style={{ padding: '20px' }}>
                            <Card.Image src={image} style={{height:'250px'}} />
                            <Card.Body>

                            </Card.Body>
                            <Card.Footer>
                            <Card.Title>{title}</Card.Title>
                                <Card.Subtitle mb="2" text="muted">${price}</Card.Subtitle>
                                <Card.Text>{category}</Card.Text>
                                <Card.Link href="#">  <Link to={`/product/${id}`}>     <Button  type="primary" block> Add to Cart</Button></Link></Card.Link>
                            </Card.Footer>
                        </Card>
                    </Col>

                </>
            );

        }

        else if (filter === '') {
            return (

                <Col col="md-4" style={{ marginBottom: '30px' }} data-aos="zoom-in">
                        <Card style={{ padding: '20px' }}>
                        <Card.Image src={image} style={{height:'250px'}} />
                            <Card.Body>

                            </Card.Body>
                            <Card.Footer>
                            <Card.Title>{title}</Card.Title>
                                <Card.Subtitle mb="2" text="muted">${price}</Card.Subtitle>
                                <Card.Text>{category}</Card.Text>
                                <Card.Link href="#">  <Link to={`/product/${id}`}>     <Button  type="primary" block> Add to Cart</Button></Link></Card.Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                    );
        }



    })

    return (<>

        <Container>
        <Row justifyContent="md-center">

          <Col col="col md-auto">
          <Button type="primary"  onClick={() => setFilter('')} style={{margin:'5px'}}>All</Button>
          <Button type="primary"  onClick={() => setFilter("men's clothing")} style={{margin:'5px'}}>men's clothing</Button>
          <Button type="primary"  onClick={() => setFilter("women's clothing")} style={{margin:'5px'}} >women's clothing </Button>
          <Button type="primary"  onClick={() => setFilter("jewelery")} style={{margin:'5px'}} >jewelery</Button>
          <Button type="primary"  onClick={() => setFilter('electronics')} style={{margin:'5px'}}>electronics</Button>
          </Col>

        </Row>

      </Container>
        <br/>
        <br/>
        <br/>

        <Container>
            <Row>

                {renderList}
            </Row>
        </Container>
    </>

    );
};

export default ProductComponent;