import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import useModel from '../useModel'
import { Container } from './style'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: React.ReactNode
}

export const ModelSection: React.FC<Props> = ({ modelName, overlayNode, children, ...props }) => {
  const { registerModel } = useModel(modelName)

  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef
      })
    }
  }, [modelName, overlayNode, registerModel])

  return (
    <Container ref={sectionRef} {...props}>
      { children }
    </Container>
  )
}

export default ModelSection