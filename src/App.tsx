import * as React from "react";
import { Admin, Resource, ListGuesser,List,Datagrid,TextField,DateField,ReferenceField,ArrayField,SingleFieldList,ChipField,NumberField, EditGuesser,Edit,SimpleForm,TextInput,ReferenceInput,SelectInput,ArrayInput,SimpleFormIterator,Create,DateInput } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';
import simpleRestProvider from 'ra-data-simple-rest'

const dataProvider = simpleRestProvider('http://localhost:3001');

export const AssignmentList = (props:any) => (
  <List 
    {...props}
    title='thing'
  >
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="description" />
          <DateField source="dueDate" />
          <ReferenceField source="curriculumId" reference="curriculum"><TextField source="name" /></ReferenceField>
      </Datagrid>
  </List>
);

export const CurriculumList = (props:any) => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <ReferenceField source="subjectId" reference="subject"><TextField source="name" /></ReferenceField>
      </Datagrid>
  </List>
);

export const SubjectList = (props:any) => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <ArrayField source="students"><SingleFieldList><ChipField source="name" /></SingleFieldList></ArrayField>
          <ArrayField source="curriculums"><SingleFieldList><ChipField source="name" /></SingleFieldList></ArrayField>
      </Datagrid>
  </List>
);

export const StudentList = (props:any) => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <ArrayField source="instructors"><SingleFieldList><ChipField source="name" /></SingleFieldList></ArrayField>
          <ArrayField source="subjects"><SingleFieldList><ChipField source="name" /></SingleFieldList></ArrayField>
      </Datagrid>
  </List>
);

export const InstructorList = (props:any) => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <ArrayField source="students"><SingleFieldList><ChipField source="name" /></SingleFieldList></ArrayField>
      </Datagrid>
  </List>
);

export const GradeList = (props:any) => (
  <List {...props}>
      <Datagrid rowClick="edit">
          <TextField source="id" />
          <ReferenceField source="studentId" reference="student"><TextField source="name" /></ReferenceField>
          <ReferenceField source="assignmentId" reference="assignment"><TextField source="name" /></ReferenceField>
          <NumberField source="grade" />
      </Datagrid>
  </List>
);

export const CurriculumEdit = (props:any) => (
  <Create {...props}>
      <SimpleForm>
          {/* <TextInput source="id" /> */}
          <TextInput source="name" />
          <ReferenceInput source="subjectId" reference="subject"><SelectInput optionText="id" /></ReferenceInput>
      </SimpleForm>
  </Create>
);

export const StudentEdit = (props:any) => (
  <Create {...props}>
      <SimpleForm>
          {/* <TextInput source="id" /> */}
          <TextInput source="name" />
          <ArrayInput source="instructor"><SimpleFormIterator><TextInput source="id" />
<TextInput source="name" /></SimpleFormIterator></ArrayInput>
          <TextInput source="subject" />
      </SimpleForm>
  </Create>
);

export const SubjectCreate = (props:any) => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="id" />
          <TextInput source="name" />
          <ArrayInput source="students"><SimpleFormIterator><TextInput source="id" />
<TextInput source="name" /></SimpleFormIterator></ArrayInput>
          <ArrayInput source="curriculums"><SimpleFormIterator><TextInput source="id" />
<TextInput source="name" />
<ReferenceInput source="subjectId" reference="subjects"><SelectInput optionText="id" /></ReferenceInput></SimpleFormIterator></ArrayInput>
      </SimpleForm>
  </Create>
);

export const InstructorCreate =(props:any) => (
  <Create {...props}>
      <SimpleForm>
          {/* <TextInput source="id" /> */}
          <TextInput source="name" />
          <ArrayInput source="student"><SimpleFormIterator><TextInput source="id" />
<TextInput source="name" /></SimpleFormIterator></ArrayInput>
      </SimpleForm>
  </Create>
);

export const GradeCreate =(props:any) => (
  <Create {...props}>
      <SimpleForm>
          {/* <TextInput source="id" /> */}
          <TextInput source="grade" />
          <ReferenceInput source="assignmentId" reference="assignment"><SelectInput optionText="name" /></ReferenceInput>
          <ReferenceInput source="studentId" reference="student"><SelectInput optionText="name" /></ReferenceInput>
      </SimpleForm>
  </Create>
);
export const AssignmentCreate =(props:any) => (
  <Create {...props}>
      <SimpleForm>
          {/* <TextInput source="id" /> */}
          <TextInput source="name" />
          <TextInput source="description" />
          <DateInput source="dueDate" />
          <ReferenceInput source="curriculumId" reference="curriculum"><SelectInput optionText="name" /></ReferenceInput>
      </SimpleForm>
  </Create>
);

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="assignment" list={AssignmentList} edit={EditGuesser} create={AssignmentCreate} />
        <Resource name="curriculum" list={CurriculumList} edit={EditGuesser} create={CurriculumEdit}/>
        <Resource name="subject" list={SubjectList} edit={EditGuesser} create={SubjectCreate} />
        <Resource name="student" list={StudentList} edit={EditGuesser} create={StudentEdit}/>
        <Resource name="instructor" list={InstructorList} edit={EditGuesser} create={InstructorCreate}/>
        <Resource name="grade" list={GradeList} edit={EditGuesser} create={GradeCreate}/>
    </Admin>
);

export default App;
