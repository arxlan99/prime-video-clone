// import axios from "axios";
// import { loginFailure, loginStart, loginSucess } from "../actions/auth";

// export const login = async (user, dispatch) => {
//   dispatch(loginStart);
//   try {
//     const res = await axios.post("/login", user);
//     res.data.isAdmin && dispatch(loginSucess((await res).data));
//   } catch (error) {
//     dispatch(loginFailure);
//   }
// };
