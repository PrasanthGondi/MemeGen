// Style your components here
import styled from 'styled-components'

export const GenButton = styled.button`
  color: 'white';
  background-color: blue;
  border-radius: 20px;
`
export const HeadingMain = styled.h1`
  color: #35469c;
  font-size: '24px';
`
export const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
`
export const MemeImage = styled.div`
  background-image: url('${props => props.imageUrl}');
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
`
export const Para = styled.p`
  font-size: ${props => props.font};
`
