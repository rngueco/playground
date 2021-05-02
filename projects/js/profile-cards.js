class ProfileCard extends HTMLElement {
    constructor() {
        super();

        let template = document.getElementById('profile-card-template');
        let templateContent = template.content;

        // Create shadow root
        const shadowRoot = this.attachShadow({
            mode: 'open'
        }).appendChild(templateContent.cloneNode(true));
    }
}

customElements.define('profile-card', ProfileCard);

function expand(card) {
    card.classList.toggle('expanded');

    // If card is not expanded after toggle, add 'unexpanded' class
    if (!card.classList.contains('expanded')) card.classList.toggle('unexpanded');
    // Else if card is expanded after toggle and still contains 'unexpanded' class, remove 'unexpanded'
    else if (card.classList.contains('expanded') && card.classList.contains('unexpanded')) card.classList.toggle('unexpanded');
}