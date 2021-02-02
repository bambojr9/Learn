import Cookies from 'cookies';
import HomePage from '../components/HomePage';
import { Layout } from '../layouts/Layout';
import api from '../services/api';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';
import Router from 'next/router';
const IndexPage = (props) => {
  const user = useAuth(props.user);
  // const { data: { data: pages } = {}, isValidating } = useSWR(
  //   loading ? false : '/pages',
  //   api.get
  // );
  useEffect(() => {
    if (!user) {
      Router.push('/auth/sign-in');
    }
  }, [user]);

  // const showSkeleton = isValidating || loading;
  console.log('@User :  ', user);
  return (
    <Layout title="Home Page">
      <HomePage />
      <h1>Xin chao HOME</h1>
    </Layout>
  );
};

// NODE JS CODE
export async function getServerSideProps(context) {
  const cookies = new Cookies(context.req);
  let payload = cookies.get('token');
  console.log('Payload:', payload);
  api.defaults.headers.Authorization = `Bearer ${payload}`;
  // const user = await getData();
  try {
    var { data: user } = await api.get('/api/users');
  } catch (error) {
    if (typeof window !== 'undefined') {
      window.location.pathname = '/auth/sign-in';
    }
  }
  console.log(user);
  if (!user) {
    return {
      redirect: {
        destination: '/auth/sign-in',
        permanent: false,
      },
    };
  }
  return {
    props: {
      user: user,
    },
  };
}

export default IndexPage;
