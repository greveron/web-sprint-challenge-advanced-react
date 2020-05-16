// write your custom hook here to control your checkout form
import { useState } from "react";

export const useForm = (initialValue, key) => {
  const [valor, setValor] = useState(initialValue, key);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleplantsChanges = (e) => {
    setValor({
      ...valor,
      [e.target.name]: e.target.value,
    });
  };

  const handleformSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  return [valor, handleplantsChanges, showSuccessMessage, handleformSubmit];
};

