import axios from 'axios'

export function request(config){
	const instance = axios.create({
		baseURL: 'http://123.207.32.32:8000',
<<<<<<< HEAD
=======
		
>>>>>>> 5f5d61766836f5110b0672b0e52cd371ecf3efcb
		timeout: 5000
	})
	return instance(config)
}