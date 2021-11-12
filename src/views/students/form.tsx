import React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SingleFieldList,
} from "react-admin";
import { stripId } from "../../helpers";

interface Props {}

const transformer = (data:any) => {
  console.log(data)
}

export const StudentEdit = (props: any) => (
  <Edit {...props} transform={transformer}>
    <SimpleForm redirect="/students">
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <ReferenceArrayInput source="curriculumIds" reference='curriculums'>
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

