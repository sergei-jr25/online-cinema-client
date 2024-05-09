import { IgenreEdit } from '@/components/screens/admin/genreEdit/genreEdit.interface'
import { ICollection } from '@/components/screens/collection/collection.interface'

import { IGenre } from '@/shared/types/movies.types'

import { getGenersUrl } from '@/config/api.config'

import axios, { http } from '@/api/http'

export const genreService = {
	async getAll(searchTerm?: string) {
		return axios.get<IGenre[]>(getGenersUrl(''), {
			params: searchTerm ? { searchTerm } : {}
		})
	},

	async getBySlug(slug: string) {
		return http.get<IGenre>(getGenersUrl(`by-slug/${slug}`))
	},
	async getCollection() {
		return http.get<ICollection[]>(getGenersUrl(`collections`))
	},

	async getById(id: string) {
		const data = await axios.get<IgenreEdit>(getGenersUrl(id))
		return data
	},

	async create() {
		return axios.post<string>(getGenersUrl(''))
	},

	async update(id: string, data: IgenreEdit) {
		return axios.put<string>(getGenersUrl(id), data)
	},
	async deleteGenre(userId: string) {
		return axios.delete<IGenre>(getGenersUrl(userId))
	}
}
