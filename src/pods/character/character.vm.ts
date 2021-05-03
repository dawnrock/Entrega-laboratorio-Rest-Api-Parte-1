export interface CharacterEntityVM {
  id: number;
  image: string;
  name: string;
  episode: string[];
  species: string;
  created: string;
  bestSentences: string;
  gender: string;
  location:string;
}

export const createEmptyCharacter = (): CharacterEntityVM => ({
  id: -1,
  name: '',
  image: '',
  episode: [],
  species: '',
  created: '',
  bestSentences: '',
  gender:'',
  location:'',
});
