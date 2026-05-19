const express = require('express');
const path = require('path');
const knowledge = require('./knowledge');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9 ]/g, ' ');
}

function matchTopic(question, language) {
  const normalized = normalize(question);
  const tokens = normalized.split(/\s+/).filter(Boolean);
  let best = {topic: null, score: 0};

  const candidates = knowledge.filter(item => {
    return !language || item.language.toLowerCase() === language.toLowerCase();
  });

  for (const item of candidates) {
    let score = 0;
    for (const keyword of item.keywords) {
      if (normalized.includes(keyword.toLowerCase())) {
        score += 2;
      }
    }
    for (const token of tokens) {
      if (item.tags.includes(token)) {
        score += 1;
      }
    }
    if (score > best.score) {
      best = {topic: item, score};
    }
  }

  return best.topic || candidates[0] || null;
}

app.post('/api/ask', (req, res) => {
  const {language, question} = req.body;
  if (!question || typeof question !== 'string') {
    return res.status(400).json({error: 'Please ask a valid coding question.'});
  }

  const topic = matchTopic(question, language);
  if (!topic) {
    return res.json({
      language: language || 'General',
      answer: 'I am still learning to answer that question. Try asking about Java, Python, or JavaScript concepts, or choose a training module.',
      topic: null,
      suggestions: knowledge.slice(0, 3).map(item => ({title: item.title, language: item.language}))
    });
  }

  res.json({
    language: topic.language,
    answer: topic.answer,
    example: topic.example,
    help: topic.help,
    topic: topic.title,
    suggestions: knowledge.filter(item => item.language === topic.language).slice(0, 3).map(item => ({title: item.title, language: item.language}))
  });
});

app.get('/api/training', (req, res) => {
  const training = knowledge
    .filter(item => item.training)
    .map(item => ({language: item.language, title: item.title, challenge: item.challenge, solution: item.solution}));
  res.json({training});
});

app.listen(port, () => {
  console.log(`Studious Spork tutor running on http://localhost:${port}`);
});
