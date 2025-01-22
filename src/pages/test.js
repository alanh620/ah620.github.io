import React from 'react';
import Form from '../components/form';

function test(){
  return (
    <div className="App">
        <div className="flex aic justify-center">
            <span className="fa-solid fa-box-open"></span>
            <h1>Box Calculator</h1>
            <p>This will calculate 3 sizes and compare them to a json file of avaible box sizes that a store would carry. It will give you closest 3 options that match the inventory sheet along with prices.</p>
        </div>
      <div>
        <Form />
      </div>
    </div>
  );
};
  
export default test;