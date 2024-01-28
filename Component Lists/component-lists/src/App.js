import AdditionalComponent from "./AdditionalComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cagatay's React Documentation</h1>
        <br />
      </header>

      <div className="button-component">
        <h2>{buttonText}</h2>
        <button onClick={alertMessage}>System Control</button>
        <br />
      </div>

      <AdditionalComponent />
    </div>
  );
}
export default App;

const buttonText = "button using: ";

const alertMessage = () => {
  alert("function-trial-if-it-works");
};
