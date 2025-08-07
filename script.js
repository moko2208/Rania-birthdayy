// Sections management
function nextSection(id) {
  document.querySelector('section.active').classList.remove('active');
  document.getElementById(id).classList.add('active');
}

// 2. Secret Gift
function openGift() {
  document.getElementById('giftReveal').classList.remove('hidden');
}

// 3. Cake Time (candles & blow)
function lightCandles() {
  alert('🕯️ Candles lit! Now blow into mic to extinguish (feature coming soon).');
}

// 6. Games placeholders
function startQuiz()   { alert('🤔 Quiz starting (coming soon)!'); }
function spinWheel()   { alert('🎡 Spinning wheel (coming soon)!'); }
function messageWall() { alert('💌 Write your message (coming soon)!'); }

// 9. Future Letter
function openFuture() {
  alert('⏳ This letter opens after 365 days. See you next year!');
}

// Initialize
window.onload = () => {
  document.getElementById('intro').classList.add('active');
};
