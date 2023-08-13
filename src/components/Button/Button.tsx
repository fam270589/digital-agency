import React from 'react';
import styles from './button.module.css';
import Link from 'next/link';

type PageProps = {
	children?: React.ReactNode;
	// props....
	text: string;
	url: string;
};

// ?======================================================//
const Button = ({ text, url }: PageProps) => {
	return (
		<Link href={url}>
			<button className={styles.container}>{text}</button>
		</Link>
	);
};

export default Button;
