import * as React from "react";
import { styled } from "linaria/react";
import { Link } from "gatsby";
import { useHover } from "../hooks/useHover";
import { Arrow } from "./Arrow";

const Container = styled.div`
	margin: 2rem 4rem;
	position: absolute;
	height: 60px;
	width: calc(100% - 4rem * 2);
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
		font-size: 1rem;
		line-height: 1.5rem;
		padding-bottom: 8px;
	}

	.active:not(:hover) {
		svg {
			visibility: visible;
		}
	}
`;

const LinkWrapper = styled.div`
	position: relative;

	svg {
		pointer-events: none;
		visibility: hidden;
		position: absolute;
		position: absolute;
		margin-top: 2rem;
		left: 50%;
	}

	&:hover svg {
		visibility: visible;
		path {
			stroke: black;
		}
	}
`;

const RightSide = styled.div`
	display: flex;
	span {
		margin-left: 1.5rem;
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
	const [ref, isHovered] = useHover<HTMLDivElement>();

	const generateLinks = () => {
		const isSelected = (path: string) => path === pathanme && !isHovered;
		const links = [
			{ path: "/", name: "Home" },
			{ path: "/work", name: "Work" },
			{ path: "/about", name: "About" },
		];
		return links.map(({ path, name }, i) => (
			<Link to={path} key={i}>
				<LinkWrapper className={`${isSelected(path) ? "active" : ""}`}>
					<span>{name}</span>
					{Arrow}
				</LinkWrapper>
			</Link>
		));
	};

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
			<RightSide ref={ref}>{generateLinks()}</RightSide>
		</Container>
	);
};

export default Navbar;
