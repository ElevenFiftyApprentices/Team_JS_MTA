import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createItem } from '../../actions/index';
import { Link } from 'react-router';
 
class ListOfListItem extends Component {
	handleFormSubmit(formProps) {
		this.props.createPost(formProps)

		console.log(formProps);
		//need to do something to log user in
	}
	render(){
		const { fields: { contents, prority, isChecked}, handleSubmit }=this.props;
		return(
			<form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
				<h3>Create a New Post</h3>
				<fieldset className="form-group">
					<label>Contents:</label>
					<input type="text" {...contents} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label>Priority:</label>
					<input type="text" {...priority} className="form-control" />
				</fieldset>
				<fieldset className="form-group">
					<label></label>
					<input type="text" {...isChecked} className="form-control" />
				</fieldset>
				<button action="submit" className="btn btn-primary">Submit</button>
				<Link to='/' className='btn btn-danger'>Cancel</Link>
			</form>
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['contents', 'priority', 'isChecked']
}, null, { createPost })(ListOfListItem);