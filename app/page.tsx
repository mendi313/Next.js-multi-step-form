'use client';
import { useWindowContext } from './Context/windowSize';
import DesktopDesing from './components/DesktopDesing';
import MobileDesing from './components/MobileDesing';

export default function Home() {
  const { isDesktop } = useWindowContext();
  return <div >{isDesktop ? <DesktopDesing /> : <MobileDesing />}</div>;
}
