import { CharacterEntity } from './character.api-model';
import { Lookup } from 'common/models';

export const mockCharacterCollection: CharacterEntity[] = [
  {
    id: 179,
    name: 'Jessica',
    status: 'Alive',
    species: 'Cronenberg',
    type: '',
    gender: 'Female',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: "Earth",
    image: 'https://rickandmortyapi.com/api/character/avatar/179.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/4',
      'https://rickandmortyapi.com/api/episode/6',
    ],
    url: 'https://rickandmortyapi.com/api/character/179',
    created: '2017-12-29T18:34:37.806Z',
    thumbNailUrl: '/thumbnails/284304_50_t.jpg',
    bestSentences: '',
  },
  {
    id: 363,
    name: 'Trandor',
    status: 'Alive',
    species: 'Alien',
    type: 'Krootabulan',
    gender: 'Male',
    origin: {
      name: 'Krootabulon',
      url: 'https://rickandmortyapi.com/api/location/45',
    },
    location: "Moon",
    image: 'https://rickandmortyapi.com/api/character/avatar/363.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/30'],
    url: 'https://rickandmortyapi.com/api/character/363',
    created: '2018-01-10T18:54:36.578Z',
    thumbNailUrl: '/thumbnails/284304_50_t.jpg',
    bestSentences: '',
  },
];

export const mockCharacter: Lookup[] = [
  {
    id: 'Jessica',
    name: 'Jessica',
  },
  {
    id: 'Trandor',
    name: 'Trandor',
  },
];
