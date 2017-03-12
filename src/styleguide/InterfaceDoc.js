import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import { Button } from '../components/Button';
import { Slider } from '../components/Slider';
import { Switch } from '../components/Switch';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Pagination } from '../components/Pagination';


export default () => (
  <Page>
    <h2>Header</h2>
    <ReactSpecimen noSource span={3}>
      <Header>Title</Header>
    </ReactSpecimen>
    <ReactSpecimen noSource span={3}>
      <Header left={{to:"/", label:"Back"}} right={{to:"/", label:"Done"}}>Title</Header>
    </ReactSpecimen>
    <h2>Footer</h2>
    <ReactSpecimen noSource span={3}>
      <Footer />
    </ReactSpecimen>
    <h2>Pagination</h2>
    <ReactSpecimen noSource span={3}>
      <Pagination
        forward={{onClick:function(){ console.log('Forward');}}}
        backward={{onClick:function(){ console.log('Backward');}}}
        dots={['one','two','three']}
        currentDot={1}
        transparent={false}
      />
    </ReactSpecimen>
    <h2>Button</h2>
    <ReactSpecimen noSource span={3}>
      <Button type="button">Button</Button>
    </ReactSpecimen>
    <h2>Switch</h2>
    <h3>Switch Active and Passive</h3>
    <ReactSpecimen noSource span={3}>
      <Switch status="on">Active</Switch>
    </ReactSpecimen>
    <ReactSpecimen noSource span={3}>
      <Switch status="off" disabled>Passive</Switch>
    </ReactSpecimen>
    <h3>Switch Disabled</h3>
    <ReactSpecimen noSource span={3}>
      <Switch status="disabled">Disabled</Switch>
    </ReactSpecimen>
    <h2>Slider</h2>
    <ReactSpecimen noSource span={3} dark>
      <Slider name="Slider"
              value="3"
              onChange={() => {}} />
    </ReactSpecimen>
  </Page>
);
