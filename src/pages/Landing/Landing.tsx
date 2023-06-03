// assets
import logo from '../../assets/logo.svg'

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
      <h1>Meow Meow <br/> Beans</h1>
      <img src={logo} alt="A meow meow bean" />
      { user &&
        <button onClick={handleDeleteAccount}>
          DELETE ACCOUNT
        </button>
      }
    </main>
  )
}

export default Landing
