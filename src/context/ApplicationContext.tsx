import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router';

interface User {
  role: string;
  id?: string;
  email: string;
  password?: string; // remove this in future
}

interface ApplicationContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(
  undefined,
);

interface ApplicationProviderProps {
  children: ReactNode;
}

export const ApplicationProvider: React.FC<ApplicationProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  const logout = () => {
    setUser(null);
    localStorage.clear();
    navigate('/auth/login',{ replace: true });
  };

  const value = {
    user,
    setUser,
    logout,
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};

export const useApplicationContext = (): ApplicationContextType => {
  const context = useContext(ApplicationContext);

  if (context === undefined) {
    throw new Error(
      'useApplicationContext must be used within an ApplicationProvider',
    );
  }

  return context;
};
