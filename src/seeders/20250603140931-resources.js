'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert('resources', [
			{
				resource_type: 'book',
				resource_level: 'beginner',
				resource_name: 'Programming Challenges',
				resource_url: 'https://www.amazon.com/Programming-Challenges-Contest-Training-Computer/dp/0387001638',
				resource_description: 'Great for learning basic problem-solving techniques and algorithms.',
			},
			{
				resource_type: 'book',
				resource_level: 'beginner',
				resource_name: 'Grokking Algorithms',
				resource_url:
					'https://www.amazon.com/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230',
				resource_description: 'A visual guide to learning algorithms for beginners.',
			},

			// Beginner - Links
			{
				resource_type: 'link',
				resource_level: 'beginner',
				resource_name: 'CS50x - Harvard',
				resource_url: 'https://cs50.harvard.edu/x/',
				resource_description: 'Intro to Computer Science course by Harvard.',
			},
			{
				resource_type: 'link',
				resource_level: 'beginner',
				resource_name: 'LeetCode Easy Problems',
				resource_url: 'https://leetcode.com/problemset/?difficulty=Easy',
				resource_description: 'LeetCode problems suited for beginners.',
			},
			{
				resource_type: 'link',
				resource_level: 'beginner',
				resource_name: 'HackerRank Algorithms Track',
				resource_url: 'https://www.hackerrank.com/domains/tutorials/10-days-of-javascript',
				resource_description: 'HackerRank practice problems and tutorials.',
			},

			// Beginner - Videos
			{
				resource_type: 'video',
				resource_level: 'beginner',
				resource_name: 'Abdul Bari – Data Structures & Algorithms',
				resource_url: 'https://www.youtube.com/playlist?list=PLfqMhTWNBTe0b2nM6JHVCnAkhQRGiZMSJ',
			},
			{
				resource_type: 'video',
				resource_level: 'beginner',
				resource_name: 'CodeWithHarry – DSA for Beginners (Hindi)',
				resource_url: 'https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME',
			},

			// 🟡 Intermediate - Books
			{
				resource_type: 'book',
				resource_level: 'intermediate',
				resource_name: 'Competitive Programming 3',
				resource_url: 'https://cpbook.net/',
				resource_description: 'Core reference book for CP preparation.',
			},
			{
				resource_type: 'book',
				resource_level: 'intermediate',
				resource_name: 'Introduction to Algorithms (CLRS)',
				resource_url: 'https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844',
				resource_description: 'The classic reference for algorithms and data structures.',
			},

			// Intermediate - Links
			{
				resource_type: 'link',
				resource_level: 'intermediate',
				resource_name: 'Binary Search Practice',
				resource_url: 'https://binarysearch.com/',
			},
			{
				resource_type: 'link',
				resource_level: 'intermediate',
				resource_name: 'Codeforces Problemset 1300–1700',
				resource_url: 'https://codeforces.com/problemset',
			},
			{
				resource_type: 'link',
				resource_level: 'intermediate',
				resource_name: 'LeetCode Medium Problems',
				resource_url: 'https://leetcode.com/problemset/?difficulty=Medium',
			},
			{
				resource_type: 'link',
				resource_level: 'intermediate',
				resource_name: 'CS106B: Programming Abstractions - Stanford',
				resource_url: 'https://web.stanford.edu/class/archive/cs/cs106b/cs106b.1216/',
			},

			// Intermediate - Videos
			{
				resource_type: 'video',
				resource_level: 'intermediate',
				resource_name: 'Errichto’s Competitive Programming Playlist',
				resource_url: 'https://www.youtube.com/playlist?list=PLl0KD3g-oDOGJUdmhFk19LaPgrfmAGQfo',
			},
			{
				resource_type: 'video',
				resource_level: 'intermediate',
				resource_name: 'William Fiset – Data Structures',
				resource_url: 'https://www.youtube.com/playlist?list=PLDV1Zeh2NRsBx2T4YKkC_6rLs5gxPU7wE',
			},

			// 🔴 Advanced - Books
			{
				resource_type: 'book',
				resource_level: 'advanced',
				resource_name: 'Art of Programming Contest',
				resource_url: 'https://drive.google.com/file/d/0B5Wq4VYFbW0QeW1uZ2lNcTliYzg/view',
			},
			{
				resource_type: 'book',
				resource_level: 'advanced',
				resource_name: 'Advanced Data Structures',
				resource_url: 'https://www.amazon.com/Advanced-Structures-Cambridge-Tracts-Computer/dp/0521880378',
			},

			// Advanced - Links
			{
				resource_type: 'link',
				resource_level: 'advanced',
				resource_name: 'Codeforces Educational Contests',
				resource_url: 'https://codeforces.com/edu/courses',
			},
			{
				resource_type: 'link',
				resource_level: 'advanced',
				resource_name: 'CP-Algorithms',
				resource_url: 'https://cp-algorithms.com/',
			},
			{
				resource_type: 'link',
				resource_level: 'advanced',
				resource_name: 'TopCoder Tutorials',
				resource_url: 'https://www.topcoder.com/thrive/tracks?track=Data%20Science&tax=Algorithm',
			},
			{
				resource_type: 'link',
				resource_level: 'advanced',
				resource_name: 'AtCoder Problems > 1800',
				resource_url: 'https://kenkoooo.com/atcoder/#/table/',
			},

			// Advanced - Videos
			{
				resource_type: 'video',
				resource_level: 'advanced',
				resource_name: 'SecondThread – Advanced Competitive Programming',
				resource_url: 'https://www.youtube.com/c/SecondThread',
			},
			{
				resource_type: 'video',
				resource_level: 'advanced',
				resource_name: 'NeetCode Advanced DSA',
				resource_url: 'https://www.youtube.com/c/NeetCode',
			},
		]);
	},

	async down(queryInterface, Sequelize) {
		/**
		 * Add commands to revert seed here.
		 *
		 * Example:
		 * await queryInterface.bulkDelete('People', null, {});
		 */
	},
};
