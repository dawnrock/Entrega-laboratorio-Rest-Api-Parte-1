export interface Character {
  id: number;
  type: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  url: string;
  episode: string[],
  location:string;
  image: string;
  origin: {
    name: string;
    url: string;
  };
  thumbNailUrl: string;
  bestSentences: string;
}

export interface CharacterEdit {
  id: number;
  name: string;
  location: string;
  species: string;
  episode: string[];
  bestSentences: string;
}
