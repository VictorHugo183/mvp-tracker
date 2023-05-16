import MvpItem from "./MvpItem";

export function MvpList ({ mvps, deleteMvp }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Map</th>
          <th>Spawn</th>
          <th>Timer</th>
        </tr>
      </thead>
      <tbody>
        {
          mvps.map(item => {
            return (
              <MvpItem {...mvps} date={item.date} id={item.id} title={item.name} key={item.id} deleteMvp={deleteMvp}/>
            )
          })
        }
      </tbody>
    </table>
  )
}