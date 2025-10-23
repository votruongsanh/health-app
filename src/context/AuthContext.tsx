import { createContext, useMemo, useState } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  setAuthenticated: (val: boolean) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(true);
  const value = useMemo(
    () => ({ isAuthenticated, setAuthenticated }),
    [isAuthenticated]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;
export { AuthContext };
