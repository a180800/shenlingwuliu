import {defineStore} from 'pinia'
import {ref} from 'vue'
import {login} from '../api/login'


export const useCounterStore =defineStore('counter',()=>{
	const count =ref('xbsj001')
	const count1=ref(123456)
	const increment = () => {
		login({
			account:count.value,
			password:count1.value
		}).then(res=>{
			console.log(res);
		})
	}
	
	
	return {
		count,
		count1,
		increment
	}
})