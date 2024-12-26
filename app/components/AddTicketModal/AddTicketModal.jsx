import styles from "./AddTicketModal.module.scss";
import Image from "next/image";
import CloseIcon from '@/public/back.svg'

export const AddTicketModal = (props) => {
	const getTicketData = ()=>{
		let ticketsArr = JSON.parse(localStorage.getItem('tickets'));
		const data = {
			start: document.getElementById('input-start').value,
			end: document.getElementById('input-end').value,
			price: document.getElementById('input-price').value,
			id: getId(ticketsArr)
		};

		ticketsArr ??=[];
		ticketsArr.push(data);
		localStorage.setItem("tickets", JSON.stringify(ticketsArr));
		props.closeModal();
	}

	const getId = (arr)=>{
		if(arr?.length){
			return parseInt(arr.slice(-1)[0].id)+1
		} else{
			return 1;
		}
	}


  return (
		<div className={styles['overlay']}>
			<div className={styles['container']}>
				<div className={styles['title']}>Билет</div>
				<Image className={styles['close-icon']} width={20} src={CloseIcon} alt={"close modal"} onClick={props.closeModal} />
				<div className={styles['content']}>
					<input id='input-price' placeholder="Цена билета в рублях" className={styles['input']} />
					<button onClick={getTicketData} className={styles['add-button']}>Добавить</button>
				</div>
			</div>
		</div>
  )
}