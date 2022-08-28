import React from 'react';
import empty from '../../images/empty.jpg';

import './styles.css';

const EmptyPost = ({ post, setCurrentId }) => {
	return (
		<div className="background">
			<div className="img">
				<img src={empty} alt="" />
			</div>

			<div className="text">
				<h1>There is No Note Found</h1>
				<h2>Let's Make it First</h2>
			</div>
		</div>
	);
};

export default EmptyPost;
