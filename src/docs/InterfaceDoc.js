import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import Button from '../components/Button';
import Slider from '../components/Slider';
import Header from '../components/Header';
import BackLink from '../components/BackLink';


export default () => (
      <Page>
        <h2>Header</h2>
        <ReactSpecimen  noSource={true} span='3'>
          <Header back={false} title='Title'/>
        </ReactSpecimen>
        <ReactSpecimen  noSource={true} span='3'>
          <Header back={true} title='Title With Button'/>
        </ReactSpecimen>
        <h3>Header Actions</h3>
        <ReactSpecimen  noSource={true} span='3'>
          <BackLink to="/backlink"/>
        </ReactSpecimen>
        <h2>Button</h2>
        <ReactSpecimen  noSource={true} span='3'>
          <Button type="button" label='Button' />
        </ReactSpecimen>
        <h2>Slider</h2>
        <ReactSpecimen  noSource={true} span='3' state={{value: 3}}>
          <Slider name="Slider"
                  value="3"
                  onChange={() => {}} />
        </ReactSpecimen>
      </Page>
);
