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
    <div id="greetings">
      {greetings.map(function(greeting, index) {
        if(greeting.greeting.length >= 4) {
          return <Greeting key={index} greeting={greeting.greeting} firstName={greeting.firstName} lastName={greeting.lastName} />
        }
      })}
    </div>
  );
}

export default App;
