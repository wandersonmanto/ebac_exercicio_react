import "./index.css"

export default function MyInput({label, textHolder, onChanged, currentValue}) {
  return(
    <div className="inputs">
      <label>{label}</label>
      <input type="number" placeholder={textHolder} onChange={onChanged} value={currentValue}/>
    </div>
  )
}