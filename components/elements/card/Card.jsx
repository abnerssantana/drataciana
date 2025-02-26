const Card = (props) => {
  const classNames = `card card--${props.variant}`;

  // Estilo para o background do image-wrap
  const imageWrapStyle = props.color ? { backgroundColor: props.color } : {};

  return (
    <div className={classNames}>
      <div className={`card--${props.variant}__wrapper`}>
        {props.image && (
          <div 
            className={`card--${props.variant}__image-wrap`}
            style={imageWrapStyle}
          >
            <img
              src={props.image}  
              alt={props.title}
              loading="lazy"
            />
          </div>
        )}
        <div className={`card--${props.variant}__body`}>
          <h4>{props.title}</h4>
          {props.text && <p className="p-16">{props.text}</p>}
        </div>
      </div>
    </div>
  )
}

export default Card