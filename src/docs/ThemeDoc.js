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
              {name:"light-blue", value:'#95ACCB'},
              {name:"dark-blue", value:'#546D8E'}
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
        <h3>Roboto Mono Regular: Body content</h3>
        <p style={{fontFamily: 'Roboto Mono Regular'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h3>Roboto Mono Medium: Headlines and interactive elements</h3>
        <p style={{fontFamily: 'Roboto Mono Medium'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h2>Icons</h2>
        <p>Here we will document the iconography.</p>
      </Page>
);
