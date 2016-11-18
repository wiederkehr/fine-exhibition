import React from 'react';
import { Page, ColorPaletteSpecimen } from 'catalog';

export default () => (
      <Page>
        <h2>Primary Colors</h2>
        <ColorPaletteSpecimen
          horizontal={true}
          colors={
            [
              {name:"white", value:'#fff'},
              {name:"light-turquois", value:'#4AD9E2'},
              {name:"dark-turquois", value:'#2FA3AA'}
            ]
          }
        />
        <h2>Secondary Colors</h2>
          <ColorPaletteSpecimen
            colors={
              [
                {name:"light-grey", value:'#eee'},
                {name:"mid-grey", value:'#ddd'},
                {name:"dark-grey", value:'#ccc'}
              ]
            }
          />
        <h2>Fonts</h2>
        <p>Here we will document the typography.</p>
        <h2>Icons</h2>
        <p>Here we will document the iconography.</p>
      </Page>
);
