import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import request, { whoami } from './api';

const user = whoami()

const UserWelcome = () => {
  const userDetails = user.read()
  return <div>
    Welcome: {userDetails.name}
  </div>
}

function App() {



  return (
    <div className="App">
      <Suspense fallback={<span>Loading...</span>}>
        <UserWelcome />
      </Suspense>
    </div>
  );
}

export default App;
