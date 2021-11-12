import React from "react";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  ReferenceArrayField,
  SingleFieldList,
  EditButton,
  DeleteButton
} from "react-admin";

export const CurriculumList = (props: any) => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <ReferenceField source="subjectId" reference="subjects">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField source="instructorId" reference="instructors">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceArrayField label='Students' source="studentIds" reference="students">        
      <SingleFieldList>
          <TextField source="name" />
        </SingleFieldList>
      </ReferenceArrayField>
      <ReferenceArrayField label='Assignments' source="assignmentIds" reference="assignments">
        <SingleFieldList>
          <TextField source="name" style={{marginRight:'5px',backgroundColor:'#eee'}}/>
        </SingleFieldList>
      </ReferenceArrayField>
      <EditButton />
      <DeleteButton/>
    </Datagrid>
  </List>
);
