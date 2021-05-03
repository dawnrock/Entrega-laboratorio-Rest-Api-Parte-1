import * as React from 'react';
import { AppLayout } from 'layouts';
import { CharacterCollectionContainer } from 'pods/character-collection';

export const CharacterCollectionScene = () => (
  <AppLayout>
    <h1>Listado de personajes</h1>
    <CharacterCollectionContainer />
  </AppLayout>
);

