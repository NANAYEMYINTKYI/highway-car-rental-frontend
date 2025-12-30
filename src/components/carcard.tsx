import type { Car } from "../data/mockdata";
import '../index.css';
interface Props {
  car: Car;
}

export default function CarCard({ car }: Props) {
  return (
    <div className="border rounded-lg p-4 shadow bg-white">
      <h2 className="text-lg font-bold text-red-600">
        {car.brand} {car.model}
      </h2>

      <p className="text-gray-700 mt-2">
        ราคา: {car.pricePerDay} บาท / วัน
      </p>

      <p
        className={`mt-2 font-semibold ${
          car.status === "AVAILABLE"
            ? "text-green-600"
            : "text-gray-400"
        }`}
      >
        สถานะ: {car.status === "AVAILABLE" ? "ว่าง" : "ไม่ว่าง"}
      </p>
    </div>
  );
}



