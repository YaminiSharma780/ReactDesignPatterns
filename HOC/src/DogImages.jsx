// import React from "react";
// import useDogImages from "./useDogImages";

// export default function DogImages() {
//   const dogs = useDogImages();

//   return dogs.map((dog, i) => <img src={dog} key={i} alt="Dog" />);
// }

import withHover from "../hooks/withHover";
import withLoader from "../hooks/withLoader";

function DogImages(props) {
  return (
    <div>
      {props.hovering && <h3>Hovering..</h3>}
      <div className="list">
        {props.data.message.map((d, i) => {
          return (
            <img
              style={{
                height: "200px",
                width: "200px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              key={i}
              src={d}
            />
          );
        })}
      </div>
    </div>
  );
}

export default withHover(
  withLoader(DogImages, "https://dog.ceo/api/breed/labrador/images/random/6")
);
