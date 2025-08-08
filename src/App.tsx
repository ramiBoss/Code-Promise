import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuestionList } from './components/QuestionList';
import { Solution } from './components/Solution';
import { codingQuestions } from './data';
import './App.css';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route
            path='/'
            element={<QuestionList questions={codingQuestions} />}
          />
          <Route
            path='/solution/:id'
            element={<Solution questions={codingQuestions} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
