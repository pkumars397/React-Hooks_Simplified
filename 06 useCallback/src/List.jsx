import { useEffect } from "react";
import { useState } from "react";

export default function ({ getNum }) {
  const [item, setItem] = useState([]);

  useEffect(() => {
    setItem(getNum());
    console.log("useEffect called");
  }, [getNum]);

  return item.map((item) => <div key={item}>{item}</div>);
}
