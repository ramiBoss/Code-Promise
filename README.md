# Promise-2 - Coding Questions App

A React TypeScript application built with Vite that displays coding questions and their solutions. Perfect for practicing algorithms and data structures.

## 🚀 Features

- **Question List**: Browse through a collection of coding questions
- **Difficulty Levels**: Questions categorized as Easy, Medium, or Hard
- **Categories**: Questions organized by topics (Array, Stack, Dynamic Programming, etc.)
- **Solution Viewer**: Detailed solutions with code, explanations, and complexity analysis
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Type-Safe**: Built with TypeScript for better development experience

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing
- **CSS3** - Modern styling with flexbox and grid

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd promise-2
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🎯 Usage

1. **Home Page**: View the list of coding questions with their difficulty levels and categories
2. **Click on a Question**: Navigate to the solution page to see the detailed solution
3. **Back Navigation**: Use the back button to return to the question list

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── QuestionList.tsx    # Question list component
│   ├── QuestionList.css    # Styles for question list
│   ├── Solution.tsx        # Solution viewer component
│   └── Solution.css        # Styles for solution viewer
├── questions/           # Individual question files
│   ├── index.ts            # Export all questions
│   ├── two-sum.ts          # Two Sum problem and solution
│   ├── valid-parentheses.ts # Valid Parentheses problem and solution
│   ├── maximum-subarray.ts  # Maximum Subarray problem and solution
│   ├── merge-two-sorted-lists.ts # Merge Two Sorted Lists problem and solution
│   ├── binary-tree-inorder-traversal.ts # Binary Tree Inorder Traversal
│   └── longest-valid-parentheses.ts # Longest Valid Parentheses (Hard)
├── types.ts            # TypeScript interfaces
├── data.ts             # Aggregated questions data
├── App.tsx             # Main app component
├── App.css             # Global app styles
├── index.css           # Global CSS styles
└── main.tsx            # App entry point
```

## 🔧 Question Structure

Each question is organized as a separate TypeScript file with:

- **Metadata**: Question details, examples, complexity analysis
- **Solution Function**: Actual TypeScript/JavaScript implementation
- **Type Safety**: Full TypeScript support with proper typing

Example question file structure:

```typescript
import type { QuestionMetadata } from '../types';

export const questionMetadata: QuestionMetadata = {
  id: '1',
  title: 'Problem Title',
  difficulty: 'Easy',
  category: 'Array',
  description: 'Problem description...',
  examples: [
    /* examples */
  ],
  explanation: 'Solution explanation...',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
};

export function solutionFunction(/* parameters */): /* return type */ {
  // Implementation
};
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is formatted correctly

## 🎨 Code Formatting

This project uses **Prettier** for code formatting and **ESLint** for linting.

### Automatic Formatting

- Code is automatically formatted on save (if using VS Code)
- Run `npm run format` to format all files manually
- Run `npm run format:check` to check if files are properly formatted

### Configuration

- Prettier configuration: `.prettierrc`
- ESLint configuration: `eslint.config.js`
- VS Code settings: `.vscode/settings.json`

### Formatting Rules

- Single quotes for strings
- Semicolons required
- 2-space indentation
- 80-character line width
- Trailing commas where valid

## 📝 Adding New Questions

To add new coding questions:

1. Create a new TypeScript file in the `src/questions/` directory
2. Export the question metadata and solution function
3. Add the new question to `src/questions/index.ts`
4. Import and add it to the questions array in `src/data.ts`

Example:

```typescript
// src/questions/new-question.ts
import type { QuestionMetadata } from '../types';

export const newQuestionMetadata: QuestionMetadata = {
  // ... question details
};

export function newQuestionSolution(/* params */): /* return type */ {
  // ... implementation
};
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
