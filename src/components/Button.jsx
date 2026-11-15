import Icon from './Icon'

function Base({ variant, href, label, icon, target, classes = '' }) {
  const external = target === '_blank'
  return (
    <a
      href={href}
      target={target}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`btn ${variant} ${classes}`}
    >
      {label}
      {icon && <Icon name={icon} />}
    </a>
  )
}

export const ButtonPrimary = (props) => <Base variant="btn-primary" {...props} />
export const ButtonGhost = (props) => <Base variant="btn-ghost" {...props} />
export const ButtonNeon = (props) => <Base variant="btn-neon" {...props} />
