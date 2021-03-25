import * as React from "react";
import { styled } from "linaria/react";

const { useState, useLayoutEffect, useEffect } = React;

const Container = styled.div`
	position: relative;
	display: inline-block;
	overflow: hidden;
	margin: 0;
	height: 100%;
	width: 100%;

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`;

const ThumbnailHero = styled.img`
	image-rendering: pixelated;
	/* transition: visibility 0ms ease 400ms; */
	/* filter: blur(20px); */
`;

const FullHero = styled.img`
	/* transition: opacity 400ms ease 0ms; */
`;

const Square = styled.div`
	cursor: pointer;
	margin: 32px 64px;
	height: 60px;
	width: 60px;
	position: absolute;
	border: 10px solid #ffffff;
`;

interface IHero {
	low: string;
	high: string;
}

const images = [
	{
		low: "/image_1_low.jpg",
		high: "/image_1_high.jpg",
		style: { height: "100%" },
		content: { title: "Iceland", description: "Sometime in 2019" },
	},
	{
		low: "/image_2_low.jpg",
		high: "/image_2_high.jpg",
		style: { width: "100%" },
		content: { title: "China", description: "Yellow mountains" },
	},
	{
		low: "/image_3_low.jpg",
		high: "/image_3_high.jpg",
		style: { width: "100%" },
		content: { title: "China", description: "Month before pandemic" },
	},
];

const random = (max: number): number => Math.floor(Math.random() * Math.floor(max));

const Carousel = (): JSX.Element => {
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [curIndex, setCurIndex] = useState<number>(random(images.length));

	const goToNext = (images: IHero[], curIndex: number) => {
		const next = (array: IHero[], index: number): number => {
			const next = index + 1;
			return next > array.length - 1 ? 0 : next;
		};
		setIsLoaded(false);
		setCurIndex(next(images, curIndex));
	};

	useEffect(() => {
		const timer = setInterval(() => goToNext(images, curIndex), 60000);

		return () => clearInterval(timer);
	}, [curIndex]);

	// const handleClick = () => {
	// 	goToNext(images, curIndex);
	// };

	return (
		<Container>
			<ThumbnailHero
				src={images[curIndex].low}
				style={{ visibility: isLoaded ? "hidden" : "visible", ...images[curIndex].style }}
			/>
			<FullHero
				// onClick={handleClick}
				onLoad={() => setTimeout(() => setIsLoaded(true), 500)}
				style={{ opacity: isLoaded ? 1 : 0, ...images[curIndex].style }}
				src={images[curIndex].high}
			/>
			<Square />
		</Container>
	);
};

export default Carousel;
