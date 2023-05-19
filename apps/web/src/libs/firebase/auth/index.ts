import {
  GoogleAuthProvider,
  User,
  getAdditionalUserInfo,
  getAuth,
  getRedirectResult,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import firebase from "..";

const auth = getAuth(firebase);

export default auth;

const googleAuthProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithRedirect(auth, googleAuthProvider);
};

export const logout = async () => {
  await signOut(auth);
};

export const checkAuth = async ({
  onSuccessAuth,
  onFailureAuth,
}: {
  onSuccessAuth: (user: User) => void;
  onFailureAuth: () => void;
}) => {
  getRedirectResult(auth).then((result) => {
    if (result?.user) {
      const { isNewUser } = getAdditionalUserInfo(result);
      if (isNewUser) {
        console.log({ isNewUser });
        onSuccessAuth(result.user);
      } else {
        onSuccessAuth(result.user);
      }
    } else {
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          onSuccessAuth(user);
        } else {
          onFailureAuth();
        }
      });
    }
  });
};
