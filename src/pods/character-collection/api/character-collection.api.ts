import { CharacterCollectionEntityApi } from './character-collection.api-model';
import { gql } from 'graphql-request';
import { graphQLClient } from 'core/api';

interface GetCharacterCollectionResponse {
  characters: CharacterCollectionEntityApi[];
}

interface DeleteCharacterResponse {
  deleteCharacter: boolean;
}

export const getCharacterCollection = async (): Promise<
  CharacterCollectionEntityApi[]
> => {
  const query = gql`
    query {
      characters {
        id
        name
        location
        species
        thumbNailUrl
        bestSentences
      }
    }
  `;
  const {
    characters,
  } = await graphQLClient.request<GetCharacterCollectionResponse>(query);
  return characters;
};

export const deleteCharacter = async (id: string): Promise<boolean> => {
  const query = gql`
  mutation {
      deleteCharacter(id: "${id}")
    }
  `;

  const {deleteCharacter} = await graphQLClient.request<DeleteCharacterResponse>(query);
  return deleteCharacter;
};
