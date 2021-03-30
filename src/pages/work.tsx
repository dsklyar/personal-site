import * as React from "react";
import { styled } from "linaria/react";
import { globals } from "../theme/global";
import "@fontsource/mulish";

import Carousel from "../components/Carousel";
import Navbar from "../components/Navbar";

const Main = styled.main`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

const Layout = styled.div`
	display: flex;
	flex: 1;

	@media (max-device-width: 640px) {
		flex-direction: column;
	}
`;

const SideSection = styled.div`
	flex: 1 1;
`;

const Content = styled.div`
	flex: 2 2;
	position: relative;
`;

interface IProps {
	location: { pathname: string };
}

const IndexPage = (props: IProps): JSX.Element => {
	const {
		location: { pathname },
	} = props;

	return (
		<Main className={globals}>
			<title>Home Page</title>
			<Layout>
				<SideSection>
					<Carousel />
				</SideSection>
				<Content>
					<Navbar pathanme={pathname} />
				</Content>
			</Layout>
		</Main>
	);
};

export default IndexPage;
