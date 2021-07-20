import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./themeConfig";

import { AppRouter } from "./routes/AppRouter";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}
