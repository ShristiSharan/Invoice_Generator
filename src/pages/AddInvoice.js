import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InvoiceForm from '../components/InvoiceForm';



const AddInvoice = () => {


    const dispatch = useDispatch();
    const selecctor = useSelector(state => state.invoiceReducer);
    console.log(selecctor, 'selecctor');

    return (
        <div>
            <InvoiceForm dispatch = {dispatch}/>
        </div>
    )
}

export default AddInvoice


