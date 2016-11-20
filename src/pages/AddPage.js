import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Form from '../components/Form';

import './AddPage.css';

class EditPage extends Component {

  constructor(props) {
    super(props);

    this.state={
    }

  };

  render() {
    return (
      <LayoutContainer>
        <Header>Edit</Header>
        <LayoutContent className="AddPageContent">
          <Form />
        </LayoutContent>
        <Footer/>
      </LayoutContainer>
    );
  }
}

export default EditPage;
