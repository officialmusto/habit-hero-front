// assets
import logo from '../../assets/logo-text.png'

// css
import styles from './Landing.module.css'

// service
import * as authService from '../../services/authService'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
  handleLogout: () => void;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user, handleLogout } = props

  const handleDeleteAccount = async (): Promise<void> => {
    try {
      await authService.deleteAccount()
      handleLogout()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className={styles.container}>
      <img src={logo} alt="habit-hero-logo" />
      { user &&
        <button onClick={handleDeleteAccount}>
          DELETE ACCOUNT
        </button>
      }
    </main>
  )
}

export default Landing
