import Arcade from '@/assets/images/icon-arcade.svg' 
import Advanced from '@/assets/images/icon-advanced.svg';
import Pro from '@/assets/images/icon-pro.svg';
const PLANES: Plane[] = [
  {
    id: 1,
    icon: Arcade,
    title: 'Arcade',
    priceForMonth: 9,
    priceForYear: 90,
  },
  {
    id: 2,
    icon: Advanced,
    title: 'Advanced',
    priceForMonth: 12,
    priceForYear: 120,
  },
  {
    id: 3,
    icon: Pro,
    title: 'Pro',
    priceForMonth: 15,
    priceForYear: 150,
  },
];
export default PLANES;
