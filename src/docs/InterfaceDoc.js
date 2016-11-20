import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import Button from '../components/Button';
import Slider from '../components/Slider';
import { Header, BackLink} from '../components/Header';
import { Footer, FooterAction} from '../components/Footer';


export default () => (
      <Page>
        <h2>Header</h2>
        <ReactSpecimen  noSource={true} span={3}>
          <Header back={false}>Title</Header>
        </ReactSpecimen>
        <ReactSpecimen  noSource={true} span={3}>
          <Header back={true}>Title</Header>
        </ReactSpecimen>
        <h3>Header Actions</h3>
        <ReactSpecimen  noSource={true} span={3}>
          <BackLink to="/backlink"/>
        </ReactSpecimen>
        <h2>Footer</h2>
        <ReactSpecimen  noSource={true} span={3}>
          <Footer />
        </ReactSpecimen>
        <h2>Button</h2>
        <ReactSpecimen  noSource={true} span={3}>
          <Button type="button" label='Button' />
        </ReactSpecimen>
        <h2>Slider</h2>
        <ReactSpecimen  noSource={true} span={3} state={{value: 3}}>
          <Slider name="Slider"
                  value="3"
                  onChange={() => {}} />
        </ReactSpecimen>
      </Page>
);
