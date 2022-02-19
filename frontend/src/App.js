

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Balance from "./components/Balance";
import Form from "./components/Form";
import Movements from "./components/Movements";

function App() {
  return (
    <div className="App">
      <Balance />
      <Movements />
      <Form />
    </div>
  );
}

export default App;