import React from 'react';
import { Page, ReactSpecimen } from 'catalog';
import { Glyph, GlyphContainer } from '../components/Glyph';

export default () => (
  <Page>
    <h2>Fixed Size Glyph</h2>
    <ReactSpecimen noSource={true}>
      <Glyph
        arousal={3}
        conduciveness={3}
        controllability={3}
        intensity={3}
        valence={3}
        width={100}
      />
    </ReactSpecimen>
    <h2>Flexible Size Glyph</h2>
    <ReactSpecimen noSource={true}>
      <Glyph
        arousal={4}
        conduciveness={4}
        controllability={4}
        intensity={4}
        valence={4}
        width='100%'
      />
    </ReactSpecimen>
    <h2>Glyph with Date and Emotion</h2>
    <ReactSpecimen noSource={true}>
      <GlyphContainer
        date='2016-11-24'
        emotion='Joy'
        arousal={5}
        conduciveness={5}
        controllability={5}
        intensity={5}
        valence={5}
      />
    </ReactSpecimen>
  </Page>
);
