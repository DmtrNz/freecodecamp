// const playerReducer = (state: PlayerState, action: any) => {
//     switch (action.type) {
//         case "TRACK-VOLUME-CHANGED":
//             return {
//                 ...state,
//                 XXX,
//             }
//         default:
//             return state
//     }
// }

// export const muteTrackAC = () => ({ type: "TRACK-MUTED" })
// export const changeVolumeAC = (volumeLevel: number) => ({ type: "TRACK-VOLUME-CHANGED", volumeLevel })
// export const changeTrackAC = (url: string) => ({ type: "TRACK-URL-CHANGED", url })
// export const changeTrackPlayStatusAC = (status: Status) => ({ type: "TRACK-STATUS-CHANGED", status })

// const state: PlayerState = {
//     status: "Stopped",
//     currentPlayPosition: 1213,
//     trackUrl: "https://blabla.com/track01.mp3",
//     volume: 100,
// }
// const newState = playerReducer(state, changeVolumeAC(20))
// console.log(newState.volume === 20)

// Напишите вместо XXX правильную строку кода, чтобы изменить громкость трека и увидеть в консоли true.
//answer: volume: action.volumeLevel