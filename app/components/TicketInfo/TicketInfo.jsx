'use client'
import styles from './TicketInfo.module.scss'
import BackIcon from '@/public/back.svg'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import TrainIcon from '@/public/train.svg'
import TrainFastIcon from '@/public/train-fast.svg'
import Barcode from '@/public/barcode.png'

export const TicketInfo = (props) =>{
	const [date, setDate] = useState('');
	const [flipped, setFlipped] = useState(false);
	const closeModal = props.closeModal;
	const getDate = props.getDate;

	useEffect(()=>{
		setDate(getDate(true));
	}, [])

  const handleClick = () => {
    setFlipped(false);
    setTimeout(() => setFlipped(true), 10);
  };

	return(
		<div className={styles['overlay']}>
			<div className={styles['container']}>
				<nav className={styles['nav-bar']}>
					<Image className={styles['close-icon']} onClick={closeModal} width={20} src={BackIcon} alt='close ticket info' />
					<p>Билет</p>
				</nav>
				<div className={styles['main']}>
					<div>
						<div className={styles['title-container']}>
							<p className={styles['title']}>{`${props.start} — ${props.end}`}</p>
							<Image style={props.type === 'fast' ? {filter: "none", opacity: 1} : {filter: "invert(1)", opacity: .75}} width={32} src={props.type === 'fast' ? TrainFastIcon : TrainIcon} alt='train icon' />
						</div>
						<p className={styles['date']}>{`${props.date}`}</p>
						<p className={styles['date-subtext']}>{`Действует до 01:00 ${date}`}</p>
						<div className={styles['barcode']}>
							<Image onClick={handleClick} className={`${flipped ? styles.flipped : ''}`} src={Barcode} alt='barcode' />
						</div>
						<p className={styles[['type']]}>Полный, в одну сторону</p>
						<p className={styles['type-subtext']}>Билет на электричку {props.type === 'fast' ? '«Ласточка»' : "стандарт (обычный приго..."}</p>
					</div>
					<div className={styles['data-bar']}>
						<p className={styles['price']}>{`${props.price} ₽`}</p>
						<p className={styles['number']}>{`Билет № ${props.ticketNumber}`}</p>
					</div>
				</div>
				
			</div>
		</div>
	)
}