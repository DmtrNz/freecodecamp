type Status = "Stopped" | "Playing" | "Paused"

type PlayerState = {
  volume: number // in percents
  trackUrl: string // 'https://blabla.com/track01.mp3',
  currentPlayPosition: number // milliseconds,
  status: Status
}

export const playerReducer = (state: PlayerState, action: any) => {
  switch (action.type) {
    case XXX:
      return {
        ...state,
        trackUrl: action.url,
      }
    default:
      return state
  }
}

export const muteTrackAC = () => ({ type: "TRACK-MUTED" })
export const changeTrackAC = (url: string) => ({ type: "TRACK-URL-CHANGED", url })
export const changeTrackPlayStatusAC = (status: Status) => ({ type: "TRACK-STATUS-CHANGED", status })

// Какой тип должен быть вместо XXX?





const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "TRACK-LIKED":
        return {
          ...state,
          [XXX]: {
            ...state[XXX],
            likesCount: state[XXX].likesCount + 1,
          },
        }
      default:
        return state
    }
  }
  
  const likeTrackAC = (trackId: number) => ({ type: "TRACK-LIKED", trackId })
  
  const state = {
    12: { id: 12, likesCount: 10 },
    14: { id: 14, likesCount: 2 },
    100: { id: 100, likesCount: 0 },
  }
  const newState = reducer(state, likeTrackAC(14))
  
  console.log(newState[14].likesCount === 3)
  
  // Что нужно написать вместо XXX, чтобы в консоли увидеть true?
  // ❗ Захардкодженные значения использовать запрещено
