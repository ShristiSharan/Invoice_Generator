import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InvoiceModal from './InvoiceModal';
import { deleteInvoice, setSelectedInvoice } from '../store/invoice.slice';


const InvoiceList = () => {
    const navigation = useNavigate();
    const dispatch = useDispatch();
    const invoicesData = useSelector(state => state.invoice);
    // console.log(invoicesData, 'invoicesData');
  const [invoices, setInvoices] = useState(invoicesData.invoices);
  const [showModal, setShowModal] = useState(false);
  const [viewInvoice, setViewInvoice] = useState(null);
useEffect(() => {
    setInvoices(invoicesData.invoices);
}, [invoicesData.invoices]);
  const handleView = (id, event) => {
    // const id = invoiceToView.id;
    // console.log(invoiceToView, 'id');
    const invoice = invoices.find((invoice) => invoice.id === id);
    setViewInvoice(invoice);
    setShowModal(true);
    };


  const handleDeleteInvoice = (id,event) => {
    console.log(id, 'idgggggggggggggggggg');
    dispatch(deleteInvoice(id));
  };
  const editInvoice = (id, event) => {
    console.log(id, 'idfuck');
    dispatch(setSelectedInvoice(id));
    navigation(`/edit`);  
    
    };
  return (
    <Container>
      <h1 className="mb-4">Invoices</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {invoices.map((invoice) => (
          <Col key={invoice.id}>
            <Card>
              <Card.Body>
                <Card.Title>Invoice #{invoice.id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {invoice.billTo}
                </Card.Subtitle>
                <Card.Text>
                  Amount: ${invoice.total}
                </Card.Text>
                <div className="d-grid gap-2">
                  <Button variant="primary" size="sm" className="mb-2" onClick={(event) => handleView(invoice.id, event)}>
                    View
                  </Button>
                  <Button variant="warning" size="sm" className="mb-2" onClick={(event)=>editInvoice(invoice.id,event)} >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={(event) => handleDeleteInvoice(invoice.id, event)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {showModal &&  <InvoiceModal   
        showModal={showModal}
        closeModal={() => setShowModal(false)}
        info={viewInvoice}
        items={viewInvoice?.items}
        currency={viewInvoice?.currency}
        subTotal={viewInvoice?.subTotal}
        taxAmount={viewInvoice?.taxAmount}
        discountAmount={viewInvoice?.discountAmount}
        total={viewInvoice?.total}
        />
      }

    </Container>
  );
};

export default InvoiceList;
