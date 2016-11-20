import React, { Component } from 'react';
import { Layout } from '../components/Layout';

class App extends Component {

  constructor(props) {
    super(props);

    this.state={
      user: {
        name: 'Anna',
        bookId: '5820e4e29f61d803006b2093',
        sheetId: 'sheet',
        baseUrl: 'https://api.fieldbook.com/v1/',
        username: process.env.REACT_APP_FIELDBOOK_USER,
        password: process.env.REACT_APP_FIELDBOOK_KEY,
      }
    }

  };

  render() {
    return (
      <Layout>
        {this.props.children}
      </Layout>
    );
  }
}

export default App;
