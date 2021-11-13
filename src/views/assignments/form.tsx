import React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateInput,
  ReferenceManyField,
  ReferenceField,
  Datagrid,
  TextField,
  required
} from "react-admin";
import { stripId } from "../../helpers";

interface Props {}

export const AssignmentEdit = (props: any) => (
  <Edit {...props} transform={stripId}>
    <SimpleForm redirect="/assignments">
      <TextInput source="id" disabled />
      <ReferenceField source="curriculumId" reference="curriculums">
        <TextField source="name" />
      </ReferenceField>
      <TextInput source="name" />
      <TextInput source="description" />
      <DateInput source="dueDate" />
      <ReferenceManyField
        reference="grades"
        target="assignmentId"
        label="Grades"
      >
        <Datagrid>
          <ReferenceField source='studentId' reference='students'>
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField source='assignmentId' reference='assignments'>
            <TextField source="name" />
          </ReferenceField>
            <TextField source="grade"/>
        </Datagrid>
      </ReferenceManyField>
    </SimpleForm>
  </Edit>
);

export const AssignmentCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm redirect='/assignments'>
      <ReferenceInput source="curriculumId" reference="curriculums" validate={required()}>
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
      <TextInput source="description" />
      <DateInput source="dueDate" />
    </SimpleForm>
  </Create>
);
