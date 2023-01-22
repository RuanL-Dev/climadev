import styled from 'styled-components'

import BackgroundImageWithChildren from '../src/components/layout/backgroundImageWithChildren/BackgroundImageWithChildren'
import Logo from '../src/components/logo/Logo'
import Input from '../src/components/form/input/Input'

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.white};
  min-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;

  @media (max-width: 500px) {
    min-width: 100%;
  } 
`

export default function HomePage() {
  return (
    <BackgroundImageWithChildren>
      <StyledDiv>
        <Logo showImage type="vertical"/>
        <Input placeholder = 'Digite o nome da cidade' />
      </StyledDiv>
    </BackgroundImageWithChildren>
    
  )
}