import { CharacterEntity } from './character.api-model';
import { Lookup } from 'common/models'
import Axios from 'axios';

const collectionUrl = '/api/characters';
const characterLocationUrl = '/api/charactersLocation';

export const getCharacter = async (id: number): Promise<CharacterEntity> => {
  const { data } = await Axios.get<CharacterEntity>(`${collectionUrl}/${id}`);
  return data;
};

export const getCharacterLocation = async (): Promise<Lookup[]> => {

  const { data } = await Axios.get<Lookup[]>(characterLocationUrl)
  return data;
};

export const saveCharacter = async (character: CharacterEntity): Promise<boolean> => {

  if(character.id) {
    await Axios.put<CharacterEntity>(`${collectionUrl}/${character.id}`, character);
  } else {
    await Axios.post<CharacterEntity>(collectionUrl, character)
  }

  return true;
};
