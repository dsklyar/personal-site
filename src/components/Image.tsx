import * as React from "react";
import { styled } from "linaria/react";

const { useState, useRef, useEffect } = React;

const ImageDiv = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
`;

interface IProps {
	imageUrl: string;
	loadDelay: number | 700;
}

const LazyImage = (props: IProps): JSX.Element => {
	const { imageUrl, loadDelay } = props;
	const divRef = useRef<HTMLDivElement>(null);
	const [isLoaded, setIsLoaded] = useState<boolean>(false);

	useEffect(() => {
		const el = divRef.current;
		if (!el) return;
		setIsLoaded(false);

		const listener = () => {
			setTimeout(() => {
				el.style.backgroundImage = `url(${imageUrl})`;
				setIsLoaded(true);
			}, loadDelay);
		};

		const image = new Image();
		image.src = imageUrl;
		image.addEventListener("load", listener);

		return () => image.removeEventListener("load", listener);
	}, [divRef, loadDelay]);

	return <ImageDiv ref={divRef} style={{ opacity: isLoaded ? 1 : 0 }} />;
};

export default LazyImage;
