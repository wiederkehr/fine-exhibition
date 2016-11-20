import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Header } from '../components/Header';
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
        <Header back={true}>Edit</Header>
        <LayoutContent className="EditPageContent">
          <Form />
        </LayoutContent>
      </LayoutContainer>
    );
  }
}

export default EditPage;
