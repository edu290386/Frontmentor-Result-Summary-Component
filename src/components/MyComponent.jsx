
import ImageComponent from './ImageComponent'
import InformationComponent from './InformationComponent'

const MyComponent = () => {
  return (
    <div className="border-black border flex flex-col h-screen md:flex-row ">
        <ImageComponent />
        <InformationComponent />
    </div>
  )
}

export default MyComponent