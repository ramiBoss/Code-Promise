import type { QuestionMetadata } from '../../types';

export const activitySelectionMetadata: QuestionMetadata = {
  id: '6',
  title: 'Activity Selection',
  difficulty: 'Easy',
  category: 'Greedy Algorithms',
  description:
    'Given a set of activities with start and end times, select the maximum number of activities that can be performed by a single person, assuming that a person can only work on a single activity at a time.',
  examples: [
    {
      input: 'activities = [(1, 3), (2, 5), (4, 6)]',
      output: '2',
    },
    {
      input: 'activities = [(0, 6), (1, 4), (3, 5), (5, 7), (8, 9), (5, 9)]',
      output: '4',
    },
  ],
  explanation:
    'We sort the activities based on their end times and iteratively select the next activity that starts after the last selected activity ends.',
  timeComplexity: 'O(n log n)',
  spaceComplexity: 'O(1)',
};

/*
 * Activity Selection Solution
 * @param activities - Array of tuples representing start and end times of activities
 * @returns Maximum number of non-overlapping activities
 */
/**
 * Pseudo code:
 * 1. Sort activities based on their end times
 * 2. Initialize count of selected activities to 0
 * 3. Set the end time of the last selected activity to a very small number
 * 4. For each activity in sorted list:
 *    - If the start time of the activity is greater than or equal to the end time of the last selected activity:
 *      - Increment count
 *      - Update the end time of the last selected activity to the end time of the current activity
 * 5. Return count
 */

export function activitySelection(activities: Array<[number, number]>): number {
  // Sort activities based on their end times
  activities.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let lastEndTime = -Infinity;

  // Iterate through sorted activities
  for (const [start, end] of activities) {
    // If the activity starts after or when the last selected activity ends
    if (start >= lastEndTime) {
      count++; // Select this activity
      lastEndTime = end; // Update the end time to the current activity's end time
    }
  }

  return count; // Return the maximum number of non-overlapping activities
}
