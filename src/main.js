import './style.css';
import { words as words1 } from '../data/index.js';
import { words as words2 } from '../data/2-index.js';
import { words as words3 } from '../data/3-index.js';
import { words as words4 } from '../data/4-index.js';
import { GoogleGenerativeAI } from "@google/generative-ai";

const words = [...words1, ...words2, ...words3, ...words4];
const FAMILIAR_PROMPT = `Bạn là giáo viên tiếng Anh dạy người Việt.`;

// Khởi tạo Gemini AI
let model;
function getGeminiModel() {
  if (model) return model;
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  if (!apiKey || apiKey === 'your_api_key_here') {
    throw new Error('MISSING_API_KEY');
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
  return model;
}

let current = 0;
let done = new Set();
const RANGE_SIZE = 100;
let currentRangeStart = 0;

function saveDone() {
  localStorage.setItem('vocabulary_done_ids', JSON.stringify([...done]));
}

function loadDone() {
  const saved = localStorage.getItem('vocabulary_done_ids');
  if (saved) {
    try {
      done = new Set(JSON.parse(saved));
    } catch (e) {
      console.error("Error loading progress:", e);
      done = new Set();
    }
  }
}

function buildRangeSelector() {
  const select = document.getElementById('rangeSelect');
  if (!select) return;
  select.innerHTML = '';
  const numRanges = Math.ceil(words.length / RANGE_SIZE);

  for (let i = 0; i < numRanges; i++) {
    const start = i * RANGE_SIZE;
    const end = Math.min(start + RANGE_SIZE, words.length);
    const option = document.createElement('option');
    option.value = start;
    option.textContent = `Từ ${start + 1} – ${end}`;
    if (start === currentRangeStart) option.selected = true;
    select.appendChild(option);
  }

  select.onchange = (e) => {
    currentRangeStart = parseInt(e.target.value);
    buildNav();
    buildCards();
  };
}

function buildNav() {
  const nav = document.getElementById('wordNav');
  nav.innerHTML = '';
  const rangeEnd = Math.min(currentRangeStart + RANGE_SIZE, words.length);

  for (let i = currentRangeStart; i < rangeEnd; i++) {
    const w = words[i];
    const btn = document.createElement('button');
    btn.className = 'nav-btn' + (i === current ? ' active' : '');
    if (done.has(i)) btn.classList.add('done');
    btn.id = 'nav-' + i;
    btn.textContent = `${w.id}. ${w.word}`;
    btn.onclick = () => goTo(i);
    nav.appendChild(btn);
  }
}

function buildCards() {
  const main = document.getElementById('main');
  main.innerHTML = '';
  const rangeEnd = Math.min(currentRangeStart + RANGE_SIZE, words.length);

  for (let i = currentRangeStart; i < rangeEnd; i++) {
    const w = words[i];
    const card = document.createElement('div');
    card.className = 'word-card' + (i === current ? ' active' : '');
    card.id = 'card-' + i;

    const examplesHtml = w.examples.map((ex, j) => `
      <li class="example-item">
        <div class="example-en">${j+1}. ${ex.en.replace(/<b>(.*?)<\/b>/g, '<b class="example-highlight">$1</b>')}</div>
        <div class="example-vi">→ Dịch: ${ex.vi}</div>
      </li>
    `).join('');

    const groupStart = Math.floor(i / 20) * 20 + 1;
    const groupEnd = groupStart + 19;
    card.innerHTML = `
      <div class="card-header">
        <div class="word-number">TỪ SỐ ${w.id} / ${words.length} · NHÓM ${groupStart}–${groupEnd}</div>
        <div class="word-main">${w.word}</div>
        <div class="word-ipa">${w.ipa}</div>
        <span class="word-type-badge">${w.type}</span>
      </div>

      <div class="section">
        <div class="section-label">🇻🇳 Nghĩa tiếng Việt</div>
        <div class="meaning-vi">${w.meaning}</div>
      </div>

      <div class="section">
        <div class="section-label">📖 Giải thích đơn giản</div>
        <p class="explanation">${w.explanation}</p>
      </div>

      <div class="section">
        <div class="section-label">💬 Ví dụ câu thực tế</div>
        <ul class="example-list">${examplesHtml}</ul>
      </div>

      <div class="section">
        <div class="section-label">⚠️ Cách dùng đúng & sai thường gặp</div>
        <div class="usage-grid">
          <div class="usage-item usage-correct"><span class="usage-label">✅ ĐÚNG</span>${w.correct}</div>
          <div class="usage-item usage-wrong"><span class="usage-label">❌ SAI</span>${w.wrong}</div>
        </div>
      </div>

      <div class="section">
        <div class="section-label">🔗 Từ liên quan</div>
        <div class="related-grid">
          <div class="related-item"><div class="related-type">ĐỒNG NGHĨA</div><div class="related-words">${w.synonyms}</div></div>
          <div class="related-item"><div class="related-type">TRÁI NGHĨA</div><div class="related-words">${w.antonyms}</div></div>
          <div class="related-item"><div class="related-type">GỐC TỪ</div><div class="related-words">${w.root}</div></div>
        </div>
      </div>

      <div class="section">
        <div class="section-label">🧠 Mẹo nhớ từ</div>
        <div class="memory-tip">${w.tip}</div>
      </div>

      <div class="section">
        <div class="section-label">✍️ Luyện tập</div>
        <div class="practice-area">
          <p class="practice-prompt">${w.practice}</p>
          <textarea class="practice-input" id="practice-input-${i}" placeholder="Nhập câu của bạn tại đây..."></textarea>
          <button class="practice-submit" id="practice-submit-${i}">Kiểm tra câu ✓</button>
          <div class="practice-feedback" id="practice-feedback-${i}"></div>
        </div>
      </div>

      <button class="done-btn${done.has(i) ? ' marked' : ''}" id="done-btn-${i}">
        ${done.has(i) ? '✓ Đã học!' : '✓ Đánh dấu đã học từ này'}
      </button>

      <div class="card-nav">
        <button class="nav-control" id="prev-${i}" ${i===0?'disabled':''}>← Từ trước</button>
        <span class="card-counter">${i+1} / ${words.length}</span>
        <button class="nav-control" id="next-${i}" ${i===words.length-1?'disabled':''}>Từ tiếp theo →</button>
      </div>
    `;
    main.appendChild(card);

    // Event listeners
    document.getElementById(`practice-submit-${i}`).onclick = () => checkPractice(i);
    document.getElementById(`done-btn-${i}`).onclick = () => markDone(i);
    document.getElementById(`prev-${i}`).onclick = () => goTo(i - 1);
    document.getElementById(`next-${i}`).onclick = () => goTo(i + 1);
  }
}

function goTo(idx) {
  if (idx < 0 || idx >= words.length) return;

  // Kiểm tra nếu idx nằm ngoài range hiện tại
  if (idx < currentRangeStart || idx >= currentRangeStart + RANGE_SIZE) {
    currentRangeStart = Math.floor(idx / RANGE_SIZE) * RANGE_SIZE;
    const select = document.getElementById('rangeSelect');
    if (select) select.value = currentRangeStart;
    buildNav();
    buildCards();
  }

  document.querySelector('.word-card.active')?.classList.remove('active');
  document.querySelector('.nav-btn.active')?.classList.remove('active');
  
  const card = document.getElementById('card-' + idx);
  if (card) card.classList.add('active');
  
  const nb = document.getElementById('nav-' + idx);
  if (nb) {
    nb.classList.add('active');
    nb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
  current = idx;
  updateProgress();
}

function markDone(idx) {
  const btn = document.getElementById('done-btn-' + idx);
  const nb = document.getElementById('nav-' + idx);

  if (done.has(idx)) {
    done.delete(idx);
    if (btn) {
      btn.classList.remove('marked');
      btn.textContent = '✓ Đánh dấu đã học từ này';
    }
    if (nb) nb.classList.remove('done');
  } else {
    done.add(idx);
    if (btn) {
      btn.classList.add('marked');
      btn.textContent = '✓ Đã học!';
    }
    if (nb) nb.classList.add('done');
  }

  saveDone();
  updateProgress();
}

function updateProgress() {
  const pct = (done.size / words.length) * 100;
  const pb = document.getElementById('progressBar');
  if (pb) pb.style.width = pct + '%';
}

async function checkPractice(idx) {
  const input = document.getElementById('practice-input-' + idx);
  const feedback = document.getElementById('practice-feedback-' + idx);
  const sentence = input?.value.trim();
  const word = words[idx];

  if (!sentence) { alert('Hãy nhập câu của bạn trước nhé!'); return; }

  feedback.style.display = 'block';
  feedback.className = 'practice-feedback show';
  feedback.innerHTML = '⏳ Đang phân tích câu của bạn...';

  try {
    const model = getGeminiModel();
    const prompt = `${FAMILIAR_PROMPT} Học sinh vừa học từ "${word.word}" (${word.meaning}).
Câu học sinh đặt: "${sentence}"
Hãy:
1. Kiểm tra câu có dùng đúng từ "${word.word}" không (phải có từ này trong câu)
2. Sửa lỗi ngữ pháp/chính tả nếu có
3. Khen ngợi điểm tốt
4. Đưa ra gợi ý cải thiện nếu cần
Trả lời bằng tiếng Việt, thân thiện, ngắn gọn (3-5 câu). Bắt đầu bằng ✅ nếu câu đúng hoặc 💡 nếu cần sửa.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    feedback.innerHTML = text.replace(/\n/g, '<br>');
  } catch (e) {
    console.error("Gemini Error:", e);
    feedback.innerHTML = '⚠️ Lỗi kết nối Gemini. Hãy thử lại sau!';
  }
}

document.addEventListener('DOMContentLoaded', () => {
    loadDone();
    buildRangeSelector();
    buildNav();
    buildCards();
    updateProgress();
});
