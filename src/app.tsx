import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'
const container = document.getElementById('app')
const root = createRoot(container!)

root.render(
    <div>
        <h1>hello world</h1>
    </div>
)
