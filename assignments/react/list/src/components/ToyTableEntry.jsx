function ToyTableEntry({ toy }) {
  return (
    <tr>
      <td>{ toy.rank }</td>
      <td>{ toy.name }</td>
      <td>{ toy.url }</td>
    </tr>
  );
}

export default ToyTableEntry;