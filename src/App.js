import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import InvoiceList from './components/ListInvoice';
import EditInvoice from './components/EditInvoice';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <Provider store={store}>
     
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
      <Navbar/>
        
          <Routes>
            <Route path="/" element={<InvoiceList/>} />
            <Route path="/add" element={<InvoiceForm/>} />
            <Route path="/edit" element={<EditInvoice/>} />
          </Routes>
        {/* <InvoiceForm/> */}
      </Container>
    </div>
    </Provider>
    </BrowserRouter>
  );
}}

export default App;
