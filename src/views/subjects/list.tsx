import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  EditButton,
} from "react-admin";

export const SubjectList = (props: any) => (
  <List {...props}>
    <Datagrid {...props}>
      <TextField source="name" />
      <ReferenceArrayField label='Curriculums' source="curriculumIds" reference="curriculums">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <EditButton />
    </Datagrid>
  </List>
);
