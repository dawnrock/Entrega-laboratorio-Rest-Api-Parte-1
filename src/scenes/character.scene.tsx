import * as React from 'react';
import { AppLayout } from 'layouts';
import { CharacterContainer } from 'pods/character';

export const CharacterScene = () => (
  <AppLayout>
    <h1>Detalle</h1>
    <CharacterContainer />
  </AppLayout>
);
