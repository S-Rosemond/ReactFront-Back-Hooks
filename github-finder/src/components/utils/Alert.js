import React from 'react';

const Alert = ({ alert }) => {
	let m, t;
	if (alert) {
		const { msg, type } = alert;

		m = msg;
		t = type;
	}

	return (
		alert !== null && (
			<div className={`alert alert-${t}`}>
				<i className="fas fa-info-circle" /> {m}
			</div>
		)
	);
};

export default Alert;
