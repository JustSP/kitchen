import { AppShell } from "@mantine/core";
import { FC, useContext } from "react";
import PageMenu from "./page.menu";
import { AppContext } from "../context/app.context";

interface PageLayoutProps {
  children: JSX.Element;
  isLoggedIn?: boolean;
}

const PageLayout: FC<PageLayoutProps> = ({ children, isLoggedIn = true }) => {
  const { appState, updateAppState } = useContext(AppContext);
  //const [selectedMenuIndex, setSelectedMenuIndex] = useState<number>(0);
  return (
    <AppShell>
      <PageMenu
        isLoggedIn={isLoggedIn}
        onMenuClicked={(menuIndex) =>
          updateAppState({ ...appState, selectedMenuIndex: menuIndex })
        }
        selectedMenuIndex={appState.selectedMenuIndex}
      />
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};

export default PageLayout;
