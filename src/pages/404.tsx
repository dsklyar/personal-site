import * as React from "react";
import { styled } from "linaria/react";
import { globals } from "../theme/global";
import "@fontsource/mulish";

const Main = styled.main`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

// markup
const WorkPage = (): JSX.Element => {
	return (
		<Main className={globals}>
			<title>Work Page</title>
			404
		</Main>
	);
};

export default WorkPage;
