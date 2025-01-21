const values = [1, 5, 10, 25, 50, 100, 200, 500, 1000, 5000];
const shuffledValues = values.sort(() => Math.random() - 0.5);

const briefcases = document.querySelectorAll('.briefcase');

briefcases.forEach((briefcase, index) => {
  briefcase.addEventListener('click', () => {
    if (!briefcase.classList.contains('opened')) {
      const value = shuffledValues[index];
      briefcase.textContent = `$${value}`;
      briefcase.classList.add('opened');
      updateStatus(value);
    }
  });
});

function updateStatus(value) {
  const status = document.getElementById('status');
  status.textContent = `You revealed: $${value}`;
}
