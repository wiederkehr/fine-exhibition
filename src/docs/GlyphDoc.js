import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { Glyph, GlyphContainer } from '../components/Glyph';

export default () => (
  <Page>
    <h2>Glyph</h2>
    <ReactSpecimen noSource={true}>
      <Glyph
        arousal={4}
        conduciveness={4}
        controllability={4}
        intensity={4}
        valence={4}
      />
    </ReactSpecimen>
    <h2>Glyph with Date and Emotion</h2>
    <ReactSpecimen noSource={true}>
      <GlyphContainer
        date='2016-11-24'
        emotion='Joy'
        arousal={4}
        conduciveness={4}
        controllability={4}
        intensity={4}
        valence={4}
      />
    </ReactSpecimen>
  </Page>
);
