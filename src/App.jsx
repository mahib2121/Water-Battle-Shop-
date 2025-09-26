import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Battles from "./uties/Battles";

function App() {
  const [count, setCount] = useState(0);
  // const bottles =[
  //   {id:1,name:'Nike',Price:250,Color:'pink'},
  //   {id:2,name:'N Mohamand',Price:250,Color:'Black'},
  //   {id:3,name:'BanglePLastic',Price:250,Color:'Blue'},
  //   {id:4,name:'RFL',Price:250,Color:'pink'},
  // ]
  const bottlePromise = fetch("bot.json")
  .then(res=>res.json())

  return (
    <>
      <h1>Buy Awesome Water Bottle</h1>
      <Suspense fallback={<h3>Battles Loanding .....</h3>}>
        <Battles bottlePromise = {bottlePromise}></Battles>
      </Suspense>
    </>
  );
}

export default App;
