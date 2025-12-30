export interface Car {
  id: number;
  brand: string;
  model: string;
  pricePerDay: number;
  status: "AVAILABLE" | "RENTED";
}

export const mockCars: Car[] = [
  {
    id: 1,
    brand: "Toyota",
    model: "Yaris",
    pricePerDay: 800,
    status: "AVAILABLE",
  },
  {
    id: 2,
    brand: "Honda",
    model: "City",
    pricePerDay: 900,
    status: "AVAILABLE",
  },
  {
    id: 3,
    brand: "Mazda",
    model: "2",
    pricePerDay: 850,
    status: "AVAILABLE",
  },
  {
    id: 4,
    brand: "Nissan",
    model: "Almera",
    pricePerDay: 750,
    status: "RENTED",
  },
];
