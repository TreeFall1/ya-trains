'use client'
import { useEffect, useState } from 'react'
import styles from './TicketsList.module.scss'
import { Ticket } from '../Ticket/Ticket';



export const TicketsList = ()=>{
	const [dataset, setDateset] = useState(null);
	useEffect(()=>{
		setDateset(JSON.parse(localStorage.getItem("tickets")))
	}, [])

	return (
		<div className={styles['tickets-container']}>
			{dataset && dataset.map((el)=>{
				return (<Ticket key={el.id} start={el.start} end={el.end} price={el.price} />)
			})}
		</div>
	)
}