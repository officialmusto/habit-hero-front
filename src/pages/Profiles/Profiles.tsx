// css
import styles from './Profiles.module.css'

// components
import ProfileCard from '../../components/ProfileCard/ProfileCard'

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
        <ProfileCard
          key={profile.id}
          profile={profile}
          handleVote={handleVote}
        />
      ))}
    </main>
  )
}
 
export default Profiles
