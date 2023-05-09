import { setOpenRoom } from "../app/actions/roomActions";
import store from "../app/store";

export const createNewRoom = () => {
  store.dispatch(setOpenRoom(true, true));
};
