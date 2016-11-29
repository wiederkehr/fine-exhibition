import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ListGroup, ListHeader, List, ListLinkItem, ListSwitchItem, ListLinkSwitchItem } from '../components/List';

import './SettingsPage.css';

class SettingsPage extends Component {

  render() {
    return (
      <LayoutContainer>
        <Header left={{to:'/profile', label:'Back'}}>{this.props.route.title}</Header>
        <LayoutContent className="SettingsPageContent">
          <ListGroup>
            <ListHeader>Interface</ListHeader>
            <List>
              <ListSwitchItem state='on'>Diamonds</ListSwitchItem>
              <ListSwitchItem state='off'>Clouds</ListSwitchItem>
              <ListSwitchItem state='off'>Circles</ListSwitchItem>
            </List>
            <ListHeader>Notifications</ListHeader>
            <List>
              <ListLinkSwitchItem to='settings/notifications' state='on'>Scheduled Notifications</ListLinkSwitchItem>
            </List>
            <ListHeader>References</ListHeader>
            <List>
              <ListLinkItem to='settings/about'>About</ListLinkItem>
              <ListLinkItem to='settings/disclaimer'>Disclaimer</ListLinkItem>
              <ListLinkItem to='settings/imprint'>Imprint</ListLinkItem>
            </List>
          </ListGroup>
        </LayoutContent>
        <Footer/>
      </LayoutContainer>
    );
  }
}

export default SettingsPage;
