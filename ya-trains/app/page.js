'use client'
import Image from "next/image";
import styles from "./page.module.scss";
import { Footer } from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import UpDownIcon from '@/public/up-down.svg'
import { Input } from "./components/Input/Input";
import BookmarkIcon from '@/public/bookmark-icon.svg'

export default function Home() {
	const [route, setRoute] = useState('path');

	const renderPage = ()=>{
		switch(route){
			case 'path':
				return (

								<>
									<div className={styles['order-container']}>
										<div className={styles['buy-container']}>
											<div className={styles['grid-container']}>
												<div className={styles['first-section']}>
													<div className={styles['box-top']}></div>
													<Image width={28}  className="up-down-icon" src={UpDownIcon} alt='both-sides' />
													<div className={styles['box-down']}></div>
												</div>
												<div className={styles['main-section']}>
													<Input placeholder='Откуда' variant='clear' isBottomBorder={true} />
													<Input placeholder='Куда' variant='clear' isBottomBorder={false} />
												</div>
												<div className={styles['favorite-section']}>
													<Image src={BookmarkIcon} width={28} alt="Добавить в избранное" />
												</div>
											</div>
										</div>
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
		</>
  );
}
