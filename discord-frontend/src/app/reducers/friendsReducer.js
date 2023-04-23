import { friendsAction } from "../actions/friendsAction";

const initState = {
  friends: [],
  friendRequests: [],
  onlineFriends: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case friendsAction.SET_FRIENDS:
      return {
        ...state,
        friends: action.payload.friends,
      };
    case friendsAction.SET_FRIEND_REQUESTS:
      return {
        ...state,
        friendRequests: action.payload.friendRequests,
      };
    case friendsAction.SET_ONLINE_FRIENDS:
      return {
        ...state,
        onlineFriends: action.payload.onlineFriends,
      };
    default: {
      return state;
    }
  }
};

export default reducer;
