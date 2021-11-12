import React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceArrayField,
  TextField,
  SingleFieldList
} from "react-admin";

interface Props {}

export const SubjectCreate = (props: any) => {
  return (
    <Create title="Subject" {...props}>
      <SimpleForm redirect="/subjects">
        <TextInput source="name" />
      </SimpleForm>
    </Create>
  );
};

export const SubjectEdit = (props: any) => {
  return (
    <Edit title="Subject" {...props}>
      <SimpleForm redirect="/subjects">
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <ReferenceArrayField label='curriculums' source="curriculumIds" reference="curriculums">
          <SingleFieldList>
            <TextField source="name" />
          </SingleFieldList>
        </ReferenceArrayField>
      </SimpleForm>
    </Edit>
  );
};
