// assets
import defaultPic from "../../assets/icons/profile.png"

// components
import VoteManager from "../VoteManager/VoteManager"

// types
import { Profile } from "../../types/models"
import { VoteManagerFormData } from "../../types/forms"

interface ProfileCardProps {
  profile: Profile;
  handleVote: (formData: VoteManagerFormData) => Promise<void>;
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile } = props

  return (
    <article>
      <img 
        src={profile.photo ? profile.photo : defaultPic} 
        alt={`${profile.name}'s avatar`} 
      />
      <h1>{profile.name}</h1>
      <VoteManager { ...props } />
    </article>
  )
}

export default ProfileCard