import * as React from "react";
const { useRef, useState, useEffect } = React;

// Hook
export const useHover = <T extends HTMLElement>(): [React.RefObject<T>, boolean] => {
	const [value, setValue] = useState<boolean>(false);

	const ref = useRef<T>(null);

	const handleMouseOver = () => setValue(true);
	const handleMouseOut = () => setValue(false);

	useEffect(() => {
		const node = ref.current;
		if (node) {
			node.addEventListener("mouseover", handleMouseOver);
			node.addEventListener("mouseout", handleMouseOut);

			return () => {
				node.removeEventListener("mouseover", handleMouseOver);
				node.removeEventListener("mouseout", handleMouseOut);
			};
		}
	}, [ref.current]);

	return [ref, value];
};
