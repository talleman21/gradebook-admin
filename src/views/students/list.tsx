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

export const StudentList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <ReferenceArrayField label='Curriculums' reference="curriculums" source="curriculumIds">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <EditButton />
      <DeleteButton/>
    </Datagrid>
  </List>
);
