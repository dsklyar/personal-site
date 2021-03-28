import { css } from "linaria";

export const globals = css`
	:global() {
		html {
			box-sizing: border-box;
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
			font-size: 32px;
			max-width: 578px;
		}

		.entry-blurb {
			font-size: 18px;
			width: 337px;
			margin-top: 24px;
		}
		.first-blurb {
			margin-top: 64px;
		}
	}
`;
