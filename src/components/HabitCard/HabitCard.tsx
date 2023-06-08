// assets
import defaultPic from "../../assets/icons/profile.png"

// components


// types
import { Profile } from "../../types/models"
import { CreateHabitFormData } from "../../types/forms"

interface HabitCardProps {
  profile: Profile;
  handleVote: (formData: CreateHabitFormData) => Promise<void>;
}

const HabitCard = (props: HabitCardProps): JSX.Element => {

  const { profile } = props

  return (
    <article>
      <img 
        src={profile.photo ? profile.photo : defaultPic} 
        alt={`${profile.name}'s avatar`} 
      />
      <h1>{profile.name}</h1>
    </article>
  )
}

export default HabitCard