'use client'
import styles from './Ticket.module.scss'
import Image from 'next/image'
import TrainIcon from '@/public/train.svg'
import { useEffect, useState } from 'react'

const generateTicketNumber = ()=>{
	return Math.floor(Math.random() * ((10 ** 14 - 1) - 10 ** 13 + 1)) + 10 ** 13;
}


export const Ticket = (props)=>{
	const [ticketNumber, setTicketNumber] = useState("");

	useEffect(()=>{
		setTicketNumber(generateTicketNumber());
	}, [])

	return (
		<div className={styles['ticket-container']}>
			<div className={styles['title-container']}>
				<h1>{`Всеволожская — Бернгардовка`}</h1>
				<Image width={32} src={TrainIcon} alt='train' />
			</div>
			<p className={styles['date']}>{`19 августа`}</p>
			<p className={styles['type']}>Билет на электричку стандарт</p>
			<div className={styles['bottom-container']}>
				<p className={styles['price']}>{`42 ₽`}</p>
				<p className={styles['ticket-data']}>{`Билет № ${ticketNumber}`}</p>
			</div>
			
			<div style={{top: '65%', left: '-5px'}} className={styles['circle']}></div>
			<div style={{top: '65%', right: '-5px'}} className={styles['circle']}></div>
		</div>
	)
}