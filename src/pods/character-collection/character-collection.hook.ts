import * as React from 'react';
import { CharacterCollectionEntityVm } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from 'common/mappers';

export const useCharacterCollectionHook = () => {
  const [characterCollection, setCharacterCollection] = React.useState<CharacterCollectionEntityVm[]>(
    []
  );

  const loadCharacterCollection = () => {
    getCharacterCollection().then((result) =>
    setCharacterCollection(mapToCollection(result, mapFromApiToVm))
    ).catch(error => {
      alert(error + " TONTACO")
    });
  };

  return { characterCollection, loadCharacterCollection };
};
