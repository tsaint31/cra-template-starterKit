import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './Components/About';
import { Home } from './Components/Home';
import { Topic } from './Components/Topic';
import { Navigation } from './Components/Navigation';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/navigation" element={<Navigation />}>
            <Route path={`:topicId`} element={<Topic />} />
            <Route path={``} element={<p>No component selected</p>} />
          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
