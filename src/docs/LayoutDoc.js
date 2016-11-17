import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import './Layout.css';

export default () => (
  <Page>
    <h2>Application Layouts</h2>
    <ReactSpecimen>
      <div className="Viewport">
        <div className="Layout">
          <div className="LayoutContainer">
            <div className="LayoutBar LayoutHeader">
              Header
            </div>
            <div className="LayoutContent">
              <div className="ContentBlock-1">Content Block #1</div>
              <div className="ContentBlock-2">Content Block #2</div>
            </div>
            <div className="LayoutBar LayoutFooter">
              Footer
            </div>
          </div>
        </div>
      </div>
    </ReactSpecimen>
  </Page>
);
