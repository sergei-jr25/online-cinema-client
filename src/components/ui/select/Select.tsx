
import React, { useState } from 'react';

// import Select,   from 'react-select';
import makeAnimated from 'react-select/animated'
// import   Select, {OnChangeValue}  from 'react-select'
import {FC} from 'react' 
import { IOption, ISelect } from './selectr.interface'
// import ReactSelect, {OnChangeValue} from 'react-select';
import Select,   {OnChangeValue} from 'react-select';
import AsyncSelect from 'react-select/async';



const animatedComponent = makeAnimated()


const SelectPage: FC<ISelect> = ({ field,options, placeholder, error, isLoading, isMulti }) => { 

   // const options = [
   //    { value: 'chocolate', label: 'Chocolate' },
   //    { value: 'strawberry', label: 'Strawberry' },
   //    { value: 'vanilla', label: 'Vanilla' }
   //  ]

   const [defaultState, setDefaultState]=  useState('genres')
  
   
   const onChanges = (newValue:  unknown | OnChangeValue <IOption, boolean >) => {
      field.onChange(isMulti 
         ? (newValue as IOption[]).map(item => item.value)  
         : (newValue as IOption).value
      )      
    }

   const getValue = () => {
      if (field.value) { 
         return isMulti
            ? options.filter(option => field.value.indexOf(option.value) >= 0)
            : options.find(option => option.value === field.value)
      } 
      else {
         return isMulti ? [] : ''
      }
   }

  
   
 return ( 
    <div>
       <label>
          <span>{placeholder}</span>
          {/* <ReactSelect 
             classNamePrefix='custom-select'         
             defaultValue={options[1]}
            onChange={onChanges} 
            options={options} 
            isMulti={isMulti} 
            value={getValue()} 
            components={animatedComponent} 
            isLoading={ isLoading} 
          /> */}
          <Select
            classNamePrefix='custom-select'   
             closeMenuOnSelect
             onChange={onChanges} 
            components={animatedComponent}
            defaultValue={[options[0], options[1]]}
            isMulti
             options={options}
             isLoading={ isLoading} 
             value={getValue()} 
            />
       </label>
       <div>{ error}</div>
    </div> 
 ) 
} 
 export default SelectPage