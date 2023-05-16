import { useState } from "react";
import mvpList from "../Data/mvpList";

export function MvpForm({addMvp}) {
  const [newItem, setNewItem] = useState("default");

  const bossInfo = mvpList.filter(item => {
    return item.name === newItem;
  })

  function handleSubmit(e) {
    e.preventDefault() //prevents page from refreshing when submitting form
    if (newItem === "" || newItem === "default") return

    if (bossInfo[0].spawn.length > 1) {
      alert("multiple spawns") //todo: handle multi spawns after implementing basic functionality
    }

    const date = new Date();

    addMvp(newItem, date);
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New MVP</label>
        <select value={newItem} onChange={event => setNewItem(event.target.value)}>
          <option value="default" disabled={true}>-- Select MVP --</option>
          {
            mvpList.map(result => {
              return (
                <option key={crypto.randomUUID()} value={result.name}>
                  {result.name}
                </option>
              )
            })
          }
        </select>
      </div>
      <button className="btn">Add</button>
    </form>
  )
}