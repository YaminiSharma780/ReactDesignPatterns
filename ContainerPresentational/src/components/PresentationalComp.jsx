export default function PresentationalComp({ dogs }) {
  return (
    <div>
      <h3>PresentationalComp</h3>
      {dogs.map((dog, i) => (
        <img height="200px" width="200px" src={dog} key={i} alt="Dog" />
      ))}
    </div>
  );
}
