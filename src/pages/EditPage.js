import React, { Component } from 'react';
import { LayoutContainer, LayoutContent, LayoutHeader, LayoutFooter } from '../components/Layout';
import Header from '../components/Header';
import Form from '../components/Form';

import './EditPage.css';

class EditPage extends Component {

  constructor(props) {
    super(props);

    this.state={
    }

  };

  render() {
    return (
      <LayoutContainer>
        <LayoutHeader>
          <Header back={true}>Edit</Header>
        </LayoutHeader>
        <LayoutContent className="EditPageContent">
          <Form />
        </LayoutContent>
      </LayoutContainer>
    );
  }
}

export default EditPage;
