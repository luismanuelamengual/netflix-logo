const template = document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            box-sizing: border-box;
            display: block;
            width: 250px;
            border: 2px solid red;
            overflow: hidden;
            background: black;
        }

        .netflix-logo-container {
            position: relative;
            width: 100%;
            padding-bottom: 150%;
        }

        .netflix-logo {
            position: absolute;
            top: 15%;
            left: 15%;
            bottom: 15%;
            right: 15%;
            background: darkred;
            overflow: hidden;
        }

        .netflix-logo::before {
            content: '';
            background: black;
            position: absolute;
            top: 0;
            left: 33.333%;
            right: 33.333%;
            bottom: 0;
        }

       .netflix-logo::after {
            content: '';
            width: 33.3333%;
            height: 100%;
            position: absolute;
            background: red;
            transform: skewX(24deg);
            left: 33.8%;
            -webkit-box-shadow: 0 0 5px 3px rgba(0,0,0,0.48);
            -moz-box-shadow: 0 0 5px 3px rgba(0,0,0,0.48);
            box-shadow: 0 0 5px 3px rgba(0,0,0,0.48);
        }
    </style>
    <div class="netflix-logo-container">
        <div class="netflix-logo"></div>
    </div>
`;

class NetflixLogoElement extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}
customElements.define('netflix-logo', NetflixLogoElement);