import styles from './Footer.module.css'
import Image from 'next/image'
import PathIcon from '@/public/path-icon.svg'
import BookmarkIcon from '@/public/bookmark-icon.svg'
import TicketIcon from '@/public/ticket-icon.svg'
import SettingsIcon from '@/public/settings-icon.svg'
import ScheduleIcon from '@/public/schedule-icon.svg'
import PathIconActive from '@/public/path-icon-active.svg'
import BookmarkIconActive from '@/public/bookmark-icon-active.svg'
import TicketIconActive from '@/public/ticket-icon-active.svg'
import SettingsIconActive from '@/public/settings-icon-active.svg'
import ScheduleIconActive from '@/public/schedule-icon-active.svg'
import { useState } from 'react'

export const Footer = (props)=>{
	const route = props.route;

	const changeRoute = (e)=>{
		props.setRoute(e.target.id);
	}
	
	return(
		<footer className={styles['footer']}>
			<div className={styles['container']}>
				<Image onClick={changeRoute} id='path' alt='menu' src={route == 'path' ? PathIconActive : PathIcon} width={'auto'} />
				<Image onClick={changeRoute} id='bookmark' alt='menu' src={route == 'bookmark' ? BookmarkIconActive : BookmarkIcon} width={'auto'} />
				<Image onClick={changeRoute} id='ticket' style={{transform: 'rotate(-90deg)'}} alt='menu' src={route == 'ticket' ? TicketIconActive : TicketIcon} width={'auto'} />
				<Image onClick={changeRoute} id='schedule' alt='menu' src={route == 'schedule' ? ScheduleIconActive : ScheduleIcon} width={'auto'} />
				<Image onClick={changeRoute} id='settings' alt='menu' src={route == 'settings' ? SettingsIconActive : SettingsIcon} width={'auto'} />
			</div>
		</footer>
	)
}