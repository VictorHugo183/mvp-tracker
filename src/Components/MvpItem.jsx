import mvpList from "../Data/mvpList.js"

export default function MvpItem({ id, title, date, deleteMvp}) {

  const bossInfo = mvpList.filter(item => {
    return item.name === title;
  })

  const spawn = bossInfo[0].spawn[0].timer;

  //the date created by the mvpForm is stored as a string when saved onto localStorage, so we create a new date object using that data so we can run date methods on this new object.
  const getDate = new Date(date);

  const timeOfDeath = getDate.toLocaleTimeString("en-US", { hour12:false })

  const currentTime = new Date();
  const spawnTime = (getDate.getTime() + (spawn * 60000));
  const difference = (spawnTime - currentTime.getTime());

  return (
    <>
    <tr onClick={() => deleteMvp(id)}>
      <td>{bossInfo[0].name}.png</td>
      <td>{bossInfo[0].name}</td>
      <td>{bossInfo[0].spawn[0].map}</td>
      <td>{spawnTime}</td>
      <td>{bossInfo[0].spawn[0].timer}</td>
    </tr>
    </>
  )
}