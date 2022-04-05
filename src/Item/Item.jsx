import './style.css'

export const Item = ({shouldRender, value, children, click}) => {

  if (!shouldRender) return null

  return (
    <div
      style={{height: "30px", display: 'flex', alignItems: 'center'}}
      className="item"
      onClick={click.bind(this, value)}
    >
      {children}
    </div>
  )
}