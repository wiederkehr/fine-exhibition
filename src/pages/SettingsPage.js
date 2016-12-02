import React, { Component } from 'react';
import { LayoutContainer, LayoutContent } from '../components/Layout';
import { MoveIn } from '../components/MoveIn';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ListGroup, ListHeader, List, ListLinkItem, ListSwitchItem, ListLinkSwitchItem } from '../components/List';

import './SettingsPage.css';

class SettingsPage extends Component {

  constructor(props) {
    super(props)

    this.state={
      diamonds: false,
      clouds: false,
      circles: true,
    }

  }

  render() {
    return (
        <LayoutContainer>
          <Header left={{to:'/profile', label:'Back'}}>{this.props.route.title}</Header>
          <LayoutContent className="SettingsPageContent">
            <ListGroup>
              <ListHeader>Interface</ListHeader>
              <List>
                <ListSwitchItem
                  status={this.state.diamonds}
                  name='diamonds'>Diamonds</ListSwitchItem>
                <ListSwitchItem
                  status={this.state.clouds}
                  name='clouds'>Clouds</ListSwitchItem>
                <ListSwitchItem
                  status={this.state.circles}
                  name='circles'>Circles</ListSwitchItem>
              </List>
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
            </ListGroup>
            <MoveIn>
              <span>MoveIn</span>
            </MoveIn>
          </LayoutContent>
          <Footer/>
        </LayoutContainer>
    );
  }
}

export default SettingsPage;
