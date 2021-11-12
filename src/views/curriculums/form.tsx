import React from "react";
import {
  Create,
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceArrayField,
  SingleFieldList,
  TextField
} from "react-admin";
import { stripId } from "../../helpers";

interface Props {}

export const CurriculumEdit = (props: any) => (
  <Edit {...props} transform={stripId}>
    <SimpleForm redirect="/curriculums">
      <TextInput source="id" disabled />
      <TextInput source="name" />
      <ReferenceInput source="subjectId" reference="subjects">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="instructorId" reference="instructors">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceArrayInput label='Students' source="studentIds" reference="students">
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
      <ReferenceArrayField label='Assignments' source="assignmentIds" reference="assignments">
        <SingleFieldList>
          <TextField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
    </SimpleForm>
  </Edit>
);

export const CurriculumCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm redirect='/curriculums'>
      <TextInput source="name" />
      <ReferenceInput source="subjectId" reference="subjects">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="instructorId" reference="instructors">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceArrayInput source="studentIds" reference="students">
        <SelectArrayInput optionText="name" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
