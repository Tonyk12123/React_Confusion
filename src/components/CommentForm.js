// import React, { Component } from 'react';
// import { Button, Modal, ModalHeader, ModalBody, Label, Row, Col } from 'reactstrap';
// import { Control, Localform, Errors } from 'react-redux-form';

// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => val && (val.length >= len);
// class CommentForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             isModal0pen: false
//         };
//         this.toggleModal = this.toggleModal.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     toggleModal() {
//         this.setState({
//             isModalOpen: !this.state.isModalOpen
//         });
//     }
//     handleSubmit(values) {
//         this.toggleModal();
//         this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
//     }
//     render() {
//         return (
//             <div >
//                 <Button outline onClick={this.toggleModal}>
//                     <span className="fa fa-pencil fa-lg" ></span > Submit Comment
//                 </Button>
//                 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
//                     <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
//                     < ModalBody >
//                         <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
//                             <Row className="form-group">
//                                 <Label htmlFor="rating" md={12}>Rating</Label>
//                                 <Col md={12}>
//                                     <Control.select
//                                         model=".rating"
//                                         name="rating"
//                                         className="form-control"
//                                         validators={{
//                                             required
//                                         }}>