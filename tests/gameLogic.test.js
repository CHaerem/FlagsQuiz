const { initGame, loadQuestion, checkAnswer } = require('../index.html');

describe('Game Logic Tests', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="game-container">
                <div id="header">
                    <div id="score">Score: 0</div>
                    <div id="timer">20s</div>
                </div>
                <div id="flag-container">
                    <div id="loading"><div class="spinner"></div><span>Loading...</span></div>
                    <div id="flag-display"></div>
                </div>
                <div id="options">
                    <button class="option"></button>
                    <button class="option"></button>
                    <button class="option"></button>
                    <button class="option"></button>
                </div>
                <div class="time-added">+2s</div>
            </div>
            <div id="game-over">
                <div id="final-score">Final Score: 0</div>
                <button id="play-again">Play Again</button>
            </div>
            <div id="start-menu">
                <button data-level="easy">Easy</button>
                <button data-level="medium">Medium</button>
                <button data-level="hard">Hard</button>
                <button data-level="chill">Chill Mode</button>
            </div>
        `;
    });

    test('initGame function initializes the game correctly', () => {
        initGame();
        expect(document.getElementById('score').textContent).toBe('Score: 0');
        expect(document.getElementById('timer').textContent).toBe('20s');
        expect(document.getElementById('game-over').style.display).toBe('none');
    });

    test('loadQuestion function loads a new question', () => {
        loadQuestion();
        const options = document.querySelectorAll('.option');
        expect(options.length).toBe(4);
        options.forEach(option => {
            expect(option.textContent).not.toBe('');
        });
    });

    test('checkAnswer function checks the answer correctly', () => {
        loadQuestion();
        const correctAnswer = document.querySelector('.option').textContent;
        document.querySelector('.option').click();
        expect(document.querySelector('.option.correct')).not.toBeNull();
    });
});
