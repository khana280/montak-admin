import Notify from "../helpers/notify";
import router from "../router";

export default function useToken() {
  const setToken = (token: any) => {
    sessionStorage.setItem('token', JSON.stringify(token));
  }

  const clearToken = () => {
    sessionStorage.removeItem('token');
  }

  const getToken = () => {
    return JSON.parse(sessionStorage.getItem('token')!) || null;
  }

  const decodeToken = async () => {
    try {
      validateTokenRefresh();
      validateTokenAccess();
      const response = await fetch(import.meta.env.VITE_API_GATEWAY + '/auth/saya', {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + getToken().access_token
        }
      });
      const data = await response.json();
      if(response.ok) {
        return data.data;
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      sessionStorage.removeItem('token');
      router.push('/login');
      Notify.error(error.message)
    }
  }

  const refreshToken = async () => {
    try {
      validateTokenRefresh();
      const response = await fetch(import.meta.env.VITE_API_GATEWAY + '/auth/refresh-token', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + getToken().refresh_token
        }
      });
      const data = await response.json();
      if(response.ok) {
        setToken(data);
        return data;
      } else {
        throw new Error(data.message);
      }
    } catch (error: any) {
      sessionStorage.removeItem('token');
      router.push('/login');
      Notify.error(error.message)
    }
  }

  const validateTokenAccess = async () => {
    try {
      const token = getToken();
      if(!token.access_token) {
        sessionStorage.removeItem('token');
        throw new Error('Token not found');
      }
      const expToken = atob(token.access_token.split('.')[1]);
      const expTokenParsed = JSON.parse(expToken);
      if(expTokenParsed.exp < Date.now() / 1000) {
        const newToken = await refreshToken();
        setToken(newToken.data);
      }
    } catch (error: any) {
      Notify.error(error.message)
    }
  }

  const validateTokenRefresh = async () => {
    try {
      const token = getToken();
      if(!token.refresh_token) {
        sessionStorage.removeItem('token');
        throw new Error('Token not found');
      }
      const expToken = atob(token.refresh_token.split('.')[1]);
      const expTokenParsed = JSON.parse(expToken);
      if(expTokenParsed.exp < Date.now() / 1000) {
        sessionStorage.removeItem('token');
        throw new Error('Token expired');
      }
    } catch (error: any) {
      Notify.error(error.message)
      clearToken();
      router.push('/login');
    }
  }

  return {
    setToken, decodeToken, refreshToken, validateTokenAccess, validateTokenRefresh, getToken, clearToken
  }
}
