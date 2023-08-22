

export const Button = ({type = 'default', icon = null}) => {

  return (
    <>
    <span>

    <code>{type}</code>
    <button className={type}>
    {icon == null ? '' : <span className="material-symbols-rounded">{icon}</span> }
    
    Button
    </button>
    </span>
    </>
  )
}
