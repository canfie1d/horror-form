import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

const BorstInput = () => {
  const [test, setTest] = useState("");
  const splitString = useDebounce(test.split(""), 1500);

  console.log(splitString);
  useEffect(() => {
    if (splitString) {
      splitString.forEach((char, index) => {
        let charElem = document.getElementById(char + index);
        charElem.classList.add("testClass");
      });
      setTest("");
    }
  }, [splitString]);

  return (
    <div className='borst'>
      <div>
        <div style={{ position: "relative" }}>
          {splitString && (
            <div
              style={{
                display: "flex",
                position: "absolute",
                left: 2.25,
                top: 0.5
              }}
            >
              {splitString?.map((char, index) => {
                return <div id={char + index}>{char}</div>;
              })}
            </div>
          )}
          <label>First Name</label>
          <input
            value={splitString.length > 0 ? "" : test}
            onChange={(e) => setTest(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default BorstInput;
