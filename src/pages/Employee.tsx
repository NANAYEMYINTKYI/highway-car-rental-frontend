import { useState, useEffect } from "react";
import { api } from "../services/api";
export function Employee() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    api.get("/cars/count").then(res => setCount(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl text-red-600 font-bold">
        จำนวนรถที่ยังว่าง: {count} คัน
      </h1>
    </div>
  );
}
