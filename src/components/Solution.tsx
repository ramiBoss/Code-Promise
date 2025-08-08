import { useParams, Link } from 'react-router-dom';
import type { CodingQuestion } from '../types';
import './Solution.css';

interface SolutionProps {
  questions: CodingQuestion[];
}

export const Solution: React.FC<SolutionProps> = ({ questions }) => {
  const { id } = useParams<{ id: string }>();
  const question = questions.find(q => q.id === id);

  if (!question) {
    return (
      <div className='solution-container'>
        <div className='error-message'>
          <h2>Question not found</h2>
          <p>The question you're looking for doesn't exist.</p>
          <Link to='/' className='back-button'>
            ← Back to Questions
          </Link>
        </div>
      </div>
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return '#00b894';
      case 'Medium':
        return '#fdcb6e';
      case 'Hard':
        return '#e17055';
      default:
        return '#74b9ff';
    }
  };

  return (
    <div className='solution-container'>
      <Link to='/' className='back-button'>
        ← Back to Questions
      </Link>

      <div className='solution-content'>
        <div className='question-info'>
          <div className='question-header'>
            <h1>{question.title}</h1>
            <span
              className='difficulty-badge'
              style={{
                backgroundColor: getDifficultyColor(question.difficulty),
              }}
            >
              {question.difficulty}
            </span>
          </div>

          <p className='category'>Category: {question.category}</p>
          <p className='description'>{question.description}</p>

          <div className='examples-section'>
            <h3>Examples:</h3>
            {question.examples.map((example, index) => (
              <div key={index} className='example'>
                <div className='example-item'>
                  <strong>Input:</strong> <code>{example.input}</code>
                </div>
                <div className='example-item'>
                  <strong>Output:</strong> <code>{example.output}</code>
                </div>
                {example.explanation && (
                  <div className='example-item'>
                    <strong>Explanation:</strong> {example.explanation}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className='solution-section'>
          <h2>Solution</h2>

          <div className='code-section'>
            <h3>Code:</h3>
            <pre className='code-block'>
              <code>{question.solution.toString()}</code>
            </pre>
          </div>

          <div className='explanation-section'>
            <h3>Explanation:</h3>
            <p>{question.explanation}</p>
          </div>

          <div className='complexity-info'>
            <div className='complexity-item'>
              <strong>Time Complexity:</strong> {question.timeComplexity}
            </div>
            <div className='complexity-item'>
              <strong>Space Complexity:</strong> {question.spaceComplexity}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
