import moment from "moment";
import md5 from "md5";
import "./style.css";
import { getHeaderHtml } from "./components/header";
import { getFooterHtml } from "./components/footer";
import image01 from "./media/webhook_delivery_engine_thumbnail.png";
import config from "./config.json";
import { ENV } from "./configs/env";
import { init } from "./components/a/b/init";
const { WEB_TIMEZONE } = config;
const app = document.querySelector('#app');
init();
app.innerHTML = `
<div class="max-w-300 mx-auto py-5">
${getHeaderHtml()}
<h1>Hello anh em</h1>
<h2>Now: ${moment().format('DD/MM/YYYY HH:mm:ss')}</h2>
<p>${md5('123456')}</p>
<div>
<img src="/images/antigravity_3_phien_ban_thumbnail.png" width="400" />
</div>
<div>
<img src="${image01}" width="400" />
</div>
<h3 class="text-2xl">Timezone: ${WEB_TIMEZONE}</h3>
<h3 class="text-2xl">API Server: ${ENV.API_SERVER}</h3>
<h3 class="text-2xl">Main Color: ${ENV.MAIN_COLOR}</h3>
${getFooterHtml()}
</div>
`