import * as React from "react";
import { styled } from "linaria/react";

const { useState, useRef, useEffect } = React;

const Container = styled.div`
	position: relative;
	height: 100%;
	width: 100%;

	.pixelated {
		image-rendering: pixelated;
	}
`;

const WhiteText = styled.div`
	color: #fff;
	font-size: 18px;
	font-weight: bold;
	text-transform: uppercase;
`;

const ImageContent = styled.div`
	margin: 32px 64px;
	position: absolute;
	display: flex;

	div {
		margin-left: 16px;
	}

	${WhiteText}:first-child {
		margin-bottom: 8px;
		font-size: 22px;
	}
`;

const Square = styled.div`
	cursor: pointer;
	height: 60px;
	width: 60px;
	border: 10px solid #ffffff;
`;

const ImageDiv = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`;

interface IHero {
	low: string;
	high: string;
}

const images = [
	{
		low: "/image_1_low.jpg",
		high: "/image_1_high.jpg",
		content: { title: "Iceland", description: "Sometime in 2019" },
	},
	{
		low: "/image_2_low.jpg",
		high: "/image_2_high.jpg",
		content: { title: "China", description: "Yellow mountains" },
	},
	{
		low: "/image_3_low.jpg",
		high: "/image_3_high.jpg",
		content: { title: "China", description: "Month before pandemic" },
	},
];

const random = (max: number): number => Math.floor(Math.random() * Math.floor(max));

const Carousel = (): JSX.Element => {
	const highResRef = useRef<HTMLDivElement>(null);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [curIndex, setCurIndex] = useState<number>(random(images.length));

	// TODO
	// Prelaod all low res images, this way it will avoid showing blank page for a moment.

	const goToNext = (images: IHero[], curIndex: number) => {
		const next = (array: IHero[], index: number): number => {
			const next = index + 1;
			return next > array.length - 1 ? 0 : next;
		};

		setCurIndex(next(images, curIndex));
	};

	useEffect(() => {
		const timer = setInterval(() => goToNext(images, curIndex), 30000);

		return () => clearInterval(timer);
	}, [curIndex]);

	useEffect(() => {
		const el = highResRef.current;
		if (!el) return;
		setIsLoaded(false);
		const listener = () => {
			setTimeout(() => {
				el.style.backgroundImage = `url(${images[curIndex].high})`;
				setIsLoaded(true);
			}, 700);
		};
		const image = new Image();
		image.src = images[curIndex].high;
		image.addEventListener("load", listener);
		return () => {
			image.removeEventListener("load", listener);
		};
	}, [highResRef, curIndex]);

	const handleClick = () => {
		goToNext(images, curIndex);
	};

	const {
		content: { title, description },
	} = images[curIndex];

	return (
		<Container>
			<ImageDiv
				ref={highResRef}
				style={{ opacity: isLoaded ? 1 : 0 }}
				onClick={handleClick}
				className="pixelated"
			/>
			<ImageDiv
				style={{
					backgroundImage: `url("${images[curIndex].low}")`,
					visibility: isLoaded ? "hidden" : "visible",
				}}
			/>
			<ImageContent>
				<Square />
				<div>
					<WhiteText>{title}</WhiteText>
					<WhiteText>{description}</WhiteText>
				</div>
			</ImageContent>
		</Container>
	);
};

export default Carousel;
