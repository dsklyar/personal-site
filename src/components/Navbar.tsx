import * as React from "react";
import { styled } from "linaria/react";
import { Link } from "gatsby";

const Container = styled.div`
	/* background-color: red; */
	margin: 32px 64px;
	position: absolute;
	height: 60px;
	width: calc(100% - 64px * 2);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	a {
		text-decoration: none;
		cursor: pointer;

		&:visited {
			color: unset;
		}
	}
	span {
		font-family: Mulish;
		text-transform: uppercase;
		font-style: normal;
		font-weight: normal;
		font-size: 18px;
		line-height: 23px;
	}
`;

const RightSide = styled.div`
	span {
		margin-left: 24px;
	}
`;

const LeftSide = styled.div`
	span {
		font-weight: bold;
	}
`;

const Navbar = (): JSX.Element => {
	return (
		<Container>
			<LeftSide>
				<a
					href="https://www.linkedin.com/in/danielsklyar/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<span>Daniel Sklyar</span>
				</a>
			</LeftSide>
			<RightSide>
				<Link to="/">
					<span>Home</span>
				</Link>
				<Link to="/work">
					<span>Work</span>
				</Link>
				<Link to="/about">
					<span>About</span>
				</Link>
			</RightSide>
		</Container>
	);
};

export default Navbar;
