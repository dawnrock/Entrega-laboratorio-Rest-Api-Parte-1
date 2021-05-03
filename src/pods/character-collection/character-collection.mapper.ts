import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  characterCollection: apiModel.CharacterCollectionEntityApi
): viewModel.CharacterCollectionEntityVm => ({
  id: characterCollection.id,
  image: `${process.env.BASE_PICTURES_URL}/${characterCollection.thumbNailUrl}`,
  name: characterCollection.name,
  episode: characterCollection.episode,
  species: characterCollection.species,
  created: characterCollection.created,
  bestSentences: characterCollection.bestSentences
});
