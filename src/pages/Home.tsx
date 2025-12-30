import CarCard from "../components/carcard";
import { mockCars } from "../data/mockdata";
import '../index.css';

export default function Home() {
  return (
    <div className="p-6 bg-red-50 min-h-screen">
      <h1 className="text-2xl font-bold text-red-600 mb-6">
        รถยนต์ที่พร้อมให้เช่า
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mockCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>

      <p className="mt-6 text-sm text-gray-600">
        * ไม่สามารถจองรถล่วงหน้าได้
      </p>
    </div>
  );
}
