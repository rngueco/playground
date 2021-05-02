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