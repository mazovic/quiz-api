import { Category } from './categories/models/Category';
import { SubCategory } from './categories/models/SubCategory';
import { Question } from './question/models/Question';

const questions: Record<string, Record<string, any[]>> = {
	// PROBLEM SOLVING - BEGINNER
	'Problem Solving': {
		// PROBLEM SOLVING - INTERMEDIATE
		'Problem Solving For Intermediate': [
			{
				question: 'What is a common approach to handle hash table collisions?',
				options: ['Binary search', 'Chaining', 'Priority queues', 'Depth-first search'],
				correctAnswer: 'Chaining',
				difficulty: 'medium',
			},
			{
				question: 'What is the average time complexity of quicksort?',
				options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(1)'],
				correctAnswer: 'O(n log n)',
				difficulty: 'medium',
			},
			{
				question: 'What is the primary difference between a stack and a queue?',
				options: [
					'Stacks are faster',
					'Stacks use LIFO, Queues use FIFO',
					'Queues allow random access',
					'Stacks use more memory',
				],
				correctAnswer: 'Stacks use LIFO, Queues use FIFO',
				difficulty: 'medium',
			},
			{
				question:
					'What is the worst-case time complexity of inserting an element into a balanced binary search tree?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
				correctAnswer: 'O(log n)',
				difficulty: 'medium',
			},
			{
				question: 'Which algorithm is commonly used for pathfinding in games?',
				options: ['Bubble Sort', 'Binary Search', 'A* Search', 'Selection Sort'],
				correctAnswer: 'A* Search',
				difficulty: 'medium',
			},
			{
				question: 'What is the space complexity of a recursive implementation of the Fibonacci sequence?',
				options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
				correctAnswer: 'O(n)',
				difficulty: 'medium',
			},
			{
				question: 'Which of these is NOT a valid approach for graph traversal?',
				options: ['Depth-First Search', 'Breadth-First Search', 'Binary Search', 'Topological Sort'],
				correctAnswer: 'Binary Search',
				difficulty: 'medium',
			},
			{
				question: 'What is the time complexity of binary search on a sorted array of n elements?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
				correctAnswer: 'O(log n)',
				difficulty: 'medium',
			},
		],
	},
};

export const seedQuestions = async (): Promise<void> => {
	try {
		for (const categoryName in questions) {
			// Create category
			const newCategory = await Category.create({
				name: categoryName,
			});

			for (const subCategoryName in questions[categoryName]) {
				// Create subcategory with correct property name
				const newSubCategory = await SubCategory.create({
					name: subCategoryName,
					category_id: newCategory.id, // ✅ Correct property name
				});

				// Create questions for this subcategory
				for (const questionData of questions[categoryName][subCategoryName]) {
					await Question.create({
						question: questionData.question,
						options: questionData.options,
						correctAnswer: questionData.correctAnswer,
						difficulty: questionData.difficulty,
						subCategoryId: newSubCategory.id,
					});
				}
			}
		}

		console.log('Questions seeded successfully!');
	} catch (error) {
		console.error('Error seeding questions:', error);
		throw error;
	}
};
