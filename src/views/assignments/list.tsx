import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  DateField,
  EditButton,
  DeleteButton
} from "react-admin";

export const AssignmentList = (props: any) => (
  <List {...props} title="thing">
    <Datagrid>
      <TextField source="name" />
      <TextField source="description" />
      <DateField source="dueDate" />
      <ReferenceField source="curriculumId" reference="curriculums">
        <TextField source="name" />
      </ReferenceField>
      <EditButton />
      <DeleteButton/>
    </Datagrid>
  </List>
);
