import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MenuItem from "./components/menuItem/menuItem.components";
import HomePage from "./pages/homepage/homepage.component.jsx";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

const TopicList = () => (
  <div>
    <h1>Topic List Page</h1>
  </div>
);

const TopicDetail = () => (
  <div>
    <h1>Topic Detail Page</h1>
  </div>
);

//Routing:
//React-router-dom V6 replaced the Switch Element and it's overall syntax. So my code is a bit different from what's in the course
//What changed :
// No "Switch", no "component" anymore
// "Switch" => "Routes" | "component" => "element"

//We can have access to browser's history with props. (See HomePage Component)

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/topics" element={<TopicList />} />
        <Route path="/topics/:topicId" element={<TopicDetail />} />
        <Route path="/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
