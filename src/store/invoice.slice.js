import { createSlice } from '@reduxjs/toolkit';


// {
//   id: `${Math.floor(Math.random() * 999999)}`,
//   isOpen: false,
//   currency: '$',
//   currentDate: '',
//   invoiceNumber: 1,
//   dateOfIssue: '',
//   billTo: 'Divyansh',
//   billToEmail: 'div.gyan09@gmail.com',
//   billToAddress: 'div.gyan09@gmail.com',
//   billFrom: 'Jadu',
//   billFromEmail: 'div.gyan09@gmail.com',
//   billFromAddress: 'hhh',
//   notes: '',
//   total: '0.00',
//   subTotal: '0.00',
//   taxRate: '',
//   taxAmmount: '0.00',
//   discountRate: '',
//   discountAmmount: '0.00'
// };
// this.state.items = [
//   {
//     id: 0,
//     name: 'dhoop',
//     description: 'jjj',
//     price: '1.00',
//     quantity: 1
//   }
// ];
const initialState = {
  // invoice of above format
  invoices: [
    {
      id: `457825`,
      currency: '$',
      currentDate: '',
      invoiceNumber: 1,
      dateOfIssue: '',
      billTo: 'Shristi',
      billToEmail: 'shristisharan05@gmail.com',
      billToAddress: 'hhh',
      billFrom: 'Jadu',
      billFromEmail: 'shristisharan05@gmail.com',
      billFromAddress: 'hhh',
      notes: '',
      total: '1.00',
      subTotal: '1.00',
      taxRate: '',
      taxAmmount: '0.00',
      discountRate: '',
      discountAmmount: '0.00',
      items: [
        {
          id: 0,
          name: 'dhoop',
          description: 'jjj',
          price: '1.00',
          quantity: 1,
        },
      ]
    },
  ],
  selectedInvoice: null,
};

const invoicesSlice = createSlice({
  name: 'invoices',
  initialState,
  reducers: {
    addInvoice: (state, action) => {
      // console.log(action.payload, 'action.payload');
      state.invoices.push(action.payload);
    },
    editInvoice: (state, action) => {
      const { id, newUpdatedState } = action.payload;
      console.log(action.payload, 'id');
      const invoice = state.invoices.find((invoice) => invoice.id === action.payload.id);
      const index = state.invoices.findIndex((invoice) => invoice.id === action.payload.id);

      if (invoice) {
        // update the invoices array
      
        state.invoices[index] = action.payload;
        console.log(state.invoices[index], 'state.invoices[index]');
      }
    },
    deleteInvoice: (state, action) => {
      const id  = action.payload;
      console.log(action.payload, 'id');
      state.invoices = state.invoices.filter((invoice) => invoice.id !== id);
    },
    setSelectedInvoice: (state, action) => {
      // console.log(action.payload, 'idfffffffffffffffffffffff');
      const id  = action.payload;
      state.selectedInvoice = action.payload;
    },
      

  },
});

export const { addInvoice, editInvoice, deleteInvoice, setSelectedInvoice } = invoicesSlice.actions;

export default invoicesSlice.reducer;
