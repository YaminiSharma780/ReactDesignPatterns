import { useEffect } from "react";
import { useState } from "react";

export default function useDogImages() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    async function fetchDogs() {
      await fetch("https://dog.ceo/api/breed/labrador/images/random/6")
        .then((res) => res.json())
        .then((data) => {
          console.log(data.message);
          setDogs(data.message);
        });
    }
    fetchDogs();
  }, []);
  return dogs;
}
