import React, { useState, useEffect } from "react";
import { complex, sqrt } from "mathjs";

const EditableComplexNumber = ({
  showDescriptors,
  onValueChanged,
  operator,
}) => {
  const [realValue, setRealValue] = useState(1);
  const [imaginaryValue, setImaginaryValue] = useState(0);
  const [isNormalized, setIsNormalized] = useState(true);

  useEffect(() => {
    setIsNormalized(getMagnitude() === 1);
    onValueChanged();
  }, [realValue, imaginaryValue]);

  const getMagnitude = () =>
    sqrt(realValue * realValue + imaginaryValue * imaginaryValue);

  const resetIfBlank = (event, setter) => {
    event.target.value = event.target.value == "" ? 0 : event.target.value;
    setter(event.target.value);
  };

  const normalize = () => {
    const magnitude = getMagnitude();
    setRealValue(realValue / magnitude);
    setImaginaryValue(imaginaryValue / magnitude);
    setIsNormalized(true);
  };

  const onNormalizedChange = (event) => {
    if (event.target.checked) {
      normalize();
    }
  };

  return (
    <form className="complex-number-container">
      <input
        value={realValue}
        onChange={(event) => setRealValue(event.target.value)}
        className="real-component complex-input"
        onBlur={(event) => resetIfBlank(event, setRealValue)}
      />
      {showDescriptors && <span className="real-descriptor">(real)</span>}

      <span className="addition">+</span>
      <span className="operator-symbol">{operator}</span>

      <input
        value={imaginaryValue}
        onChange={(event) => setImaginaryValue(event.target.value)}
        className="imaginary-component complex-input"
        onBlur={(event) => resetIfBlank(event, setImaginaryValue)}
      />
      <span className="imaginary-symbol">
        <em>i</em>
      </span>
      {showDescriptors && (
        <span className="imaginary-descriptor">(imaginary)</span>
      )}
      <input
        type="checkbox"
        checked={isNormalized}
        onChange={onNormalizedChange}
        className="normalize-button"
      />
      <span className="normalized-text">normalized</span>
    </form>
  );
};

export default EditableComplexNumber;
