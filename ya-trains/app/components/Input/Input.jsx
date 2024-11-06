import styled from 'styled-components';
const st = styled;

export const Input = (props)=>{
	const {
		variant,
		placeholder,
		isBottomBorder
	} = props;
	console.log(props)

	return (
		<InputEl $variant={variant} $isBottomBorder={isBottomBorder} placeholder={placeholder} />
	)

	
}

const InputEl = st.input`
border: none;
background-color: ${(p) => p.$variant == 'clear' ? 'transparent' : "white"};
border-bottom: ${(p) => p.$isBottomBorder ? "2px solid var(--light-gray)" : "unset"};
height: 32px;
&::placeholder{
color: #fff;
font-size: 24px;
font-weight: 600;
font-family: "Helvetica", sans-serif;
}
`
