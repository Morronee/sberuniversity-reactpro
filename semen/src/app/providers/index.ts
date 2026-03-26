import {withBrowserRouter} from "app/providers/ReactRouter";
import {compose} from "shared/lib/compose.ts";
import {withAuthProvider} from "app/providers/Auth/withAuthProvider.tsx";

export const withProviders = compose(withBrowserRouter, withAuthProvider);