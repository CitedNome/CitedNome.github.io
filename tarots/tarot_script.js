
function drawCards() {
    const cardsContainer = document.querySelector('.cards-container');
    cardsContainer.innerHTML = '';

    let arcaniMaggiori = [
        'Il Matto', 'Il Mago', 'La Papessa', 'L\'Imperatrice', 'L\'Imperatore', 
        'Il Papa', 'Gli Amanti', 'Il Carro', 'La Giustizia', 'L\'Eremita', 
        'La Ruota della Fortuna', 'La Forza', 'L\'Appeso', 'La Morte', 
        'La Temperanza', 'Il Diavolo', 'La Torre', 'La Stella', 'La Luna', 
        'Il Sole', 'Il Giudizio', 'Il Mondo'
    ];

    // Estrarre tre carte casuali senza duplicati
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * arcaniMaggiori.length);
        const card = arcaniMaggiori.splice(randomIndex, 1)[0];
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.textContent = card;
        cardsContainer.appendChild(cardElement);
    }
}