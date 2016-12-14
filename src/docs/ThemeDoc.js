import React from 'react';
import { Page, ColorPaletteSpecimen } from 'catalog';

export default () => (
  <Page>
    <h2>Primary Colors</h2>
    <ColorPaletteSpecimen
      colors={
        [
          {name:"bright-blue", value:'#D9E9FF'},
          {name:"highlight-blue", value:'#B8CBE6'},
          {name:"light-blue", value:'#99AECC'},
          {name:"midlight-blue", value:'#7D93B3'},
          {name:"mid-blue", value:'#637A99'},
          {name:"middark-blue", value:'#4C627F'},
          {name:"dark-blue", value:'#384B66'},
          {name:"night-blue", value:'#26354C'},
        ]
      }
    />
    <h2>Monchrome Colors</h2>
      <ColorPaletteSpecimen
        colors={
          [
            {name:"white", value:'#fff'},
            {name:"bright-grey", value:'#f8f8f8'},
            {name:"light-grey", value:'#f0f0f0'},
            {name:"midlight-grey", value:'#ddd'},
            {name:"mid-grey", value:'#ccc'},
            {name:"middark-grey", value:'#999'},
            {name:"dark-grey", value:'#333'},
            {name:"night-grey", value:'#222'}
          ]
        }
      />
    <h2>Fonts</h2>
    <h3>Karla Regular: Body content</h3>
    <p style={{fontFamily: 'Karla', fontWeight: '400'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <h3>Karla Bold: Headlines and interactive elements</h3>
    <p style={{fontFamily: 'Karla', fontWeight: '700'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <h2>Icons</h2>
    <p>Here we will document the iconography.</p>
  </Page>
);
