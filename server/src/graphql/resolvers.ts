import {
  getCharacterList,
  Character,
  getCharacter,
  insertCharacter,
  deleteCharacter,
  updateCharacter,
  CharacterEdit,
  getLocations,
  Location,
} from '../db';

interface saveCharacterArgs {
  character: CharacterEdit;
}

export const resolvers = {
  Query: {
    characters: async (): Promise<Character[]> => {
      const characters = await getCharacterList();
      return characters;
    },
    character: async (parent, args): Promise<Character> => {
      const character = await getCharacter(args.id);
      return character;
    },
    characterLocation: async (): Promise<Location[]> => {
      const location = await getLocations();
      return location;
    },
  },

  Mutation: {
    deleteCharacter: async (parent, args): Promise<boolean> => {
      return await deleteCharacter(args.id);
    },

    saveCharacter: async (
      parent,
      args: saveCharacterArgs
    ): Promise<boolean> => {
      if (args.character.id) {
        await updateCharacter(args.character);
      } else {
        await insertCharacter(args.character);
      }
      return true;
    },
  },
};
