import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

import LogoImage from '@/assets/images/logo.png'

import { siteName, titleHead } from '@/config/seo.config'

import { IMeta } from './meta.interface'

const Meta: FC<IMeta> = ({ title, decription, image, children }) => {
	const { asPath } = useRouter()
	const currentUrl = 'http://localhost:3000/api' + asPath

	console.log('LogoImage', LogoImage)

	return (
		<>
			<Head>
				<title itemProp='headLine'>{titleHead(title)}</title>
				{decription ? (
					<>
						<meta
							itemProp='description'
							name='description'
							content='description'
						/>
						<link rel='canonical' href={currentUrl} />
						<meta property='og:locale' content='en' />
						<meta property='og:title' content={title} />
						<meta property='og:image' content={image || LogoImage.src} />
						<meta property='og:site_name' content={siteName} />

						<meta property='og:description' content={decription} />
					</>
				) : (
					<meta name='robots' content='noindex, nofollow' />
				)}
			</Head>
			{children}
		</>
	)
}

export default Meta
