import React from "react";
export type IToolProp = {
    showProfile?: true | false;
    profileName?: string;
    email?: string;
    showLanguageSwitcher?: true | false;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};
declare const Tool: ({ showProfile, showLanguageSwitcher, onClick, profileName, email, }: IToolProp) => JSX.Element;
export default Tool;
