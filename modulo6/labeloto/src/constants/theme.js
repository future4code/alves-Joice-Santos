import { createTheme } from "@material-ui/core"
import { colorHome } from "./colors"

const theme = createTheme({
    palette: {
        primary: {
            main: colorHome,
            contrastText: "#454545"
        },
        text: {
            primary: "#82EEFD"
        }
    }
})

export default theme