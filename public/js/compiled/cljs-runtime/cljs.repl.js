goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21334){
var map__21335 = p__21334;
var map__21335__$1 = cljs.core.__destructure_map(map__21335);
var m = map__21335__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21335__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21335__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21339_21628 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21340_21629 = null;
var count__21341_21630 = (0);
var i__21342_21631 = (0);
while(true){
if((i__21342_21631 < count__21341_21630)){
var f_21632 = chunk__21340_21629.cljs$core$IIndexed$_nth$arity$2(null,i__21342_21631);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21632], 0));


var G__21633 = seq__21339_21628;
var G__21634 = chunk__21340_21629;
var G__21635 = count__21341_21630;
var G__21636 = (i__21342_21631 + (1));
seq__21339_21628 = G__21633;
chunk__21340_21629 = G__21634;
count__21341_21630 = G__21635;
i__21342_21631 = G__21636;
continue;
} else {
var temp__5804__auto___21639 = cljs.core.seq(seq__21339_21628);
if(temp__5804__auto___21639){
var seq__21339_21640__$1 = temp__5804__auto___21639;
if(cljs.core.chunked_seq_QMARK_(seq__21339_21640__$1)){
var c__5568__auto___21641 = cljs.core.chunk_first(seq__21339_21640__$1);
var G__21642 = cljs.core.chunk_rest(seq__21339_21640__$1);
var G__21643 = c__5568__auto___21641;
var G__21644 = cljs.core.count(c__5568__auto___21641);
var G__21645 = (0);
seq__21339_21628 = G__21642;
chunk__21340_21629 = G__21643;
count__21341_21630 = G__21644;
i__21342_21631 = G__21645;
continue;
} else {
var f_21646 = cljs.core.first(seq__21339_21640__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_21646], 0));


var G__21647 = cljs.core.next(seq__21339_21640__$1);
var G__21648 = null;
var G__21649 = (0);
var G__21650 = (0);
seq__21339_21628 = G__21647;
chunk__21340_21629 = G__21648;
count__21341_21630 = G__21649;
i__21342_21631 = G__21650;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21651 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_21651], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_21651)))?cljs.core.second(arglists_21651):arglists_21651)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21354_21652 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21355_21653 = null;
var count__21356_21654 = (0);
var i__21357_21655 = (0);
while(true){
if((i__21357_21655 < count__21356_21654)){
var vec__21373_21656 = chunk__21355_21653.cljs$core$IIndexed$_nth$arity$2(null,i__21357_21655);
var name_21657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21373_21656,(0),null);
var map__21376_21658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21373_21656,(1),null);
var map__21376_21659__$1 = cljs.core.__destructure_map(map__21376_21658);
var doc_21660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21376_21659__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21376_21659__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21657], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21661], 0));

if(cljs.core.truth_(doc_21660)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21660], 0));
} else {
}


var G__21667 = seq__21354_21652;
var G__21668 = chunk__21355_21653;
var G__21669 = count__21356_21654;
var G__21670 = (i__21357_21655 + (1));
seq__21354_21652 = G__21667;
chunk__21355_21653 = G__21668;
count__21356_21654 = G__21669;
i__21357_21655 = G__21670;
continue;
} else {
var temp__5804__auto___21671 = cljs.core.seq(seq__21354_21652);
if(temp__5804__auto___21671){
var seq__21354_21672__$1 = temp__5804__auto___21671;
if(cljs.core.chunked_seq_QMARK_(seq__21354_21672__$1)){
var c__5568__auto___21673 = cljs.core.chunk_first(seq__21354_21672__$1);
var G__21674 = cljs.core.chunk_rest(seq__21354_21672__$1);
var G__21675 = c__5568__auto___21673;
var G__21676 = cljs.core.count(c__5568__auto___21673);
var G__21677 = (0);
seq__21354_21652 = G__21674;
chunk__21355_21653 = G__21675;
count__21356_21654 = G__21676;
i__21357_21655 = G__21677;
continue;
} else {
var vec__21379_21678 = cljs.core.first(seq__21354_21672__$1);
var name_21679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21379_21678,(0),null);
var map__21382_21680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21379_21678,(1),null);
var map__21382_21681__$1 = cljs.core.__destructure_map(map__21382_21680);
var doc_21682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382_21681__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382_21681__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_21679], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_21683], 0));

if(cljs.core.truth_(doc_21682)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_21682], 0));
} else {
}


var G__21685 = cljs.core.next(seq__21354_21672__$1);
var G__21686 = null;
var G__21687 = (0);
var G__21688 = (0);
seq__21354_21652 = G__21685;
chunk__21355_21653 = G__21686;
count__21356_21654 = G__21687;
i__21357_21655 = G__21688;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__21383 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21384 = null;
var count__21385 = (0);
var i__21386 = (0);
while(true){
if((i__21386 < count__21385)){
var role = chunk__21384.cljs$core$IIndexed$_nth$arity$2(null,i__21386);
var temp__5804__auto___21690__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21690__$1)){
var spec_21691 = temp__5804__auto___21690__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21691)], 0));
} else {
}


var G__21692 = seq__21383;
var G__21693 = chunk__21384;
var G__21694 = count__21385;
var G__21695 = (i__21386 + (1));
seq__21383 = G__21692;
chunk__21384 = G__21693;
count__21385 = G__21694;
i__21386 = G__21695;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__21383);
if(temp__5804__auto____$1){
var seq__21383__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21383__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21383__$1);
var G__21697 = cljs.core.chunk_rest(seq__21383__$1);
var G__21698 = c__5568__auto__;
var G__21699 = cljs.core.count(c__5568__auto__);
var G__21700 = (0);
seq__21383 = G__21697;
chunk__21384 = G__21698;
count__21385 = G__21699;
i__21386 = G__21700;
continue;
} else {
var role = cljs.core.first(seq__21383__$1);
var temp__5804__auto___21701__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___21701__$2)){
var spec_21702 = temp__5804__auto___21701__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_21702)], 0));
} else {
}


var G__21703 = cljs.core.next(seq__21383__$1);
var G__21704 = null;
var G__21705 = (0);
var G__21706 = (0);
seq__21383 = G__21703;
chunk__21384 = G__21704;
count__21385 = G__21705;
i__21386 = G__21706;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__21713 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__21714 = cljs.core.ex_cause(t);
via = G__21713;
t = G__21714;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__21438 = datafied_throwable;
var map__21438__$1 = cljs.core.__destructure_map(map__21438);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21438__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21438__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21438__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__21439 = cljs.core.last(via);
var map__21439__$1 = cljs.core.__destructure_map(map__21439);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21439__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21439__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21439__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__21440 = data;
var map__21440__$1 = cljs.core.__destructure_map(map__21440);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21440__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21440__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21440__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__21441 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__21441__$1 = cljs.core.__destructure_map(map__21441);
var top_data = map__21441__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21441__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__21457 = phase;
var G__21457__$1 = (((G__21457 instanceof cljs.core.Keyword))?G__21457.fqn:null);
switch (G__21457__$1) {
case "read-source":
var map__21462 = data;
var map__21462__$1 = cljs.core.__destructure_map(map__21462);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21462__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21462__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__21469 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__21469__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21469,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21469);
var G__21469__$2 = (cljs.core.truth_((function (){var fexpr__21487 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21487.cljs$core$IFn$_invoke$arity$1 ? fexpr__21487.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21487.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21469__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21469__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21469__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21469__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__21488 = top_data;
var G__21488__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21488,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__21488);
var G__21488__$2 = (cljs.core.truth_((function (){var fexpr__21496 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21496.cljs$core$IFn$_invoke$arity$1 ? fexpr__21496.cljs$core$IFn$_invoke$arity$1(source) : fexpr__21496.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21488__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__21488__$1);
var G__21488__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21488__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21488__$2);
var G__21488__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21488__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21488__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21488__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21488__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__21501 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21501,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21501,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21501,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21501,(3),null);
var G__21509 = top_data;
var G__21509__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21509,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__21509);
var G__21509__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21509__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__21509__$1);
var G__21509__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21509__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__21509__$2);
var G__21509__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21509__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__21509__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21509__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__21509__$4;
}

break;
case "execution":
var vec__21528 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21528,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21528,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21528,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21528,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__21429_SHARP_){
var or__5045__auto__ = (p1__21429_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__21535 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__21535.cljs$core$IFn$_invoke$arity$1 ? fexpr__21535.cljs$core$IFn$_invoke$arity$1(p1__21429_SHARP_) : fexpr__21535.call(null,p1__21429_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__21536 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__21536__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21536,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__21536);
var G__21536__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21536__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__21536__$1);
var G__21536__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21536__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__21536__$2);
var G__21536__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21536__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__21536__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__21536__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__21536__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21457__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__21545){
var map__21546 = p__21545;
var map__21546__$1 = cljs.core.__destructure_map(map__21546);
var triage_data = map__21546__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21546__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21546__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21546__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21546__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21546__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21546__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21546__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21546__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__21559 = phase;
var G__21559__$1 = (((G__21559 instanceof cljs.core.Keyword))?G__21559.fqn:null);
switch (G__21559__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__21560 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__21561 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21562 = loc;
var G__21563 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21565_21787 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21566_21788 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21567_21789 = true;
var _STAR_print_fn_STAR__temp_val__21568_21790 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21567_21789);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21568_21790);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21539_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21539_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21566_21788);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21565_21787);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21560,G__21561,G__21562,G__21563) : format.call(null,G__21560,G__21561,G__21562,G__21563));

break;
case "macroexpansion":
var G__21580 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__21581 = cause_type;
var G__21582 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21583 = loc;
var G__21584 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21580,G__21581,G__21582,G__21583,G__21584) : format.call(null,G__21580,G__21581,G__21582,G__21583,G__21584));

break;
case "compile-syntax-check":
var G__21589 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__21590 = cause_type;
var G__21591 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21592 = loc;
var G__21593 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21589,G__21590,G__21591,G__21592,G__21593) : format.call(null,G__21589,G__21590,G__21591,G__21592,G__21593));

break;
case "compilation":
var G__21594 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__21595 = cause_type;
var G__21596 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21597 = loc;
var G__21598 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21594,G__21595,G__21596,G__21597,G__21598) : format.call(null,G__21594,G__21595,G__21596,G__21597,G__21598));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__21599 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__21600 = symbol;
var G__21601 = loc;
var G__21602 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__21604_21801 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__21605_21802 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__21606_21803 = true;
var _STAR_print_fn_STAR__temp_val__21607_21804 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__21606_21803);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__21607_21804);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21540_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__21540_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__21605_21802);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__21604_21801);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__21599,G__21600,G__21601,G__21602) : format.call(null,G__21599,G__21600,G__21601,G__21602));
} else {
var G__21615 = "Execution error%s at %s(%s).\n%s\n";
var G__21616 = cause_type;
var G__21617 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__21618 = loc;
var G__21619 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__21615,G__21616,G__21617,G__21618,G__21619) : format.call(null,G__21615,G__21616,G__21617,G__21618,G__21619));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21559__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
