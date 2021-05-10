export interface CharacterCollectionEntityApi {
  id: string;
  type: string;
  name: string;
  created: string;
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
