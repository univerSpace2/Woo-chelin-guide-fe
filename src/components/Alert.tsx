import { useState } from "react";

interface AlertProps {
    message: string;
    onConfirm: () => void;
    show:boolean
}

const Alert: React.FC<AlertProps> = ({ message, onConfirm, show}) => {

    const handleConfirm = () => {
        onConfirm();
    };

    return (
        <>
            {show && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur">
                    <div className="bg-white rounded-lg shadow-lg p-4">
                        <p className="text-gray-800 text-lg mb-4">{message}</p>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={handleConfirm}
                        >
                            확인
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Alert;