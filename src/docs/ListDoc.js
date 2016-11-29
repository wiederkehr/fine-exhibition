import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { ListGroup, ListHeader, List, ListItem, ListLinkItem, ListSwitchItem, ListLinkSwitchItem } from '../components/List';

export default () => (
  <Page>
    <h2>List Elements</h2>
    <ReactSpecimen noSource={true}>
      <ListGroup>
        <ListHeader>List Item Header</ListHeader>
        <List>
          <ListItem to='/list'>List Item 1.1</ListItem>
          <ListItem to='/list'>List Item 1.2</ListItem>
          <ListItem to='/list'>List Item 1.3</ListItem>
        </List>
        <ListHeader>List Link Item Header</ListHeader>
        <List>
          <ListLinkItem to='/list'>List Link Item 2.1</ListLinkItem>
          <ListLinkItem to='/list'>List Link Item 2.2</ListLinkItem>
          <ListLinkItem to='/list'>List Link Item 2.3</ListLinkItem>
        </List>
        <ListHeader>List Switch Header</ListHeader>
        <List>
          <ListSwitchItem state='off'>List Switch Item 3.1</ListSwitchItem>
          <ListSwitchItem>List Switch Item 3.2</ListSwitchItem>
          <ListSwitchItem>List Switch Item 3.3</ListSwitchItem>
        </List>
        <ListHeader>List Link Switch Header</ListHeader>
        <List>
          <ListLinkSwitchItem state='off'>List Link Switch Item 4.1</ListLinkSwitchItem>
          <ListLinkSwitchItem>List Link Switch Item 4.2</ListLinkSwitchItem>
          <ListLinkSwitchItem>List Link Switch Item 4.3</ListLinkSwitchItem>
        </List>
      </ListGroup>
    </ReactSpecimen>
  </Page>
);
