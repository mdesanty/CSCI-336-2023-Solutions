import ToyTableEntry from "./ToyTableEntry";

function ToysTable({ toys }) {
  return (
    <table style={{ width: '60%' }}>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Name</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        { toys.map((toy) => <ToyTableEntry key={ toy.rank } toy={ toy } />) }
      </tbody>
    </table>
  );
}

export default ToysTable;