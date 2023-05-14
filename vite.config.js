import {defineConfig, loadEnv} from 'vite'
import path from 'path'

/** @type {import('vite').UserConfig} */
export default defineConfig(({command, mode})=> {
    const port = 5173;

    const env = loadEnv(mode, process.cwd())

    console.log(env.VITE_NAME)

    if (mode === "development") {
        console.log("modo desarrollo")
        return {
            server: {
                port
            },
            envPrefix: 'VITE'
        }
    } else {
        console.log("modo produccion")
        return {
            build: {
                rollupOptions: {
                    input: {
                        main: path.resolve(__dirname, 'index.html'),
                        help: path.resolve(__dirname, 'help', 'help.html')
                    }
                }
            }
        }
    }
})