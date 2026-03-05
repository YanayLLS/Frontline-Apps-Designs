import { createContext, useContext, useState, ReactNode } from 'react';

interface AvatarContextType {
  avatarUrl: string | null;
  setAvatarUrl: (url: string | null) => void;
  uploadAvatar: (file: File) => Promise<void>;
  removeAvatar: () => void;
  isLoggedIn: boolean;
  login: (email: string, password: string) => void;
  logout: () => void;
}

const AvatarContext = createContext<AvatarContextType | undefined>(undefined);

export function AvatarProvider({ children }: { children: ReactNode }) {
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const uploadAvatar = async (file: File) => {
    // Create a local URL for the uploaded image
    const url = URL.createObjectURL(file);
    setAvatarUrl(url);
    
    // In a real app, you would upload to a server here
    // const formData = new FormData();
    // formData.append('avatar', file);
    // await fetch('/api/upload-avatar', { method: 'POST', body: formData });
  };

  const removeAvatar = () => {
    if (avatarUrl) {
      URL.revokeObjectURL(avatarUrl);
    }
    setAvatarUrl(null);
  };

  const login = (email: string, password: string) => {
    // In a real app, you would validate credentials here
    console.log('Logging in with:', email);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    removeAvatar();
  };

  return (
    <AvatarContext.Provider value={{ avatarUrl, setAvatarUrl, uploadAvatar, removeAvatar, isLoggedIn, login, logout }}>
      {children}
    </AvatarContext.Provider>
  );
}

export function useAvatar() {
  const context = useContext(AvatarContext);
  if (context === undefined) {
    throw new Error('useAvatar must be used within an AvatarProvider');
  }
  return context;
}
