import {useState} from 'react'

export default function login() {
	const [formData, setFormData] = useState({
		employee_id: '',
		password: ''
	})
	const {employee_id, password} = formData;

	const handleChange = (e) => {

		const {employee_id, value} = e.target;
		setFormData((prevState) => ({
			...prevState,
			[employee_id]: value,
		}));
	};
	return (
		<form>
			<label>Employee ID: 
				<input 
				type='text' 
				name='employee_id' 
				value={employee_id} 
				onChange={handleChange}/>
			</label>
			<label>Password: 
				<input 
				type='password' 
				name='password' 
				value={password} 
				onChange={handleChange}/>
			</label>
			<button>Submit</button>
		</form>

	)
}
