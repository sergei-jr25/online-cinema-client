import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './Slider.module.scss'
import { ISlide } from './slider.interface'

export interface ISlideItem {
	slide: ISlide
	buttonTitle?: string
}

const SlideItem: FC<ISlideItem> = ({ slide, buttonTitle }) => {
	const { push } = useRouter()

	return (
		<div className={styles.slide}>
			{slide.bigPoster && (
				<div className={styles.image}>
					<Image
						src={slide.bigPoster}
						className={styles.image}
						alt={slide.title}
						priority
						draggable={false}
						fill
					/>
				</div>
			)}

			<div className={styles.content}>
				<div className={styles.title}>{slide.title}</div>
				<div className={styles.subtitle}>{slide.subTitle}</div>
				<button className={styles.button} onClick={() => push(slide.link)}>
					{buttonTitle}
				</button>
			</div>
		</div>
	)
}
export default SlideItem
