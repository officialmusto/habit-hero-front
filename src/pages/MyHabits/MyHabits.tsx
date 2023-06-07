// css
import styles from './MyHabits.css'

// components
import HabitCard from '../../components/HabitCard/HabitCard'

// types
import { Profile } from '../../types/models'
import { VoteManagerFormData } from '../../types/forms'

interface ProfilesProps {
  profiles: Profile[];
  handleVote: (formData: VoteManagerFormData) => Promise<void>;
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profiles, handleVote } = props


  if (!profiles.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }

  return (
    <main className="list">
      {profiles.map((profile: Profile) => (
        <HabitCard
          key={profile.id}
          profile={profile}
          handleVote={handleVote}
        />
      ))}
    </main>
  )
}

export default Profiles
