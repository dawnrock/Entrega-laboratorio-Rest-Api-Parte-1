import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from './api';
import { CharacterEntityVM, createEmptyCharacter } from './character.vm';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { Lookup } from 'common/models';
import { CharacterComponent } from './character.component';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<CharacterEntityVM>(createEmptyCharacter());
  const [charactersLocation, setLocation] = React.useState<Lookup[]>([]);
  const { id } = useParams();
  const history = useHistory();

  const handleLoadCharacterLocation = async () => {
    const apiCharacterLocation = await api.getCharacterLocation();
    setLocation(apiCharacterLocation);
  };

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
    handleLoadCharacterLocation();
  }, []);

  const handleSave = async (character: CharacterEntityVM) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      history.goBack();
    } else {
      alert('Error on save character');
    }
  };


  return <CharacterComponent character={character} charactersLocation={charactersLocation} onSave={handleSave}/>;
};
