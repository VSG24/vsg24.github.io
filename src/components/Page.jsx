import { useEffect } from "react";

const Page = (props) => {
	useEffect(() => {
		// build the page title using the original title as specified in a meta tag and the actual page title passed as props
		document.title = document.querySelector('meta[name="title"]').content + (` - ${props.title}` || "");
	}, [props.title]);
	return props.children;
};

export default Page;
