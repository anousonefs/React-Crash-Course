import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { blue, pink } from "@mui/material/colors"

const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: pink[500],
        },
    },
})

export default function ButtonAppBar() {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 3 }}
                        >
                            News
                        </Typography>
                        <Button
                            color="inherit"
                            style={{
                                backgroundColor: pink[500],
                                color: "#f5f6f7",
                            }}
                        >
                            LogOut
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    )
}
