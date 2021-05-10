export interface CharacterEntityVM {
  id: string;
  image: string;
  type:string;
  name: string;
  episode: string[];
  species: string;
  created: string;
  bestSentences: string;
  gender: string;
  location:string;
}

export const createEmptyCharacter = (): CharacterEntityVM => ({
  id: '',
  name: '',
  image: '',
  type:'',
  episode: [],
  species: '',
  created: '',
  bestSentences: '',
  gender:'',
  location:'',
});
