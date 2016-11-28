import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { ListGroup, List, ListItem, ListLink, ListLinkAction, ListHeader, ArrowRight } from '../components/List';

export default () => (
  <Page>
    <h2>List Example</h2>
    <ReactSpecimen noSource={true}>
      <ListGroup>
        <ListHeader>List Header 1.0</ListHeader>
        <List>
          <ListItem to='/list'>List Item 1.1</ListItem>
          <ListItem to='/list'>List Item 1.2</ListItem>
          <ListItem to='/list'>List Item 1.3</ListItem>
        </List>
        <ListHeader>List Header 2.0</ListHeader>
        <List>
          <ListItem>List Item 2.1</ListItem>
          <ListItem>List Item 2.2</ListItem>
          <ListItem>List Item 2.3</ListItem>
          <ListItem>List Item 2.4</ListItem>
          <ListItem>List Item 2.5</ListItem>
          <ListItem>List Item 2.6</ListItem>
        </List>
      </ListGroup>
    </ReactSpecimen>
    <h2>List Header</h2>
    <ReactSpecimen noSource={true}>
      <ListHeader>List Header</ListHeader>
    </ReactSpecimen>
    <h2>List Item</h2>
    <ReactSpecimen noSource={true}>
      <ListItem to='/list'>List Item</ListItem>
    </ReactSpecimen>
    <h3>List Item Active</h3>
    <ReactSpecimen noSource={true}>
      <ListItem to='/list' className='active'>List Item</ListItem>
    </ReactSpecimen>
    <h2>List Link</h2>
    <ReactSpecimen noSource={true}>
      <ListLink to='/list'>List Link</ListLink>
    </ReactSpecimen>
    <h2>List Action Label</h2>
    <ReactSpecimen noSource={true}>
      <ListLinkAction>Action</ListLinkAction>
    </ReactSpecimen>
    <ReactSpecimen noSource={true}>
      <ArrowRight />
    </ReactSpecimen>
  </Page>
);
