import * as React from "react";
import { styled } from "linaria/react";

const Container = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, -50%);
	margin-bottom: 64px;

	.left {
		transform: rotate(90deg);
	}

	.right {
		transform: rotate(270deg);
	}
`;

const Blurred = styled.div`
	display: flex;
	padding: 8px 12px;
	backdrop-filter: blur(10px);
`;

const Dot = styled.div`
	background: #fff;
	height: 10px;
	width: 10px;
	border-radius: 5px;
	margin-left: 10px;
	margin-right: 10px;
`;

const Triangle = styled.div`
	height: 0;
	width: 0;
	border-radius: 10px;
	border-left: 10px solid transparent;
	border-right: 10px solid transparent;
	border-bottom: 10px solid white;
	margin-left: 10px;
	margin-right: 10px;
`;

interface IProps {
	current: number;
	onChange: (index: number) => void;
	total: number;
}

const ImageCounter = (props: IProps): JSX.Element | null => {
	const { current, total, onChange } = props;

	const generateDots = (): JSX.Element | null => {
		return (
			<>
				<Triangle className="right" />
				<Dot />
				<Triangle className="left" />
			</>
		);
	};

	return (
		<Container>
			<Blurred>{generateDots()}</Blurred>
		</Container>
	);
};

export default ImageCounter;
