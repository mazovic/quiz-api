import { Category } from './categories/models/Category';
import { SubCategory } from './categories/models/SubCategory';
import { Question } from './question/models/Question';

const questions: Record<string, Record<string, any[]>> = {
	// PROBLEM SOLVING - BEGINNER
	'Problem Solving': {
		'Problem Solving For Beginner': [
			// EASY QUESTIONS (20)
			{
				question: 'What is the time complexity of searching in a sorted array using binary search?',
				options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'],
				correctAnswer: 'O(log n)',
				difficulty: 'easy',
			},
			{
				question: 'Which data structure operates on a FIFO (First In, First Out) principle?',
				options: ['Stack', 'Queue', 'Heap', 'Tree'],
				correctAnswer: 'Queue',
				difficulty: 'easy',
			},
			{
				question: 'What is the worst-case time complexity of bubble sort?',
				options: ['O(n log n)', 'O(n)', 'O(n²)', 'O(log n)'],
				correctAnswer: 'O(n²)',
				difficulty: 'easy',
			},
			{
				question: 'Which search algorithm is more efficient for unsorted arrays?',
				options: ['Binary Search', 'Linear Search', 'Depth-First Search', 'Breadth-First Search'],
				correctAnswer: 'Linear Search',
				difficulty: 'easy',
			},
			{
				question: "What does the abbreviation 'DRY' stand for in programming?",
				options: [
					"Don't Repeat Yourself",
					'Define, Review, Yield',
					'Duplicate, Refactor, Yield',
					'Document, Review, Yearly',
				],
				correctAnswer: "Don't Repeat Yourself",
				difficulty: 'easy',
			},
			{
				question: 'What is the space complexity of an algorithm that creates a single array of size n?',
				options: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
				correctAnswer: 'O(n)',
				difficulty: 'easy',
			},
			{
				question: 'What is the primary purpose of pseudocode?',
				options: [
					'To test code efficiency',
					'To outline logical steps before coding',
					'To optimize code',
					'To document code after writing',
				],
				correctAnswer: 'To outline logical steps before coding',
				difficulty: 'easy',
			},
			{
				question: "What does the term 'brute force' mean in problem-solving?",
				options: [
					'Using the fastest algorithm',
					'Trying all possible solutions',
					'Using recursive functions',
					'Breaking the problem into parts',
				],
				correctAnswer: 'Trying all possible solutions',
				difficulty: 'easy',
			},
			{
				question: 'What is an infinite loop?',
				options: [
					'A loop that never terminates',
					'A loop with a high iteration count',
					'A recursive function',
					'A loop inside another loop',
				],
				correctAnswer: 'A loop that never terminates',
				difficulty: 'easy',
			},
			{
				question: 'What is the result of merging two sorted arrays of sizes m and n?',
				options: [
					'A sorted array of size m',
					'A sorted array of size n',
					'A sorted array of size m+n',
					'A sorted array of size m*n',
				],
				correctAnswer: 'A sorted array of size m+n',
				difficulty: 'easy',
			},
			{
				question: 'Which of these operations is NOT commonly performed on a stack?',
				options: ['Push', 'Pop', 'Peek', 'Enqueue'],
				correctAnswer: 'Enqueue',
				difficulty: 'easy',
			},
			{
				question: 'What is the process of finding and fixing errors in a program called?',
				options: ['Compiling', 'Debugging', 'Interpreting', 'Running'],
				correctAnswer: 'Debugging',
				difficulty: 'easy',
			},
			{
				question: 'Which of these is NOT a characteristic of a good algorithm?',
				options: ['Efficiency', 'Clarity', 'Correctness', 'Complexity'],
				correctAnswer: 'Complexity',
				difficulty: 'easy',
			},
			{
				question: "What does the term 'edge case' refer to in programming?",
				options: [
					'A bug in the code',
					'A special case at the edge of the allowable range',
					'A case handled by a switch statement',
					'A coding style',
				],
				correctAnswer: 'A special case at the edge of the allowable range',
				difficulty: 'easy',
			},
			{
				question: 'What is the primary purpose of a debugging tool?',
				options: [
					'To optimize code',
					'To identify and fix errors in code',
					'To compile code faster',
					'To improve code readability',
				],
				correctAnswer: 'To identify and fix errors in code',
				difficulty: 'easy',
			},
			{
				question: 'What is the time complexity of accessing an element in an array by index?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
				correctAnswer: 'O(1)',
				difficulty: 'easy',
			},
			{
				question: 'Which of these is NOT a common way to represent an algorithm?',
				options: ['Flowchart', 'Pseudocode', 'Source code', 'Database schema'],
				correctAnswer: 'Database schema',
				difficulty: 'easy',
			},
			{
				question: 'What does IDE stand for in software development?',
				options: [
					'Integrated Development Environment',
					'Interactive Design Elements',
					'Internal Debugging Engine',
					'Indexed Data Exchange',
				],
				correctAnswer: 'Integrated Development Environment',
				difficulty: 'easy',
			},
			{
				question: 'What is a variable in programming?',
				options: [
					'A mathematical equation',
					'A named storage location',
					'A constant value',
					'A programming language',
				],
				correctAnswer: 'A named storage location',
				difficulty: 'easy',
			},
			{
				question: 'What is a syntax error?',
				options: [
					'An error in program logic',
					'An error in the grammar of the code',
					'An error that occurs during execution',
					'An error in the algorithm design',
				],
				correctAnswer: 'An error in the grammar of the code',
				difficulty: 'easy',
			},

			// MEDIUM QUESTIONS (20)
			{
				question: 'Which of these is NOT a common approach to solving recursive problems?',
				options: ['Divide and conquer', 'Dynamic programming', 'Greedy algorithms', 'Compiler optimization'],
				correctAnswer: 'Compiler optimization',
				difficulty: 'medium',
			},
			{
				question: 'Which of these is NOT a valid way to optimize an algorithm?',
				options: [
					'Memoization',
					'Reduction of unnecessary operations',
					'Choosing better data structures',
					'Always using recursion',
				],
				correctAnswer: 'Always using recursion',
				difficulty: 'medium',
			},
			{
				question: 'What is a hash table collision?',
				options: [
					'When a hash function generates the same index for multiple keys',
					'When a hash table is full',
					'When a hash function fails',
					'When a key is not found in the hash table',
				],
				correctAnswer: 'When a hash function generates the same index for multiple keys',
				difficulty: 'medium',
			},
			{
				question: 'Which sorting algorithm typically has the best average-case performance?',
				options: ['Bubble Sort', 'Selection Sort', 'Quick Sort', 'Insertion Sort'],
				correctAnswer: 'Quick Sort',
				difficulty: 'medium',
			},
			{
				question: 'What is the primary advantage of using arrays over linked lists?',
				options: [
					'Dynamic size allocation',
					'Faster insertion and deletion',
					'Random access to elements',
					'Better memory utilization',
				],
				correctAnswer: 'Random access to elements',
				difficulty: 'medium',
			},
			{
				question: 'Which of these is an example of an in-place algorithm?',
				options: ['Merge sort', 'Bubble sort', 'Counting sort', 'Radix sort'],
				correctAnswer: 'Bubble sort',
				difficulty: 'medium',
			},
			{
				question: 'Which data structure is best for implementing an undo feature?',
				options: ['Queue', 'Stack', 'Linked List', 'Array'],
				correctAnswer: 'Stack',
				difficulty: 'medium',
			},
			{
				question: 'What is the time complexity of accessing an element in a hash table in the average case?',
				options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
				correctAnswer: 'O(1)',
				difficulty: 'medium',
			},
			{
				question: 'What is the output of the following code snippet? int x = 5; int y = x++; print(y);',
				options: ['5', '6', '4', 'Error'],
				correctAnswer: '5',
				difficulty: 'medium',
			},
			{
				question: 'Which of these is NOT a benefit of modular programming?',
				options: [
					'Easier debugging',
					'Better code reusability',
					'Lower memory usage',
					'Improved maintainability',
				],
				correctAnswer: 'Lower memory usage',
				difficulty: 'medium',
			},
			{
				question: 'What is a key feature of divide-and-conquer algorithms?',
				options: [
					'They always use recursion',
					'They break a problem into smaller instances of the same problem',
					'They use hash tables',
					'They run in O(1) time',
				],
				correctAnswer: 'They break a problem into smaller instances of the same problem',
				difficulty: 'medium',
			},
			{
				question: 'Which of these approaches is most suitable for finding the shortest path in a graph?',
				options: ['Depth-First Search', 'Breadth-First Search', 'Binary Search', 'Selection Sort'],
				correctAnswer: 'Breadth-First Search',
				difficulty: 'medium',
			},
			{
				question: 'What is the difference between a compiler and an interpreter?',
				options: [
					'A compiler translates the entire program at once, while an interpreter executes line by line',
					'A compiler is faster than an interpreter',
					"A compiler produces machine code, while an interpreter doesn't",
					'All of the above',
				],
				correctAnswer: 'All of the above',
				difficulty: 'medium',
			},
			{
				question: 'What is the time complexity of insertion at the beginning of an array?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
				correctAnswer: 'O(n)',
				difficulty: 'medium',
			},
			{
				question: 'Which data structure would you use to check if a string is a palindrome?',
				options: ['Queue', 'Stack', 'Hash Table', 'All of these could work'],
				correctAnswer: 'Stack',
				difficulty: 'medium',
			},
			{
				question: 'What is the average-case time complexity of binary search?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
				correctAnswer: 'O(log n)',
				difficulty: 'medium',
			},
			{
				question:
					'What concept describes the practice of hiding implementation details while exposing functionality?',
				options: ['Abstraction', 'Inheritance', 'Polymorphism', 'Encapsulation'],
				correctAnswer: 'Encapsulation',
				difficulty: 'medium',
			},
			{
				question: 'What is the time complexity of deleting an element from the middle of a linked list?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
				correctAnswer: 'O(n)',
				difficulty: 'medium',
			},
			{
				question: 'What is a race condition in programming?',
				options: [
					'When a program runs faster than expected',
					'When multiple processes access shared data concurrently',
					'When an algorithm has logarithmic time complexity',
					'When a sort algorithm competes with another',
				],
				correctAnswer: 'When multiple processes access shared data concurrently',
				difficulty: 'medium',
			},
			{
				question: 'What is the difference between a stack and a heap in memory management?',
				options: [
					'Stack is faster, heap is slower',
					'Stack is for static memory allocation, heap is for dynamic memory allocation',
					'Stack can be resized, heap cannot',
					'Stack is for global variables, heap is for local variables',
				],
				correctAnswer: 'Stack is for static memory allocation, heap is for dynamic memory allocation',
				difficulty: 'medium',
			},

			// HARD QUESTIONS (20)
			{
				question: 'What is the time complexity of finding all permutations of a string of length n?',
				options: ['O(n)', 'O(n log n)', 'O(n!)', 'O(2^n)'],
				correctAnswer: 'O(n!)',
				difficulty: 'hard',
			},
			{
				question: 'Which algorithm would be most efficient for solving the traveling salesman problem?',
				options: [
					"Dijkstra's algorithm",
					'Dynamic programming (with limitations)',
					'Quick sort',
					'Linear search',
				],
				correctAnswer: 'Dynamic programming (with limitations)',
				difficulty: 'hard',
			},
			{
				question:
					'What is the worst-case space complexity of a recursive implementation of the Tower of Hanoi problem?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
				correctAnswer: 'O(n)',
				difficulty: 'hard',
			},
			{
				question: 'What is the time complexity of the Floyd-Warshall algorithm?',
				options: ['O(V + E)', 'O(V log V)', 'O(V³)', 'O(E log V)'],
				correctAnswer: 'O(V³)',
				difficulty: 'hard',
			},
			{
				question:
					'Which of the following algorithms can find strongly connected components in a directed graph?',
				options: ['Breadth-First Search', "Kosaraju's algorithm", 'Binary Search', 'Heap Sort'],
				correctAnswer: "Kosaraju's algorithm",
				difficulty: 'hard',
			},
			{
				question:
					'What is the maximum number of comparisons needed to find the minimum and maximum elements in an array of n elements?',
				options: ['n', '2n', '3n/2 - 2', 'n log n'],
				correctAnswer: '3n/2 - 2',
				difficulty: 'hard',
			},
			{
				question:
					'What is the amortized time complexity of a dynamic array (like ArrayList in Java or vector in C++)?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
				correctAnswer: 'O(1)',
				difficulty: 'hard',
			},
			{
				question: 'Which of these problems is NP-complete?',
				options: [
					'Matrix multiplication',
					'Finding shortest path in an unweighted graph',
					'Sorting an array',
					'Boolean satisfiability problem (SAT)',
				],
				correctAnswer: 'Boolean satisfiability problem (SAT)',
				difficulty: 'hard',
			},
			{
				question: 'What is the purpose of a bloom filter?',
				options: [
					'To hash passwords securely',
					'To filter out spam emails',
					'To test for membership in a set with possible false positives',
					'To optimize database queries',
				],
				correctAnswer: 'To test for membership in a set with possible false positives',
				difficulty: 'hard',
			},
			{
				question: 'What is the time complexity of the Knuth-Morris-Pratt string matching algorithm?',
				options: ['O(n+m)', 'O(n*m)', 'O(n log m)', 'O(n+m log m)'],
				correctAnswer: 'O(n+m)',
				difficulty: 'hard',
			},
			{
				question:
					'Which data structure would be most efficient for implementing a LRU (Least Recently Used) cache?',
				options: ['Array', 'Stack', 'Linked List', 'Hash Table with Doubly Linked List'],
				correctAnswer: 'Hash Table with Doubly Linked List',
				difficulty: 'hard',
			},
			{
				question: 'What is the primary purpose of the A* search algorithm?',
				options: [
					'Sorting arrays efficiently',
					'Finding the shortest path using heuristics',
					'Database indexing',
					'Pattern matching in strings',
				],
				correctAnswer: 'Finding the shortest path using heuristics',
				difficulty: 'hard',
			},
			{
				question: 'What is the time complexity of the Boyer-Moore majority vote algorithm?',
				options: ['O(n²)', 'O(n log n)', 'O(n)', 'O(log n)'],
				correctAnswer: 'O(n)',
				difficulty: 'hard',
			},
			{
				question: 'What is a skip list and what is its search time complexity?',
				options: [
					'A type of hash table, O(1)',
					'A probabilistic data structure, O(log n)',
					'A variant of linked list, O(n)',
					'A tree structure, O(n log n)',
				],
				correctAnswer: 'A probabilistic data structure, O(log n)',
				difficulty: 'hard',
			},
			{
				question: 'What is the time complexity of finding the median of two sorted arrays of equal length?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
				correctAnswer: 'O(log n)',
				difficulty: 'hard',
			},
			{
				question: 'What is Bellman-Ford algorithm used for?',
				options: [
					'Finding shortest paths with negative edge weights',
					'Sorting arrays',
					'String pattern matching',
					'Binary tree balancing',
				],
				correctAnswer: 'Finding shortest paths with negative edge weights',
				difficulty: 'hard',
			},
			{
				question: "What is the time complexity of the Strassen's matrix multiplication algorithm?",
				options: ['O(n²)', 'O(n^2.81)', 'O(n^3)', 'O(n log n)'],
				correctAnswer: 'O(n^2.81)',
				difficulty: 'hard',
			},
			{
				question: 'What is the purpose of the Fisher-Yates shuffle algorithm?',
				options: [
					'To sort an array efficiently',
					'To generate random permutations of elements',
					'To find duplicates in an array',
					'To compress data',
				],
				correctAnswer: 'To generate random permutations of elements',
				difficulty: 'hard',
			},
			{
				question: 'What is the primary challenge in implementing a concurrent hash table?',
				options: ['Hash function selection', 'Memory allocation', 'Lock contention', 'Key distribution'],
				correctAnswer: 'Lock contention',
				difficulty: 'hard',
			},
			{
				question:
					'What is the time complexity of the Aho-Corasick string matching algorithm for finding multiple patterns?',
				options: ['O(n)', 'O(n+m+z)', 'O(n*m)', 'O(n*m*k)'],
				correctAnswer: 'O(n+m+z)',
				difficulty: 'hard',
			},
		],
		// PROBLEM SOLVING - INTERMEDIATE
		'Problem Solving For Intermediate': [
			// EASY QUESTIONS (20)
			{
				question: 'What is the time complexity of accessing an element in an array?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
				correctAnswer: 'O(1)',
				difficulty: 'easy',
			},
			{
				question: 'Which data structure follows Last In First Out (LIFO) principle?',
				options: ['Queue', 'Stack', 'Linked List', 'Tree'],
				correctAnswer: 'Stack',
				difficulty: 'easy',
			},
			{
				question: 'What is the result of 5 % 2 in most programming languages?',
				options: ['2.5', '2', '1', '0.5'],
				correctAnswer: '1',
				difficulty: 'easy',
			},
			{
				question: 'Which sorting algorithm is generally considered the simplest?',
				options: ['Quick Sort', 'Merge Sort', 'Bubble Sort', 'Heap Sort'],
				correctAnswer: 'Bubble Sort',
				difficulty: 'easy',
			},
			{
				question: 'What does recursion mean in programming?',
				options: [
					'Repeating a loop multiple times',
					'A function calling itself',
					'Defining a function inside another function',
					'Using multiple conditional statements',
				],
				correctAnswer: 'A function calling itself',
				difficulty: 'easy',
			},
			{
				question: 'What is a queue data structure used for?',
				options: ['LIFO operations', 'FIFO operations', 'Random access', 'Sorting data'],
				correctAnswer: 'FIFO operations',
				difficulty: 'easy',
			},
			{
				question: 'Which of these is NOT a primitive data type in most languages?',
				options: ['Integer', 'Float', 'Boolean', 'Array'],
				correctAnswer: 'Array',
				difficulty: 'easy',
			},
			{
				question: 'What is the binary representation of the decimal number 9?',
				options: ['1000', '1001', '1010', '1100'],
				correctAnswer: '1001',
				difficulty: 'easy',
			},
			{
				question: 'What is the purpose of a break statement in a loop?',
				options: ['To skip one iteration', 'To exit the loop', 'To pause the loop', 'To restart the loop'],
				correctAnswer: 'To exit the loop',
				difficulty: 'easy',
			},
			{
				question: 'What is an algorithm?',
				options: [
					'A programming language',
					'A step-by-step procedure to solve a problem',
					'A data type',
					'A compiler directive',
				],
				correctAnswer: 'A step-by-step procedure to solve a problem',
				difficulty: 'easy',
			},
			{
				question: 'What is the purpose of a continue statement in a loop?',
				options: [
					'To exit the loop',
					'To skip the current iteration',
					'To pause the loop',
					'To restart the loop from the beginning',
				],
				correctAnswer: 'To skip the current iteration',
				difficulty: 'easy',
			},
			{
				question: 'Which operator is used for equality comparison in most programming languages?',
				options: ['=', '==', '===', '<>'],
				correctAnswer: '==',
				difficulty: 'easy',
			},
			{
				question: 'What is a variable?',
				options: ['A fixed value', 'A named storage location', 'A programming function', 'A type of loop'],
				correctAnswer: 'A named storage location',
				difficulty: 'easy',
			},
			{
				question: 'What is the purpose of a comment in code?',
				options: [
					'To execute special commands',
					'To make the code run faster',
					'To document and explain the code',
					'To define variables',
				],
				correctAnswer: 'To document and explain the code',
				difficulty: 'easy',
			},
			{
				question: "What does the term 'bug' refer to in programming?",
				options: ['A security feature', 'An error or flaw', 'A type of loop', 'A variable name'],
				correctAnswer: 'An error or flaw',
				difficulty: 'easy',
			},
			{
				question: 'What is the common term for comparing a value with multiple possible values?',
				options: ['If statement', 'While loop', 'Switch statement', 'For loop'],
				correctAnswer: 'Switch statement',
				difficulty: 'easy',
			},
			{
				question: 'What is the result of logical AND between true and false?',
				options: ['True', 'False', 'Null', 'Error'],
				correctAnswer: 'False',
				difficulty: 'easy',
			},
			{
				question: 'What is a function in programming?',
				options: ['A mathematical equation', 'A reusable block of code', 'A data type', 'A hardware component'],
				correctAnswer: 'A reusable block of code',
				difficulty: 'easy',
			},
			{
				question: 'What is the purpose of an if-else statement?',
				options: [
					'To repeat code multiple times',
					'To declare variables',
					'To execute code conditionally',
					'To define functions',
				],
				correctAnswer: 'To execute code conditionally',
				difficulty: 'easy',
			},
			{
				question: 'What is the output of 10 / 3 in integer division?',
				options: ['3', '3.33', '3.0', '4'],
				correctAnswer: '3',
				difficulty: 'easy',
			},

			// MEDIUM QUESTIONS (20)
			{
				question: 'What is the time complexity of heap sort?',
				options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
				correctAnswer: 'O(n log n)',
				difficulty: 'medium',
			},
			{
				question: 'Which data structure is most efficient for implementing a dictionary?',
				options: ['Array', 'Linked List', 'Hash Table', 'Stack'],
				correctAnswer: 'Hash Table',
				difficulty: 'medium',
			},
			{
				question: 'What is the difference between a stable and unstable sorting algorithm?',
				options: [
					'Stable sorts are faster',
					'Stable sorts preserve relative order of equal elements',
					'Stable sorts use less memory',
					"Stable sorts don't use comparisons",
				],
				correctAnswer: 'Stable sorts preserve relative order of equal elements',
				difficulty: 'medium',
			},
			{
				question: 'What is memoization used for?',
				options: [
					'Memory optimization',
					'Speed optimization by storing computed results',
					'Debugging recursive functions',
					'Creating memory leaks',
				],
				correctAnswer: 'Speed optimization by storing computed results',
				difficulty: 'medium',
			},
			{
				question: 'In a balanced binary search tree, what is the maximum height in terms of n nodes?',
				options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(1)'],
				correctAnswer: 'O(log n)',
				difficulty: 'medium',
			},
			{
				question: 'What is the time complexity of building a heap from an array of n elements?',
				options: ['O(n)', 'O(n log n)', 'O(log n)', 'O(n²)'],
				correctAnswer: 'O(n)',
				difficulty: 'medium',
			},
			{
				question: 'What is a topological sort?',
				options: [
					'A way to sort arrays',
					'A linear ordering of vertices in a directed graph',
					'A type of heap sort',
					'A way to balance trees',
				],
				correctAnswer: 'A linear ordering of vertices in a directed graph',
				difficulty: 'medium',
			},
			{
				question: 'What is the difference between a greedy algorithm and dynamic programming?',
				options: [
					'Greedy makes locally optimal choices, DP considers all possibilities',
					'Greedy is always faster',
					'DP always uses recursion',
					'Greedy uses more memory',
				],
				correctAnswer: 'Greedy makes locally optimal choices, DP considers all possibilities',
				difficulty: 'medium',
			},
			{
				question: 'What is the amortized time complexity of adding an element to a dynamic array?',
				options: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'],
				correctAnswer: 'O(1)',
				difficulty: 'medium',
			},
			{
				question: 'Which of these sorting algorithms has the lowest worst-case time complexity?',
				options: ['Bubble Sort', 'Insertion Sort', 'Merge Sort', 'Selection Sort'],
				correctAnswer: 'Merge Sort',
				difficulty: 'medium',
			},
			{
				question: 'What is the main advantage of a self-balancing binary search tree?',
				options: [
					'Lower space complexity',
					'Guaranteed O(log n) operations',
					'Faster insertion than hash tables',
					'No need for recursion',
				],
				correctAnswer: 'Guaranteed O(log n) operations',
				difficulty: 'medium',
			},
			{
				question: 'What is a priority queue typically implemented with?',
				options: ['Array', 'Linked List', 'Heap', 'Hash Table'],
				correctAnswer: 'Heap',
				difficulty: 'medium',
			},
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

			// HARD QUESTIONS (20)
			{
				question: 'What is the principle behind dynamic programming?',
				options: [
					'Divide and conquer',
					'Overlapping subproblems and optimal substructure',
					'Recursive problem solving',
					'Greedy choice property',
				],
				correctAnswer: 'Overlapping subproblems and optimal substructure',
				difficulty: 'hard',
			},
			{
				question: 'What is the purpose of the Floyd-Warshall algorithm?',
				options: [
					'Finding the shortest path in weighted graphs',
					'Sorting an array',
					'Finding a minimum spanning tree',
					'Detecting cycles in a graph',
				],
				correctAnswer: 'Finding the shortest path in weighted graphs',
				difficulty: 'hard',
			},
			{
				question: 'Which algorithm is used to find the maximum flow in a flow network?',
				options: [
					"Dijkstra's algorithm",
					'Ford-Fulkerson algorithm',
					"Prim's algorithm",
					"Kruskal's algorithm",
				],
				correctAnswer: 'Ford-Fulkerson algorithm',
				difficulty: 'hard',
			},
			{
				question: 'What is the purpose of a disjoint-set data structure?',
				options: [
					'To implement hash tables',
					'To track elements partitioned into non-overlapping subsets',
					'To sort arrays efficiently',
					'To implement queues',
				],
				correctAnswer: 'To track elements partitioned into non-overlapping subsets',
				difficulty: 'hard',
			},
			{
				question: 'What is the principle behind the A* search algorithm?',
				options: [
					'Best-first search using heuristics',
					'Depth-first search with pruning',
					'Breadth-first search with weights',
					'Linear search optimization',
				],
				correctAnswer: 'Best-first search using heuristics',
				difficulty: 'hard',
			},
			{
				question: 'What is a trie data structure used for?',
				options: [
					'Sorting arrays',
					'Efficient storage and retrieval of strings',
					'Graph traversal',
					'Mathematical calculations',
				],
				correctAnswer: 'Efficient storage and retrieval of strings',
				difficulty: 'hard',
			},
			{
				question: "What does 'NP-Complete' refer to in computational complexity theory?",
				options: [
					'Not Polynomial Complete',
					'Non-deterministic Polynomial Complete',
					'Not Possibly Complete',
					'New Problem Complete',
				],
				correctAnswer: 'Non-deterministic Polynomial Complete',
				difficulty: 'hard',
			},
			{
				question: 'Which of these is NOT a valid approach for balancing a binary search tree?',
				options: ['AVL rotation', 'Red-Black tree rules', 'B-tree splitting', 'Quick sort pivoting'],
				correctAnswer: 'Quick sort pivoting',
				difficulty: 'hard',
			},
			{
				question: 'What is the Knuth-Morris-Pratt algorithm used for?',
				options: ['String pattern matching', 'Graph traversal', 'Sorting', 'Dynamic memory allocation'],
				correctAnswer: 'String pattern matching',
				difficulty: 'hard',
			},
			{
				question: "What is the time complexity of Dijkstra's algorithm with a Fibonacci heap?",
				options: ['O(V log V + E)', 'O(V² + E)', 'O(V + E log V)', 'O(V × E)'],
				correctAnswer: 'O(V + E log V)',
				difficulty: 'hard',
			},
			{
				question: 'What is the Bellman-Ford algorithm used for?',
				options: [
					'String matching',
					'Finding shortest paths with negative edges',
					'Sorting arrays',
					'Binary tree balancing',
				],
				correctAnswer: 'Finding shortest paths with negative edges',
				difficulty: 'hard',
			},
			{
				question: 'What is the purpose of a B+ tree?',
				options: ['Memory management', 'Database indexing', 'Network routing', 'Graph traversal'],
				correctAnswer: 'Database indexing',
				difficulty: 'hard',
			},
			{
				question: "What is the asymptotic complexity of Strassen's matrix multiplication algorithm?",
				options: ['O(n²)', 'O(n^2.8074)', 'O(n³)', 'O(n log n)'],
				correctAnswer: 'O(n^2.8074)',
				difficulty: 'hard',
			},
			{
				question: 'What is a segmented sieve used for?',
				options: [
					'Sorting large arrays',
					'Finding prime numbers within a range',
					'Graph partitioning',
					'Dynamic memory allocation',
				],
				correctAnswer: 'Finding prime numbers within a range',
				difficulty: 'hard',
			},
			{
				question: 'What is the main concept behind the Cooley-Tukey FFT algorithm?',
				options: ['Dynamic programming', 'Divide and conquer', 'Greedy approach', 'Backtracking'],
				correctAnswer: 'Divide and conquer',
				difficulty: 'hard',
			},
			{
				question: "What is the running time of Tarjan's algorithm for finding strongly connected components?",
				options: ['O(V)', 'O(E)', 'O(V+E)', 'O(V log V)'],
				correctAnswer: 'O(V+E)',
				difficulty: 'hard',
			},
			{
				question: 'What is the advantage of a Fibonacci heap over a binary heap?',
				options: [
					'Lower space complexity',
					'O(1) amortized time for decrease-key operation',
					'Simpler implementation',
					'Better cache performance',
				],
				correctAnswer: 'O(1) amortized time for decrease-key operation',
				difficulty: 'hard',
			},
			{
				question: "What is the Johnson's algorithm used for?",
				options: [
					'String matching',
					'Finding all-pairs shortest paths',
					'Graph coloring',
					'Prime factorization',
				],
				correctAnswer: 'Finding all-pairs shortest paths',
				difficulty: 'hard',
			},
			{
				question: 'What is the primary purpose of the Fast Fourier Transform (FFT)?',
				options: ['Sorting algorithms', 'Polynomial multiplication', 'Graph traversal', 'Database indexing'],
				correctAnswer: 'Polynomial multiplication',
				difficulty: 'hard',
			},
			{
				question: 'What is the approximation ratio of the greedy algorithm for the set cover problem?',
				options: ['ln n', 'log n', 'n', 'n log n'],
				correctAnswer: 'ln n',
				difficulty: 'hard',
			},
		],

		// PROBLEM SOLVING - ADVANCED
		'Problem Solving For Advanced': [
			// EASY QUESTIONS (20)
			{
				question: 'What is the running time complexity of a simple linear search algorithm?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
				correctAnswer: 'O(n)',
				difficulty: 'easy',
			},
			{
				question: 'What data structure is most appropriate for implementing a LIFO behavior?',
				options: ['Queue', 'Stack', 'Array', 'Tree'],
				correctAnswer: 'Stack',
				difficulty: 'easy',
			},
			{
				question: 'What is the time complexity of iterating through an array of size n?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
				correctAnswer: 'O(n)',
				difficulty: 'easy',
			},
			{
				question: 'What is a base case in recursion?',
				options: [
					'The first function call',
					'The condition that stops the recursion',
					'The best possible algorithm',
					'The fastest implementation',
				],
				correctAnswer: 'The condition that stops the recursion',
				difficulty: 'easy',
			},
			{
				question: 'What is the binary representation of the decimal number 8?',
				options: ['1000', '0111', '1001', '0110'],
				correctAnswer: '1000',
				difficulty: 'easy',
			},
			{
				question: 'Which sorting algorithm has a best-case time complexity of O(n)?',
				options: ['Quick Sort', 'Merge Sort', 'Insertion Sort', 'Heap Sort'],
				correctAnswer: 'Insertion Sort',
				difficulty: 'easy',
			},
			{
				question: 'What is the time complexity of adding an element to the end of an array?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
				correctAnswer: 'O(1)',
				difficulty: 'easy',
			},
			{
				question: 'What is the primary purpose of a hash function?',
				options: [
					'Data encryption',
					'Password verification',
					'Mapping data to a fixed size value',
					'Data compression',
				],
				correctAnswer: 'Mapping data to a fixed size value',
				difficulty: 'easy',
			},
			{
				question: 'What is the logical AND operator in most programming languages?',
				options: ['&', '&&', 'AND', '||'],
				correctAnswer: '&&',
				difficulty: 'easy',
			},
			{
				question: 'What is the purpose of a for loop?',
				options: [
					'To make decisions',
					'To repeat code a specific number of times',
					'To define functions',
					'To catch errors',
				],
				correctAnswer: 'To repeat code a specific number of times',
				difficulty: 'easy',
			},
			{
				question: 'What does the modulo operator (%) do?',
				options: [
					'Returns the absolute value',
					'Returns the remainder after division',
					'Converts to percentage',
					'Rounds to the nearest integer',
				],
				correctAnswer: 'Returns the remainder after division',
				difficulty: 'easy',
			},
			{
				question: 'What is a boolean data type?',
				options: [
					'A type that can store text',
					'A type that can store numbers',
					'A type that can only store true or false',
					'A type that can store dates',
				],
				correctAnswer: 'A type that can only store true or false',
				difficulty: 'easy',
			},
			{
				question: "What is the difference between '==' and '===' operators?",
				options: [
					'They are identical',
					'=== checks value only',
					'=== checks type as well as value',
					'=== is not a valid operator',
				],
				correctAnswer: '=== checks type as well as value',
				difficulty: 'easy',
			},
			{
				question: "What does the term 'API' stand for?",
				options: [
					'Application Programming Interface',
					'Automated Program Integration',
					'Advanced Programming Implementation',
					'Application Protocol Interface',
				],
				correctAnswer: 'Application Programming Interface',
				difficulty: 'easy',
			},
			{
				question: 'What is the primary purpose of a database index?',
				options: [
					'Storing data',
					'Improving query performance',
					'Encrypting data',
					'Preventing duplicate data',
				],
				correctAnswer: 'Improving query performance',
				difficulty: 'easy',
			},
			{
				question: 'What is the result of 2^3 in most programming languages?',
				options: ['6', '8', '9', '5'],
				correctAnswer: '8',
				difficulty: 'easy',
			},
			{
				question: 'What is a syntax error?',
				options: [
					'An error in program logic',
					'An error in the grammar of the code',
					'An error that occurs at runtime',
					'An error in algorithm design',
				],
				correctAnswer: 'An error in the grammar of the code',
				difficulty: 'easy',
			},
			{
				question: 'What is the purpose of a while loop?',
				options: [
					'To execute code once',
					'To execute code until a condition is false',
					'To define a function',
					'To make decisions',
				],
				correctAnswer: 'To execute code until a condition is false',
				difficulty: 'easy',
			},
			{
				question: 'What is the purpose of an array?',
				options: [
					'To store a single value',
					'To store multiple values of the same type',
					'To perform mathematical calculations',
					'To connect to databases',
				],
				correctAnswer: 'To store multiple values of the same type',
				difficulty: 'easy',
			},
			{
				question: 'What is the logical OR operator in most programming languages?',
				options: ['|', 'OR', '||', '++'],
				correctAnswer: '||',
				difficulty: 'easy',
			},

			// MEDIUM QUESTIONS (20)
			{
				question: 'What is the time complexity of QuickSort in the average case?',
				options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
				correctAnswer: 'O(n log n)',
				difficulty: 'medium',
			},
			{
				question: 'What is a red-black tree?',
				options: [
					'A type of hash table',
					'A self-balancing binary search tree',
					'A sorting algorithm',
					'A graph traversal technique',
				],
				correctAnswer: 'A self-balancing binary search tree',
				difficulty: 'medium',
			},
			{
				question: 'What is the worst-case time complexity of QuickSort?',
				options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
				correctAnswer: 'O(n²)',
				difficulty: 'medium',
			},
			{
				question: 'What is a binary heap?',
				options: [
					'A complete binary tree',
					'A type of hash table',
					'A balanced search tree',
					'A linked list variant',
				],
				correctAnswer: 'A complete binary tree',
				difficulty: 'medium',
			},
			{
				question: 'What is the time complexity of depth-first search in a graph?',
				options: ['O(V)', 'O(E)', 'O(V+E)', 'O(V×E)'],
				correctAnswer: 'O(V+E)',
				difficulty: 'medium',
			},
			{
				question: 'What is a greedy algorithm?',
				options: [
					'An algorithm that never terminates',
					'An algorithm that makes locally optimal choices',
					'An algorithm that requires the most memory',
					'An algorithm that uses recursion',
				],
				correctAnswer: 'An algorithm that makes locally optimal choices',
				difficulty: 'medium',
			},
			{
				question: 'Which data structure would you use to efficiently find the k-th smallest element?',
				options: ['Array', 'Linked List', 'Min-Heap', 'Hash Table'],
				correctAnswer: 'Min-Heap',
				difficulty: 'medium',
			},
			{
				question: 'What is the time complexity of finding an element in a balanced binary search tree?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
				correctAnswer: 'O(log n)',
				difficulty: 'medium',
			},
			{
				question: 'What is a directed acyclic graph (DAG)?',
				options: [
					'A graph with no directed cycles',
					'A graph with only one path between any two nodes',
					'A complete graph',
					'A tree with exactly two children per node',
				],
				correctAnswer: 'A graph with no directed cycles',
				difficulty: 'medium',
			},
			{
				question: 'What is the time complexity of the breadth-first search algorithm?',
				options: ['O(V)', 'O(E)', 'O(V+E)', 'O(V²)'],
				correctAnswer: 'O(V+E)',
				difficulty: 'medium',
			},
			{
				question: 'What is a minimum spanning tree?',
				options: [
					'The shortest path between two nodes',
					'A tree that connects all vertices with minimum total edge weight',
					'A tree with the minimum number of nodes',
					'The tree with the smallest height',
				],
				correctAnswer: 'A tree that connects all vertices with minimum total edge weight',
				difficulty: 'medium',
			},
			{
				question: 'What is dynamic programming?',
				options: [
					'Writing code that changes at runtime',
					'A method to solve complex problems by breaking them into simpler subproblems',
					'Programming that adapts to user input',
					'Using multiple programming languages in one project',
				],
				correctAnswer: 'A method to solve complex problems by breaking them into simpler subproblems',
				difficulty: 'medium',
			},
			{
				question: "What is the purpose of Dijkstra's algorithm?",
				options: [
					'Finding the shortest path in a graph',
					'Sorting an array',
					'Balancing a tree',
					'Finding prime numbers',
				],
				correctAnswer: 'Finding the shortest path in a graph',
				difficulty: 'medium',
			},
			{
				question: 'What is a B-tree?',
				options: [
					'A binary tree with exactly two children',
					'A self-balancing search tree designed for disk access',
					'A tree data structure used for string manipulation',
					'A tree that only stores boolean values',
				],
				correctAnswer: 'A self-balancing search tree designed for disk access',
				difficulty: 'medium',
			},
			{
				question: 'What is a trie data structure?',
				options: [
					'A type of balanced binary tree',
					'A data structure that stores strings',
					'A variant of linked list',
					'A sorting algorithm',
				],
				correctAnswer: 'A data structure that stores strings',
				difficulty: 'medium',
			},
			{
				question: 'What is memoization?',
				options: [
					'A debugging technique',
					'Storing results of expensive function calls',
					'A memory allocation strategy',
					'A type of loop',
				],
				correctAnswer: 'Storing results of expensive function calls',
				difficulty: 'medium',
			},
			{
				question: 'What is the primary advantage of using a hash table?',
				options: ['Ordered elements', 'Fast average-case lookups', 'Low memory usage', 'Sequential access'],
				correctAnswer: 'Fast average-case lookups',
				difficulty: 'medium',
			},
			{
				question: 'What is a priority queue?',
				options: [
					'A queue that processes elements in random order',
					'A queue that processes elements based on their priority',
					'A queue with a limited size',
					'A queue that only accepts certain data types',
				],
				correctAnswer: 'A queue that processes elements based on their priority',
				difficulty: 'medium',
			},
			{
				question: 'What is the difference between a tree and a graph?',
				options: [
					"Trees allow cycles, graphs don't",
					'Trees have a root node, graphs may not',
					'Trees are always directed, graphs are undirected',
					'Trees are always balanced, graphs may not be',
				],
				correctAnswer: 'Trees have a root node, graphs may not',
				difficulty: 'medium',
			},
			{
				question: "What is the purpose of Prim's algorithm?",
				options: [
					'Finding shortest paths',
					'Finding minimum spanning trees',
					'Sorting arrays',
					'Matrix multiplication',
				],
				correctAnswer: 'Finding minimum spanning trees',
				difficulty: 'medium',
			},

			// HARD QUESTIONS (20)
			{
				question:
					"What is the time complexity of finding the shortest path using Dijkstra's algorithm with a Fibonacci heap?",
				options: ['O(V log V + E)', 'O(V² + E)', 'O(V + E log V)', 'O(V × E)'],
				correctAnswer: 'O(V + E log V)',
				difficulty: 'hard',
			},
			{
				question: 'Which of these problems is NP-hard?',
				options: [
					'Finding the shortest path',
					'Binary search',
					'Traveling Salesman Problem',
					'Sorting an array',
				],
				correctAnswer: 'Traveling Salesman Problem',
				difficulty: 'hard',
			},
			{
				question:
					'What is the worst-case time complexity of the Knuth-Morris-Pratt (KMP) string matching algorithm?',
				options: ['O(n + m)', 'O(n × m)', 'O(n log m)', 'O(n² + m²)'],
				correctAnswer: 'O(n + m)',
				difficulty: 'hard',
			},
			{
				question: 'Which data structure is used to implement efficient operations on disjoint sets?',
				options: ['Binary Search Tree', 'Hash Table', 'Union-Find', 'B-Tree'],
				correctAnswer: 'Union-Find',
				difficulty: 'hard',
			},
			{
				question: 'What is the purpose of the Boyer-Moore majority vote algorithm?',
				options: [
					'Sorting strings',
					'Finding the majority element in an array',
					'Graph traversal',
					'Matrix multiplication',
				],
				correctAnswer: 'Finding the majority element in an array',
				difficulty: 'hard',
			},
			{
				question:
					'What is the time complexity of the Floyd-Warshall algorithm for finding all-pairs shortest paths?',
				options: ['O(V²)', 'O(V³)', 'O(V × E)', 'O(V log V + E)'],
				correctAnswer: 'O(V³)',
				difficulty: 'hard',
			},
			{
				question: "Which technique is used in the Tarjan's algorithm?",
				options: ['Dynamic programming', 'Depth-first search', 'Breadth-first search', 'Divide and conquer'],
				correctAnswer: 'Depth-first search',
				difficulty: 'hard',
			},
			{
				question: 'What is the purpose of a segment tree?',
				options: [
					'Efficient range queries',
					'Balancing binary trees',
					'Hashing functions',
					'Sorting algorithms',
				],
				correctAnswer: 'Efficient range queries',
				difficulty: 'hard',
			},
			{
				question: 'What is the expected time complexity of Randomized Quicksort?',
				options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
				correctAnswer: 'O(n log n)',
				difficulty: 'hard',
			},
			{
				question: 'What is the principle behind the Rabin-Karp algorithm?',
				options: [
					'Using dynamic programming for pattern matching',
					'Using recursion for searching',
					'Using hashing for pattern matching',
					'Using greedy approach for optimization',
				],
				correctAnswer: 'Using hashing for pattern matching',
				difficulty: 'hard',
			},
			{
				question: 'Which of these is a property of a min-max heap?',
				options: [
					'All elements are sorted',
					'Alternating levels are min and max heaps',
					"It's a type of binary search tree",
					'It uses hash functions',
				],
				correctAnswer: 'Alternating levels are min and max heaps',
				difficulty: 'hard',
			},
			{
				question: 'What is the chromatic number of a graph?',
				options: [
					'The number of vertices',
					'The number of edges',
					'The minimum number of colors needed for proper coloring',
					'The maximum path length',
				],
				correctAnswer: 'The minimum number of colors needed for proper coloring',
				difficulty: 'hard',
			},
			{
				question: 'What is the time complexity of matrix chain multiplication using dynamic programming?',
				options: ['O(n)', 'O(n²)', 'O(n³)', 'O(2ⁿ)'],
				correctAnswer: 'O(n³)',
				difficulty: 'hard',
			},
			{
				question: 'Which of these is NOT a balanced binary search tree?',
				options: ['AVL tree', 'Red-Black tree', 'B-tree', 'Binary heap'],
				correctAnswer: 'Binary heap',
				difficulty: 'hard',
			},
			{
				question: 'What is the primary function of a Bloom filter?',
				options: [
					'Efficient sorting',
					'Testing set membership with possible false positives',
					'Graph traversal',
					'Finding shortest paths',
				],
				correctAnswer: 'Testing set membership with possible false positives',
				difficulty: 'hard',
			},
			{
				question: 'What is the complexity of the best known algorithm for the integer factorization problem?',
				options: ['O(n)', 'O(n log n)', 'Sub-exponential', 'Polynomial'],
				correctAnswer: 'Sub-exponential',
				difficulty: 'hard',
			},
			{
				question: 'Which data structure is most suitable for implementing an LRU cache?',
				options: ['Array', 'Stack', 'Hash Table + Doubly Linked List', 'Binary Search Tree'],
				correctAnswer: 'Hash Table + Doubly Linked List',
				difficulty: 'hard',
			},
			{
				question: "What is the amortized time complexity of a Fibonacci heap's decrease-key operation?",
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
				correctAnswer: 'O(1)',
				difficulty: 'hard',
			},
			{
				question: 'Which algorithm is used for the topological sorting of a directed acyclic graph?',
				options: ["Dijkstra's algorithm", "Kahn's algorithm", 'Floyd-Warshall algorithm', "Prim's algorithm"],
				correctAnswer: "Kahn's algorithm",
				difficulty: 'hard',
			},
			{
				question: 'What is the running time of the Edmonds-Karp algorithm for maximum flow?',
				options: ['O(V × E)', 'O(V² × E)', 'O(V × E²)', 'O(V³)'],
				correctAnswer: 'O(V × E²)',
				difficulty: 'hard',
			},
		],
		// PROBLEM SOLVING - TREES
		Trees: [
			// EASY QUESTIONS (20)
			{
				question: 'Which traversal visits the root node first?',
				options: ['Pre-order', 'In-order', 'Post-order', 'Level-order'],
				correctAnswer: 'Pre-order',
				difficulty: 'easy',
			},
			{
				question: 'Which traversal visits the root node last?',
				options: ['Pre-order', 'In-order', 'Post-order', 'Level-order'],
				correctAnswer: 'Post-order',
				difficulty: 'easy',
			},
			{
				question: 'Which tree traversal would print nodes in sorted order for a binary search tree?',
				options: ['Pre-order', 'In-order', 'Post-order', 'Level-order'],
				correctAnswer: 'In-order',
				difficulty: 'easy',
			},
			{
				question: 'Which of these is a valid property of a min-heap?',
				options: [
					'The root is the maximum element',
					'Every node is greater than its children',
					'The root is the minimum element',
					'It is always a complete binary tree',
				],
				correctAnswer: 'The root is the minimum element',
				difficulty: 'easy',
			},
			{
				question: 'What is the difference between a binary tree and a binary search tree?',
				options: [
					'A binary tree can have any number of children, a BST has at most 2',
					"A BST follows a specific ordering property, a binary tree doesn't",
					'A binary tree is always balanced, a BST might not be',
					'A BST is always complete, a binary tree might not be',
				],
				correctAnswer: "A BST follows a specific ordering property, a binary tree doesn't",
				difficulty: 'easy',
			},
			{
				question: 'In an N-ary tree, what is the maximum number of children a node can have?',
				options: ['2', 'N', 'Unlimited', 'N-1'],
				correctAnswer: 'N',
				difficulty: 'easy',
			},
			{
				question: 'What is a leaf node in a tree?',
				options: [
					'The root node',
					'A node with at least one child',
					'A node with no children',
					'A node with exactly two children',
				],
				correctAnswer: 'A node with no children',
				difficulty: 'easy',
			},
			{
				question: 'What is the root node in a tree?',
				options: [
					'The node with the most children',
					'The topmost node with no parent',
					'Any node with children',
					'The node with the smallest value',
				],
				correctAnswer: 'The topmost node with no parent',
				difficulty: 'easy',
			},
			{
				question: 'What is the height of a tree with only one node?',
				options: ['0', '1', '2', 'Undefined'],
				correctAnswer: '0',
				difficulty: 'easy',
			},
			{
				question: 'What is a binary tree?',
				options: [
					'A tree where nodes have at most two children',
					'A tree where nodes have exactly two children',
					'A tree where nodes have at least two children',
					'A tree where all nodes have the same value',
				],
				correctAnswer: 'A tree where nodes have at most two children',
				difficulty: 'easy',
			},
			{
				question: 'What is level-order traversal?',
				options: [
					'Visiting nodes from left to right',
					'Visiting nodes from top to bottom, level by level',
					'Visiting the smallest nodes first',
					'Visiting the largest nodes first',
				],
				correctAnswer: 'Visiting nodes from top to bottom, level by level',
				difficulty: 'easy',
			},
			{
				question: 'What is the depth of the root node?',
				options: ['0', '1', 'Depends on the tree', 'Equal to the height of the tree'],
				correctAnswer: '0',
				difficulty: 'easy',
			},
			{
				question: 'What is a full binary tree?',
				options: [
					'Every node has 0 or 2 children',
					'Every node has exactly 2 children',
					'Every level is completely filled',
					'The tree has the maximum possible nodes',
				],
				correctAnswer: 'Every node has 0 or 2 children',
				difficulty: 'easy',
			},
			{
				question: 'What is a perfect binary tree?',
				options: [
					'A tree where all interior nodes have two children',
					'A tree where all leaf nodes are at the same level',
					'A tree with the minimum possible height',
					'A tree with exactly 2^n - 1 nodes',
				],
				correctAnswer: 'A tree where all leaf nodes are at the same level',
				difficulty: 'easy',
			},
			{
				question: 'What is a subtree?',
				options: [
					'A tree with only leaf nodes',
					'A tree formed by a node and all its descendants',
					'A tree with no root',
					'A tree with exactly half the nodes of the original tree',
				],
				correctAnswer: 'A tree formed by a node and all its descendants',
				difficulty: 'easy',
			},
			{
				question: 'Which data structure is typically used to implement level-order traversal?',
				options: ['Stack', 'Queue', 'Linked List', 'Array'],
				correctAnswer: 'Queue',
				difficulty: 'easy',
			},
			{
				question: 'What determines the depth of a node in a tree?',
				options: [
					'The number of its children',
					'The length of the path from the root to the node',
					'The height of its subtree',
					'The total number of nodes in the tree',
				],
				correctAnswer: 'The length of the path from the root to the node',
				difficulty: 'easy',
			},
			{
				question: 'What is the maximum number of nodes in a binary tree of height h?',
				options: ['2^h', '2^(h+1)-1', 'h^2', '2^h-1'],
				correctAnswer: '2^(h+1)-1',
				difficulty: 'easy',
			},
			{
				question: 'What is a binary search tree used for?',
				options: [
					'Efficient insertion and deletion of elements',
					'Efficient search operations',
					'Storing hierarchical data',
					'All of the above',
				],
				correctAnswer: 'All of the above',
				difficulty: 'easy',
			},
			{
				question: 'What is a sibling in a tree data structure?',
				options: [
					'Nodes with the same value',
					'Nodes with the same parent',
					'Nodes at the same level',
					'Nodes with the same children',
				],
				correctAnswer: 'Nodes with the same parent',
				difficulty: 'easy',
			},

			// MEDIUM QUESTIONS (20)
			{
				question: 'What is the height of a perfect binary tree with n nodes?',
				options: ['log₂(n+1) - 1', 'log₂n', 'n/2', 'n-1'],
				correctAnswer: 'log₂(n+1) - 1',
				difficulty: 'medium',
			},
			{
				question: 'What is the time complexity of inserting a node into a binary search tree?',
				options: ['O(1)', 'O(log n) average case, O(n) worst case', 'O(n log n)', 'O(n²)'],
				correctAnswer: 'O(log n) average case, O(n) worst case',
				difficulty: 'medium',
			},
			{
				question: 'Which of these is NOT a type of self-balancing binary search tree?',
				options: ['AVL tree', 'Red-Black tree', 'B-tree', 'Binary Heap'],
				correctAnswer: 'Binary Heap',
				difficulty: 'medium',
			},
			{
				question: 'What is a complete binary tree?',
				options: [
					'A tree where every node has exactly 0 or 2 children',
					'A tree where all levels are filled except possibly the last level',
					'A tree where all nodes have the same height',
					'A tree where every node has exactly 2 children',
				],
				correctAnswer: 'A tree where all levels are filled except possibly the last level',
				difficulty: 'medium',
			},
			{
				question:
					'What is the maximum number of nodes in a binary tree of height h (where height of a tree with one node is 0)?',
				options: ['2^h', '2^(h+1) - 1', '2^h - 1', 'h^2'],
				correctAnswer: '2^(h+1) - 1',
				difficulty: 'medium',
			},
			{
				question: 'What is a B-tree used for?',
				options: ['XML parsing', 'Network routing', 'Database indexing', 'Memory management'],
				correctAnswer: 'Database indexing',
				difficulty: 'medium',
			},
			{
				question: 'Which of these traversals uses a queue?',
				options: ['Pre-order', 'In-order', 'Post-order', 'Level-order'],
				correctAnswer: 'Level-order',
				difficulty: 'medium',
			},
			{
				question: 'In a Red-Black tree, what color must the root node be?',
				options: ['Red', 'Black', 'Either red or black', 'Neither red nor black'],
				correctAnswer: 'Black',
				difficulty: 'medium',
			},
			{
				question: 'What is the primary advantage of an AVL tree over a regular binary search tree?',
				options: [
					'Uses less memory',
					'Guaranteed O(log n) search time',
					'Better for sequential access',
					'Simpler implementation',
				],
				correctAnswer: 'Guaranteed O(log n) search time',
				difficulty: 'medium',
			},
			{
				question: 'What is a trie primarily used for?',
				options: ['Numerical computations', 'String operations', 'Graph traversal', 'Sorting algorithms'],
				correctAnswer: 'String operations',
				difficulty: 'medium',
			},
			{
				question: 'What is the time complexity of extracting the minimum element from a binary min-heap?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
				correctAnswer: 'O(log n)',
				difficulty: 'medium',
			},
			{
				question: 'What is the purpose of tree rotations in self-balancing trees?',
				options: [
					'To increase tree height',
					'To decrease tree width',
					'To maintain balance while preserving BST properties',
					'To make the tree a min-heap',
				],
				correctAnswer: 'To maintain balance while preserving BST properties',
				difficulty: 'medium',
			},
			{
				question: 'Which of these tree structures would you use for efficient prefix matching?',
				options: ['Binary Search Tree', 'AVL Tree', 'Trie', 'B-Tree'],
				correctAnswer: 'Trie',
				difficulty: 'medium',
			},
			{
				question: 'What is the space complexity of a trie storing n words with an average length of k?',
				options: ['O(n)', 'O(k)', 'O(n×k)', 'O(n+k)'],
				correctAnswer: 'O(n×k)',
				difficulty: 'medium',
			},
			{
				question: 'What is the primary difference between a B-tree and a B+ tree?',
				options: [
					'B-trees allow more children',
					'B+ trees store data only at leaf nodes',
					'B-trees are balanced',
					'B+ trees are used only for in-memory operations',
				],
				correctAnswer: 'B+ trees store data only at leaf nodes',
				difficulty: 'medium',
			},
			{
				question: 'What is a 2-3 tree?',
				options: [
					'A tree with nodes containing 2 or 3 values',
					'A tree with height between 2 and 3',
					'A tree with exactly 2 or 3 nodes',
					'A tree with nodes having 2 or 3 children',
				],
				correctAnswer: 'A tree with nodes having 2 or 3 children',
				difficulty: 'medium',
			},
			{
				question: 'What is the time complexity of finding a node in a binary tree in the worst case?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
				correctAnswer: 'O(n)',
				difficulty: 'medium',
			},
			{
				question: 'What is the difference between internal and external nodes in a tree?',
				options: [
					'Internal nodes are within the tree, external nodes are in other trees',
					'Internal nodes have children, external nodes do not',
					'Internal nodes have values, external nodes do not',
					'There is no difference',
				],
				correctAnswer: 'Internal nodes have children, external nodes do not',
				difficulty: 'medium',
			},
			{
				question: 'What is a balanced binary tree?',
				options: [
					'A tree with equal number of left and right nodes',
					'A tree where the difference in height between left and right subtrees is at most 1',
					'A tree with the same number of nodes on each level',
					'A tree with minimum possible height',
				],
				correctAnswer: 'A tree where the difference in height between left and right subtrees is at most 1',
				difficulty: 'medium',
			},
			{
				question:
					'What is the relationship between the number of nodes (n) and the number of edges (e) in a tree?',
				options: ['n = e', 'n = e + 1', 'e = n + 1', 'e = 2n'],
				correctAnswer: 'n = e + 1',
				difficulty: 'medium',
			},

			// HARD QUESTIONS (20)
			{
				question:
					'What operation is performed when a node in a binary search tree has two children and needs to be deleted?',
				options: [
					'Replace with leftmost child',
					'Replace with rightmost child',
					'Replace with inorder predecessor or successor',
					'Make it a leaf node first',
				],
				correctAnswer: 'Replace with inorder predecessor or successor',
				difficulty: 'hard',
			},
			{
				question: 'What is the maximum height of an AVL tree with n nodes?',
				options: ['n', 'n/2', 'log₂n', '1.44 log₂n'],
				correctAnswer: '1.44 log₂n',
				difficulty: 'hard',
			},
			{
				question: 'In a B+ tree, where are the data pointers stored?',
				options: ['Only in the root node', 'In every node', 'Only in leaf nodes', 'Only in internal nodes'],
				correctAnswer: 'Only in leaf nodes',
				difficulty: 'hard',
			},
			{
				question: 'What is a threaded binary tree?',
				options: [
					'A tree that uses multiple processing threads',
					'A tree where leaf nodes have pointers to their inorder successors/predecessors',
					'A tree with exactly three children per node',
					"A tree that's distributed across multiple databases",
				],
				correctAnswer: 'A tree where leaf nodes have pointers to their inorder successors/predecessors',
				difficulty: 'hard',
			},
			{
				question: 'What is the typical node structure for a B-tree of order m?',
				options: [
					'Up to m-1 keys and m children',
					'Exactly m keys and m+1 children',
					'Up to m keys and m+1 children',
					'Exactly m-1 keys and m children',
				],
				correctAnswer: 'Up to m-1 keys and m children',
				difficulty: 'hard',
			},
			{
				question: 'What is a Fenwick tree (binary indexed tree) primarily used for?',
				options: ['Spatial indexing', 'Prefix sums', 'Graph traversal', 'String matching'],
				correctAnswer: 'Prefix sums',
				difficulty: 'hard',
			},
			{
				question: 'Which of these is NOT a typical operation on a Splay tree?',
				options: ['Zig operation', 'Zig-Zig operation', 'Zig-Zag operation', 'Zag-Zig-Zag operation'],
				correctAnswer: 'Zag-Zig-Zag operation',
				difficulty: 'hard',
			},
			{
				question: 'What is the advantage of using a Red-Black tree over an AVL tree?',
				options: [
					'Faster search operations',
					'Less complex rotations after insertion/deletion',
					'Higher memory efficiency',
					'Better for sequential access',
				],
				correctAnswer: 'Less complex rotations after insertion/deletion',
				difficulty: 'hard',
			},
			{
				question: 'What is a quad tree primarily used for?',
				options: ['String matching', 'Database indexing', 'Spatial partitioning', 'Sorting numbers'],
				correctAnswer: 'Spatial partitioning',
				difficulty: 'hard',
			},
			{
				question: 'What is a segment tree used for?',
				options: ['Spatial indexing', 'Range queries', 'String matching', 'Database joins'],
				correctAnswer: 'Range queries',
				difficulty: 'hard',
			},
			{
				question: 'What property must be maintained in a Red-Black tree?',
				options: [
					'All leaves must be at the same level',
					'Every red node must have black children',
					'The root must be red',
					'All paths must have the same number of black nodes',
				],
				correctAnswer: 'Every red node must have black children',
				difficulty: 'hard',
			},
			{
				question: 'What is the worst-case time complexity for inserting n elements into an empty AVL tree?',
				options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(n log² n)'],
				correctAnswer: 'O(n log n)',
				difficulty: 'hard',
			},
			{
				question: 'What is the time complexity of finding the lowest common ancestor in a binary tree?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(h) where h is the height'],
				correctAnswer: 'O(n)',
				difficulty: 'hard',
			},
			{
				question: 'What is the main difference between a Cartesian Tree and a regular binary search tree?',
				options: [
					'Cartesian Trees store multiple values per node',
					'Cartesian Trees use priorities to determine tree structure',
					'Cartesian Trees are not binary',
					'Cartesian Trees only use integers as keys',
				],
				correctAnswer: 'Cartesian Trees use priorities to determine tree structure',
				difficulty: 'hard',
			},
			{
				question: 'What is a suffix tree used for?',
				options: ['Database indexing', 'Storing variable names', 'String pattern matching', 'Network routing'],
				correctAnswer: 'String pattern matching',
				difficulty: 'hard',
			},
			{
				question: 'What is the expected height of a randomly built binary search tree with n distinct keys?',
				options: ['O(n)', 'O(log n)', 'O(√n)', 'O(n log n)'],
				correctAnswer: 'O(√n)',
				difficulty: 'hard',
			},
			{
				question: 'What is the time complexity of a range query in a segment tree?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
				correctAnswer: 'O(log n)',
				difficulty: 'hard',
			},
			{
				question: 'What is a van Emde Boas tree and what is its main advantage?',
				options: [
					'A type of height-balanced tree with O(log log u) operations',
					'A type of binary tree with O(1) insertions',
					'A specialized B-tree for disk storage',
					'A tree structure for multi-dimensional data',
				],
				correctAnswer: 'A type of height-balanced tree with O(log log u) operations',
				difficulty: 'hard',
			},
			{
				question: 'What is a persistent data structure in the context of trees?',
				options: [
					'A tree that remains in memory after program execution',
					'A tree that preserves previous versions after modifications',
					'A tree that is stored in non-volatile memory',
					'A tree that cannot be modified after creation',
				],
				correctAnswer: 'A tree that preserves previous versions after modifications',
				difficulty: 'hard',
			},
			{
				question: 'What is the space complexity of a sparse table data structure for range minimum queries?',
				options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
				correctAnswer: 'O(n log n)',
				difficulty: 'hard',
			},
		],

		// PROBLEM SOLVING - MATH
		Math: [
			// EASY QUESTIONS (20)
			{
				question: 'What is the formula for calculating the area of a circle?',
				options: ['πr', '2πr', 'πr²', '2πr²'],
				correctAnswer: 'πr²',
				difficulty: 'easy',
			},
			{
				question: 'What is the sum of the first n natural numbers?',
				options: ['n(n+1)/2', 'n²', 'n(n-1)/2', 'n(n+1)'],
				correctAnswer: 'n(n+1)/2',
				difficulty: 'easy',
			},
			{
				question: 'What is the formula for the Fibonacci sequence?',
				options: ['F(n) = F(n-1) + F(n-2)', 'F(n) = F(n-1) × F(n-2)', 'F(n) = 2F(n-1)', 'F(n) = F(n-1)²'],
				correctAnswer: 'F(n) = F(n-1) + F(n-2)',
				difficulty: 'easy',
			},
			{
				question: 'Which of these is a prime number?',
				options: ['1', '4', '9', '11'],
				correctAnswer: '11',
				difficulty: 'easy',
			},
			{
				question: 'What is the value of sin(90°) in radians?',
				options: ['0', '1', '-1', 'π/2'],
				correctAnswer: '1',
				difficulty: 'easy',
			},
			{
				question: 'What is the formula for calculating the factorial of n?',
				options: ['n × (n-1)', 'n^n', 'n × (n-1)!', 'n + (n-1)!'],
				correctAnswer: 'n × (n-1)!',
				difficulty: 'easy',
			},
			{
				question: 'What is the value of log₁₀(100)?',
				options: ['1', '2', '10', '100'],
				correctAnswer: '2',
				difficulty: 'easy',
			},
			{
				question: 'What is the formula for calculating the perimeter of a rectangle?',
				options: ['2(l + w)', 'l × w', '2l + 2w', 'l + w'],
				correctAnswer: '2(l + w)',
				difficulty: 'easy',
			},
			{
				question: 'What is the result of dividing any number by zero?',
				options: ['0', '1', 'The number itself', 'Undefined'],
				correctAnswer: 'Undefined',
				difficulty: 'easy',
			},
			{
				question: 'What is 5! (5 factorial)?',
				options: ['25', '120', '60', '720'],
				correctAnswer: '120',
				difficulty: 'easy',
			},
			{
				question: 'What is the binary representation of the decimal number 10?',
				options: ['1010', '1100', '1001', '0101'],
				correctAnswer: '1010',
				difficulty: 'easy',
			},
			{
				question: 'What is the value of cos(0°)?',
				options: ['0', '1', '-1', 'Not defined'],
				correctAnswer: '1',
				difficulty: 'easy',
			},
			{
				question: 'What is the greatest common divisor (GCD) of 12 and 18?',
				options: ['2', '3', '6', '9'],
				correctAnswer: '6',
				difficulty: 'easy',
			},
			{
				question: 'What is the formula for calculating the area of a triangle?',
				options: ['(base × height)/2', 'base × height', '3 × side', 'side²'],
				correctAnswer: '(base × height)/2',
				difficulty: 'easy',
			},
			{
				question: 'What is the value of π (pi) to two decimal places?',
				options: ['3.12', '3.14', '3.16', '3.18'],
				correctAnswer: '3.14',
				difficulty: 'easy',
			},
			{
				question: 'What is the result of 2⁵?',
				options: ['10', '25', '32', '64'],
				correctAnswer: '32',
				difficulty: 'easy',
			},
			{
				question: 'What is the least common multiple (LCM) of 4 and 6?',
				options: ['8', '10', '12', '24'],
				correctAnswer: '12',
				difficulty: 'easy',
			},
			{
				question: 'What is the sum of angles in a triangle?',
				options: ['90°', '180°', '270°', '360°'],
				correctAnswer: '180°',
				difficulty: 'easy',
			},
			{
				question: 'What is the formula for the area of a rectangle?',
				options: ['length × width', '2(length + width)', 'length + width', 'length² + width²'],
				correctAnswer: 'length × width',
				difficulty: 'easy',
			},
			{
				question: 'What is the result of log₂(8)?',
				options: ['2', '3', '4', '6'],
				correctAnswer: '3',
				difficulty: 'easy',
			},

			// MEDIUM QUESTIONS (20)
			{
				question: 'What is the time complexity of the Euclidean algorithm for finding the GCD of two numbers?',
				options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n²)'],
				correctAnswer: 'O(log n)',
				difficulty: 'medium',
			},
			{
				question: 'Which of the following is used to find prime numbers efficiently?',
				options: [
					'Euclidean algorithm',
					'Sieve of Eratosthenes',
					'Chinese remainder theorem',
					'Fast Fourier transform',
				],
				correctAnswer: 'Sieve of Eratosthenes',
				difficulty: 'medium',
			},
			{
				question:
					'What is the time complexity of matrix multiplication for two n×n matrices using the standard algorithm?',
				options: ['O(n)', 'O(n²)', 'O(n³)', 'O(n log n)'],
				correctAnswer: 'O(n³)',
				difficulty: 'medium',
			},
			{
				question: 'What is the formula for calculating the number of permutations of n distinct objects?',
				options: ['n²', '2^n', 'n!', 'n/(n-r)!'],
				correctAnswer: 'n!',
				difficulty: 'medium',
			},
			{
				question:
					'What is the probability of getting exactly k successes in n independent Bernoulli trials with probability p?',
				options: ['nCk × p^k × (1-p)^(n-k)', 'nPk × p^k', 'p^k × (1-p)^n', 'nCk × p^n'],
				correctAnswer: 'nCk × p^k × (1-p)^(n-k)',
				difficulty: 'medium',
			},
			{
				question: 'What is the expected value of a discrete random variable X?',
				options: [
					'The most common value of X',
					'The middle value of X',
					'The sum of X values',
					'The sum of x*P(X=x) for all x',
				],
				correctAnswer: 'The sum of x*P(X=x) for all x',
				difficulty: 'medium',
			},
			{
				question: 'What is the pigeonhole principle?',
				options: [
					'If n+1 pigeons are placed in n holes, at least one hole must contain more than one pigeon',
					'If n pigeons are placed in n holes, each hole must have exactly one pigeon',
					'If n pigeons are placed in n+1 holes, at least one hole must be empty',
					'If n pigeons are placed in n holes, at least one pigeon must not be in a hole',
				],
				correctAnswer:
					'If n+1 pigeons are placed in n holes, at least one hole must contain more than one pigeon',
				difficulty: 'medium',
			},
			{
				question: 'Which of these is NOT a typical use of modular arithmetic in computer science?',
				options: ['Hash functions', 'Cryptography', 'Video rendering', 'Random number generation'],
				correctAnswer: 'Video rendering',
				difficulty: 'medium',
			},
			{
				question:
					'What is the formula for calculating the number of combinations of r items from a set of n distinct items?',
				options: ['n^r', 'n × r', 'n!/(r!×(n-r)!)', 'n!/(n-r)!'],
				correctAnswer: 'n!/(r!×(n-r)!)',
				difficulty: 'medium',
			},
			{
				question: "What is Bayes' theorem used for?",
				options: [
					'Finding the shortest path in a graph',
					'Calculating compound interest',
					'Updating probabilities based on new evidence',
					'Determining prime factors',
				],
				correctAnswer: 'Updating probabilities based on new evidence',
				difficulty: 'medium',
			},
			{
				question: 'Which of these is NOT a property of a valid probability distribution?',
				options: [
					'The sum of all probabilities equals 1',
					'Each probability is between 0 and 1',
					'The probabilities can be negative',
					'Each event has a single probability',
				],
				correctAnswer: 'The probabilities can be negative',
				difficulty: 'medium',
			},
			{
				question: 'What is the formula for calculating the standard deviation of a set of values?',
				options: [
					'The average of all values',
					'The square root of the variance',
					'The difference between the highest and lowest values',
					'The sum of all values divided by n-1',
				],
				correctAnswer: 'The square root of the variance',
				difficulty: 'medium',
			},
			{
				question: 'What is the time complexity of finding all prime factors of a number n?',
				options: ['O(√n)', 'O(log n)', 'O(n)', 'O(n log n)'],
				correctAnswer: 'O(√n)',
				difficulty: 'medium',
			},
			{
				question: 'What is the formula for the arithmetic sequence sum?',
				options: [
					'n × first term',
					'n × last term',
					'n/2 × (first term + last term)',
					'n × (first term - last term)',
				],
				correctAnswer: 'n/2 × (first term + last term)',
				difficulty: 'medium',
			},
			{
				question:
					'What is the expected number of trials until the first success in a Bernoulli process with probability p?',
				options: ['p', '1/p', 'p/(1-p)', '(1-p)/p'],
				correctAnswer: '1/p',
				difficulty: 'medium',
			},
			{
				question: 'Which algorithm is used for numerical integration?',
				options: ['Bubble sort', "Simpson's rule", 'Binary search', 'Breadth-first search'],
				correctAnswer: "Simpson's rule",
				difficulty: 'medium',
			},
			{
				question: 'What is the formula for the sum of a geometric series with first term a and common ratio r?',
				options: ['a/(1-r) for |r| < 1', 'a/(1+r)', 'a × r/(1-r)', 'a × (1-r^n)/(1-r)'],
				correctAnswer: 'a × (1-r^n)/(1-r)',
				difficulty: 'medium',
			},
			{
				question: 'What is the time complexity of the Extended Euclidean Algorithm?',
				options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'],
				correctAnswer: 'O(log n)',
				difficulty: 'medium',
			},
			{
				question:
					'What is the formula for calculating the number of ways to arrange n distinct objects in a row?',
				options: ['n', 'n^2', 'n!', '2^n'],
				correctAnswer: 'n!',
				difficulty: 'medium',
			},
			{
				question: 'What is the formula for the binomial theorem expansion of (x+y)^n?',
				options: ['Sum of nCr × x^r × y^(n-r) for r from 0 to n', 'x^n + y^n', 'n × (x+y)^(n-1)', '(x × y)^n'],
				correctAnswer: 'Sum of nCr × x^r × y^(n-r) for r from 0 to n',
				difficulty: 'medium',
			},

			// HARD QUESTIONS (20)
			{
				question: 'What is the modular multiplicative inverse of a number a modulo m?',
				options: [
					'A number b such that a + b ≡ 0 (mod m)',
					'A number b such that a × b ≡ 1 (mod m)',
					'A number b such that a ÷ b ≡ 0 (mod m)',
					'A number b such that a ÷ b ≡ 1 (mod m)',
				],
				correctAnswer: 'A number b such that a × b ≡ 1 (mod m)',
				difficulty: 'hard',
			},
			{
				question: 'What is the Chinese Remainder Theorem used for?',
				options: [
					'Finding prime numbers',
					'Solving systems of linear congruences',
					'Matrix multiplication',
					'Calculating geometric means',
				],
				correctAnswer: 'Solving systems of linear congruences',
				difficulty: 'hard',
			},
			{
				question: "What is Fermat's Little Theorem?",
				options: [
					'If p is prime and a is not divisible by p, then a^(p-1) ≡ 1 (mod p)',
					'The sum of the angles in a triangle is 180 degrees',
					'Every even integer greater than 2 can be expressed as the sum of two primes',
					'There are infinitely many prime numbers',
				],
				correctAnswer: 'If p is prime and a is not divisible by p, then a^(p-1) ≡ 1 (mod p)',
				difficulty: 'hard',
			},
			{
				question: 'Which algorithm is used for fast multiplication of large integers?',
				options: [
					'Euclidean algorithm',
					'Sieve of Eratosthenes',
					'Karatsuba algorithm',
					'Bellman-Ford algorithm',
				],
				correctAnswer: 'Karatsuba algorithm',
				difficulty: 'hard',
			},
			{
				question: 'What is the computational complexity of the Fast Fourier Transform (FFT)?',
				options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(n³)'],
				correctAnswer: 'O(n log n)',
				difficulty: 'hard',
			},
			{
				question: 'Which of the following algorithms can be used for primality testing?',
				options: [
					"Dijkstra's algorithm",
					'Miller-Rabin algorithm',
					"Kruskal's algorithm",
					'Floyd-Warshall algorithm',
				],
				correctAnswer: 'Miller-Rabin algorithm',
				difficulty: 'hard',
			},
			{
				question:
					'What is the time complexity of calculating the n-th Fibonacci number using matrix exponentiation?',
				options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n²)'],
				correctAnswer: 'O(log n)',
				difficulty: 'hard',
			},
			{
				question: "What is Euler's totient function φ(n) used to calculate?",
				options: [
					'The sum of divisors of n',
					'The product of prime factors of n',
					'The number of integers less than n that are coprime to n',
					'The number of distinct prime factors of n',
				],
				correctAnswer: 'The number of integers less than n that are coprime to n',
				difficulty: 'hard',
			},
			{
				question: 'What is the expected number of coin flips needed to get n consecutive heads?',
				options: ['n', '2^n - 1', '2^n', 'n^2'],
				correctAnswer: '2^n - 1',
				difficulty: 'hard',
			},
			{
				question: 'Which of the following is a use case for the Fast Fourier Transform?',
				options: ['Sorting arrays', 'Polynomial multiplication', 'Finding shortest paths', 'Binary search'],
				correctAnswer: 'Polynomial multiplication',
				difficulty: 'hard',
			},
			{
				question: 'What is the principle behind the RSA cryptosystem?',
				options: [
					'The difficulty of factoring large composite numbers',
					'The impossibility of solving the halting problem',
					'The complexity of sorting algorithms',
					'The randomness of quantum events',
				],
				correctAnswer: 'The difficulty of factoring large composite numbers',
				difficulty: 'hard',
			},
			{
				question:
					'What is the time complexity of calculating the determinant of an n×n matrix using cofactor expansion?',
				options: ['O(n)', 'O(n²)', 'O(n³)', 'O(n!)'],
				correctAnswer: 'O(n!)',
				difficulty: 'hard',
			},
			{
				question: 'What mathematical structure is the foundation of elliptic curve cryptography?',
				options: ['Binary trees', 'Finite fields', 'Linear arrays', 'Directed graphs'],
				correctAnswer: 'Finite fields',
				difficulty: 'hard',
			},
			{
				question: 'What is the time complexity of the Pollard Rho algorithm for integer factorization?',
				options: ['O(n)', 'O(n^(1/4))', 'O(√n)', 'O(log n)'],
				correctAnswer: 'O(√n)',
				difficulty: 'hard',
			},
			{
				question: 'What is the Riemann Hypothesis?',
				options: [
					'A conjecture about prime number distribution',
					'A theorem about integration',
					'A hypothesis about matrix multiplication',
					'A formula for calculating π',
				],
				correctAnswer: 'A conjecture about prime number distribution',
				difficulty: 'hard',
			},
			{
				question: 'What is the Cooley-Tukey algorithm used for?',
				options: [
					'Matrix inversion',
					'Computing the Fast Fourier Transform',
					'Finding shortest paths',
					'Prime factorization',
				],
				correctAnswer: 'Computing the Fast Fourier Transform',
				difficulty: 'hard',
			},
			{
				question: "What is the Pollard's p-1 algorithm used for?",
				options: ['Sorting arrays', 'Integer factorization', 'Matrix multiplication', 'Finding shortest paths'],
				correctAnswer: 'Integer factorization',
				difficulty: 'hard',
			},
			{
				question: 'What is the principle behind the El Gamal encryption system?',
				options: [
					'Integer factorization',
					'Discrete logarithm problem',
					'Matrix multiplication',
					'Prime number generation',
				],
				correctAnswer: 'Discrete logarithm problem',
				difficulty: 'hard',
			},
			{
				question: 'What is the Berlekamp-Massey algorithm used for?',
				options: [
					'Finding the shortest linear feedback shift register',
					'Sorting arrays',
					'Graph traversal',
					'Matrix multiplication',
				],
				correctAnswer: 'Finding the shortest linear feedback shift register',
				difficulty: 'hard',
			},
			{
				question: 'What is the time complexity of the General Number Field Sieve for integer factorization?',
				options: ['O(n)', 'O(n log n)', 'exp(O((log n)^(1/3) (log log n)^(2/3)))', 'O(2^n)'],
				correctAnswer: 'exp(O((log n)^(1/3) (log log n)^(2/3)))',
				difficulty: 'hard',
			},
		],
	},

	// PYTHON
	'Programming Languages': {
		python: [
			// EASY QUESTIONS (20)
			{
				question: 'What is the correct way to comment a single line in Python?',
				options: ['/* comment */', '# comment', '// comment', '<!-- comment -->'],
				correctAnswer: '# comment',
				difficulty: 'easy',
			},
			{
				question: 'Which of the following is NOT a built-in data type in Python?',
				options: ['list', 'dictionary', 'tuple', 'array'],
				correctAnswer: 'array',
				difficulty: 'easy',
			},
			{
				question: 'How do you create a list in Python?',
				options: ['list = (1, 2, 3)', 'list = [1, 2, 3]', 'list = {1, 2, 3}', 'list = <1, 2, 3>'],
				correctAnswer: 'list = [1, 2, 3]',
				difficulty: 'easy',
			},
			{
				question: "What will be the output of print(3 * '7')?",
				options: ['21', '777', '37', 'Error'],
				correctAnswer: '777',
				difficulty: 'easy',
			},
			{
				question: 'Which of the following is used to define a function in Python?',
				options: ['function', 'def', 'fun', 'define'],
				correctAnswer: 'def',
				difficulty: 'easy',
			},
			{
				question: 'What is the result of 7 // 2 in Python?',
				options: ['3.5', '3', '4', '2'],
				correctAnswer: '3',
				difficulty: 'easy',
			},
			{
				question: 'Which method is used to add an element to the end of a list?',
				options: ['append()', 'add()', 'extend()', 'insert()'],
				correctAnswer: 'append()',
				difficulty: 'easy',
			},
			{
				question: 'What is the output of print(list(range(5)))?',
				options: ['[0, 1, 2, 3, 4, 5]', '[0, 1, 2, 3, 4]', '[1, 2, 3, 4, 5]', '[5, 4, 3, 2, 1]'],
				correctAnswer: '[0, 1, 2, 3, 4]',
				difficulty: 'easy',
			},
			{
				question: 'How do you create a tuple in Python?',
				options: ['tuple = [1, 2, 3]', 'tuple = (1, 2, 3)', 'tuple = {1, 2, 3}', 'tuple = <1, 2, 3>'],
				correctAnswer: 'tuple = (1, 2, 3)',
				difficulty: 'easy',
			},
			{
				question: "What is the correct way to import a module named 'math' in Python?",
				options: ['import math', 'include math', 'using math', '#import math'],
				correctAnswer: 'import math',
				difficulty: 'easy',
			},
			{
				question: 'What is the output of print(10 / 3)?',
				options: ['3.0', '3', '3.33', '3.333333333333333'],
				correctAnswer: '3.333333333333333',
				difficulty: 'easy',
			},
			{
				question: 'How do you get the length of a list in Python?',
				options: ['list.size()', 'len(list)', 'list.length', 'list.length()'],
				correctAnswer: 'len(list)',
				difficulty: 'easy',
			},
			{
				question: 'What is the correct way to create a dictionary in Python?',
				options: ['dict = {}', 'dict = []', 'dict = ()', 'dict = <>'],
				correctAnswer: 'dict = {}',
				difficulty: 'easy',
			},
			{
				question: 'What is the output of print(bool(0))?',
				options: ['True', 'False', 'None', 'Error'],
				correctAnswer: 'False',
				difficulty: 'easy',
			},
			{
				question: 'How do you declare a variable in Python?',
				options: ['var x = 5', 'x = 5', 'int x = 5', 'define x = 5'],
				correctAnswer: 'x = 5',
				difficulty: 'easy',
			},
			{
				question: 'What is the purpose of the input() function in Python?',
				options: [
					'To print text to the console',
					'To take user input from the console',
					'To import modules',
					'To define functions',
				],
				correctAnswer: 'To take user input from the console',
				difficulty: 'easy',
			},
			{
				question: 'What is the correct way to create a set in Python?',
				options: ['set = {1, 2, 3}', 'set = [1, 2, 3]', 'set = (1, 2, 3)', 'set = <1, 2, 3>'],
				correctAnswer: 'set = {1, 2, 3}',
				difficulty: 'easy',
			},
			{
				question: 'How do you convert a string to an integer in Python?',
				options: ['int(string)', 'string.toInt()', 'convert(string, int)', 'string.int()'],
				correctAnswer: 'int(string)',
				difficulty: 'easy',
			},
			{
				question: "What is the output of print('Hello' + ' ' + 'World')?",
				options: ['Hello World', 'Hello + World', 'Hello  World', 'HelloWorld'],
				correctAnswer: 'Hello World',
				difficulty: 'easy',
			},
			{
				question: 'What does the pop() method do for a list in Python?',
				options: [
					'Adds an element at the end',
					'Removes the last element',
					'Removes the first element',
					'Adds an element at the beginning',
				],
				correctAnswer: 'Removes the last element',
				difficulty: 'easy',
			},

			// MEDIUM QUESTIONS (20)
			{
				question: 'How do you check if a key exists in a dictionary?',
				options: [
					'if key in dict:',
					'if key exists in dict:',
					'if dict.hasKey(key):',
					'if dict.contains(key):',
				],
				correctAnswer: 'if key in dict:',
				difficulty: 'medium',
			},
			{
				question: "What does the 'self' parameter in a class method refer to?",
				options: [
					'The class itself',
					'The current instance of the class',
					'The parent class',
					'The module containing the class',
				],
				correctAnswer: 'The current instance of the class',
				difficulty: 'medium',
			},
			{
				question: 'Which of the following is true about Python lists?',
				options: [
					'They can only contain elements of the same type',
					'They are immutable',
					'They are ordered collections',
					'They cannot contain duplicate elements',
				],
				correctAnswer: 'They are ordered collections',
				difficulty: 'medium',
			},
			{
				question: 'What is a lambda function in Python?',
				options: [
					'A function with multiple parameters',
					"An anonymous function defined with the 'lambda' keyword",
					'A function that returns multiple values',
					'A function that calls itself',
				],
				correctAnswer: "An anonymous function defined with the 'lambda' keyword",
				difficulty: 'medium',
			},
			{
				question: "What is the purpose of the 'with' statement in Python?",
				options: ['Loop control', 'Exception handling', 'Resource management', 'Module importing'],
				correctAnswer: 'Resource management',
				difficulty: 'medium',
			},
			{
				question: "What is the output of print(bool(0), bool(''), bool([]))?",
				options: ['True True True', 'False False False', 'True False True', 'False True False'],
				correctAnswer: 'False False False',
				difficulty: 'medium',
			},
			{
				question: 'Which of the following is NOT a valid way to create a set in Python?',
				options: ['set()', '{}', '{1, 2, 3}', 'set[1, 2, 3]'],
				correctAnswer: 'set[1, 2, 3]',
				difficulty: 'medium',
			},
			{
				question: "What is the difference between '==' and 'is' operators in Python?",
				options: [
					"'==' checks for value equality, 'is' checks for identity",
					"'==' is assignment, 'is' is comparison",
					"'==' works with numbers, 'is' works with strings",
					'There is no difference',
				],
				correctAnswer: "'==' checks for value equality, 'is' checks for identity",
				difficulty: 'medium',
			},
			{
				question: "What will be the output of '5' + 3 in Python?",
				options: ['8', '53', "'53'", 'TypeError'],
				correctAnswer: 'TypeError',
				difficulty: 'medium',
			},
			{
				question: 'What is the purpose of __init__ method in Python classes?',
				options: [
					'Initialize class variables',
					'Initialize instance variables',
					'Create a destructor',
					'Define static methods',
				],
				correctAnswer: 'Initialize instance variables',
				difficulty: 'medium',
			},
			{
				question: 'Which of these is NOT a valid way to iterate over a dictionary in Python?',
				options: [
					'for key in dict:',
					'for key, value in dict.items():',
					'for key in dict.keys():',
					'for key in dict.values():',
				],
				correctAnswer: 'for key in dict.values():',
				difficulty: 'medium',
			},
			{
				question: 'What is the output of print(list(filter(lambda x: x > 5, [2, 4, 6, 8, 10])))?',
				options: ['[2, 4]', '[6, 8, 10]', '[2, 4, 6]', '[8, 10]'],
				correctAnswer: '[6, 8, 10]',
				difficulty: 'medium',
			},
			{
				question: 'Which statement is used to raise an exception in Python?',
				options: ['throw', 'raise', 'except', 'error'],
				correctAnswer: 'raise',
				difficulty: 'medium',
			},
			{
				question: 'What does list comprehension provide in Python?',
				options: [
					'A concise way to create lists',
					'A way to sort lists',
					'A method to combine lists',
					'A technique to filter lists',
				],
				correctAnswer: 'A concise way to create lists',
				difficulty: 'medium',
			},
			{
				question: 'Which module is used for working with regular expressions in Python?',
				options: ['regex', 're', 'regexp', 'regular'],
				correctAnswer: 're',
				difficulty: 'medium',
			},
			{
				question: 'What is the output of print(2 ** 3 ** 2)?',
				options: ['64', '512', '36', 'None of these'],
				correctAnswer: '512',
				difficulty: 'medium',
			},
			{
				question: 'What will be the output of print([1, 2, 3] * 2)?',
				options: ['[1, 2, 3, 1, 2, 3]', '[2, 4, 6]', '[[1, 2, 3], [1, 2, 3]]', 'Error'],
				correctAnswer: '[1, 2, 3, 1, 2, 3]',
				difficulty: 'medium',
			},
			{
				question: 'What is a Python decorator?',
				options: [
					'A design pattern',
					'A way to modify functions or classes',
					'A type of comment',
					'A built-in function',
				],
				correctAnswer: 'A way to modify functions or classes',
				difficulty: 'medium',
			},
			{
				question: 'What is the difference between a list and a tuple in Python?',
				options: [
					'Lists can contain any data type, tuples cannot',
					'Lists are mutable, tuples are immutable',
					'Lists are ordered, tuples are unordered',
					'Lists are faster than tuples',
				],
				correctAnswer: 'Lists are mutable, tuples are immutable',
				difficulty: 'medium',
			},
			{
				question: "What is the purpose of the 'pass' statement in Python?",
				options: [
					'To skip the rest of the loop',
					'To pass a value to a function',
					'To indicate an empty block of code',
					'To exit a function',
				],
				correctAnswer: 'To indicate an empty block of code',
				difficulty: 'medium',
			},

			// HARD QUESTIONS (20)
			{
				question: 'What is a decorator in Python?',
				options: [
					'A design pattern',
					'A function that takes another function and extends its behavior',
					'A class inheritance method',
					'A type of loop',
				],
				correctAnswer: 'A function that takes another function and extends its behavior',
				difficulty: 'hard',
			},
			{
				question: 'What is a generator in Python?',
				options: [
					'A function that yields values one at a time',
					'A class that creates objects',
					'A method to generate random numbers',
					'A tool to create new modules',
				],
				correctAnswer: 'A function that yields values one at a time',
				difficulty: 'hard',
			},
			{
				question: 'What does the @ symbol do in Python?',
				options: ['String formatting', 'Matrix multiplication', 'Decorator application', 'Path joining'],
				correctAnswer: 'Decorator application',
				difficulty: 'hard',
			},
			{
				question: "What is the purpose of the 'nonlocal' keyword in Python?",
				options: [
					'Define a global variable',
					'Refer to a variable in an enclosing (but not global) scope',
					'Create a static variable',
					'Mark a function as not inheritable',
				],
				correctAnswer: 'Refer to a variable in an enclosing (but not global) scope',
				difficulty: 'hard',
			},
			{
				question: 'What is a context manager in Python?',
				options: [
					"A design pattern used with the 'with' statement",
					'A tool for managing memory',
					'A class for handling global variables',
					'A module importing system',
				],
				correctAnswer: "A design pattern used with the 'with' statement",
				difficulty: 'hard',
			},
			{
				question: 'What is a metaclass in Python?',
				options: [
					'A class that inherits from multiple parents',
					'A class that creates objects',
					'A class used to create other classes',
					'A class within another class',
				],
				correctAnswer: 'A class used to create other classes',
				difficulty: 'hard',
			},
			{
				question: 'What is monkey patching in Python?',
				options: [
					'A technique for testing with fake objects',
					'Dynamically modifying a class or module at runtime',
					'A way to handle exceptions',
					'A design pattern for object creation',
				],
				correctAnswer: 'Dynamically modifying a class or module at runtime',
				difficulty: 'hard',
			},
			{
				question: 'What is the difference between __new__ and __init__ in Python classes?',
				options: [
					'__new__ creates the instance, __init__ initializes it',
					'__new__ is deprecated, __init__ is current',
					'__init__ is called first, then __new__',
					'They are synonyms',
				],
				correctAnswer: '__new__ creates the instance, __init__ initializes it',
				difficulty: 'hard',
			},
			{
				question: 'What is the Global Interpreter Lock (GIL) in Python?',
				options: [
					'A security feature',
					'A mutex that protects accessing Python objects',
					'A compiler optimization',
					'A garbage collection mechanism',
				],
				correctAnswer: 'A mutex that protects accessing Python objects',
				difficulty: 'hard',
			},
			{
				question: 'What is the purpose of the __slots__ attribute in Python classes?',
				options: [
					'To define abstract methods',
					'To restrict attribute creation',
					'To implement multiple inheritance',
					'To define class constants',
				],
				correctAnswer: 'To restrict attribute creation',
				difficulty: 'hard',
			},
			{
				question: 'What are descriptors in Python?',
				options: [
					'Objects that define how attributes are accessed',
					'Special comments for documentation',
					'Function annotations',
					'Debugging tools',
				],
				correctAnswer: 'Objects that define how attributes are accessed',
				difficulty: 'hard',
			},
			{
				question: 'What is the difference between a deep copy and a shallow copy in Python?',
				options: [
					'Deep creates new references, shallow copies values',
					'Shallow creates new references, deep copies values',
					'Deep copies nested objects too, shallow only copies the outer object',
					'There is no difference',
				],
				correctAnswer: 'Deep copies nested objects too, shallow only copies the outer object',
				difficulty: 'hard',
			},
			{
				question: 'What is the purpose of Abstract Base Classes (ABCs) in Python?',
				options: [
					'To create simpler class hierarchies',
					'To define interfaces and enforce implementation',
					'To improve memory usage',
					'To speed up code execution',
				],
				correctAnswer: 'To define interfaces and enforce implementation',
				difficulty: 'hard',
			},
			{
				question: 'What is a coroutine in Python?',
				options: [
					'A type of loop',
					'A function that can pause and resume execution',
					'A class method',
					'A database connection',
				],
				correctAnswer: 'A function that can pause and resume execution',
				difficulty: 'hard',
			},
			{
				question: 'What is the difference between Counter, defaultdict, and OrderedDict in Python?',
				options: [
					'They are different names for the same thing',
					'Counter counts occurrences, defaultdict provides defaults for missing keys, OrderedDict maintains insertion order',
					'They are used in different versions of Python',
					'They have different performance characteristics',
				],
				correctAnswer:
					'Counter counts occurrences, defaultdict provides defaults for missing keys, OrderedDict maintains insertion order',
				difficulty: 'hard',
			},
			{
				question: 'What is the purpose of the functools.lru_cache decorator?',
				options: [
					'It improves memory management',
					'It caches function results for improved performance',
					'It helps with parallel processing',
					'It enforces function contracts',
				],
				correctAnswer: 'It caches function results for improved performance',
				difficulty: 'hard',
			},
			{
				question: "What are Python's dataclass decorators used for?",
				options: [
					'Creating functional programming paradigms',
					'Automating creation of special methods',
					'Managing database connections',
					'Enhancing performance',
				],
				correctAnswer: 'Automating creation of special methods',
				difficulty: 'hard',
			},
			{
				question: 'What is the difference between a Python module and a package?',
				options: [
					'Modules are built-in, packages are user-defined',
					'A package is a collection of modules',
					'Modules use .py extension, packages use .pkg',
					'There is no difference',
				],
				correctAnswer: 'A package is a collection of modules',
				difficulty: 'hard',
			},
			{
				question: 'What is duck typing in Python?',
				options: [
					'A way to handle exceptions',
					'Type checking at runtime',
					'A type of inheritance',
					'A programming concept where object suitability is determined by methods/attributes, not type',
				],
				correctAnswer:
					'A programming concept where object suitability is determined by methods/attributes, not type',
				difficulty: 'hard',
			},
			{
				question: 'What is the purpose of the __getattribute__ method in Python?',
				options: [
					'To handle exceptions',
					'To create new attributes',
					'To intercept all attribute access',
					'To import modules',
				],
				correctAnswer: 'To intercept all attribute access',
				difficulty: 'hard',
			},
		],

		// JAVA
		java: [
			// EASY QUESTIONS (20)
			{
				question: 'Which keyword is used to inherit a class in Java?',
				options: ['implements', 'extends', 'inherits', 'using'],
				correctAnswer: 'extends',
				difficulty: 'easy',
			},
			{
				question: 'What is the correct way to declare a constant in Java?',
				options: [
					'const int MAX = 100;',
					'final int MAX = 100;',
					'static int MAX = 100;',
					'constant int MAX = 100;',
				],
				correctAnswer: 'final int MAX = 100;',
				difficulty: 'easy',
			},
			{
				question: "Which of the following is the correct way to create an object of class 'MyClass'?",
				options: [
					'MyClass obj = new MyClass();',
					'new MyClass obj;',
					'obj = new MyClass;',
					'MyClass obj = MyClass();',
				],
				correctAnswer: 'MyClass obj = new MyClass();',
				difficulty: 'easy',
			},
			{
				question: 'What is the parent class of all classes in Java?',
				options: ['Class', 'Object', 'Main', 'Parent'],
				correctAnswer: 'Object',
				difficulty: 'easy',
			},
			{
				question: 'Which of these is not a valid access modifier in Java?',
				options: ['public', 'private', 'protected', 'friend'],
				correctAnswer: 'friend',
				difficulty: 'easy',
			},
			{
				question: 'What will be the output of System.out.println(5 / 2)?',
				options: ['2.5', '2', '3', '2.0'],
				correctAnswer: '2',
				difficulty: 'easy',
			},
			{
				question: 'Which of these is used to handle exceptions in Java?',
				options: ['try-catch', 'if-else', 'for-loop', 'switch-case'],
				correctAnswer: 'try-catch',
				difficulty: 'easy',
			},
			{
				question: 'What is the output of System.out.println("5" + 3)?',
				options: ['8', '53', '"53"', 'Error'],
				correctAnswer: '53',
				difficulty: 'easy',
			},
			{
				question: "What is the purpose of the 'this' keyword in Java?",
				options: [
					'To refer to the current class instance',
					'To call a method in the current class',
					'To create a new instance',
					'To refer to the parent class',
				],
				correctAnswer: 'To refer to the current class instance',
				difficulty: 'easy',
			},
			{
				question: 'What is a Java package used for?',
				options: [
					'To compress Java files',
					'To group related classes and interfaces',
					'To improve code execution speed',
					'To create executable JAR files',
				],
				correctAnswer: 'To group related classes and interfaces',
				difficulty: 'easy',
			},
			{
				question: 'Which of these is NOT a primitive data type in Java?',
				options: ['int', 'float', 'string', 'char'],
				correctAnswer: 'string',
				difficulty: 'easy',
			},
			{
				question: 'What is the default value of an int variable in Java?',
				options: ['0', '1', 'null', 'undefined'],
				correctAnswer: '0',
				difficulty: 'easy',
			},
			{
				question: 'What does JVM stand for?',
				options: [
					'Java Visual Machine',
					'Java Virtual Machine',
					'Java Variable Method',
					'Java Verified Module',
				],
				correctAnswer: 'Java Virtual Machine',
				difficulty: 'easy',
			},
			{
				question: 'Which statement is used to exit a loop in Java?',
				options: ['exit', 'break', 'stop', 'return'],
				correctAnswer: 'break',
				difficulty: 'easy',
			},
			{
				question: 'What is the correct way to create a string in Java?',
				options: [
					"String s = 'Hello';",
					'String s = "Hello";',
					'string s = "Hello";',
					'String s = new "Hello";',
				],
				correctAnswer: 'String s = "Hello";',
				difficulty: 'easy',
			},
			{
				question: 'Which method is used to find the length of a string in Java?',
				options: ['length()', 'size()', 'len()', 'getLength()'],
				correctAnswer: 'length()',
				difficulty: 'easy',
			},
			{
				question: 'What is the correct way to create an array in Java?',
				options: [
					'int arr[] = new int[5];',
					'int arr = new int[5];',
					'int[] arr = (5);',
					'array int[5] = new int;',
				],
				correctAnswer: 'int arr[] = new int[5];',
				difficulty: 'easy',
			},
			{
				question: 'What is the default value of boolean in Java?',
				options: ['true', 'false', 'null', '0'],
				correctAnswer: 'false',
				difficulty: 'easy',
			},
			{
				question: 'Which of these statements skips the current iteration of a loop?',
				options: ['skip', 'break', 'continue', 'pass'],
				correctAnswer: 'continue',
				difficulty: 'easy',
			},
			{
				question: 'What is the entry point of a Java application?',
				options: ['start()', 'run()', 'main()', 'execute()'],
				correctAnswer: 'main()',
				difficulty: 'easy',
			},

			// MEDIUM QUESTIONS (20)
			{
				question: 'What is an interface in Java?',
				options: [
					'A class with all abstract methods',
					'A class with some abstract methods',
					'A class that cannot be instantiated',
					'A subclass',
				],
				correctAnswer: 'A class with all abstract methods',
				difficulty: 'medium',
			},
			{
				question: "What is the purpose of the 'super' keyword in Java?",
				options: [
					"To call a superclass's constructor",
					'To declare a superclass',
					'To create a superclass object',
					'To override a superclass method',
				],
				correctAnswer: "To call a superclass's constructor",
				difficulty: 'medium',
			},
			{
				question: 'Which collection class provides the fastest lookups in Java?',
				options: ['ArrayList', 'LinkedList', 'HashMap', 'TreeSet'],
				correctAnswer: 'HashMap',
				difficulty: 'medium',
			},
			{
				question: "What is the difference between '==' and 'equals()' in Java?",
				options: [
					"'==' is for numbers, 'equals()' is for strings",
					"'==' compares references, 'equals()' compares content",
					"'equals()' is faster than '=='",
					'There is no difference',
				],
				correctAnswer: "'==' compares references, 'equals()' compares content",
				difficulty: 'medium',
			},
			{
				question: "What is the purpose of the 'static' keyword in Java?",
				options: [
					'To make a variable constant',
					'To create a class method or variable',
					'To prevent inheritance',
					'To allow multiple inheritance',
				],
				correctAnswer: 'To create a class method or variable',
				difficulty: 'medium',
			},
			{
				question: 'Which of these statements is true about Java?',
				options: [
					'Java is a purely object-oriented language',
					'Java supports multiple inheritance of classes',
					'Java is a functional programming language',
					'Java supports operator overloading',
				],
				correctAnswer: 'Java is a purely object-oriented language',
				difficulty: 'medium',
			},
			{
				question: 'What is a checked exception in Java?',
				options: [
					'An exception that occurs at compile time',
					'An exception that must be caught or declared',
					'An exception that cannot be handled',
					'An exception thrown by the JVM',
				],
				correctAnswer: 'An exception that must be caught or declared',
				difficulty: 'medium',
			},
			{
				question: 'Which interface is used to implement sorting in Java?',
				options: ['Sortable', 'Comparator', 'Comparable', 'Ordered'],
				correctAnswer: 'Comparable',
				difficulty: 'medium',
			},
			{
				question: 'What is method overloading in Java?',
				options: [
					'Defining multiple methods with the same name but different parameters',
					'Defining a method in a subclass with the same signature as in the superclass',
					'Defining a method that can take variable number of arguments',
					'Defining a method that can perform multiple operations',
				],
				correctAnswer: 'Defining multiple methods with the same name but different parameters',
				difficulty: 'medium',
			},
			{
				question: 'What is the difference between StringBuilder and StringBuffer in Java?',
				options: [
					'StringBuilder is synchronized, StringBuffer is not',
					'StringBuffer is synchronized, StringBuilder is not',
					'StringBuilder allows only append operations',
					'StringBuffer is deprecated',
				],
				correctAnswer: 'StringBuffer is synchronized, StringBuilder is not',
				difficulty: 'medium',
			},
			{
				question: "What is the purpose of the 'final' keyword when applied to a class?",
				options: [
					'The class cannot be instantiated',
					'The class cannot be extended',
					'The class cannot be garbage collected',
					'The class cannot be imported',
				],
				correctAnswer: 'The class cannot be extended',
				difficulty: 'medium',
			},
			{
				question: 'Which collection does not allow duplicate elements in Java?',
				options: ['ArrayList', 'LinkedList', 'Vector', 'HashSet'],
				correctAnswer: 'HashSet',
				difficulty: 'medium',
			},
			{
				question: 'What will be the output of the following code? int x = 10; System.out.println(x++ + ++x);',
				options: ['21', '22', '20', 'Compilation error'],
				correctAnswer: '22',
				difficulty: 'medium',
			},
			{
				question: "Which of these statements is true about Java's garbage collection?",
				options: [
					'Programmers must explicitly delete objects',
					'Memory leaks are impossible',
					'It automatically reclaims memory from unused objects',
					'It defragments the disk',
				],
				correctAnswer: 'It automatically reclaims memory from unused objects',
				difficulty: 'medium',
			},
			{
				question: "What is the purpose of the 'break' statement in a switch block?",
				options: [
					'To exit the switch statement',
					'To skip one case',
					'To transfer control to the default case',
					'To terminate the program',
				],
				correctAnswer: 'To exit the switch statement',
				difficulty: 'medium',
			},
			{
				question: 'What is the difference between method overloading and method overriding?',
				options: [
					'Overloading is compile-time polymorphism, overriding is runtime polymorphism',
					'Overloading is runtime polymorphism, overriding is compile-time polymorphism',
					'Overloading is for static methods, overriding is for instance methods',
					'There is no difference',
				],
				correctAnswer: 'Overloading is compile-time polymorphism, overriding is runtime polymorphism',
				difficulty: 'medium',
			},
			{
				question: "What is the purpose of Java's finally block?",
				options: [
					'To handle exceptions',
					'To execute code regardless of exception',
					'To terminate the program',
					'To declare final variables',
				],
				correctAnswer: 'To execute code regardless of exception',
				difficulty: 'medium',
			},
			{
				question: 'What is the default access modifier in Java?',
				options: ['public', 'private', 'protected', 'package-private (no modifier)'],
				correctAnswer: 'package-private (no modifier)',
				difficulty: 'medium',
			},
			{
				question: 'What is the instanceof operator used for in Java?',
				options: [
					'Arithmetic operations',
					'Creating new instances',
					'Checking if an object is of a specific type',
					'Comparing two objects',
				],
				correctAnswer: 'Checking if an object is of a specific type',
				difficulty: 'medium',
			},
			{
				question: 'What is the purpose of the synchronized keyword in Java?',
				options: [
					'To prevent thread interference',
					'To optimize code execution',
					'To declare constants',
					'To handle exceptions',
				],
				correctAnswer: 'To prevent thread interference',
				difficulty: 'medium',
			},

			// HARD QUESTIONS (20)
			{
				question: 'Which of the following is NOT a valid method to create an immutable class in Java?',
				options: [
					'Make all fields private and final',
					"Don't provide setter methods",
					'Make the class final',
					'Implement Serializable interface',
				],
				correctAnswer: 'Implement Serializable interface',
				difficulty: 'hard',
			},
			{
				question: "What is the purpose of the 'transient' keyword in Java?",
				options: [
					'To prevent a field from being serialized',
					'To make a field thread-safe',
					'To prevent a field from being inherited',
					'To make a field read-only',
				],
				correctAnswer: 'To prevent a field from being serialized',
				difficulty: 'hard',
			},
			{
				question: 'Which Java memory area stores class metadata and method code?',
				options: ['Heap', 'Stack', 'Metaspace', 'Program Counter Register'],
				correctAnswer: 'Metaspace',
				difficulty: 'hard',
			},
			{
				question: "What is the purpose of Java's ReentrantReadWriteLock?",
				options: [
					'To allow multiple readers but only one writer',
					'To implement recursive method calls',
					'To synchronize file reading and writing',
					'To ensure atomic operations on volatile variables',
				],
				correctAnswer: 'To allow multiple readers but only one writer',
				difficulty: 'hard',
			},
			{
				question: "Which statement about Java's CompletableFuture is NOT correct?",
				options: [
					'It can combine multiple asynchronous operations',
					'It allows for exception handling in asynchronous code',
					'It is a direct implementation of the Future interface',
					'It supports callback methods like thenApply() and thenCompose()',
				],
				correctAnswer: 'It is a direct implementation of the Future interface',
				difficulty: 'hard',
			},
			{
				question: 'What is the primary advantage of using the ForkJoinPool in Java?',
				options: [
					'It ensures sequential execution of tasks',
					'It implements work-stealing algorithm for balanced workload',
					'It guarantees thread safety without synchronization',
					'It eliminates the need for locks in concurrent programming',
				],
				correctAnswer: 'It implements work-stealing algorithm for balanced workload',
				difficulty: 'hard',
			},
			{
				question: 'Which access modifier in Java provides the most restrictive access?',
				options: ['private', 'protected', 'default (package-private)', 'public'],
				correctAnswer: 'private',
				difficulty: 'hard',
			},
			{
				question: "What is the purpose of the 'volatile' keyword in Java?",
				options: [
					'To prevent variable caching in thread-local memory',
					'To mark a variable as constant',
					'To prevent garbage collection of an object',
					'To optimize variable access for single-threaded applications',
				],
				correctAnswer: 'To prevent variable caching in thread-local memory',
				difficulty: 'hard',
			},
			{
				question: "Which statement about Java's PhantomReference is correct?",
				options: [
					'It prevents objects from being garbage collected',
					'It allows cleanup operations before an object is garbage collected',
					'It can be used to resurrect objects during finalization',
					'It cannot be dereferenced and get() always returns null',
				],
				correctAnswer: 'It cannot be dereferenced and get() always returns null',
				difficulty: 'hard',
			},
			{
				question: "What is the purpose of Java's ConcurrentSkipListMap?",
				options: [
					'To provide thread-safe operations on a skip list-based map',
					'To optimize memory usage for large maps',
					'To ensure keys are processed in insertion order',
					'To provide faster access to recently accessed elements',
				],
				correctAnswer: 'To provide thread-safe operations on a skip list-based map',
				difficulty: 'hard',
			},
			{
				question:
					'Which of the following annotations is used to ensure a method overrides a method in a superclass?',
				options: ['@Override', '@Implements', '@Extends', '@SuperMethod'],
				correctAnswer: '@Override',
				difficulty: 'hard',
			},
			{
				question: "What is the purpose of Java's ThreadLocal class?",
				options: [
					'To create thread pool executor services',
					'To provide thread-confined variables',
					'To implement inter-thread communication',
					'To define thread scheduling policies',
				],
				correctAnswer: 'To provide thread-confined variables',
				difficulty: 'hard',
			},
			{
				question: "Which statement about Java's method references is NOT correct?",
				options: [
					'They can reference static methods',
					'They can reference instance methods',
					'They can reference constructors',
					'They always require explicit parameter declarations',
				],
				correctAnswer: 'They always require explicit parameter declarations',
				difficulty: 'hard',
			},
			{
				question: 'What is the default initial capacity of a Java HashMap?',
				options: ['8', '10', '16', '32'],
				correctAnswer: '16',
				difficulty: 'hard',
			},
			{
				question: 'Which of the following is NOT a feature of Java Records?',
				options: [
					'Automatic generation of equals() and hashCode()',
					'Automatic generation of getters',
					'Mutable fields',
					'Compact constructor syntax',
				],
				correctAnswer: 'Mutable fields',
				difficulty: 'hard',
			},
			{
				question: "What does the 'synchronized' keyword guarantee in Java?",
				options: [
					'Only atomicity',
					'Only visibility',
					'Both atomicity and visibility',
					'Neither atomicity nor visibility',
				],
				correctAnswer: 'Both atomicity and visibility',
				difficulty: 'hard',
			},
			{
				question:
					'Which Java garbage collection algorithm is designed to minimize pauses by performing most garbage collection work concurrently with the application?',
				options: ['Serial GC', 'Parallel GC', 'G1 GC', 'Z GC'],
				correctAnswer: 'Z GC',
				difficulty: 'hard',
			},
			{
				question: "What is the purpose of Java's StampedLock?",
				options: [
					'To provide a more scalable alternative to ReadWriteLock',
					'To implement time-based locking mechanisms',
					'To create unique identifiers for distributed systems',
					'To manage exclusive access to I/O resources',
				],
				correctAnswer: 'To provide a more scalable alternative to ReadWriteLock',
				difficulty: 'hard',
			},
			{
				question: "Which statement about Java's MethodHandle is correct?",
				options: [
					'It provides a direct pointer to a method in memory',
					'It is a high-level replacement for reflection',
					'It cannot access private methods',
					'It is slower than using reflection',
				],
				correctAnswer: 'It is a high-level replacement for reflection',
				difficulty: 'hard',
			},
			{
				question:
					'What happens when you attempt to serialize a class that implements Serializable but contains a reference to a non-serializable object?',
				options: [
					'The code will not compile',
					'A NotSerializableException will be thrown at runtime',
					'The non-serializable object will be replaced with null',
					'The non-serializable object will be skipped during serialization',
				],
				correctAnswer: 'A NotSerializableException will be thrown at runtime',
				difficulty: 'hard',
			},
		],

		//C++
		cpp: [
			// Easy Questions (20)
			{
				question: 'What is the correct file extension for C++ source files?',
				options: ['.c', '.cpp', '.cxx', '.cp'],
				correctAnswer: '.cpp',
				difficulty: 'easy',
			},
			{
				question: 'Which header file is required for input and output in C++?',
				options: ['<stdio.h>', '<iostream>', '<io.h>', '<inputoutput.h>'],
				correctAnswer: '<iostream>',
				difficulty: 'easy',
			},
			{
				question: 'How do you define a single-line comment in C++?',
				options: ['/* comment */', '# comment', '// comment', '<!-- comment -->'],
				correctAnswer: '// comment',
				difficulty: 'easy',
			},
			{
				question: 'What is the correct way to include the standard namespace in C++?',
				options: ['using namespace std;', 'include namespace std;', 'import namespace std;', 'namespace std;'],
				correctAnswer: 'using namespace std;',
				difficulty: 'easy',
			},
			{
				question: 'What is the correct way to output text to the console in C++?',
				options: ['System.out.println();', 'cout <<', 'Console.WriteLine();', 'print()'],
				correctAnswer: 'cout <<',
				difficulty: 'easy',
			},
			{
				question: 'What is the correct way to declare an integer variable in C++?',
				options: ['int x;', 'integer x;', 'var x = int;', 'x as Integer'],
				correctAnswer: 'int x;',
				difficulty: 'easy',
			},
			{
				question: 'Which operator is used for pointer declaration in C++?',
				options: ['&', '*', '@', '#'],
				correctAnswer: '*',
				difficulty: 'easy',
			},
			{
				question: 'What is the result of 5 + 7 % 3 in C++?',
				options: ['4', '6', '7', '8'],
				correctAnswer: '6',
				difficulty: 'easy',
			},
			{
				question: 'Which loop is guaranteed to execute at least once in C++?',
				options: ['for loop', 'while loop', 'do-while loop', 'foreach loop'],
				correctAnswer: 'do-while loop',
				difficulty: 'easy',
			},
			{
				question: 'What is the correct way to define a constant in C++?',
				options: ['const int MAX = 100;', 'final int MAX = 100;', 'define MAX 100;', 'int MAX = 100 readonly;'],
				correctAnswer: 'const int MAX = 100;',
				difficulty: 'easy',
			},
			{
				question: 'Which data type is used to store a single character in C++?',
				options: ['char', 'string', 'character', 'letter'],
				correctAnswer: 'char',
				difficulty: 'easy',
			},
			{
				question: 'How do you start an if statement in C++?',
				options: ['if (condition) {', 'if condition {', 'if condition then {', 'if [condition] then {'],
				correctAnswer: 'if (condition) {',
				difficulty: 'easy',
			},
			{
				question: "What does the 'new' operator do in C++?",
				options: [
					'Creates a new variable',
					'Allocates memory dynamically',
					'Creates a new class',
					'Resets a variable to default value',
				],
				correctAnswer: 'Allocates memory dynamically',
				difficulty: 'easy',
			},
			{
				question: 'Which is the correct way to access a class method in C++?',
				options: ['object->method()', 'object::method()', 'object.method()', 'object@method()'],
				correctAnswer: 'object.method()',
				difficulty: 'easy',
			},
			{
				question: 'Which statement terminates a loop in C++?',
				options: ['exit', 'break', 'terminate', 'stop'],
				correctAnswer: 'break',
				difficulty: 'easy',
			},
			{
				question: 'Which operator is used to get the address of a variable in C++?',
				options: ['*', '&', '#', '@'],
				correctAnswer: '&',
				difficulty: 'easy',
			},
			{
				question: 'What is the correct data type for decimal numbers in C++?',
				options: ['int', 'float', 'decimal', 'numeric'],
				correctAnswer: 'float',
				difficulty: 'easy',
			},
			{
				question: "What is the purpose of 'endl' in C++?",
				options: [
					'End the program',
					'Insert a newline and flush the stream',
					'End a line of code',
					'End the loop',
				],
				correctAnswer: 'Insert a newline and flush the stream',
				difficulty: 'easy',
			},
			{
				question: 'Which symbol is used to terminate statements in C++?',
				options: ['.', ';', ':', ','],
				correctAnswer: ';',
				difficulty: 'easy',
			},
			{
				question: 'What is the default access modifier for class members in C++?',
				options: ['public', 'private', 'protected', 'There is no default'],
				correctAnswer: 'private',
				difficulty: 'easy',
			},

			// Medium Questions (20)
			{
				question: "What does the 'static' keyword mean in a class member variable declaration?",
				options: [
					'The variable cannot be changed',
					'The variable is shared among all instances of the class',
					'The variable is allocated on the stack',
					'The variable is only visible within the file',
				],
				correctAnswer: 'The variable is shared among all instances of the class',
				difficulty: 'medium',
			},
			{
				question: 'What is function overloading in C++?',
				options: [
					'Defining multiple functions with the same name but different parameters',
					'Calling one function from another',
					'Using a function pointer',
					'Overriding a parent class function',
				],
				correctAnswer: 'Defining multiple functions with the same name but different parameters',
				difficulty: 'medium',
			},
			{
				question: 'Which of the following is NOT a valid C++ data type?',
				options: ['long', 'double', 'char', 'String'],
				correctAnswer: 'String',
				difficulty: 'medium',
			},
			{
				question: 'What is a reference variable in C++?',
				options: [
					'A pointer to a variable',
					'An alias to an existing variable',
					'A global variable',
					'A static variable',
				],
				correctAnswer: 'An alias to an existing variable',
				difficulty: 'medium',
			},
			{
				question: 'What is a virtual function in C++?',
				options: [
					'A function that exists only in memory',
					'A function that can be overridden in a derived class',
					"A function that doesn't have a body",
					"A function that is declared as 'virtual'",
				],
				correctAnswer: 'A function that can be overridden in a derived class',
				difficulty: 'medium',
			},
			{
				question: "What does the 'friend' keyword do in a class declaration?",
				options: [
					'Makes the class inheritable',
					'Makes a function or class able to access private members',
					'Creates a friendly message',
					'Marks the class as deprecated',
				],
				correctAnswer: 'Makes a function or class able to access private members',
				difficulty: 'medium',
			},
			{
				question: "What is the difference between 'delete' and 'delete[]' in C++?",
				options: [
					"'delete' is for individual objects, 'delete[]' is for arrays",
					"'delete' is faster than 'delete[]'",
					"'delete' is for heap memory, 'delete[]' is for stack memory",
					'There is no difference',
				],
				correctAnswer: "'delete' is for individual objects, 'delete[]' is for arrays",
				difficulty: 'medium',
			},
			{
				question: 'What is a constructor in C++?',
				options: [
					'A function that builds objects',
					'A special member function that initializes objects',
					'A function that destroys objects',
					'A design pattern',
				],
				correctAnswer: 'A special member function that initializes objects',
				difficulty: 'medium',
			},
			{
				question: "What does the 'const' keyword after a member function declaration mean?",
				options: [
					"The function cannot modify the object's state",
					'The function returns a constant value',
					'The function has a constant execution time',
					'The function cannot be overridden',
				],
				correctAnswer: "The function cannot modify the object's state",
				difficulty: 'medium',
			},
			{
				question: 'What are operator overloading functions?',
				options: [
					'Functions that execute faster than normal functions',
					'Functions that allow operators to work with user-defined types',
					'Functions that optimize code at compile time',
					'Functions that override the default compiler behavior',
				],
				correctAnswer: 'Functions that allow operators to work with user-defined types',
				difficulty: 'medium',
			},
			{
				question: 'What is a template in C++?',
				options: [
					'A predefined class',
					'A design pattern',
					'A blueprint for creating generic classes or functions',
					'A form of inheritance',
				],
				correctAnswer: 'A blueprint for creating generic classes or functions',
				difficulty: 'medium',
			},
			{
				question: "What is the purpose of the 'this' pointer in C++?",
				options: [
					'To access the virtual table',
					'To reference the current object instance',
					'To access static members',
					'To indicate a null pointer',
				],
				correctAnswer: 'To reference the current object instance',
				difficulty: 'medium',
			},
			{
				question: 'Which of the following is not a valid type of constructor?',
				options: ['Default constructor', 'Copy constructor', 'Move constructor', 'Virtual constructor'],
				correctAnswer: 'Virtual constructor',
				difficulty: 'medium',
			},
			{
				question: 'What is name mangling in C++?',
				options: [
					'A technique to obfuscate code',
					'A process that encodes function names to support function overloading',
					'A way to shorten variable names',
					'A feature that allows multiple names for the same function',
				],
				correctAnswer: 'A process that encodes function names to support function overloading',
				difficulty: 'medium',
			},
			{
				question: 'What is a smart pointer in C++?',
				options: [
					'A pointer that can point to multiple memory locations at once',
					'A class template that manages memory automatically',
					'A pointer that cannot be nullptr',
					'A faster implementation of regular pointers',
				],
				correctAnswer: 'A class template that manages memory automatically',
				difficulty: 'medium',
			},
			{
				question: 'What is the purpose of the STL in C++?',
				options: [
					'To provide syntax templates',
					'To provide a collection of template classes for common data structures and algorithms',
					'To standardize threading libraries',
					'To improve compiler performance',
				],
				correctAnswer: 'To provide a collection of template classes for common data structures and algorithms',
				difficulty: 'medium',
			},
			{
				question: 'What is the main difference between struct and class in C++?',
				options: [
					'Structs cannot have member functions',
					'The default access level (public for struct, private for class)',
					'Structs are stored on the stack, classes on the heap',
					'Structs cannot inherit from other types',
				],
				correctAnswer: 'The default access level (public for struct, private for class)',
				difficulty: 'medium',
			},
			{
				question: 'What is function inlining in C++?',
				options: [
					"A compiler optimization that replaces function calls with the function's code",
					'A technique to make functions run in parallel',
					'Declaring functions inside other functions',
					'A way to link multiple functions together',
				],
				correctAnswer: "A compiler optimization that replaces function calls with the function's code",
				difficulty: 'medium',
			},
			{
				question: 'What is an abstract class in C++?',
				options: [
					'A class that cannot be instantiated and has at least one pure virtual function',
					'A class that has no concrete implementation',
					'A template class',
					'A class that exists only at compile time',
				],
				correctAnswer: 'A class that cannot be instantiated and has at least one pure virtual function',
				difficulty: 'medium',
			},
			{
				question: "What is the purpose of the 'explicit' keyword in a constructor?",
				options: [
					'To prevent automatic type conversion',
					'To allow multiple constructors with the same signature',
					'To make the constructor callable only once',
					'To enable explicit instantiation of templates',
				],
				correctAnswer: 'To prevent automatic type conversion',
				difficulty: 'medium',
			},

			// Hard Questions (20)
			{
				question: 'What is the Rule of Three in C++?',
				options: [
					'If a class defines a destructor, copy constructor, or copy assignment operator, it should define all three',
					'A guideline stating that functions should not have more than three parameters',
					'A principle that requires every class to implement three basic methods',
					'A C++ pattern requiring three-way inheritance',
				],
				correctAnswer:
					'If a class defines a destructor, copy constructor, or copy assignment operator, it should define all three',
				difficulty: 'hard',
			},
			{
				question: 'What is the purpose of std::move in C++?',
				options: [
					'To relocate objects in memory',
					'To convert an lvalue to an rvalue reference',
					'To move files within the filesystem',
					'To change the order of elements in a container',
				],
				correctAnswer: 'To convert an lvalue to an rvalue reference',
				difficulty: 'hard',
			},
			{
				question: 'What is RAII in C++?',
				options: [
					'Random Access Iterator Implementation',
					'Resource Acquisition Is Initialization',
					'Runtime Assembly Instruction Injection',
					'Recursive Algorithm Implementation Interface',
				],
				correctAnswer: 'Resource Acquisition Is Initialization',
				difficulty: 'hard',
			},
			{
				question: 'What is function object (functor) in C++?',
				options: [
					'A function that returns objects',
					'An object of a class that overloads the function call operator ()',
					'A function pointer',
					'A member function of a class',
				],
				correctAnswer: 'An object of a class that overloads the function call operator ()',
				difficulty: 'hard',
			},
			{
				question: 'What is the purpose of std::forward in C++?',
				options: [
					'To move an object to a new memory location',
					'To pass arguments while preserving their value category (perfect forwarding)',
					'To reorder elements in a container',
					'To redirect control flow to a different function',
				],
				correctAnswer: 'To pass arguments while preserving their value category (perfect forwarding)',
				difficulty: 'hard',
			},
			{
				question: 'What is the diamond problem in C++ multiple inheritance?',
				options: [
					'A memory layout issue with diamond-shaped data structures',
					'An ambiguity that arises when two classes B and C inherit from A, and class D inherits from both B and C',
					'A compiler optimization for diamond-shaped inheritance trees',
					'A performance issue when using multiple inheritance',
				],
				correctAnswer:
					'An ambiguity that arises when two classes B and C inherit from A, and class D inherits from both B and C',
				difficulty: 'hard',
			},
			{
				question: 'What is template specialization in C++?',
				options: [
					'A way to create specialized versions of a template for specific types',
					'A technique to optimize template compilation',
					'A method to restrict templates to certain types',
					'A way to make templates more generic',
				],
				correctAnswer: 'A way to create specialized versions of a template for specific types',
				difficulty: 'hard',
			},
			{
				question: 'What is the purpose of std::enable_if in C++?',
				options: [
					'To enable or disable code blocks at runtime',
					'To conditionally enable template functions based on compile-time predicates',
					'To enable features in the standard library',
					'To check if a function is enabled in a particular context',
				],
				correctAnswer: 'To conditionally enable template functions based on compile-time predicates',
				difficulty: 'hard',
			},
			{
				question: 'What is the difference between std::unique_ptr and std::shared_ptr?',
				options: [
					'unique_ptr is faster, shared_ptr is slower',
					'unique_ptr has exclusive ownership, shared_ptr allows shared ownership',
					"unique_ptr works with arrays, shared_ptr doesn't",
					'unique_ptr is part of C++11, shared_ptr was added in C++14',
				],
				correctAnswer: 'unique_ptr has exclusive ownership, shared_ptr allows shared ownership',
				difficulty: 'hard',
			},
			{
				question: 'What is a variadic template in C++?',
				options: [
					'A template that can vary its return type',
					'A template that can accept an arbitrary number of template arguments',
					'A template with variable visibility',
					'A template that can change at runtime',
				],
				correctAnswer: 'A template that can accept an arbitrary number of template arguments',
				difficulty: 'hard',
			},
			{
				question: 'What is SFINAE in C++?',
				options: [
					'System Function Interface Native Access Extension',
					'Substitution Failure Is Not An Error',
					'Standard Format Implementation for Native Application Execution',
					'Safe Function Invocation Native API Extension',
				],
				correctAnswer: 'Substitution Failure Is Not An Error',
				difficulty: 'hard',
			},
			{
				question: 'What is a memory fence/barrier in C++?',
				options: [
					'A security feature that prevents buffer overflows',
					'A mechanism to control memory accesses across multiple threads',
					'A way to mark memory as read-only',
					'A feature that prevents memory leaks',
				],
				correctAnswer: 'A mechanism to control memory accesses across multiple threads',
				difficulty: 'hard',
			},
			{
				question: 'What is the purpose of std::decay in C++ type traits?',
				options: [
					'To simulate the decay of heap objects over time',
					'To convert an array or function type to a pointer type, and remove cv-qualifiers',
					'To reduce memory consumption of unused objects',
					'To convert complex types to simpler representations',
				],
				correctAnswer: 'To convert an array or function type to a pointer type, and remove cv-qualifiers',
				difficulty: 'hard',
			},
			{
				question: "What's the difference between constexpr and const in C++?",
				options: [
					'constexpr is for functions, const is for variables',
					"constexpr guarantees evaluation at compile time, const only means the value won't change",
					'constexpr is faster than const',
					'constexpr was introduced in C++17, const has been in C++ since the beginning',
				],
				correctAnswer:
					"constexpr guarantees evaluation at compile time, const only means the value won't change",
				difficulty: 'hard',
			},
			{
				question: 'What is the Curiously Recurring Template Pattern (CRTP) in C++?',
				options: [
					'A design pattern where a derived class inherits from a template class instantiated with the derived class itself',
					'A pattern for implementing recursive templates',
					'A technique for optimizing template compilation',
					'A method for allowing templates to call each other recursively',
				],
				correctAnswer:
					'A design pattern where a derived class inherits from a template class instantiated with the derived class itself',
				difficulty: 'hard',
			},
			{
				question: 'What is decltype in C++?',
				options: [
					'A preprocessor directive to declare types',
					'A keyword that declares a type based on the type of an expression',
					'A function template that determines types at runtime',
					'A standard library type trait',
				],
				correctAnswer: 'A keyword that declares a type based on the type of an expression',
				difficulty: 'hard',
			},
			{
				question: 'What are fold expressions in C++?',
				options: [
					'Expressions that are optimized by the compiler',
					'A way to recursively fold template parameters with a binary operator',
					'A technique for folding long code lines',
					'A method for reducing memory usage in templates',
				],
				correctAnswer: 'A way to recursively fold template parameters with a binary operator',
				difficulty: 'hard',
			},
			{
				question: 'What is the difference between a shallow copy and a deep copy in C++?',
				options: [
					'Shallow copy is faster, deep copy is slower',
					'Shallow copy duplicates only the pointers, deep copy duplicates the pointed-to data as well',
					'Shallow copy works only with POD types, deep copy works with all types',
					'Shallow copy is used for primitive types, deep copy for user-defined types',
				],
				correctAnswer:
					'Shallow copy duplicates only the pointers, deep copy duplicates the pointed-to data as well',
				difficulty: 'hard',
			},
			{
				question: 'What is the purpose of volatile keyword in C++?',
				options: [
					'To mark variables that should be stored in volatile memory',
					'To indicate that a variable might change unexpectedly (by hardware or other threads)',
					'To mark code sections that are unstable',
					'To optimize variable access for multithreading',
				],
				correctAnswer: 'To indicate that a variable might change unexpectedly (by hardware or other threads)',
				difficulty: 'hard',
			},
			{
				question: 'What is the difference between std::function and a function pointer?',
				options: [
					'std::function is type-safe, function pointers are not',
					'std::function can store any callable object with a compatible signature, function pointers can only store functions',
					'std::function is part of C++11, function pointers are from C',
					'std::function is faster than function pointers',
				],
				correctAnswer:
					'std::function can store any callable object with a compatible signature, function pointers can only store functions',
				difficulty: 'hard',
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
