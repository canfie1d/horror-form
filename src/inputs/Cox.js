import { useRef } from "react";

const CoxInput = () => {
  const ref = useRef(null);

  const onChange = (e) => {
    e.preventDefault();
    ref.current.value = e.target.value.replace(/[rR]/g, "g");
    ref.current.value = e.target.value.replace(/[sS]/g, "x");
    ref.current.value = e.target.value.replace(/[tT]/g, "y");
    ref.current.value = e.target.value.replace(/[lL]/g, "o");
    ref.current.value = e.target.value.replace(/[nN]/g, "m");
    ref.current.value = e.target.value.replace(/[eE]/g, "w");
    ref.current.value = e.target.value.replace(/[aA]/g, "q");
    ref.current.value = e.target.value.replace(/[gG]/g, "h");
  };

  return (
    <div className='cox'>
    <label className="label">
      City
    </label>
    <input
      ref={ref}
      type="text"
      id="password__input"
      onChange={onChange}
    />
    </div>
  );
}
export default CoxInput;
