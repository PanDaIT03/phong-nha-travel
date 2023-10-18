import { useContext, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Context from '../Context/context';

function Toastify(params) {
    const context = useContext(Context);
    const { toastify, setToastify } = context;

    console.log(toastify);

    useEffect(() => {
        if (toastify === true) {
            toast.success('Bạn đã nhập mã thành công!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setToastify(false);
        }
    }, [toastify]);

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}

export default Toastify;