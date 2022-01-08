import React from "react";

export default class ControlledInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = { value: '' }
	}

	render() {
		return (
			<input type="text" value={this.state.value} onChange={(e) => this.setState({ value: e.target.value })} />
		)
	}
}