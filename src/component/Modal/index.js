import React from 'react';
import './index.css'
const Modal = (props) => {
    const { modalshow, modalTitle, children } = props
    return (
        <>
            {modalshow ? (<div className="modal">
                <div className="inner">
                    <div className="modal-header"><span >{modalTitle}</span></div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>) : ""}
        </>
    );
}

export default Modal; 