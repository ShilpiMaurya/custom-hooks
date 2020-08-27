import React, { useState, useEffect } from "react";

export default function App() {
  const varA = useVarA();
  const varB = useVarB();

  return (
    <>
      <h2>varA: {varA} </h2>
      <h2>varB: {varB} </h2>
    </>
  );
}
const useVarA = () => {
  const [varA, setVarA] = useState(0);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setVarA(varA + 1);
      return () => {
        clearTimeout(timeOut);
      };
    }, 10000);
  }, [varA]);
  return varA;
};
const useVarB = () => {
  const [varB, setvarB] = useState(0);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setvarB(varB + 1);
      return () => {
        clearTimeout(timeOut);
      };
    }, 10000);
  }, [varB]);
  return varB;
};
