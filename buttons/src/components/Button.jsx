

export const Button = ({type = 'default', icon = null, text = 'Button'}) => {

  return (
    <>
    <span>

    <code>{type}</code>
    <button className={type}>
    {icon == null ? '' : <span className="material-symbols-rounded">{icon}</span> }
    
    {text}
    </button>
    </span>
    </>
  )
}
