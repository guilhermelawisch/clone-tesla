import React from 'react'
import { Container, Heading, Buttons } from './style'

interface Props {
  label: string;
  description: string;
}

export const DefaultOverlayContent: React.FC<Props> = ({
  label, description
}) => {
  return (
    <Container>
      <Heading>
        <h1>{ label }</h1>
        <h2>{ description }</h2>
      </Heading>

      <Buttons>
        <button className="black">Custom Order</button>
        <button className="white">Existing Inventory</button>
      </Buttons>
    </Container>
  )
}