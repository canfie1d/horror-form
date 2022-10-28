import { useCallback, useEffect, useState } from "react";

export const Grebmeier = ({ onChange, name }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const appendNumber = (newNumber) => {
    setPhoneNumber(phoneNumber + newNumber);
    onChange({ name, value: phoneNumber + newNumber });
  };

  const clearPhoneNumber = () => {
    setPhoneNumber("");
    onChange({ name, value: "" });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "40px",
      }}
    >
      <div>
        <div style={{ gap: "10px", display: "flex", flexDirection: "column" }}>
          <label>
            Phone Number
            <PhoneNumberField
              phoneNumber={phoneNumber}
              onChange={onChange}
              name={name}
            />
          </label>
          <button onClick={clearPhoneNumber} type="button">
            Clear Input
          </button>
        </div>
      </div>
      <div>
        <Roulette onLockInCallback={appendNumber} />
      </div>
    </div>
  );
};

const PhoneNumberField = ({ phoneNumber, onChange, name }) => (
  <input
    style={{
      height: "40px",
      width: "220px",
      background: "white",
      display: "flex",
      alignItems: "center",
      marginTop: "10px",
    }}
    value={phoneNumber}
    disabled
  />
);

const Roulette = ({ onLockInCallback }) => {
  const [currentNumber, setCurrentNumber] = useState();

  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    let interval;

    const spinRoulette = () => {
      return setInterval(() => {
        setCurrentNumber(Math.floor(Math.random() * 10));
      }, 200);
    };

    if (isSpinning) {
      interval = spinRoulette();
    }

    return () => {
      clearInterval(interval);
    };
  }, [isSpinning]);

  const onLockIn = useCallback(() => {
    setIsSpinning(!isSpinning);
    if (isSpinning) {
      onLockInCallback(currentNumber);
    }
  }, [isSpinning, currentNumber, onLockInCallback]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <div
        style={{
          width: "130px",
          height: "130px",
          borderRadius: "100%",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: "4rem" }}> {currentNumber} </p>
      </div>

      <button type="button" onClick={onLockIn}>
        {isSpinning ? "Lock In" : "Spin"}
      </button>
    </div>
  );
};

export default Grebmeier;
