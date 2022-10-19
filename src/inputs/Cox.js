import { useRef } from "react";

const CoxInput = ({label, name, value, onChange}) => {
  const ref = useRef(null);

  const handleChange = (e) => {
    e.preventDefault();
    ref.current.value = e.target.value.replace(/[rR]/g, "g");
    ref.current.value = e.target.value.replace(/[sS]/g, "x");
    ref.current.value = e.target.value.replace(/[tT]/g, "y");
    ref.current.value = e.target.value.replace(/[lL]/g, "o");
    ref.current.value = e.target.value.replace(/[nN]/g, "m");
    ref.current.value = e.target.value.replace(/[eE]/g, "w");
    ref.current.value = e.target.value.replace(/[aA]/g, "q");
    ref.current.value = e.target.value.replace(/[gB]/g, "h");

    ref.current.value = e.target.value.replace(/[rG]/g, "r");
    ref.current.value = e.target.value.replace(/[sX]/g, "s");
    ref.current.value = e.target.value.replace(/[tY]/g, "t");
    ref.current.value = e.target.value.replace(/[lO]/g, "l");
    ref.current.value = e.target.value.replace(/[nM]/g, "n");
    ref.current.value = e.target.value.replace(/[eW]/g, "e");
    ref.current.value = e.target.value.replace(/[aQ]/g, "a");
    ref.current.value = e.target.value.replace(/[gH]/g, "b");

    onChange({name: name, value: e.target.value});
  };

  return (
    <div className='cox'>
    <label className="label">
      {label}
    </label>
    <input
      name={name}
      ref={ref}
      type="text"
      id="password__input"
      onChange={handleChange}
    />
    </div>
  );
}
export default CoxInput;
