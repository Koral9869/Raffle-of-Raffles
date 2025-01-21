const shuffledValues = [1, 5, 10, 25, 50, 100, 200, 500, 1000, 5000].sort(() => Math.random() - 0.5);

document.querySelectorAll('.briefcase').forEach((briefcase, index) => {
  briefcase.addEventListener('click', () => {
    const img = briefcase.querySelector('img');

    // Check if the briefcase is already opened
    if (img.src.includes('briefcase-opened')) return;

    // Reveal the value and update the image
    const value = shuffledValues[index];
    img.src = 'images/briefcase-opened.png'; // Replace with opened briefcase image
    briefcase.innerHTML += `<p>$${value}</p>`; // Show the value under the briefcase
  });
});
