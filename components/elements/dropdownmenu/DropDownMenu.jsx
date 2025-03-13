"use client"
import Select from "react-select";
import { useId } from "react";

const DropDownMenu = ({ title, items, placeholder, name }) => {
  const selectId = useId();
  
  return (
    <div className='form__field'>
      <label className='form__field--label' htmlFor={name}>{title}</label>
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        placeholder={placeholder}
        isClearable
        name={name}
        options={items}
        instanceId={selectId}
        key={selectId} // Adicionar key para resolver problemas de hidratação
      />
    </div>
  )
}