import { createTheme } from "@material-ui/core";
import { colorOne, colorTwo } from "./colors"

const theme = createTheme({
    palette: {
        primary: {
            main: colorOne,
            contrastText: "black"
        },
        text: {
            primary: colorTwo
        }
    }
})

export default theme