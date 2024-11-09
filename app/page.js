'use client'
import Image from "next/image";
import styles from "./page.module.scss";
import { Footer } from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import UpDownIcon from '@/public/up-down.svg'
import { Input } from "./components/Input/Input";
import BookmarkIcon from '@/public/bookmark-icon.svg'
import CalendarIcon from '@/public/calendar.svg'
import { Ticket } from "./components/Ticket/Ticket";
import { Loader } from "./components/Loader/Loader";
import {AddTicketModal} from "@/app/components/AddTicketModal/AddTicketModal";
import { TicketsList } from "./components/TicketsList/TicketsList";

export default function Home() {
	const [route, setRoute] = useState('path');
	const [isTicketModalOpen, setIsTicketModalOpen] = useState(false);

	const handleAddTicketModal = () => {
		setIsTicketModalOpen(!isTicketModalOpen);
	}

	const renderPage = ()=>{
		switch(route){
			case 'path':
				return (
						<>
							<div className={styles['order-container']}>
								<div className={styles['buy-container']}>
									<div className={styles['grid-container']}>
										<div className={styles['first-section']}>
											<div className={styles['box-top']}>A</div>
											<Image width={22}  className={styles["up-down-icon"]} src={UpDownIcon} alt='both-sides' />
											<div className={styles['box-down']}>B</div>
										</div>
										<div className={styles['main-section']}>
											<Input id="input-start" placeholder='Откуда' variant='clear' isBottomBorder={false} />
											<div className={styles['divider']}> </div>
											<Input id="input-end" placeholder='Куда' variant='clear' isBottomBorder={false} />
										</div>
										<div className={styles['favorite-section']}>
											<Image onClick={handleAddTicketModal} src={BookmarkIcon} width={28} alt="Добавить в избранное" />
										</div>
									</div>
									<div className={styles['date-container']}>
										<Image width={24} src={CalendarIcon} alt='choose date' />
										<p style={{color: "#fff"}}>Сегодня</p>
										<p>Завтра</p>
										<p>Все дни</p>
									</div>
								</div>
							</div>
						</>
							);
			case "ticket":
				return(
					<div className={styles['tickets-section']}>
						<nav className={styles['nav-bar']}>
							<div style={{borderBottom: "2px solid #fe7363"}}>Действующие</div>
							<div style={{color: "gray"}}>Использованные</div>
						</nav>
						<div className={styles['tickets-container']}>
							<TicketsList />
						</div>
					</div>
				);
			default:
				return (
					<>
					<div className={styles['loader-container']}>
						<Loader />
					</div>
					</>
				)
		}
	}

  return (
			<>
			<main>
				{renderPage()}
			</main>
			<Footer setRoute={setRoute} route={route} />
				{isTicketModalOpen && <AddTicketModal closeModal={handleAddTicketModal} />}
		</>
  );
}
