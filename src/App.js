import './App.css';

import React from 'react';
import EditableComplexNumber from './components/common/editableComplexNumber';

function App() {
  const test = () => {
    console.log('tet');
  };
  return (
      <React.Fragment>
      <EditableComplexNumber onValueChanged = {test} operator =
           '' showDescriptors =
       {
    false
       } />
      <EditableComplexNumber onValueChanged = {test} operator='x' showDescriptors={
        true}/>
        <hr></hr>
      <EditableComplexNumber onValueChanged = {test} operator =
           '=' showDescriptors = {
             true
           } /></React.Fragment>);
}

export default App;
