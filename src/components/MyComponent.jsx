
import ImageComponent from './ImageComponent'
import InformationComponent from './InformationComponent'

const MyComponent = () => {
  return (
    <div className="border-black border flex-none md:flex ">
        <ImageComponent />
        <InformationComponent />
    </div>
  )
}

export default MyComponent