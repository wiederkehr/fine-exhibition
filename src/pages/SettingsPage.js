import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ListGroup, ListHeader, List, ListLinkItem, ListLinkSwitchItem } from '../components/List';

import './SettingsPage.css';

class SettingsPage extends Component {

  render() {
    return (
        <LayoutContainer>
          <Header left={{to:'/profile', label:'Back'}}>{this.props.route.title}</Header>
          <LayoutContent className="SettingsPageContent">
            <ListGroup>
              <ListHeader>Notifications</ListHeader>
              <List>
                <ListLinkSwitchItem to='settings/notifications' status='on'>Scheduled Notifications</ListLinkSwitchItem>
              </List>
              <ListHeader>References</ListHeader>
              <List>
                <ListLinkItem to='settings/about'>About</ListLinkItem>
                <ListLinkItem to='settings/disclaimer'>Disclaimer</ListLinkItem>
                <ListLinkItem to='settings/imprint'>Imprint</ListLinkItem>
              </List>
              <ListHeader>Data</ListHeader>
              <List>
                <ListLinkItem to='settings/import'>Import</ListLinkItem>
                <ListLinkItem to='settings/export'>Export</ListLinkItem>
              </List>
            </ListGroup>
          </LayoutContent>
          <Footer border/>
        </LayoutContainer>
    );
  }
}

export default SettingsPage;
