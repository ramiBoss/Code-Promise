import { Link } from 'react-router-dom';
import type { CodingQuestion } from '../types';
import './QuestionList.css';

interface QuestionListProps {
  questions: CodingQuestion[];
}

export const QuestionList: React.FC<QuestionListProps> = ({ questions }) => {
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
    <div className='question-list'>
      <h1>Coding Questions</h1>
      <p className='subtitle'>Click on any question to view its solution</p>

      <div className='questions-grid'>
        {questions.map(question => (
          <Link
            key={question.id}
            to={`/solution/${question.id}`}
            className='question-card'
          >
            <div className='question-header'>
              <h3 className='question-title'>{question.title}</h3>
              <span
                className='difficulty-badge'
                style={{
                  backgroundColor: getDifficultyColor(question.difficulty),
                }}
              >
                {question.difficulty}
              </span>
            </div>

            <p className='question-category'>{question.category}</p>
            <p className='question-description'>{question.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
