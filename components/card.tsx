import Link from 'next/link'
import sharedStyles from '../styles/shared.module.scss'

export const Card: React.FC = ({children}) => {
  return (
    <div
      className={sharedStyles.card}
    >
      {children}
    </div>
  )
}

interface LinkCardProps {
  href: string;
}

export const LinkCard: React.FC<LinkCardProps> = ({children, href}) => {
  return (
    <Link href={href}>
      <a
        className={`${sharedStyles.card} ${sharedStyles.cardLink}`}
      >
        {children}
      </a>
    </Link>
  )
}