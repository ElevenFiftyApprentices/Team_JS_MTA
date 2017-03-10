import React, { Component, ProTypes } from 'react';
import { reduxForm } from 'redux-form';
// import { createPost } from '../../actions/index'
import { link } from 'react-router';

class ListItem extends Component {
	handleFormSubmit(formProps) {
		this.props.createPost(formProps);
	}
	render() {
		const { fields: { name, quantity, note }, handleSubmit }=this.props;
		return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<h3>Add New Item</h3>

				<fieldset className="form-group">
					<label>Name</label>
					<input type="text" className="form-control" {...name} />
				</fieldset>

				<fieldset className="form-group">
					<label>Quantity</label>
					<input type="text" className="form-control" {...quantity} />
				</fieldset>

				<fieldset className="form-group">
					<label>Note</label>
					<input type="text" className="form-control" {...note} />
				</fieldset>

				<button type="submit" className="btn btn-primary">Submit</button>
				<button className="btn btn-danger">Cancel</button>
			</form>
			);
	}
}

export default reduxForm({
	form: 'PostNewForm',
	fields: ['name', 'quantity', 'note']
}, null, { createPost })(ListItem);