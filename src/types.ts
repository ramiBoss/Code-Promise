export interface Example {
  input: string;
  output: string;
  explanation?: string;
}

export interface QuestionMetadata {
  id: string;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  description: string;
  examples: Example[];
  explanation: string;
  timeComplexity: string;
  spaceComplexity: string;
}

export interface CodingQuestion extends QuestionMetadata {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  solution: Function;
}
