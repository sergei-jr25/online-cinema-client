import axios, { http } from '@/api/http'
import { IActorEdit } from '@/components/screens/admin/acterEdit/actorEdit.interface'
import { getActorsUrl } from '@/config/api.config'
import { IActor } from '@/shared/types/movies.types'

export const ActorService = {
	async getAll(searchTerm?: string) {
		return axios.get<IActor[]>(getActorsUrl(''), {
			params: searchTerm ? { searchTerm } : {}
		})
	},
	async delete(id: string) {
		return axios.delete<IActor>(getActorsUrl(id))
	},

	async getById(id: string) {
		return axios.get<IActorEdit>(getActorsUrl(id))
	},

	async getBySlug(slug: string) {
		return http.get<IActor>(getActorsUrl(`by-slug/${slug}`))
	},

	async create() {
		return axios.post<string>(getActorsUrl(''))
	},

	async update(id: string, data: IActorEdit) {
		return axios.put<string>(getActorsUrl(id), data)
	}
}
