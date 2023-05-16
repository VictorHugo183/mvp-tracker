import { useEffect, useState } from "react"
import "./styles.css";
import mvpList from "./Data/mvpList"

import { MvpForm } from "./Components/MvpForm";
import { MvpList } from "./Components/MvpList";

export default function App() {

  const [mvps, setMvps] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect (() => {
    localStorage.setItem("ITEMS", JSON.stringify(mvps))
  }, [mvps])

  function addMvp (name, date) {
    setMvps((currentMvps) => {
      return [...currentMvps, {id: crypto.randomUUID(), name, date}]
    })
  }

  function deleteMvp (id) {
    setMvps(currentMvps => {
      return currentMvps.filter(mvp => mvp.id !== id)
    })
  }

  return (
    <>
      <MvpForm addMvp={addMvp}/>
      <h1 className="header">MVPs:</h1>
      <MvpList mvps={mvps} deleteMvp={deleteMvp}/>
    </>
  )
}