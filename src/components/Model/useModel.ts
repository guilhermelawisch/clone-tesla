import { useCallback, useContext, useEffect } from "react"
import ModelCotext from "./ModelCotext"

export default function useModel(modelName: string) {
  const { registerModel, unregisterModel, getModelByName } = useContext(ModelCotext)

  useEffect(() => {
    return () => unregisterModel(modelName)
  }, [modelName, unregisterModel])

  const getModel = useCallback(() => getModelByName(modelName), [
    getModelByName,
    modelName
  ])

  return { registerModel, getModel }
}