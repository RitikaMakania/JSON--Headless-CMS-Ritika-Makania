// Fetch and inject values into existing static cards
fetch('JSON/cards.json?nocache=' + Date.now())
  .then(res => {
    if (!res.ok) {
      throw new Error('Failed to fetch cards.json');
    }
    return res.json();
  })
  .then(cards => {
    console.log('Fetched cards:', cards);

    const textElements = document.querySelectorAll('.card-text');
    const valueElements = document.querySelectorAll('.card-title');

    cards.forEach((card, index) => {
      if (textElements[index] && valueElements[index]) {
        textElements[index].textContent = card.label;
        valueElements[index].textContent = card.value;
      }
    });
  })
  .catch(err => {
    console.error('Error loading dashboard cards:', err);
  });
