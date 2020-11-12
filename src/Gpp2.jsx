import App from './App'
import Com404 from './components/Com404'
export default function App2() {
    return <div>
        <h1>这是首页，不要用App这个组件，因为只要用了App，那么Link.indexOf('/')就一定会匹配到它，exact都没用</h1>

    </div>
}