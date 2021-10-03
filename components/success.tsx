import sharedStyles from '../styles/shared.module.scss'
import CheckIcon from '@mui/icons-material/Check';

interface Props {
  message: string;
}

export const SuccessPanel: React.FC<Props> = ({message}) => {
  return (
    <div className={sharedStyles.successPanel} >
      <CheckIcon />
      <strong>Success: </strong> <span>{message}.</span>
    </div>
  )
}