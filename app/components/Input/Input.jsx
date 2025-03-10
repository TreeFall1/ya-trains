import styled from 'styled-components';
const st = styled;

export const Input = (props)=>{
	const {
		variant,
		placeholder,
		isBottomBorder,
		id
	} = props;

	return (
		<InputEl id={id} $variant={variant} $isBottomBorder={isBottomBorder} placeholder={placeholder} />
	)

	
}

const InputEl = st.input`
border: none;
background-color: ${(p) => p.$variant == 'clear' ? 'transparent' : "white"};
border-bottom: ${(p) => p.$isBottomBorder ? "2px solid var(--light-gray)" : "unset"};
height: 20px;
color: #f1f1f1;
font-size: 18px;
font-weight: 600;
font-family: "Open Sans", sans-serif;

&::placeholder{
color: #f1f1f1;
font-size: 18px;
font-weight: 600;
font-family: "Open Sans", sans-serif;
}
`
