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

    onChange({name: name, value: e.target.value});
  };

  const onBlur = () => {
    ref.current.value = ref.current.value.replace(/[gG]/g, "r");
    ref.current.value = ref.current.value.replace(/[xX]/g, "s");
    ref.current.value = ref.current.value.replace(/[yY]/g, "t");
    ref.current.value = ref.current.value.replace(/[oO]/g, "l");
    ref.current.value = ref.current.value.replace(/[mM]/g, "n");
    ref.current.value = ref.current.value.replace(/[wW]/g, "e");
    ref.current.value = ref.current.value.replace(/[qQ]/g, "a");
    ref.current.value = ref.current.value.replace(/[hH]/g, "b");

    onChange({name: name, value: ref.current.value});
  }

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
      onBlur={onBlur}
    />
    </div>
  );
}
export default CoxInput;
