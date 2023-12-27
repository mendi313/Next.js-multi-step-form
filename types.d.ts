type Step = {
  title: string;
  subtitle: string;
  description: string;
};

type Plane = {
  id: number;
  icon: string;
  title: string;
  priceForMonth: number;
  priceForYear: number;
};

type Add_ons = {
  id: number;
  name: string;
  discription: string;
  pricePerMonth: number;
  pricePerYear: number;
};
type Method = {
  id: number;
  name: string;
  shortName: string;
};
