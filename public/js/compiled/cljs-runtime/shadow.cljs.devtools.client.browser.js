goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___23022 = arguments.length;
var i__5770__auto___23023 = (0);
while(true){
if((i__5770__auto___23023 < len__5769__auto___23022)){
args__5775__auto__.push((arguments[i__5770__auto___23023]));

var G__23024 = (i__5770__auto___23023 + (1));
i__5770__auto___23023 = G__23024;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22742){
var G__22743 = cljs.core.first(seq22742);
var seq22742__$1 = cljs.core.next(seq22742);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22743,seq22742__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22744 = cljs.core.seq(sources);
var chunk__22745 = null;
var count__22746 = (0);
var i__22747 = (0);
while(true){
if((i__22747 < count__22746)){
var map__22752 = chunk__22745.cljs$core$IIndexed$_nth$arity$2(null,i__22747);
var map__22752__$1 = cljs.core.__destructure_map(map__22752);
var src = map__22752__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22752__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22752__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22752__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22752__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22754){var e_23025 = e22754;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23025);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23025.message)].join('')));
}

var G__23026 = seq__22744;
var G__23027 = chunk__22745;
var G__23028 = count__22746;
var G__23029 = (i__22747 + (1));
seq__22744 = G__23026;
chunk__22745 = G__23027;
count__22746 = G__23028;
i__22747 = G__23029;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22744);
if(temp__5804__auto__){
var seq__22744__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22744__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22744__$1);
var G__23030 = cljs.core.chunk_rest(seq__22744__$1);
var G__23031 = c__5568__auto__;
var G__23032 = cljs.core.count(c__5568__auto__);
var G__23033 = (0);
seq__22744 = G__23030;
chunk__22745 = G__23031;
count__22746 = G__23032;
i__22747 = G__23033;
continue;
} else {
var map__22756 = cljs.core.first(seq__22744__$1);
var map__22756__$1 = cljs.core.__destructure_map(map__22756);
var src = map__22756__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22756__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22756__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22756__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22756__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22757){var e_23034 = e22757;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_23034);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_23034.message)].join('')));
}

var G__23035 = cljs.core.next(seq__22744__$1);
var G__23036 = null;
var G__23037 = (0);
var G__23038 = (0);
seq__22744 = G__23035;
chunk__22745 = G__23036;
count__22746 = G__23037;
i__22747 = G__23038;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__22758 = cljs.core.seq(js_requires);
var chunk__22759 = null;
var count__22760 = (0);
var i__22761 = (0);
while(true){
if((i__22761 < count__22760)){
var js_ns = chunk__22759.cljs$core$IIndexed$_nth$arity$2(null,i__22761);
var require_str_23039 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23039);


var G__23040 = seq__22758;
var G__23041 = chunk__22759;
var G__23042 = count__22760;
var G__23043 = (i__22761 + (1));
seq__22758 = G__23040;
chunk__22759 = G__23041;
count__22760 = G__23042;
i__22761 = G__23043;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22758);
if(temp__5804__auto__){
var seq__22758__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22758__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22758__$1);
var G__23044 = cljs.core.chunk_rest(seq__22758__$1);
var G__23045 = c__5568__auto__;
var G__23046 = cljs.core.count(c__5568__auto__);
var G__23047 = (0);
seq__22758 = G__23044;
chunk__22759 = G__23045;
count__22760 = G__23046;
i__22761 = G__23047;
continue;
} else {
var js_ns = cljs.core.first(seq__22758__$1);
var require_str_23048 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23048);


var G__23049 = cljs.core.next(seq__22758__$1);
var G__23050 = null;
var G__23051 = (0);
var G__23052 = (0);
seq__22758 = G__23049;
chunk__22759 = G__23050;
count__22760 = G__23051;
i__22761 = G__23052;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22763){
var map__22764 = p__22763;
var map__22764__$1 = cljs.core.__destructure_map(map__22764);
var msg = map__22764__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22764__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22764__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22765(s__22766){
return (new cljs.core.LazySeq(null,(function (){
var s__22766__$1 = s__22766;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22766__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22771 = cljs.core.first(xs__6360__auto__);
var map__22771__$1 = cljs.core.__destructure_map(map__22771);
var src = map__22771__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22771__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22771__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__22766__$1,map__22771,map__22771__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22764,map__22764__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22765_$_iter__22767(s__22768){
return (new cljs.core.LazySeq(null,((function (s__22766__$1,map__22771,map__22771__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22764,map__22764__$1,msg,info,reload_info){
return (function (){
var s__22768__$1 = s__22768;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22768__$1);
if(temp__5804__auto____$1){
var s__22768__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22768__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22768__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22770 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22769 = (0);
while(true){
if((i__22769 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__22769);
cljs.core.chunk_append(b__22770,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23053 = (i__22769 + (1));
i__22769 = G__23053;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22770),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22765_$_iter__22767(cljs.core.chunk_rest(s__22768__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22770),null);
}
} else {
var warning = cljs.core.first(s__22768__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22765_$_iter__22767(cljs.core.rest(s__22768__$2)));
}
} else {
return null;
}
break;
}
});})(s__22766__$1,map__22771,map__22771__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22764,map__22764__$1,msg,info,reload_info))
,null,null));
});})(s__22766__$1,map__22771,map__22771__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22764,map__22764__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22765(cljs.core.rest(s__22766__$1)));
} else {
var G__23054 = cljs.core.rest(s__22766__$1);
s__22766__$1 = G__23054;
continue;
}
} else {
var G__23055 = cljs.core.rest(s__22766__$1);
s__22766__$1 = G__23055;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__22772_23056 = cljs.core.seq(warnings);
var chunk__22773_23057 = null;
var count__22774_23058 = (0);
var i__22775_23059 = (0);
while(true){
if((i__22775_23059 < count__22774_23058)){
var map__22778_23060 = chunk__22773_23057.cljs$core$IIndexed$_nth$arity$2(null,i__22775_23059);
var map__22778_23061__$1 = cljs.core.__destructure_map(map__22778_23060);
var w_23062 = map__22778_23061__$1;
var msg_23063__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22778_23061__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22778_23061__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22778_23061__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22778_23061__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23066)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23064),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23065),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23063__$1)].join(''));


var G__23067 = seq__22772_23056;
var G__23068 = chunk__22773_23057;
var G__23069 = count__22774_23058;
var G__23070 = (i__22775_23059 + (1));
seq__22772_23056 = G__23067;
chunk__22773_23057 = G__23068;
count__22774_23058 = G__23069;
i__22775_23059 = G__23070;
continue;
} else {
var temp__5804__auto___23071 = cljs.core.seq(seq__22772_23056);
if(temp__5804__auto___23071){
var seq__22772_23072__$1 = temp__5804__auto___23071;
if(cljs.core.chunked_seq_QMARK_(seq__22772_23072__$1)){
var c__5568__auto___23073 = cljs.core.chunk_first(seq__22772_23072__$1);
var G__23074 = cljs.core.chunk_rest(seq__22772_23072__$1);
var G__23075 = c__5568__auto___23073;
var G__23076 = cljs.core.count(c__5568__auto___23073);
var G__23077 = (0);
seq__22772_23056 = G__23074;
chunk__22773_23057 = G__23075;
count__22774_23058 = G__23076;
i__22775_23059 = G__23077;
continue;
} else {
var map__22779_23078 = cljs.core.first(seq__22772_23072__$1);
var map__22779_23079__$1 = cljs.core.__destructure_map(map__22779_23078);
var w_23080 = map__22779_23079__$1;
var msg_23081__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22779_23079__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22779_23079__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22779_23079__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22779_23079__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23084)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23082),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23083),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23081__$1)].join(''));


var G__23085 = cljs.core.next(seq__22772_23072__$1);
var G__23086 = null;
var G__23087 = (0);
var G__23088 = (0);
seq__22772_23056 = G__23085;
chunk__22773_23057 = G__23086;
count__22774_23058 = G__23087;
i__22775_23059 = G__23088;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22762_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22762_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22780){
var map__22781 = p__22780;
var map__22781__$1 = cljs.core.__destructure_map(map__22781);
var msg = map__22781__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22781__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22781__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22782 = cljs.core.seq(updates);
var chunk__22784 = null;
var count__22785 = (0);
var i__22786 = (0);
while(true){
if((i__22786 < count__22785)){
var path = chunk__22784.cljs$core$IIndexed$_nth$arity$2(null,i__22786);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22896_23089 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22900_23090 = null;
var count__22901_23091 = (0);
var i__22902_23092 = (0);
while(true){
if((i__22902_23092 < count__22901_23091)){
var node_23093 = chunk__22900_23090.cljs$core$IIndexed$_nth$arity$2(null,i__22902_23092);
if(cljs.core.not(node_23093.shadow$old)){
var path_match_23094 = shadow.cljs.devtools.client.browser.match_paths(node_23093.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23094)){
var new_link_23095 = (function (){var G__22928 = node_23093.cloneNode(true);
G__22928.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23094),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22928;
})();
(node_23093.shadow$old = true);

(new_link_23095.onload = ((function (seq__22896_23089,chunk__22900_23090,count__22901_23091,i__22902_23092,seq__22782,chunk__22784,count__22785,i__22786,new_link_23095,path_match_23094,node_23093,path,map__22781,map__22781__$1,msg,updates,reload_info){
return (function (e){
var seq__22929_23096 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22931_23097 = null;
var count__22932_23098 = (0);
var i__22933_23099 = (0);
while(true){
if((i__22933_23099 < count__22932_23098)){
var map__22937_23100 = chunk__22931_23097.cljs$core$IIndexed$_nth$arity$2(null,i__22933_23099);
var map__22937_23101__$1 = cljs.core.__destructure_map(map__22937_23100);
var task_23102 = map__22937_23101__$1;
var fn_str_23103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22937_23101__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23104 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22937_23101__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23105 = goog.getObjectByName(fn_str_23103,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23104)].join(''));

(fn_obj_23105.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23105.cljs$core$IFn$_invoke$arity$2(path,new_link_23095) : fn_obj_23105.call(null,path,new_link_23095));


var G__23106 = seq__22929_23096;
var G__23107 = chunk__22931_23097;
var G__23108 = count__22932_23098;
var G__23109 = (i__22933_23099 + (1));
seq__22929_23096 = G__23106;
chunk__22931_23097 = G__23107;
count__22932_23098 = G__23108;
i__22933_23099 = G__23109;
continue;
} else {
var temp__5804__auto___23110 = cljs.core.seq(seq__22929_23096);
if(temp__5804__auto___23110){
var seq__22929_23111__$1 = temp__5804__auto___23110;
if(cljs.core.chunked_seq_QMARK_(seq__22929_23111__$1)){
var c__5568__auto___23112 = cljs.core.chunk_first(seq__22929_23111__$1);
var G__23113 = cljs.core.chunk_rest(seq__22929_23111__$1);
var G__23114 = c__5568__auto___23112;
var G__23115 = cljs.core.count(c__5568__auto___23112);
var G__23116 = (0);
seq__22929_23096 = G__23113;
chunk__22931_23097 = G__23114;
count__22932_23098 = G__23115;
i__22933_23099 = G__23116;
continue;
} else {
var map__22938_23117 = cljs.core.first(seq__22929_23111__$1);
var map__22938_23118__$1 = cljs.core.__destructure_map(map__22938_23117);
var task_23119 = map__22938_23118__$1;
var fn_str_23120 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22938_23118__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22938_23118__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23122 = goog.getObjectByName(fn_str_23120,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23121)].join(''));

(fn_obj_23122.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23122.cljs$core$IFn$_invoke$arity$2(path,new_link_23095) : fn_obj_23122.call(null,path,new_link_23095));


var G__23123 = cljs.core.next(seq__22929_23111__$1);
var G__23124 = null;
var G__23125 = (0);
var G__23126 = (0);
seq__22929_23096 = G__23123;
chunk__22931_23097 = G__23124;
count__22932_23098 = G__23125;
i__22933_23099 = G__23126;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23093);
});})(seq__22896_23089,chunk__22900_23090,count__22901_23091,i__22902_23092,seq__22782,chunk__22784,count__22785,i__22786,new_link_23095,path_match_23094,node_23093,path,map__22781,map__22781__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23094], 0));

goog.dom.insertSiblingAfter(new_link_23095,node_23093);


var G__23127 = seq__22896_23089;
var G__23128 = chunk__22900_23090;
var G__23129 = count__22901_23091;
var G__23130 = (i__22902_23092 + (1));
seq__22896_23089 = G__23127;
chunk__22900_23090 = G__23128;
count__22901_23091 = G__23129;
i__22902_23092 = G__23130;
continue;
} else {
var G__23131 = seq__22896_23089;
var G__23132 = chunk__22900_23090;
var G__23133 = count__22901_23091;
var G__23134 = (i__22902_23092 + (1));
seq__22896_23089 = G__23131;
chunk__22900_23090 = G__23132;
count__22901_23091 = G__23133;
i__22902_23092 = G__23134;
continue;
}
} else {
var G__23135 = seq__22896_23089;
var G__23136 = chunk__22900_23090;
var G__23137 = count__22901_23091;
var G__23138 = (i__22902_23092 + (1));
seq__22896_23089 = G__23135;
chunk__22900_23090 = G__23136;
count__22901_23091 = G__23137;
i__22902_23092 = G__23138;
continue;
}
} else {
var temp__5804__auto___23139 = cljs.core.seq(seq__22896_23089);
if(temp__5804__auto___23139){
var seq__22896_23140__$1 = temp__5804__auto___23139;
if(cljs.core.chunked_seq_QMARK_(seq__22896_23140__$1)){
var c__5568__auto___23141 = cljs.core.chunk_first(seq__22896_23140__$1);
var G__23142 = cljs.core.chunk_rest(seq__22896_23140__$1);
var G__23143 = c__5568__auto___23141;
var G__23144 = cljs.core.count(c__5568__auto___23141);
var G__23145 = (0);
seq__22896_23089 = G__23142;
chunk__22900_23090 = G__23143;
count__22901_23091 = G__23144;
i__22902_23092 = G__23145;
continue;
} else {
var node_23146 = cljs.core.first(seq__22896_23140__$1);
if(cljs.core.not(node_23146.shadow$old)){
var path_match_23147 = shadow.cljs.devtools.client.browser.match_paths(node_23146.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23147)){
var new_link_23148 = (function (){var G__22939 = node_23146.cloneNode(true);
G__22939.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23147),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22939;
})();
(node_23146.shadow$old = true);

(new_link_23148.onload = ((function (seq__22896_23089,chunk__22900_23090,count__22901_23091,i__22902_23092,seq__22782,chunk__22784,count__22785,i__22786,new_link_23148,path_match_23147,node_23146,seq__22896_23140__$1,temp__5804__auto___23139,path,map__22781,map__22781__$1,msg,updates,reload_info){
return (function (e){
var seq__22940_23149 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22942_23150 = null;
var count__22943_23151 = (0);
var i__22944_23152 = (0);
while(true){
if((i__22944_23152 < count__22943_23151)){
var map__22948_23153 = chunk__22942_23150.cljs$core$IIndexed$_nth$arity$2(null,i__22944_23152);
var map__22948_23154__$1 = cljs.core.__destructure_map(map__22948_23153);
var task_23155 = map__22948_23154__$1;
var fn_str_23156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22948_23154__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23157 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22948_23154__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23158 = goog.getObjectByName(fn_str_23156,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23157)].join(''));

(fn_obj_23158.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23158.cljs$core$IFn$_invoke$arity$2(path,new_link_23148) : fn_obj_23158.call(null,path,new_link_23148));


var G__23159 = seq__22940_23149;
var G__23160 = chunk__22942_23150;
var G__23161 = count__22943_23151;
var G__23162 = (i__22944_23152 + (1));
seq__22940_23149 = G__23159;
chunk__22942_23150 = G__23160;
count__22943_23151 = G__23161;
i__22944_23152 = G__23162;
continue;
} else {
var temp__5804__auto___23163__$1 = cljs.core.seq(seq__22940_23149);
if(temp__5804__auto___23163__$1){
var seq__22940_23164__$1 = temp__5804__auto___23163__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22940_23164__$1)){
var c__5568__auto___23165 = cljs.core.chunk_first(seq__22940_23164__$1);
var G__23166 = cljs.core.chunk_rest(seq__22940_23164__$1);
var G__23167 = c__5568__auto___23165;
var G__23168 = cljs.core.count(c__5568__auto___23165);
var G__23169 = (0);
seq__22940_23149 = G__23166;
chunk__22942_23150 = G__23167;
count__22943_23151 = G__23168;
i__22944_23152 = G__23169;
continue;
} else {
var map__22949_23170 = cljs.core.first(seq__22940_23164__$1);
var map__22949_23171__$1 = cljs.core.__destructure_map(map__22949_23170);
var task_23172 = map__22949_23171__$1;
var fn_str_23173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22949_23171__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22949_23171__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23175 = goog.getObjectByName(fn_str_23173,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23174)].join(''));

(fn_obj_23175.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23175.cljs$core$IFn$_invoke$arity$2(path,new_link_23148) : fn_obj_23175.call(null,path,new_link_23148));


var G__23176 = cljs.core.next(seq__22940_23164__$1);
var G__23177 = null;
var G__23178 = (0);
var G__23179 = (0);
seq__22940_23149 = G__23176;
chunk__22942_23150 = G__23177;
count__22943_23151 = G__23178;
i__22944_23152 = G__23179;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23146);
});})(seq__22896_23089,chunk__22900_23090,count__22901_23091,i__22902_23092,seq__22782,chunk__22784,count__22785,i__22786,new_link_23148,path_match_23147,node_23146,seq__22896_23140__$1,temp__5804__auto___23139,path,map__22781,map__22781__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23147], 0));

goog.dom.insertSiblingAfter(new_link_23148,node_23146);


var G__23180 = cljs.core.next(seq__22896_23140__$1);
var G__23181 = null;
var G__23182 = (0);
var G__23183 = (0);
seq__22896_23089 = G__23180;
chunk__22900_23090 = G__23181;
count__22901_23091 = G__23182;
i__22902_23092 = G__23183;
continue;
} else {
var G__23184 = cljs.core.next(seq__22896_23140__$1);
var G__23185 = null;
var G__23186 = (0);
var G__23187 = (0);
seq__22896_23089 = G__23184;
chunk__22900_23090 = G__23185;
count__22901_23091 = G__23186;
i__22902_23092 = G__23187;
continue;
}
} else {
var G__23188 = cljs.core.next(seq__22896_23140__$1);
var G__23189 = null;
var G__23190 = (0);
var G__23191 = (0);
seq__22896_23089 = G__23188;
chunk__22900_23090 = G__23189;
count__22901_23091 = G__23190;
i__22902_23092 = G__23191;
continue;
}
}
} else {
}
}
break;
}


var G__23192 = seq__22782;
var G__23193 = chunk__22784;
var G__23194 = count__22785;
var G__23195 = (i__22786 + (1));
seq__22782 = G__23192;
chunk__22784 = G__23193;
count__22785 = G__23194;
i__22786 = G__23195;
continue;
} else {
var G__23196 = seq__22782;
var G__23197 = chunk__22784;
var G__23198 = count__22785;
var G__23199 = (i__22786 + (1));
seq__22782 = G__23196;
chunk__22784 = G__23197;
count__22785 = G__23198;
i__22786 = G__23199;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22782);
if(temp__5804__auto__){
var seq__22782__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22782__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22782__$1);
var G__23200 = cljs.core.chunk_rest(seq__22782__$1);
var G__23201 = c__5568__auto__;
var G__23202 = cljs.core.count(c__5568__auto__);
var G__23203 = (0);
seq__22782 = G__23200;
chunk__22784 = G__23201;
count__22785 = G__23202;
i__22786 = G__23203;
continue;
} else {
var path = cljs.core.first(seq__22782__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22950_23204 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22954_23205 = null;
var count__22955_23206 = (0);
var i__22956_23207 = (0);
while(true){
if((i__22956_23207 < count__22955_23206)){
var node_23208 = chunk__22954_23205.cljs$core$IIndexed$_nth$arity$2(null,i__22956_23207);
if(cljs.core.not(node_23208.shadow$old)){
var path_match_23209 = shadow.cljs.devtools.client.browser.match_paths(node_23208.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23209)){
var new_link_23210 = (function (){var G__22982 = node_23208.cloneNode(true);
G__22982.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23209),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22982;
})();
(node_23208.shadow$old = true);

(new_link_23210.onload = ((function (seq__22950_23204,chunk__22954_23205,count__22955_23206,i__22956_23207,seq__22782,chunk__22784,count__22785,i__22786,new_link_23210,path_match_23209,node_23208,path,seq__22782__$1,temp__5804__auto__,map__22781,map__22781__$1,msg,updates,reload_info){
return (function (e){
var seq__22983_23211 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22985_23212 = null;
var count__22986_23213 = (0);
var i__22987_23214 = (0);
while(true){
if((i__22987_23214 < count__22986_23213)){
var map__22991_23215 = chunk__22985_23212.cljs$core$IIndexed$_nth$arity$2(null,i__22987_23214);
var map__22991_23216__$1 = cljs.core.__destructure_map(map__22991_23215);
var task_23217 = map__22991_23216__$1;
var fn_str_23218 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22991_23216__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23219 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22991_23216__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23220 = goog.getObjectByName(fn_str_23218,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23219)].join(''));

(fn_obj_23220.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23220.cljs$core$IFn$_invoke$arity$2(path,new_link_23210) : fn_obj_23220.call(null,path,new_link_23210));


var G__23221 = seq__22983_23211;
var G__23222 = chunk__22985_23212;
var G__23223 = count__22986_23213;
var G__23224 = (i__22987_23214 + (1));
seq__22983_23211 = G__23221;
chunk__22985_23212 = G__23222;
count__22986_23213 = G__23223;
i__22987_23214 = G__23224;
continue;
} else {
var temp__5804__auto___23225__$1 = cljs.core.seq(seq__22983_23211);
if(temp__5804__auto___23225__$1){
var seq__22983_23226__$1 = temp__5804__auto___23225__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22983_23226__$1)){
var c__5568__auto___23227 = cljs.core.chunk_first(seq__22983_23226__$1);
var G__23228 = cljs.core.chunk_rest(seq__22983_23226__$1);
var G__23229 = c__5568__auto___23227;
var G__23230 = cljs.core.count(c__5568__auto___23227);
var G__23231 = (0);
seq__22983_23211 = G__23228;
chunk__22985_23212 = G__23229;
count__22986_23213 = G__23230;
i__22987_23214 = G__23231;
continue;
} else {
var map__22992_23232 = cljs.core.first(seq__22983_23226__$1);
var map__22992_23233__$1 = cljs.core.__destructure_map(map__22992_23232);
var task_23234 = map__22992_23233__$1;
var fn_str_23235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22992_23233__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22992_23233__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23237 = goog.getObjectByName(fn_str_23235,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23236)].join(''));

(fn_obj_23237.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23237.cljs$core$IFn$_invoke$arity$2(path,new_link_23210) : fn_obj_23237.call(null,path,new_link_23210));


var G__23238 = cljs.core.next(seq__22983_23226__$1);
var G__23239 = null;
var G__23240 = (0);
var G__23241 = (0);
seq__22983_23211 = G__23238;
chunk__22985_23212 = G__23239;
count__22986_23213 = G__23240;
i__22987_23214 = G__23241;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23208);
});})(seq__22950_23204,chunk__22954_23205,count__22955_23206,i__22956_23207,seq__22782,chunk__22784,count__22785,i__22786,new_link_23210,path_match_23209,node_23208,path,seq__22782__$1,temp__5804__auto__,map__22781,map__22781__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23209], 0));

goog.dom.insertSiblingAfter(new_link_23210,node_23208);


var G__23242 = seq__22950_23204;
var G__23243 = chunk__22954_23205;
var G__23244 = count__22955_23206;
var G__23245 = (i__22956_23207 + (1));
seq__22950_23204 = G__23242;
chunk__22954_23205 = G__23243;
count__22955_23206 = G__23244;
i__22956_23207 = G__23245;
continue;
} else {
var G__23246 = seq__22950_23204;
var G__23247 = chunk__22954_23205;
var G__23248 = count__22955_23206;
var G__23249 = (i__22956_23207 + (1));
seq__22950_23204 = G__23246;
chunk__22954_23205 = G__23247;
count__22955_23206 = G__23248;
i__22956_23207 = G__23249;
continue;
}
} else {
var G__23250 = seq__22950_23204;
var G__23251 = chunk__22954_23205;
var G__23252 = count__22955_23206;
var G__23253 = (i__22956_23207 + (1));
seq__22950_23204 = G__23250;
chunk__22954_23205 = G__23251;
count__22955_23206 = G__23252;
i__22956_23207 = G__23253;
continue;
}
} else {
var temp__5804__auto___23254__$1 = cljs.core.seq(seq__22950_23204);
if(temp__5804__auto___23254__$1){
var seq__22950_23255__$1 = temp__5804__auto___23254__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22950_23255__$1)){
var c__5568__auto___23256 = cljs.core.chunk_first(seq__22950_23255__$1);
var G__23257 = cljs.core.chunk_rest(seq__22950_23255__$1);
var G__23258 = c__5568__auto___23256;
var G__23259 = cljs.core.count(c__5568__auto___23256);
var G__23260 = (0);
seq__22950_23204 = G__23257;
chunk__22954_23205 = G__23258;
count__22955_23206 = G__23259;
i__22956_23207 = G__23260;
continue;
} else {
var node_23261 = cljs.core.first(seq__22950_23255__$1);
if(cljs.core.not(node_23261.shadow$old)){
var path_match_23262 = shadow.cljs.devtools.client.browser.match_paths(node_23261.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23262)){
var new_link_23263 = (function (){var G__22993 = node_23261.cloneNode(true);
G__22993.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23262),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22993;
})();
(node_23261.shadow$old = true);

(new_link_23263.onload = ((function (seq__22950_23204,chunk__22954_23205,count__22955_23206,i__22956_23207,seq__22782,chunk__22784,count__22785,i__22786,new_link_23263,path_match_23262,node_23261,seq__22950_23255__$1,temp__5804__auto___23254__$1,path,seq__22782__$1,temp__5804__auto__,map__22781,map__22781__$1,msg,updates,reload_info){
return (function (e){
var seq__22994_23264 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22996_23265 = null;
var count__22997_23266 = (0);
var i__22998_23267 = (0);
while(true){
if((i__22998_23267 < count__22997_23266)){
var map__23002_23268 = chunk__22996_23265.cljs$core$IIndexed$_nth$arity$2(null,i__22998_23267);
var map__23002_23269__$1 = cljs.core.__destructure_map(map__23002_23268);
var task_23270 = map__23002_23269__$1;
var fn_str_23271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23002_23269__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23002_23269__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23273 = goog.getObjectByName(fn_str_23271,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23272)].join(''));

(fn_obj_23273.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23273.cljs$core$IFn$_invoke$arity$2(path,new_link_23263) : fn_obj_23273.call(null,path,new_link_23263));


var G__23274 = seq__22994_23264;
var G__23275 = chunk__22996_23265;
var G__23276 = count__22997_23266;
var G__23277 = (i__22998_23267 + (1));
seq__22994_23264 = G__23274;
chunk__22996_23265 = G__23275;
count__22997_23266 = G__23276;
i__22998_23267 = G__23277;
continue;
} else {
var temp__5804__auto___23278__$2 = cljs.core.seq(seq__22994_23264);
if(temp__5804__auto___23278__$2){
var seq__22994_23279__$1 = temp__5804__auto___23278__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22994_23279__$1)){
var c__5568__auto___23280 = cljs.core.chunk_first(seq__22994_23279__$1);
var G__23281 = cljs.core.chunk_rest(seq__22994_23279__$1);
var G__23282 = c__5568__auto___23280;
var G__23283 = cljs.core.count(c__5568__auto___23280);
var G__23284 = (0);
seq__22994_23264 = G__23281;
chunk__22996_23265 = G__23282;
count__22997_23266 = G__23283;
i__22998_23267 = G__23284;
continue;
} else {
var map__23003_23285 = cljs.core.first(seq__22994_23279__$1);
var map__23003_23286__$1 = cljs.core.__destructure_map(map__23003_23285);
var task_23287 = map__23003_23286__$1;
var fn_str_23288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23003_23286__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23003_23286__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23290 = goog.getObjectByName(fn_str_23288,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23289)].join(''));

(fn_obj_23290.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23290.cljs$core$IFn$_invoke$arity$2(path,new_link_23263) : fn_obj_23290.call(null,path,new_link_23263));


var G__23291 = cljs.core.next(seq__22994_23279__$1);
var G__23292 = null;
var G__23293 = (0);
var G__23294 = (0);
seq__22994_23264 = G__23291;
chunk__22996_23265 = G__23292;
count__22997_23266 = G__23293;
i__22998_23267 = G__23294;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23261);
});})(seq__22950_23204,chunk__22954_23205,count__22955_23206,i__22956_23207,seq__22782,chunk__22784,count__22785,i__22786,new_link_23263,path_match_23262,node_23261,seq__22950_23255__$1,temp__5804__auto___23254__$1,path,seq__22782__$1,temp__5804__auto__,map__22781,map__22781__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23262], 0));

goog.dom.insertSiblingAfter(new_link_23263,node_23261);


var G__23295 = cljs.core.next(seq__22950_23255__$1);
var G__23296 = null;
var G__23297 = (0);
var G__23298 = (0);
seq__22950_23204 = G__23295;
chunk__22954_23205 = G__23296;
count__22955_23206 = G__23297;
i__22956_23207 = G__23298;
continue;
} else {
var G__23299 = cljs.core.next(seq__22950_23255__$1);
var G__23300 = null;
var G__23301 = (0);
var G__23302 = (0);
seq__22950_23204 = G__23299;
chunk__22954_23205 = G__23300;
count__22955_23206 = G__23301;
i__22956_23207 = G__23302;
continue;
}
} else {
var G__23303 = cljs.core.next(seq__22950_23255__$1);
var G__23304 = null;
var G__23305 = (0);
var G__23306 = (0);
seq__22950_23204 = G__23303;
chunk__22954_23205 = G__23304;
count__22955_23206 = G__23305;
i__22956_23207 = G__23306;
continue;
}
}
} else {
}
}
break;
}


var G__23307 = cljs.core.next(seq__22782__$1);
var G__23308 = null;
var G__23309 = (0);
var G__23310 = (0);
seq__22782 = G__23307;
chunk__22784 = G__23308;
count__22785 = G__23309;
i__22786 = G__23310;
continue;
} else {
var G__23311 = cljs.core.next(seq__22782__$1);
var G__23312 = null;
var G__23313 = (0);
var G__23314 = (0);
seq__22782 = G__23311;
chunk__22784 = G__23312;
count__22785 = G__23313;
i__22786 = G__23314;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__23004){
var map__23005 = p__23004;
var map__23005__$1 = cljs.core.__destructure_map(map__23005);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23005__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__23006,done,error){
var map__23007 = p__23006;
var map__23007__$1 = cljs.core.__destructure_map(map__23007);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23007__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__23008,done,error){
var map__23009 = p__23008;
var map__23009__$1 = cljs.core.__destructure_map(map__23009);
var msg = map__23009__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23009__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23009__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23009__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__23010){
var map__23011 = p__23010;
var map__23011__$1 = cljs.core.__destructure_map(map__23011);
var src = map__23011__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23011__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__23012 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__23012) : done.call(null,G__23012));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__23013){
var map__23014 = p__23013;
var map__23014__$1 = cljs.core.__destructure_map(map__23014);
var msg__$1 = map__23014__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23014__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e23015){var ex = e23015;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__23016){
var map__23017 = p__23016;
var map__23017__$1 = cljs.core.__destructure_map(map__23017);
var env = map__23017__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23017__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__23018){
var map__23019 = p__23018;
var map__23019__$1 = cljs.core.__destructure_map(map__23019);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23019__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23019__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__23020){
var map__23021 = p__23020;
var map__23021__$1 = cljs.core.__destructure_map(map__23021);
var svc = map__23021__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23021__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
