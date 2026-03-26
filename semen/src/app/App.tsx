import './App.css'
import {withProviders} from "app/providers";
import {AppRouter} from "app/providers/ReactRouter";

export const App = withProviders(() => {
    return (
        <AppRouter/>
    )
})

