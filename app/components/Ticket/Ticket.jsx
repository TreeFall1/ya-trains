'use client'
import styles from './Ticket.module.scss'
import Image from 'next/image'
import TrainIcon from '@/public/train.svg'
import { useEffect, useState } from 'react'
import { TicketInfo } from '../TicketInfo/TicketInfo'

export const Ticket = (props)=>{
	const [ticketNumber, setTicketNumber] = useState("");
	const [date, setDate] = useState("");
	const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
	const start = props.start;
	const end = props.end;
	const price = props.price;

	useEffect(()=>{
		setTicketNumber(generateTicketNumber());
		setDate(getCurrentDate());
	}, [])

	const handleInfoModal = ()=>{
		setIsInfoModalOpen(!isInfoModalOpen);
	}

	const getCurrentDate = (tomorrow = false) => {
		const options = {month: 'long', day: 'numeric'};
		const currentDate = new Date();
		tomorrow && (currentDate.setDate(currentDate.getDate() + 1))
		return currentDate.toLocaleDateString('ru-RU', options)
	}

	return (
		<>
		<div className={styles['ticket-container']} onClick={handleInfoModal}>
			<div className={styles['title-container']}>
				<h1>{`${start} — ${end}`}</h1>
				<Image width={32} src={TrainIcon} alt='train' />
			</div>
			<p className={styles['date']}>{date}</p>
			<p className={styles['type']}>Билет на электричку стандарт (обычный приго...</p>
			<div className={styles['bottom-container']}>
				<p className={styles['price']}>{`${price} ₽`}</p>
				<p className={styles['ticket-data']}>{`Билет № ${ticketNumber}`}</p>
			</div>
			
			<div style={{top: '65%', left: '-5px'}} className={styles['circle']}></div>
			<div style={{top: '65%', right: '-5px'}} className={styles['circle']}></div>
		</div>
		{isInfoModalOpen && <TicketInfo ticketNumber={ticketNumber} start={start} end={end} price={price} getDate={getCurrentDate} date={date} closeModal={handleInfoModal} />}
		</>

	)
}

const generateTicketNumber = ()=>{
	return Math.floor(Math.random() * ((10 ** 14 - 1) - 10 ** 13 + 1)) + 10 ** 13;
}