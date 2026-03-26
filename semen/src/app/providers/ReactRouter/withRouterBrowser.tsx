import type {ComponentType} from "react";
import {BrowserRouter} from "react-router";

export const withBrowserRouter = (WrappedComponent: ComponentType) => () => {
    return (
        <BrowserRouter>
            <WrappedComponent />
        </BrowserRouter>
    )
}