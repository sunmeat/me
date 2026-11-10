import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import {Analytics} from "@vercel/analytics/react";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App/>
        <Analytics/>
    </StrictMode>,
)
if(import.meta.env.PROD&&'serviceWorker'in navigator){
 navigator.serviceWorker.register('/offline-worker.js',{updateViaCache:'none'}).then(()=>navigator.serviceWorker.ready).then(r=>r.active?.postMessage({type:'CACHE_VISITED',urls:performance.getEntriesByType('resource').map(x=>x.name)})).catch(()=>{});
}
