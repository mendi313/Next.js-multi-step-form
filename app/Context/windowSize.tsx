'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from 'react';

type WindowProps = {
  isDesktop: boolean;
  setIsDesktop: Dispatch<SetStateAction<boolean>>;
};

const WindowContext = createContext<WindowProps>({
  isDesktop: true,
  setIsDesktop: (): void => {},
});

export const WindowContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDesktop, setIsDesktop] = useState(true);

  const checkWindowSize = () => {
    let windowWidth;
    if (typeof window !== 'undefined') windowWidth = window.innerWidth;
    if (windowWidth !== undefined && windowWidth >= 1024) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    checkWindowSize();
  }, [isDesktop]);

  if (typeof window !== 'undefined') window.addEventListener('resize', checkWindowSize);

  return (
    <WindowContext.Provider
      value={{
        isDesktop,
        setIsDesktop,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowContext = () => useContext(WindowContext);
