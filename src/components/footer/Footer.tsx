import React from 'react';

type PageProps = {
	children?: React.ReactNode;
	// props....
};

// ?======================================================//
const Footer = (props: PageProps) => {
	return (
		<div>
			<div>©2023 fam. All rights reserved.</div>
			<div></div>
		</div>
	);
};

export default Footer;
