
shadow.cljs.devtools.client.env.module_loaded('main');

try { connectwallet.core.app(); } catch (e) { console.error("An error occurred when calling (connectwallet.core/app)"); throw(e); }