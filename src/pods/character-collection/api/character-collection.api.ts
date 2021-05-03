import { CharacterCollectionEntityApi } from './character-collection.api-model';

import Axios from 'axios';

const collectionUrl = '/api/characters';

export const getCharacterCollection = async (): Promise<
CharacterCollectionEntityApi[]
> => {
  const { data } = await Axios.get<CharacterCollectionEntityApi[]>(collectionUrl);
  return data;
};


export const deleteCharacter = async (id: number): Promise<boolean> => {

  await Axios.delete(`${collectionUrl}/${id}`)
  return true;

};
