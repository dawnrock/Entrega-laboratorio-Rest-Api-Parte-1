import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  character: apiModel.CharacterEntity
): viewModel.CharacterEntityVM => ({
  ...character,
  id: character.id,
  name: character.name,
  episode: character.episode,
  image: character.image,
  species: character.species,
  created: character.created,
  bestSentences: character.bestSentences,
  gender: character.gender,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.CharacterEntityVM
): apiModel.CharacterEntity =>
  (({
    ...character,
    id: character.id,
    name: character.name,
    episode: character.episode,
    image: character.image,
    species: character.species,
    created: character.created,
    bestSentences: character.bestSentences,
    gender: character.gender,
  } as unknown) as apiModel.CharacterEntity);
