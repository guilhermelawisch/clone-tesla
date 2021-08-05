import { DefaultOverlayContent } from '../DefaultOverlayContent'
import { ModelsWrapper, ModelSection } from '../Model'
import { Container } from './style'

export const Page = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map((modelName, index) => (
            <ModelSection
              key={index}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent 
                  label={modelName}
                  description="Order Online for Delivery"
                /> 
              }
            />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  )
}