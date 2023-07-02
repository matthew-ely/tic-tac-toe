import React from "react";
import Modal from 'react-modal';

interface ModalProps {
    isShowing: boolean
    toggleModal: (value: boolean) => void
}

const WinModal = ({isShowing, toggleModal}: ModalProps) => {
    const customStyles = {
        content: {
            bottom: "auto",
            marginRight: "48%",
            transform: "translate(50%, 50%)",
            maxHeight: "90vh",
            maxWidth: "50%",
        },
    };


    return (
        <div>
            <Modal
                isOpen={isShowing}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <div className="flex flex-col justify-between items-center text-center w-full h-48">
                    <p className="text-black text-2xl mt-5">THREE IN A ROW!</p>
                    <div className="p-2 my-3 bg-red-600 rounded-md shadow-md">
                        <button onClick={() => toggleModal(false)}>Close</button>
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default WinModal;