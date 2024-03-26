import styled from 'styled-components'
import { Props } from '.'

export const TituloEstilo = styled.h3<Props>`
  color: ${(props) => props.theme.corPrincipal};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  margin-bottom: 16px;
  font-weight: bold;
`
