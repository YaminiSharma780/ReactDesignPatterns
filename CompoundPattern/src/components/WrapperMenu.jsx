import WrapperProvider from "../contexts/WrapperProvider";
import "../App.css";

export default function WrapperMenu() {
  return (
    <WrapperProvider>
      <WrapperProvider.Toggle />
      <WrapperProvider.List>
        <WrapperProvider.Item>Edit</WrapperProvider.Item>
        <WrapperProvider.Item>Delete</WrapperProvider.Item>
      </WrapperProvider.List>
    </WrapperProvider>
  );
}
