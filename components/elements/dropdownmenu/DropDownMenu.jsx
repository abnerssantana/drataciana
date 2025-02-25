"use client"
import Select from "react-select";
import { useId } from "react"; // Importe o hook useId

const DropDownMenu = ({ title, items, placeholder, name }) => {
  // Use o hook useId para gerar IDs estáveis
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
        instanceId={selectId} // Adicione esta prop para resolver o problema de hidratação
      />
    </div>
  )
}

export default DropDownMenu