import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// Apps
// eslint-disable-next-line @typescript-eslint/no-unused-vars

import "./assets/sass/style.react.scss";
//import "./assets/sass/style.scss";
import { MetronicI18nProvider } from "./i18n/Metronici18n";
import { AppRoutes } from "./routing/AppRoutes";
import ErrorBoundary from "./ErrorBoundary";
import { AuthProvider } from "./ContextProvider";

/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */

const queryClient = new QueryClient();
const container = document.getElementById("root");
if (container) {
  createRoot(container).render(
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <MetronicI18nProvider>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </MetronicI18nProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}
