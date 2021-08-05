import { createContext, ReactNode, RefObject } from 'react'

export interface CarModel {
  modelName: string
  overlayNode: ReactNode
  sectionRef: RefObject<HTMLElement>
}

interface IModelsContext {
  wrapperRef: RefObject<HTMLElement>
  registerModels: CarModel[]
  registerModel: (model: CarModel) => void
  unregisterModel: (modelName: string) => void
  getModelByName: (modelName: string) => CarModel | null
}

export default createContext<IModelsContext>({} as IModelsContext)