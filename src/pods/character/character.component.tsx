import React from 'react';
import { Formik, Form } from 'formik';
import {
  TextFieldComponent,
  SelectComponent,
} from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from './character.validations';
import { CharacterEntityVM } from './character.vm';
import * as classes from './character.styles';
import { Lookup  } from 'common/models';


interface Props {
  character: CharacterEntityVM;
  charactersLocation: Lookup[];
  onSave: (character: CharacterEntityVM) => void;

}


export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, charactersLocation, onSave } = props;

  return (
    <Formik
      onSubmit={onSave}
      initialValues={character}
      enableReinitialize={true}
      validate={formValidation.validateForm}
    >
      {() => (
        <Form className={classes.root}>
          <TextFieldComponent name="name" label="Name" />
          <TextFieldComponent name="species" label="Species" />
          <SelectComponent name="location" label="Location" items={charactersLocation} />
          <TextFieldComponent
            name="bestSentences"
            label="Best Sentences"
            multiline={true}
            rows={3}
            rowsMax={5}
          />
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </Form>
      )}
    </Formik>
  );
};
