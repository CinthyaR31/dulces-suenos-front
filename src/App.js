import React from "react";
import "./App.css";

//Components
import Home from "./pages/home";
import axios from "axios";
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

require('dotenv').config()



function App() {
  return (
    <div className="App">
      <Home />

    </div>
  );
}

export default App;