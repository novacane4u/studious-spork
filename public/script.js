const responseElement = document.getElementById('response');
const askButton = document.getElementById('askButton');
const languageSelect = document.getElementById('language');
const questionInput = document.getElementById('question');
const trainingList = document.getElementById('trainingList');

async function sendQuestion() {
  const language = languageSelect.value;
  const question = questionInput.value.trim();
  if (!question) {
    alert('Type a coding question first.');
    return;
  }

  const res = await fetch('/api/ask', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({language, question})
  });

  const data = await res.json();
  displayResponse(data);
}

function displayResponse(data) {
  responseElement.classList.remove('hidden');
  responseElement.innerHTML = `
    <h3>Answer (${data.language})</h3>
    <p>${data.answer}</p>
    ${data.example ? `<h4>Example</h4><pre>${data.example}</pre>` : ''}
    ${data.help ? `<h4>Tip</h4><p>${data.help}</p>` : ''}
    ${data.suggestions ? `<h4>Try another topic</h4><ul>${data.suggestions.map(item => `<li>${item.language}: ${item.title}</li>`).join('')}</ul>` : ''}
  `;
}

async function loadTraining() {
  const res = await fetch('/api/training');
  const data = await res.json();
  trainingList.innerHTML = data.training.map((item, index) => `
    <article class="card">
      <h4>${item.language} challenge</h4>
      <p>${item.challenge}</p>
      <button type="button" data-index="${index}">Show solution</button>
      <pre class="hidden" id="solution-${index}">${item.solution}</pre>
    </article>
  `).join('');

  trainingList.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', event => {
      const index = event.currentTarget.dataset.index;
      document.getElementById(`solution-${index}`).classList.toggle('hidden');
    });
  });
}

askButton.addEventListener('click', sendQuestion);
questionInput.addEventListener('keydown', event => {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault();
    sendQuestion();
  }
});

loadTraining();
