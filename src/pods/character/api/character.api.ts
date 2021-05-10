import { CharacterEntity } from './character.api-model';
import { Lookup } from 'common/models';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';


interface GetCharacterResponse {
  character: CharacterEntity;
}

interface GetLocationResponse {
  characterLocation: Lookup[];
}

interface SaveCharacterResponse {
     saveCharacter: boolean;
}

export const getCharacter = async (id: string): Promise<CharacterEntity> => {
  const query = gql`
    query {
      character(id: "${id}") {
        id
        name
        location
        species
        thumbNailUrl
        bestSentences
      }
    }
  `;
  const { character } = await graphQLClient.request<GetCharacterResponse>(
    query
  );
  return character;
};
export const getCharacterLocation = async (): Promise<Lookup[]> => {
  const query = gql`
    query {
      characterLocation {
        id
        name
      }
    }
  `;
  const { characterLocation } = await graphQLClient.request<GetLocationResponse>(
    query
  );
  return characterLocation;
};

export const saveCharacter = async (
  character: CharacterEntity
): Promise<boolean> => {
  const query = gql`
   mutation($character: CharacterInput!) {
     saveCharacter(character: $character)
   }
 `;
 const { saveCharacter } = await graphQLClient.request<SaveCharacterResponse>(query, {
   character,
 });
 return saveCharacter;
};
