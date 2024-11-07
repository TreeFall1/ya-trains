import styled from 'styled-components';
const st = styled;

export const Input = (props)=>{
	const {
		variant,
		placeholder,
		isBottomBorder
	} = props;

	return (
		<InputEl $variant={variant} $isBottomBorder={isBottomBorder} placeholder={placeholder} />
	)

	
}

const InputEl = st.input`
border: none;
background-color: ${(p) => p.$variant == 'clear' ? 'transparent' : "white"};
border-bottom: ${(p) => p.$isBottomBorder ? "2px solid var(--light-gray)" : "unset"};
height: 32px;
color: #f1f1f1;
font-size: 20px;
font-weight: 600;
font-family: "Open Sans", sans-serif;

&::placeholder{
color: #f1f1f1;
font-size: 20px;
font-weight: 600;
font-family: "Open Sans", sans-serif;
}
`
