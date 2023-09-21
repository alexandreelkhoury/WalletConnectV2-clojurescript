
shadow.cljs.devtools.client.env.module_loaded('main');

try { connectwallet.core.Application(); } catch (e) { console.error("An error occurred when calling (connectwallet.core/Application)"); throw(e); }