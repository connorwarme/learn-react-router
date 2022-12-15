import React, { useState, useEffect } from "react";
import Profile from "./Profile";
import './App.css';

window.fetch = jest.fn(() => {
  const user = { name: 'Lionel Messi', email: 'lmessi@legend.com'};

  return Promise.resolve({
    json: () => Promise.resolve(user),
  })
})
const fuck = () => {
  const user = { name: 'Lionel Messi', email: 'lmessi@legend.com'};
    
      return Promise.reject({
        message: 'API is down',
      })
}

const App = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fuck()
      .then((response) => response.json())
      .then((user) => setUser(user))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <span>{error}</span>;
  }

  return(
  <div>
    {user ? <Profile user={user} /> : <span>Loading...</span>}
  </div>
  )
}

export default App;