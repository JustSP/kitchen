type AppVars = {
  isUserLoggedIn?: boolean;
  accessToken?: string;
  refreshToken?: string;
  username: string;
  member: unknown;
  selectedMenuIndex: number;
};

interface AppState {
  appState: AppVars;

  updateAppState: (appState: AppVars) => void;
}

interface ContextProviderProps {
  children: React.ReactNode;
}

type MenuItem = {
  title: string;
  icon: React.ReactElement;
};
