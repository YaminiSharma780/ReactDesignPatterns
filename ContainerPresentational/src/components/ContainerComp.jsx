import { useEffect, useState } from "react";
import PresentationalComp from "./PresentationalComp";

export default function ContainerComp() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((res) => res.json())
      .then((data) => {
        setDogs(data.message);
      });
  }, []);

  return (
    <div>
      <h3>ContainerComp</h3>
      <PresentationalComp dogs={dogs} />
    </div>
  );
}
