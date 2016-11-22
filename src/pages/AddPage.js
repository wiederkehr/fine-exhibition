import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import AddForm from '../components/Form';

import './AddPage.css';

class AddPage extends Component {

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
          <AddForm />
        </LayoutContent>
        <Footer/>
      </LayoutContainer>
    );
  }
}

export default AddPage;
