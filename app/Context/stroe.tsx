'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

type FormProps = {
  correntStep: number;
  setCorrentStep: Dispatch<SetStateAction<number>>;
  personalInfo: {
    name: string;
    email: string;
    phone: string;
  };
  setPersonalInfo: Dispatch<SetStateAction<{ name: string; email: string; phone: string }>>;
  chosenPlanId: number;
  addOns: number[] | null;
  setChosenPlanId: Dispatch<SetStateAction<number>>;
  setAddOns: Dispatch<SetStateAction<number[] | null>>;
  increceStep: () => void;
  decreceStep: () => void;
  switchMethodPlane: () => void;
  chosenPlanMethodID: number;
  setchosenPlanMethod: Dispatch<SetStateAction<number>>;
};

const FormContext = createContext<FormProps>({
  correntStep: 0,
  addOns: null,
  setCorrentStep: (): void => {},
  personalInfo: {
    name: '',
    email: '',
    phone: '',
  },
  setPersonalInfo: (): void => {},
  chosenPlanId: 1,
  setChosenPlanId: (): void => {},
  setAddOns: (): void => {},
  chosenPlanMethodID: 0,
  setchosenPlanMethod: (): void => {},
  switchMethodPlane: (): void => {},
  increceStep: (): void => {},
  decreceStep: (): void => {},
});

export const FormContextProvider = ({ children }: { children: ReactNode }) => {
  const [addOns, setAddOns] = useState<number[] | null>(null);
  const [correntStep, setCorrentStep] = useState(0);
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [chosenPlanId, setChosenPlanId] = useState(1);
  const [chosenPlanMethodID, setchosenPlanMethod] = useState(1);

  function switchMethodPlane() {
    setchosenPlanMethod((prev) => (prev === 1 ? 2 : 1));
  }
  function increceStep() {
    setCorrentStep((prev) => prev + 1);
  }
  function decreceStep() {
    setCorrentStep((prev) => prev - 1);
  }
  return (
    <FormContext.Provider
      value={{
        addOns,
        setAddOns,
        decreceStep,
        switchMethodPlane,
        increceStep,
        correntStep,
        setCorrentStep,
        personalInfo,
        setPersonalInfo,
        chosenPlanId,
        setChosenPlanId,
        chosenPlanMethodID,
        setchosenPlanMethod,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
