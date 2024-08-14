import './index.css'

const ThumbnailItem = props => {
  const {details, isActive, onSelect} = props
  const {id, thumbnailUrl, thumbnailAltText} = details
  const clsname = isActive ? '' : 'not-selected'

  return (
    <>
      <button
        onClick={() => {
          onSelect(id)
        }}
        className="thumbnail-button"
      >
        <img src={thumbnailUrl} alt={thumbnailAltText} className={clsname} />
      </button>
    </>
  )
}
export default ThumbnailItem
