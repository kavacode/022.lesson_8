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
	 //делегування
	 const smilesContainer = document.getElementById('smiles');
	 smilesContainer.addEventListener('click', function (event) {
		const smileyElements = document.querySelectorAll('.smiley');
		const smileyIndex = Array.from(smileyElements).indexOf(event.target);
		if (event.target.classList.contains('smiley') && smileyIndex !== -1) {
		  vote(smileyIndex);
		}
	 });