import { getUsersUrl } from '@/config/api.config'

import axios from '@/api/http'

export const AdminService = {
	async getCountsUsers() {
		return axios.get<number>(getUsersUrl('count'))
	}
}
