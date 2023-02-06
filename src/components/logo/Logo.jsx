import styled from 'styled-components'

const VerticalText = styled.h1`
  font-size: 80px;
  color: ${(props) => props.theme.colors.black};
  line-height: 70px;
  margin-left: 150px;
  margin-top: -80px;
`

const HorizontalText = styled.h1`
  font-size: 40px;
`

const PrimaryColor = styled.span`
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
`

const Img = styled.img``

export default function Logo({ showImage, type }) {
  return (
    <div>
      {showImage && <Img src="/woman.svg" />}
      <div>
        {type === 'vertical' && (
          <VerticalText>
            Clima <br />
            <PrimaryColor>Dev</PrimaryColor>
          </VerticalText>
        )}
        {type === 'horizontal' && (
          <HorizontalText>
            Clima<PrimaryColor>Dev</PrimaryColor>
          </HorizontalText>
        )}
      </div>
    </div>
  )
}

Logo.defaultProps = {
  type: 'horizontal'
}
