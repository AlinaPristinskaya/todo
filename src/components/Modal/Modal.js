import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';
//import FormAddTask from '../view/FormAddTask'
import FormAddPerson from '../view/FormAddPerson'
const modalRoot = document.querySelector('#root-modal');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    // console.log('Кликнули в бекдроп');

    // console.log('currentTarget: ', event.currentTarget);
    // console.log('target: ', event.target);

    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div  className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content" ><FormAddPerson onSave={this.toggleModal}/></div>
      </div>,
      modalRoot,
    );
  }
}