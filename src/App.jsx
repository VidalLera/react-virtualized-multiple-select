import { useState, Components } from 'react'
import logo from './logo.svg'
import './App.css'
// import VirtualizedSelect from 'react-virtualized-select'
import ReactSelect, { createFilter, components } from 'react-select';
import AsyncSelect from 'react-select/async';
import Select from 'react-virtualized-select';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';
import { List } from './List/List';	

const filterColors = (inputValue) => {
  console.log(inputValue);
  return inputValue;
};

const array = [];
    for (let i = 0; i < 10000; i++) {
      array.push({ id : i, value : i, name : `Account ${i}` });
    }


const App = () => { 
    return (
      <>
        {/* <AsyncSelect
          isMulti
          cacheOptions
          defaultOptions
          loadOptions={promiseOptions}
          /> */}
        {/* <Select
          options={array}
        >
        </Select> */}
        <List
        accounts={array}
        >

        </List>
      </>
    );
  
}

export default App