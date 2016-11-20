import React from 'react';
import { Page, ReactSpecimen } from 'catalog';

import { Layout, LayoutContainer, LayoutContent, LayoutHeader, LayoutFooter } from '../components/Layout';

const LayoutViewport = {
  height: '667px',
  width: '375px',
  overflow: 'auto'
}

const ContentBlock1 = {
  backgroundColor: '#95ACCB',
  height: '500px'
}

const ContentBlock2 = {
  backgroundColor: '#546D8E',
  height: '500px'
}


export default () => (
  <Page>
    <h2>Application Layout</h2>
    <ReactSpecimen noSource={true}>
      <div style={LayoutViewport}>
        <Layout>
          <LayoutContainer>
            <LayoutHeader>
              Header
            </LayoutHeader>
            <LayoutContent>
              <div style={ContentBlock1}>Content Block #1</div>
              <div style={ContentBlock2}>Content Block #2</div>
            </LayoutContent>
            <LayoutFooter>
              Footer
            </LayoutFooter>
          </LayoutContainer>
        </Layout>
      </div>
    </ReactSpecimen>
  </Page>
);
