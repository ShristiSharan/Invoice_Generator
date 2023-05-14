import { configureStore } from "@reduxjs/toolkit"
import invoiceSlice from "./invoice.slice"

export default configureStore({
    reducer: {
        invoice: invoiceSlice
    }
})

