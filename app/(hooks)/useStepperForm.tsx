import { useState } from "react";

const useStepperForm = (initialStep: number = 0, maxStep: number) => {
  const [step, setStep] = useState<number>(initialStep);

  const nextStep = () =>
    setStep((prevStep) => (step === maxStep ? step : prevStep + 1));
  const prevStep = () => setStep(step > 0 ? step - 1 : 0);
  const resetStep = () => setStep(initialStep);

  return { step, nextStep, prevStep, resetStep };
};

export default useStepperForm;
