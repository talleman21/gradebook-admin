import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  NumberField,
  EditButton,
  DeleteButton
} from "react-admin";

export const GradeList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <ReferenceField source="studentId" reference="students">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="assignmentId" reference="assignments">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="grade" />
      <EditButton />
      <DeleteButton/>
    </Datagrid>
  </List>
);
