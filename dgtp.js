// ==UserScript==
// @name Disable Google Translate popup
// @description Google Translate without "Original Text" popup tooltip
// @version 2.0
// @author Volpele
// @license ICS
// @include *
// @grant none
// ==/UserScript==

var style = document.createElement('style');
style.innerHTML = `
	.goog-tooltip {
		display: none !important;
	}
	.goog-tooltip:hover {
		display: none !important;
	}
	.goog-text-highlight {
		background-color: transparent !important;
		border: none !important;
		box-shadow: none !important;
	}
`;
document.head.appendChild(style);
