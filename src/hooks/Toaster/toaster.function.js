import {toast} from "react-toastify";

const config = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true
};

export const successToaster = (title) => {
    return (
        toast.success(title, config)
    );
};

export const errorToaster = (title) => {
    return (
        toast.error(title, config)
    );
};