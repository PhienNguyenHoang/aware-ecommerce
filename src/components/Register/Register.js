import React, { useState } from "react";

import Modal from 'react-modal';

import './Register.css'

const Register = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    }

  return (
    <div>
        <button onClick={handleOpenModal}>Register</button>
    </div>
  );
};

export default Register;
