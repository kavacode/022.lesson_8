const voteCounts = Array.from({ length: 5 }, () => 0);

function vote(smileyIndex) {
	voteCounts[smileyIndex] += 1;
	updateVoteCounts();
}

function updateVoteCounts() {
	const voteCountsContainer = document.getElementById('voteCounts');
	voteCountsContainer.innerHTML = '';

	const resultLabel = document.createElement('div');
	resultLabel.textContent = 'Результат голосования:';
	voteCountsContainer.appendChild(resultLabel);

	voteCounts.forEach((count, index) => {
		const smiley = document.createElement('div');
		smiley.textContent = `Смайлик №${index + 1}: ${count} голосов`;
		voteCountsContainer.appendChild(smiley);
	});
}


// const voteCounts = ["🙂", "🙃", "😉", "🤣", "😴"];

// function vote(smileyIndex) {
// 	voteCounts[smileyIndex].count += 1;
// 	updateVoteCounts();
// }
// function updateVoteCounts() {
// 	const voteCountsContainer = document.getElementById('voteCounts');
// 	voteCountsContainer.innerHTML = '';

// 	const resultLabel = document.createElement('div');
// 	resultLabel.textContent = 'Результат голосования:';
// 	voteCountsContainer.appendChild(resultLabel);

// 	voteCounts.forEach((voteCount, index) => {
// 		const smiley = document.createElement('div');
// 		smiley.textContent = `Смайлик ${index + 1}: ${voteCount.count} голосов`;
// 		voteCountsContainer.appendChild(smiley);
// 	});
// }

