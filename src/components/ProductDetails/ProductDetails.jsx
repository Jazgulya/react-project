import { Box, Breadcrumbs, Link, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productsContext } from '../../contexts/productsContext';
import Loader from '../Loader/Loader';

const ProductDetails = () => {
    const {getOneProduct, oneProduct} = useContext(productsContext)
    const {id} = useParams()
    useEffect(()=> {
        getOneProduct(id)
    }, [])
    return (
        <Container>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Shop
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/products"
                >
                    Products
                </Link>
                <Typography color="text.primary">Info</Typography>
            </Breadcrumbs>
            {oneProduct ? <Box display={"flex"} flexDirection={"column"} alignItems={"center"} paddingTop={'50px'} textAlign={"center."}>
                <Paper style={{width: "40%"}} elevation={3}>
                    <img src={oneProduct.image} width="100%"  alt='product-img'/>
                </Paper>
                <Paper>
                    <Typography variant="h4">{oneProduct.title}</Typography>
                    <Typography style={{maxWidth: "400px"}} variant="h5">{oneProduct.description}</Typography>
                    <Typography variant="h4">{oneProduct.price}</Typography>
                </Paper>
                
            </Box> : <Loader />}
            
        </Container>
    );
};

export default ProductDetails;
