import * as React from "react";
import {
  Admin,
  Resource,
} from "react-admin";
import { subjects, instructors, curriculums, assignments, students,grades } from "./views";
import jsonProvider from "ra-data-json-server";

const dataProvider = jsonProvider("http://localhost:3001");

const Resources = [
  instructors,
  students,
  subjects,  
  curriculums, 
  assignments,
  grades
];

const App = () => (
  <Admin dataProvider={dataProvider}>
    {Resources.map(({ list, edit, create, name }) => (
      <Resource
        key={name + "Resource"}
        name={name}
        list={list}
        edit={edit}
        create={create}
      />
    ))}
  </Admin>
);

export default App;
