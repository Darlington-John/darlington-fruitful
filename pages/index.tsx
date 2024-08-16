
import Loader from "../components/loader";
import LandingPage from "../components/sections/landing-page/index";
import { GetServerSideProps } from 'next';
import { getXataClient } from '../utils/xata';
import jwt from 'jsonwebtoken';
import nookies from 'nookies';

export const getServerSideProps: GetServerSideProps = async (context) => {
  // You can still check for a token, but don't redirect if it's missing
  const cookies = nookies.get(context);
  const token = cookies.token;

  let userData = null;

  if (token) {
    try {
      // Try to verify the token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const { email } = decoded as { email: string };

      // Fetch user data if the token is valid
      const xata = getXataClient();
      userData = await xata.db.users.filter({ email }).getFirst();

      if (userData) {
        userData = {
          ...userData,
          xata: {
            ...userData.xata,
            createdAt: userData.xata?.createdAt?.toISOString() ?? null,
            updatedAt: userData.xata?.updatedAt?.toISOString() ?? null,
          },
        };
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      // You can ignore the error and let the user continue to the home page
    }
  }

  return {
    props: {
      userData, // This will be null if the user is not logged in
    },
  };
};
export default function Index() {
  return (
    <>
    <Loader/>
<LandingPage/>
</>
  );
}
