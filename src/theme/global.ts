import { css } from "linaria";

export const globals = css`
	:global() {
		html {
			box-sizing: border-box;
			font-size: 18px;
			min-width: 480px;
		}

		// Font scaling
		@media (max-width: 640px) {
			html {
				font-size: 14px;
			}
		}

		@media (max-width: 480px) {
			html {
				font-size: 12px;
			}
		}

		*,
		*:before,
		*:after {
			box-sizing: inherit;
		}

		body {
			margin: 0;
			font-family: "Mulish";
		}

		.content-heading {
			font-size: 1.75rem;
			max-width: 570px;
		}

		.entry-blurb {
			font-size: 1rem;
			width: 337px;
			margin-top: 2rem;
		}
	}
`;
