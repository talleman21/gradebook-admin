import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceArrayField,
  SingleFieldList,
  ChipField,
  EditButton,
  DeleteButton
} from "react-admin";

export const SubjectList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <ReferenceArrayField label='Curriculums' source="curriculumIds" reference="curriculums">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <EditButton />
      <DeleteButton/>
    </Datagrid>
  </List>
);
