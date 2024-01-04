import "primereact/resources/themes/viva-dark/theme.css";
import "primeflex/primeflex.css";
import "./index.css";

import {createRoot} from "react-dom/client";
import MainProvider from "./providers/MainProvider";

if (process.env.NODE_ENV !== "development") {
    console.log("%cStop!", "color: red; font-size: 40px; font-weight: bold;");
    console.log(
        "%cDo not enter any scripts or some sort of \"hack\" here, it will most likely compromise your account and steal your information",
        "font-size: 30px; font-weight: bold;"
    );
    console.log(
        "%cThis browser feature is intended for developers only",
        "font-size: 30px; font-weight: bold;"
    );
}

const container = document.getElementById("app")!;
const root = createRoot(container);

root.render(MainProvider);

