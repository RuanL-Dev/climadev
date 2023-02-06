import styled from 'styled-components'

const StyledInput = styled.input`
  background-color: #f6f6f6;
  border: 0;
  outline: none;
  padding: 20px;
  color: #9c9c9c;
  font-weight: bold;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 100%;
`

export default function Input(props) {
  return <StyledInput {...props} />
}
