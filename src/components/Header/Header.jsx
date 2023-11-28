import { Logo } from "components/Logo/Logo"

import { Navigation } from "components/Navigation/Navigation"
import { ContainerHeader } from "./Header.styled"


export const Header = () => {
    return <ContainerHeader>
    <Logo />
    <Navigation/>
    </ContainerHeader>
}