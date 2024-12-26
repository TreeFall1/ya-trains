'use client'
import { useEffect, useState } from 'react'
import styles from './TicketsList.module.scss'
import { Ticket } from '../Ticket/Ticket';



export const TicketsList = ()=>{
	const [dataset, setDataset] = useState(null);

	useEffect(()=>{
		updateDataset();
	}, [])

	const updateDataset = ()=>{
		setDataset(JSON.parse(localStorage.getItem("tickets")));
	}

	const deleteTicket = (ticketId)=>{
		localStorage.setItem('tickets', JSON.stringify(dataset.filter(el => el.id != ticketId)));
		updateDataset();
	}

	return (
		<div className={styles['tickets-container']}>
			{dataset && dataset.map((el)=>{
				return (<Ticket deleteTicket={deleteTicket} ticketId={el.id} key={el.id} start={el.start} end={el.end} price={el.price} />)
			})}
		</div>
	)
}