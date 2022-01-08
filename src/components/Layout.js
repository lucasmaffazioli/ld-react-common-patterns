import React from 'react';
import Header from './Header';

export class Layout extends React.Component {
	shouldComponentUpdate() {
		return false;
	}

	componentDidUpdate() {
		console.log('Layout updated');
	}

	render() {
		const { header, body } = this.props

		return (
			<div style={{ background: 'red' }}>
				<Header>{header}</Header>
				<hr />
				{body}
			</div>
		)
	}
}