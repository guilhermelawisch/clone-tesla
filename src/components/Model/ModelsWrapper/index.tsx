import React, { useState, useRef, useCallback } from 'react'
import ModelContext, { CarModel } from '../ModelCotext'
import { Container } from './style'

const ModelsWrapper: React.FC = ({ children }: any) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registerModels, setRegisterModels] = useState<CarModel[]>([])

  const registerModel = useCallback((model: CarModel) => {
    setRegisterModels(state => [...state, model])
  }, [])

  const unregisterModel = useCallback((modelName: string) => {
    setRegisterModels(state => state.filter(model => model.modelName !== modelName))
  }, [])

  const getModelByName = useCallback((modelName: string) => {
    return registerModels.find(item => item.modelName === modelName) || null
  }, [registerModels])

  return (
    <ModelContext.Provider value={{
      wrapperRef,
      registerModels,
      registerModel,
      unregisterModel,
      getModelByName
    }}>
      <Container ref={wrapperRef}>
        { children }
      </Container>
    </ModelContext.Provider>
  )
}

export default ModelsWrapper