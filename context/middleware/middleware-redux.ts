import { fetchUser, fetchUserPosts } from "@/lib/actions/user.actions";
import { Middleware } from "redux";
import { updateUserRedux } from "../features/user-slice";

export const logger: Middleware =
  (storeAPI) => (dispatch) => async (action) => {
    const result = await dispatch(action);

    if (action.type === "user/updateUserIdRedux") {
      const userInfo = await fetchUser(action.payload);
      storeAPI.dispatch(
        updateUserRedux({
          _id: userInfo._id,
          id: userInfo.id,
          username: userInfo.username,
          name: userInfo.name,
          bio: userInfo.bio,
          image: userInfo.image,
          threads: userInfo.threads,
        })
      );
    }

    return result;
  };
