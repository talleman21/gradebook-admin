import React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceField,
  TextField
} from "react-admin";
import { stripId } from "../../helpers";

interface Props {}

export const GradeEdit = (props: any) => (
  <Edit {...props} transform={stripId}>
    <SimpleForm redirect="/grades">
      <TextField source="id" />
      <ReferenceField source="assignmentId" reference="assignments">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="studentId" reference="students">
        <TextField source="name" />
      </ReferenceField>
      <TextInput source="grade" />
    </SimpleForm>
  </Edit>
);

export const GradeCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm redirect='/grades'>
      <ReferenceInput source="assignmentId" reference="assignments">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="studentId" reference="students">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="grade" />
    </SimpleForm>
  </Create>
);

