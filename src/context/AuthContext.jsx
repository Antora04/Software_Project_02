import React, { createContext, useContext, useMemo } from 'react';

const RoutineAccessContext = createContext(null);

export const LOCAL_ROUTINE_MANAGER = Object.freeze({
  // `u-admin` is present in the isolated SQLite copy and keeps routine
  // history/created_by references valid without introducing a login screen.
  id: 'u-admin',
  email: 'routine.manager@local',
  role: 'ADMIN',
  isChair: true,
  firstName: 'Routine',
  lastName: 'Manager',
});

// The standalone package deliberately has no sign-in screen. This provider
// supplies the local manager identity expected by the unchanged routine UI.
export function AuthProvider({ children }) {
  const value = useMemo(() => ({
    user: LOCAL_ROUTINE_MANAGER,
    token: null,
    loading: false,
    login: async () => LOCAL_ROUTINE_MANAGER,
    adminLogin: async () => LOCAL_ROUTINE_MANAGER,
    register: async () => LOCAL_ROUTINE_MANAGER,
    logout: () => {},
    quickLogin: async () => LOCAL_ROUTINE_MANAGER,
    changePassword: async () => ({ message: 'This local routine workspace has no password.' }),
  }), []);

  return <RoutineAccessContext.Provider value={value}>{children}</RoutineAccessContext.Provider>;
}

export const useAuth = () => useContext(RoutineAccessContext);
export const DEMO_USERS = [];
