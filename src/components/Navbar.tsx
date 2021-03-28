import * as React from "react";
import { styled } from "linaria/react";
import { Link } from "gatsby";
import { cx } from "linaria";

const Container = styled.div`
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
		color: inherit;
	}
	span {
		font-family: Mulish;
		text-transform: uppercase;
		font-style: normal;
		font-size: 18px;
		line-height: 23px;
		padding-bottom: 8px;
		border-bottom: 2px solid transparent;
		position: relative;

		:hover {
			border-bottom: 2px solid #333;
		}
	}

	.active {
		border-bottom: 2px solid #c4c4c4;
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

interface IProps {
	pathanme: string;
}

const Navbar = (props: IProps): JSX.Element => {
	const { pathanme } = props;

	const generateLinkClass = (path: string) => (path === pathanme ? "active" : "");
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
					<span className={generateLinkClass("/")}>Home</span>
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
