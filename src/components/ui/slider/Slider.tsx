import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'

import SlideItem from './SlideItem'
import styles from './Slider.module.scss'
import SlideArrow from './slideArrow/SlideArrow'
import { ISlide } from './slider.interface'
import { useSlider } from './useSlider'

interface ISLider {
	slides: ISlide[]
	buttonTitle?: string
}
const Slider: FC<ISLider> = ({ slides, buttonTitle }) => {
	const { currentIndex, handleArrowClick, nextIsExist, prevIsExist, sideIn } =
		useSlider(slides.length)

	return (
		<div className={styles.container}>
			<CSSTransition
				in={sideIn}
				classNames='slide-animation'
				timeout={300}
				unmountOnExit
			>
				<SlideItem slide={slides[currentIndex]} buttonTitle={buttonTitle} />
			</CSSTransition>
			<div className={styles.arrows}>
				{prevIsExist && (
					<SlideArrow
						variant='left'
						clickHandler={() => handleArrowClick('prev')}
					/>
				)}
				{nextIsExist && (
					<SlideArrow
						variant='right'
						clickHandler={() => handleArrowClick('next')}
					/>
				)}
			</div>
		</div>
	)
}
export default Slider
