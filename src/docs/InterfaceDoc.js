import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import { Button } from '../components/Button';
import { Slider } from '../components/Slider';
import { Header, HeaderAction} from '../components/Header';
import { Footer, FooterAction} from '../components/Footer';


export default () => (
  <Page>
    <h2>Header</h2>
    <ReactSpecimen noSource={true} span={3}>
      <Header>Title</Header>
    </ReactSpecimen>
    <ReactSpecimen noSource={true} span={3}>
      <Header left={{to:"/", label:"Back"}} right={{to:"/", label:"Done"}}>Title</Header>
    </ReactSpecimen>
    <h3>Header Actions</h3>
    <ReactSpecimen noSource={true} span={3}>
      <HeaderAction to="/">Action</HeaderAction>
    </ReactSpecimen>
    <h2>Footer</h2>
    <ReactSpecimen noSource={true} span={3}>
      <Footer />
    </ReactSpecimen>
    <h3>Footer Actions</h3>
    <ReactSpecimen noSource={true} span={3} dark>
      <FooterAction to="/">Action</FooterAction>
    </ReactSpecimen>
    <h2>Button</h2>
    <ReactSpecimen noSource={true} span={3}>
      <Button type="button">Button</Button>
    </ReactSpecimen>
    <h2>Slider</h2>
    <ReactSpecimen noSource={true} span={3}>
      <Slider name="Slider"
              value="3"
              onChange={() => {}} />
    </ReactSpecimen>
  </Page>
);
