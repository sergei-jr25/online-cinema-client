import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

export const useAUthRedirect = () => {
	const { user, isLoading } = useAuth()

	const { query, push } = useRouter()

	const redirect = query.redirect ? String(query.redirect) : '/'

	useEffect(() => {
		if (user) push(redirect)
	}, [user, query, push])
}
