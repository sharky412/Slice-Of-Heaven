

import axios from 'axios';
import { createError, createUrl } from './utils';

export async function placeOrder(items, totalAmount) {
    try 
    {
        const url = createUrl('order/');
      
        const headers = {
            headers: {
                token: sessionStorage['token']
            },
        }
        const body ={
            totalAmount,
            items: items.map((item) =>{
                return {
                    pizzaId: item.id,
                    quantity: item.quantity,
                    totalAmount: (item.quantity) * (item.price),
                }
                } )
        }
        const response = await axios.post(url ,body, headers)
        return response.data;
    } 
    catch (ex) {
        
        console.error('Error placing order:', ex);
        return createError(ex);
    }
}

export async function deleteOrder(orderId) {
    try {
        const url = createUrl(`order/${orderId}`);
      
        const headers = {
            headers: {
                token: sessionStorage['token']
            },
        }

        const response = await axios.delete(url, headers);
        return response.data;
    } catch (ex) {
        console.error('Error deleting order:', ex);
        return createError(ex);
    }
}


export async function getAllOrder() {
    try {
        const url = createUrl('order/');
  
        const headers = {
            headers: {
                token: sessionStorage['token']
            },
        }
        const response = await axios.get(url, headers);
        console.log(response)

        return response.data;
    } catch (ex) {
       
        console.error('Error fetching orders:', ex);
        return createError(ex);
    }
}

export async function getOrderDetails(orderId) {
    try {
        const url = createUrl(`order/details/${orderId}`);
        const headers = {
            headers: {
                token: sessionStorage['token'],
            },
        };
        const response = await axios.get(url, headers);
        return response.data;
    } catch (ex) {
        console.error("Error fetching order details:", ex);
        return createError(ex);
    }
}