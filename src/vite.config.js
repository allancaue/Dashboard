import { defineConfig } from 'vite';
import react from '@vite/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/todo_react_vite_deploy',
})