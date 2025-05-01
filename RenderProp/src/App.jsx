import "./App.css";
import { Title } from "./components/Title";
import Input from "./components/Input";
import Kelvin from "./components/Kelvin";
import Fahrenheit from "./components/Fahrenheit";

function App() {
  return (
    <>
      <h1>Render Prop Pattern Example 1</h1>
      <Title render={() => <h3>✨ First render prop! ✨</h3>} />
      <Title render={() => <h3>🔥 Second render prop! 🔥</h3>} />
      <Title render={() => <h3>🚀 Third render prop! 🚀</h3>} />

      {/* <h1>Render Prop Pattern Example 2</h1>
      <Input
        render={(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      /> */}

      <h1>Render Prop Pattern Example 3</h1>
      <Input>
        {(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      </Input>
    </>
  );
}

export default App;
