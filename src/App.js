import { useState } from "react";

import NavBar from "./components/UI/Navbar/Navbar";
import Posts from './components/Posts/Posts'
import AuthModel from './components/Authantication/AuthModel'
import LandingSection from "./components/LandingSection/LandingSection";

function App() {
  const [displayModel, setDisplayModel] = useState(false)
  const [signIn, setSignIn] = useState(true)
  const [joinGroup, setJoinGroup] = useState(false)

  const handleGroupJoin = () => {
    setJoinGroup(joinGroup => !joinGroup)
  }

  const handleDisplayModel = () => {
    setDisplayModel(model => !model)
  }

  const cancelHandler = () => {
    setDisplayModel(false)
  }

  const handleSignUp = () => {
    setSignIn(signIn => !signIn)
  }

  return (
    <div className="App">
      <NavBar onClick={handleDisplayModel} />
      <LandingSection joinGroup={joinGroup} onJoinGroup={handleGroupJoin} />
      <Posts joinGroup={joinGroup} onJoinGroup={handleGroupJoin} />
      {displayModel && <AuthModel onCancel={cancelHandler} signUp={handleSignUp} signIn={signIn} />}
    </div>
  );
}

export default App;
