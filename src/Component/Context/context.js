import { createContext, useState } from "react";

const Context = createContext();

export const Provider = ({ children }) => {
    const [message, setMessage] = useState(''),
        [visible, setVisible] = useState(false),
        [paymentStatus, setPaymentStatus] = useState(0),
        [totalInfo, setTotalInfo] = useState({
            total: "",
            adress: ""
        }),
        [toastify, setToastify] = useState(false);

    const value = {
        message,
        setMessage,
        visible,
        setVisible,
        paymentStatus,
        setPaymentStatus,
        totalInfo,
        setTotalInfo,
        toastify,
        setToastify,
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export default Context;