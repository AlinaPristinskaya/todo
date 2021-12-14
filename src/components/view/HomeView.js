import React from 'react';
import{useState} from 'react';
import IconButton from '../IconButton/iconButton';
import { ReactComponent as AddIcon } from '../../icons/add.svg';
import Modal from '../Modal/Modal'

const HomeView = () => {

  const[showModal,setShowModal]=useState(false);

  
  const toggleModal = () => {
    setShowModal(!showModal)
  };

  return (<>
    <div className="HomeView">
      <h1 className="HomeView-title">
        Добро пожаловать
        <span role="img" aria-label="face emoji">
          🤓
        </span>
      </h1>
    </div>
    <IconButton onClick={toggleModal} aria-label="Добавить todo">
    <AddIcon width="40" height="40" fill="#fff" />
  </IconButton>
  {showModal && (
          <Modal onClose={toggleModal}>
           
          </Modal>
        )}</>
  );
};

export default HomeView;