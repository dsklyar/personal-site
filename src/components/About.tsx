import * as React from "react";
import { styled } from "linaria/react";

const Container = styled.div`
	height: 100%;
	display: flex;
	align-items: center;
	margin-left: 64px;
`;

const content = {
	title:
		"I’m a Front End Developer based in\nSan Francisco, working on productive tools and stuff like that...",
	blurb_1:
		"For the last five years, I’ve worked on a variety of applications focusing on bringing the best user experience and functionality.",
	blurb_2: "My other interests include photography, music, learning languages, and backpacking.",
};

const About = (): JSX.Element => {
	return (
		<Container>
			<div>
				<div className="content-heading">{content.title}</div>
				<div className="entry-blurb first-blurb">{content.blurb_1}</div>
				<div className="entry-blurb">{content.blurb_2}</div>
			</div>
		</Container>
	);
};

export default About;
