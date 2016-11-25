import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { Swiper } from '../components/Swiper';

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

const LayoutContentSwiper = {
  overflow: scroll,
  flexGrow: 1,
  padding: 0
}

const SwiperBlock1 = {
  background: '#95ACCB',
  height: '510px',
}
const SwiperBlock2 = {
  background: '#546D8E',
  height: '510px',
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
    <h2>Application Layout with Swiper</h2>
    <ReactSpecimen noSource={true}>
      <div style={LayoutViewport}>
        <Layout>
          <LayoutContainer>
            <LayoutHeader>
              Header
            </LayoutHeader>
            <div style={LayoutContentSwiper}>
              <Swiper>
                <div style={SwiperBlock1}>Swiper Block #1</div>
                <div style={SwiperBlock2}>Swiper Block #2</div>
              </Swiper>
            </div>
            <LayoutFooter>
              Footer
            </LayoutFooter>
          </LayoutContainer>
        </Layout>
      </div>
    </ReactSpecimen>
  </Page>
);
