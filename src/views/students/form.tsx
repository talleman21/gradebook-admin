import React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";
import { stripId } from "../../helpers";


export const StudentEdit = (props: any) => (
  <Edit {...props} transform={stripId}>
    <SimpleForm redirect="/students">
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <ReferenceArrayInput label='Curriculums' source="curriculumIds" reference='curriculums'>
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Edit>
);

export const StudentCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm redirect='/students'>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);

