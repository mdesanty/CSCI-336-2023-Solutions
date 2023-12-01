import { useState } from 'react';
import Greeting from './Greeting';

function GreetingPage() {
  const [greetings, setGreetings] = useState([
    {greeting: 'Hello', firstName: 'Jim', lastName: 'Halpert'},
    {greeting: 'Hi', firstName: 'Michael', lastName: 'Scott'},
    {greeting: 'Yo', firstName: 'Dwight', lastName: 'Schrute'}
  ]);
  const [formData, setFormData] = useState({greeting: '', firstName: '', lastName: ''});

  function handleSubmit(e) {
    e.preventDefault();
    setGreetings((previousValue) => [...previousValue, formData]);
  }

  return (
    <div>
      <div id="greetings">
        {greetings.map((greeting, index) =>
          <Greeting key={index} greeting={greeting.greeting} firstName={greeting.firstName} lastName={greeting.lastName} />
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div style={{'paddingBottom': '10px'}}>
          <label htmlFor="greetingInput">
            Greeting:&nbsp;
          </label>
          <input type="text" id="greetingInput" value={formData.greeting} onChange={(e) => setFormData({...formData, greeting: e.target.value})} />
        </div>

        <div style={{'paddingBottom': '10px'}}>
          <label htmlFor="firstNameInput">
            First Name:&nbsp;
          </label>
          <input type="text" id="firstNameInput" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} />
        </div>

        <div style={{'paddingBottom': '10px'}}>
          <label htmlFor="lastNameInput">
            Last Name:&nbsp;
          </label>
          <input type="text" id="lastNameInput" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} />
        </div>

        <button type="submit">Add greeting</button>
      </form>
    </div>
  );
}

export default GreetingPage;