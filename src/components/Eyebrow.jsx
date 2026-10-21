import {withTranslation} from "../i18n.jsx";
import React from "react";

function Eyebrow({children}) {
    return <div className="eyebrow">{children}</div>;
}

export default withTranslation(Eyebrow);