import { ImovieEdit } from '@/components/screens/admin/movieEdit/movieEdit.interface'

import { IMovies } from '@/shared/types/movies.types'

import { getMoviesUrl } from '@/config/api.config'

import axios, { http } from '@/api/http'

export const moviesService = {
	async getAll(searchTerm: string) {
		return http.get<IMovies[]>(getMoviesUrl(''), {
			params: searchTerm ? { searchTerm } : {}
		})
	},

	async getPopularaMovies() {
		const { data: movies } = await http.get<IMovies[]>(
			getMoviesUrl('most-popular')
		)

		return movies
	},

	async deleteMovie(movieId: string) {
		return axios.delete<IMovies>(getMoviesUrl(movieId))
	},

	async getById(id: string) {
		return axios.get<ImovieEdit>(getMoviesUrl(id))
	},

	async create() {
		return axios.post<string>(getMoviesUrl(''))
	},

	async update(id: string, data: ImovieEdit) {
		return axios.put<string>(getMoviesUrl(id), data)
	},

	// async getBySlug(slug: string) {
	//    return http.get<IGenre>(getGenersUrl(`/by-slug/${slug}`))
	// },

	async getByGenres(genreIds: string[]) {
		return http.post<IMovies[]>(getMoviesUrl('by-genres/'), { genreIds })
	},
	async getBySlug(slug: string) {
		return http.get<IMovies>(getMoviesUrl(`by-slug/${slug}`))
	},

	async getByActor(actorId: string) {
		return http.get<IMovies>(getMoviesUrl('by-actor/' + actorId))
	},

	async updateCountOpened(slug: string) {
		return http.post<string>(getMoviesUrl('update-count-opened'), { slug })
	}
}
