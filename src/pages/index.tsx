import * as React from "react";
import { styled } from "linaria/react";
import { globals } from "../theme/global";
import "@fontsource/mulish";

import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";
import About from "../components/About";

const Main = styled.main`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const Layout = styled.div`
	display: flex;
	flex: 1;
`;

const SideSection = styled.div`
	flex: 1 1;
`;

const Content = styled.div`
	flex: 2 2;
	position: relative;
`;

// markup
const IndexPage = (): JSX.Element => {
	return (
		<Main className={globals}>
			<title>Home Page</title>
			<Layout>
				<SideSection>
					<Carousel />
				</SideSection>
				<Content>
					<Navbar />
					<About />
				</Content>
			</Layout>
		</Main>
	);
};

export default IndexPage;
