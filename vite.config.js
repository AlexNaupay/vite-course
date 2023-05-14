import {defineConfig, loadEnv} from 'vite'

/** @type {import('vite').UserConfig} */
export default defineConfig(({command, mode})=> {
    const port = 5173;

    const env = loadEnv(mode, process.cwd())

    console.log(env.VITE_NAME)

    return {
        server:{
            port
        },
        envPrefix: 'VITE'

    }
})