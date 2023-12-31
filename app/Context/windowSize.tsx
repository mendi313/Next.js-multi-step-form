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
  const checkWindowSize = () => {
    let windowWidth;
    if (typeof window !== 'undefined') windowWidth = window.innerWidth;
    if (windowWidth !== undefined && windowWidth >= 520) {
      return true;
    } else {
      return false;
    }
  };

  const [isDesktop, setIsDesktop] = useState(() => {
    // Initialize isDesktop with the value returned by checkWindowSize()
    const initialIsDesktop = checkWindowSize();
    return initialIsDesktop;
  });

  useEffect(() => {
    const handleResize = () => {
      // Update isDesktop state based on checkWindowSize() return value
      setIsDesktop(checkWindowSize());
    };

    if (typeof window !== 'undefined') {
      setIsDesktop(checkWindowSize()); // Set initial value on component mount
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

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
