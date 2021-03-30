import * as React from "react";
import { styled } from "linaria/react";

// import ImageCounter from "./../components/ImageSelector";

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
	cursor: default;
	font-size: 1rem;
	font-weight: bold;
	text-transform: uppercase;
`;

const Square = styled.div`
	cursor: pointer;
	height: 3rem;
	width: 3rem;
	border: 0.5rem solid #ffffff;
`;

const ImageContent = styled.div`
	margin: 2rem 4rem;
	position: absolute;
	display: flex;

	div:not(${Square}) {
		margin-left: 1rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.text-animation {
		animation-delay: 1s;
		animation: text-transition 1s;
		animation-fill-mode: forwards;
	}
	.text-hidden {
		visibility: hidden;
	}

	@keyframes text-transition {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;

const ImageDiv = styled.div`
	position: absolute;
	cursor: pointer;
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

const Carousel = (): JSX.Element | null => {
	const highResRef = useRef<HTMLDivElement>(null);
	const [isHighresLoaded, setHighresLoaded] = useState<boolean>(false);
	const [curIndex, setCurIndex] = useState<number>(random(images.length));

	// TODO
	// Prelaod all low res images, this way it will avoid showing blank page for a moment.

	// TODO
	// Scale square to match smaller resolution

	const goToNext = (images: IHero[], curIndex: number): void => {
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
		setHighresLoaded(false);
		const listener = () => {
			setTimeout(() => {
				el.style.backgroundImage = `url(${images[curIndex].high})`;
				setHighresLoaded(true);
			}, 700);
		};
		const image = new Image();
		image.src = images[curIndex].high;
		image.addEventListener("load", listener);
		return () => image.removeEventListener("load", listener);
	}, [highResRef, curIndex]);

	const handleClick = () => {
		if (isHighresLoaded) {
			goToNext(images, curIndex);
		}
	};

	const {
		content: { title, description },
	} = images[curIndex];

	return (
		<Container>
			<ImageDiv
				ref={highResRef}
				style={{ opacity: isHighresLoaded ? 1 : 0 }}
				onClick={handleClick}
			/>
			<ImageDiv
				className="pixelated"
				style={{
					backgroundImage: `url("${images[curIndex].low}")`,
					visibility: isHighresLoaded ? "hidden" : "visible",
				}}
			/>
			<ImageContent>
				<Square />
				<div className={isHighresLoaded ? "text-animation" : "text-hidden"}>
					<WhiteText>{title}</WhiteText>
					<WhiteText>{description}</WhiteText>
				</div>
			</ImageContent>
			{/* <ImageCounter
				current={curIndex}
				total={images.length}
				onChange={(index: number) => console.log(index)}
			/> */}
		</Container>
	);
};

export default Carousel;
