import "./App.css";
import Image from "./profile/Img/cat_dev.jpg";
import ActionLink from "./profile/Alert";
import Profile from "./profile/Profile";

function App() {
  const handleName = (name) => alert(`Hello there this is ${name}`);
  return (
    <div className="App">
      <Profile
        img={Image}
        name=" Smoky The Great"
        job="Job: Computer Stuff"
        address="Address: NASA"
        age="Age: Does it realy matter"
        handleName = {handleName}
      />
      <br/>
      <ActionLink />
    </div>
  );
}

export default App;
