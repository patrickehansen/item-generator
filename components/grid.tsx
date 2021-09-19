import sharedStyles from '../styles/shared.module.scss'

export const Grid: React.FC = ({children}) => {
  return (
    <div
      className={sharedStyles.grid}
    >
      {children}
    </div>
  )
}