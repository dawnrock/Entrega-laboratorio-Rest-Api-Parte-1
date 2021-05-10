import * as React from 'react';
import { CharacterCollectionEntityVm } from './character-collection.vm';
import { CharacterCollectionCard } from './components/character-collection-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterCollectionEntityVm[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onEdit, onDelete } = props;

  return (
    <div className={classes.root}>

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCollectionCard character={character} onEdit={onEdit} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};
