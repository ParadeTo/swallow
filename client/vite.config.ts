import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
// 可参考 https://zhuanlan.zhihu.com/p/358403100 进行优化
export default defineConfig({
  plugins: [reactRefresh()],
})
