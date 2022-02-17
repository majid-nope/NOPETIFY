export const initialState = {
    user: "majid",
    playlistsNo: null,
    followers: null,
    following: null,
    user_dp: null,
    playlists: [],
    playing: false,
    item: null,
    token: null
    // 'BQBaxqNIxjSynf-Is2dmOwW7_QqzD2SutJmL-aYls5yLw6irW0FNvfzvwCKhzn2Df6nsnXeYn4O0A6g5YPBdnia0xfwhE-P5he5SEHIUusnZGFftjihIKEZufwvnrkp-P2VyziO1boyxklAa9jbfs8bBkBYXrWCv2E3ngonv-i0CVdSXGis'

}

const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user.body,


            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        case "SET_PLAYLIST":
            return { ...state, playlists: action.playlists.body }
        case "SET_DP":
            return {
                ...state,
                user_dp: action.user_dp
            }
        case "SET_FOLLOWERS":
            return {
                ...state,
                followers: action.followers
            }
        case "SET_FOLLOWING":
            return {
                ...state,
                following: action.following
            }
        case "SET_PLAYLISTS_NO":
            return {
                ...state,
                playlistsNo: action.playlists
            }
        default:
            return state

    }

}
export default reducer;