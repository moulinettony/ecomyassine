import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const useAdminAuth = () => {
  const router = useRouter();
  const adminLoggedIn = Cookies.get('adminLoggedIn') === 'true';

  useEffect(() => {
    if (!adminLoggedIn) { 
      router.push('/login'); // Redirect to login page if not authenticated
    }
  }, [adminLoggedIn, router]);

  return adminLoggedIn;
};

export default useAdminAuth;
