// npm modules
import { useState } from 'react'
import useSound from 'use-sound'

// assets
import bean from '../../assets/icons/bean.png'
import noBean from '../../assets/icons/noBean.png'
import upMeow from '../../assets/audio/up-meow.wav'
import downMeow from '../../assets/audio/down-meow.wav'

// types
import { Profile } from '../../types/models'
import { VoteManagerFormData } from '../../types/forms'

interface VoteManagerProps {
  profile: Profile;
  handleVote: (formData: VoteManagerFormData) => Promise<void>;
}

const VoteManager = (props: VoteManagerProps): JSX.Element => {
  const { profile, handleVote} = props

  const [hover, setHover] = useState<number | null>(null)

  const [rateUp] = useSound(upMeow, { volume: 0.2 })
  const [rateDown] = useSound(downMeow, { volume: 0.2 })

  const ratingOptions = [1, 2, 3, 4, 5]
  const voteCount = profile.votesReceived.length
  let voteSum = 0

  profile.votesReceived.forEach(vote => voteSum += vote.value)

  const profileRating = voteCount ? voteSum / voteCount : 1

  const handleClick = (evt: React.MouseEvent<HTMLImageElement> ): void => {
    const newValue = parseInt(evt.currentTarget.id)

    newValue > profileRating ? rateUp() : rateDown()

    handleVote({ value: newValue, profileId: profile.id })
  }

  const handleHover = (evt: React.MouseEvent): void => {
    if (evt.type === 'mouseover') {
      setHover(parseInt(evt.currentTarget.id))
    } else if (evt.type === 'mouseleave') {
      setHover(null)
    }
  }

  return (
    <section>
      {ratingOptions.map((rating: number): JSX.Element => (
        <img
          id={rating.toString()}
          key={rating}
          onClick={handleClick}
          onMouseOver={handleHover}
          onMouseLeave={handleHover}
          src={rating <= (hover ?? profileRating) ? bean : noBean } 
          alt="Bean Symbol" 
        />
      ))}
    </section>
  )
}

export default VoteManager