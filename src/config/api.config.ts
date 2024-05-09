export const API_URL = process.env.APP_URL + '/api'
export const APP_SERVER_URL = process.env.APP_SERVER_URL + '/api'

export const getAuthUrl = (string: string) => `/auth${string}`
export const getGenersUrl = (string: string) => `/genres/${string}`
export const getMoviesUrl = (string: string) => `/movies/${string}`
export const getActorsUrl = (string: string) => `/actors/${string}`
export const getUsersUrl = (string: string) => `/users/${string}`
export const getRatingUrl = (string: string) => `/ratings/${string}`
