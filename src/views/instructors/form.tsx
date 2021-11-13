import React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceArrayField,
  SingleFieldList,
  TextField,
} from "react-admin";
import { stripId } from "../../helpers";


export const InstructorEdit = (props: any) => (
  <Edit {...props} transform={stripId}>
    <SimpleForm redirect="/instructors">
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <ReferenceArrayField label='Curriculums' source="curriculumIds" reference='curriculums'>
        <SingleFieldList>
          <TextField source="name" />
        </SingleFieldList>        
      </ReferenceArrayField>
    </SimpleForm>
  </Edit>
);

export const InstructorCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm redirect="/instructors">
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);
