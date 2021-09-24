import React, { useState, useRef } from 'react';

import Card from '../../UI/Card/Card';
import ErrorModal from '../../UI/Card/ErrorModal';
import Button from '../../UI/Card/Button';
import classes from './AddUser.module.css';


const AddUser = (props) => {

	const nameInputRef = useRef();
	const ageInputRef = useRef();

	const [ error, setError ] = useState('');
	
	const errorHandler = () => {
		setError(null);
	}

	const addUserHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredUserAge = ageInputRef.current.value;

		if(enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
			setError({title: "Invalid Input", message: "Input cannot be blank"});
			return;
		}
		if(+enteredUserAge < 1) { 
			setError({title: "Invalid Age", message: "Please enter a valid age ( > 0)"})
			return;
		}
		
		props.onAddUser(enteredName, enteredUserAge);		
		nameInputRef.current.value = '';
		ageInputRef.current.value = '';
	}

	return (
			<div>
				{ error && <ErrorModal title={ error.title } message={ error.message } onConfirm={ errorHandler } /> }
				<Card className={ classes.input }>
					<form onSubmit={ addUserHandler }>
							<label htmlFor="userName">User name</label>
							<input 
								id="userName" type="text" 
								ref={ nameInputRef }
							/>
							<label htmlFor="age">Age (Years) </label>
							<input 
								id="age" type="number" 
								ref={ ageInputRef } 
							/>
							<Button type="submit">Add User</Button>
					</form>
				</Card>
			</div> 
		)
}

export default AddUser;