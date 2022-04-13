import { Component, ComponentInterface, h } from '@stencil/core';

@Component({
  tag: 'modal-login',
  styleUrl: 'modal-login.css'
})
export class ModalLogin implements ComponentInterface {
  render() {
      return (<ion-content>LOGIN HERE</ion-content>);
  }
}