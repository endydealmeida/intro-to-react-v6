import ReactDOM from "react-dom";
import SearchParams from "./searchparams";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("root"));