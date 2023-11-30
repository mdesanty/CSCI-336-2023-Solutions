import Greeting from "./components/Greeting";

import "./App.css";

function App() {
  const greetings = [
    {greeting: "Hello", firstName: "Michael", lastName: "DeSanty"},
    {greeting: "Hi", firstName: "Tony", lastName: "Soprano"},
    {greeting: "Yo", firstName: "Jerry", lastName: "Smith"},
    {greeting: "Sup", firstName: "Don", lastName: "Draper"}
  ];

  return (
    <>
    {greetings.map((greeting, index) => {
      return <Greeting key={index} greeting={greeting.greeting} firstName={greeting.firstName} lastName={greeting.lastName} />
    })}
    </>
  );
}

export default App;
