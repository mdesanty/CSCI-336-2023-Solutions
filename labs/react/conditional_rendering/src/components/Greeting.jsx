function Greeting(props) {
  return (
    <h1>{props.greeting} {props.firstName} {props.lastName}</h1>
  );
}

export default Greeting;