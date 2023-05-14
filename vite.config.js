import { defineConfig } from 'vite'
/** @type {import('vite').UserConfig} */
export default defineConfig(({command, mode})=> {
    const port = 5173;

    return {
        server:{
            port
        }
    }
})