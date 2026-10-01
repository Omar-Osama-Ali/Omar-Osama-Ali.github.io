(function(){
'use strict';
var d=document,r=d.documentElement;r.classList.add('js');
var b=d.getElementById('burger'),m=d.getElementById('mm');
function menu(o){m.hidden=!o;b.setAttribute('aria-expanded',String(o))}
if(b&&m){b.addEventListener('click',function(){menu(m.hidden)});
m.addEventListener('click',function(e){if(e.target.closest('a'))menu(false)});
d.addEventListener('keydown',function(e){if(e.key==='Escape'&&!m.hidden){menu(false);b.focus()}});
matchMedia('(min-width:1024px)').addEventListener('change',function(q){if(q.matches)menu(false)})}
d.querySelectorAll('.ft').forEach(function(t){t.addEventListener('click',function(){
var open=t.getAttribute('aria-expanded')==='true';
d.querySelectorAll('.ft').forEach(function(x){x.setAttribute('aria-expanded','false');d.getElementById(x.getAttribute('aria-controls')).hidden=true});
if(!open){t.setAttribute('aria-expanded','true');d.getElementById(t.getAttribute('aria-controls')).hidden=false}})});
var f=d.querySelectorAll('.fade');
if('IntersectionObserver' in window){var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}})},{threshold:.12});f.forEach(function(x){o.observe(x)})}
else f.forEach(function(x){x.classList.add('in')});
var y=d.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
var cf=d.getElementById('cf');
if(cf)cf.addEventListener('submit',function(e){e.preventDefault();
var n=d.getElementById('fn'),mm=d.getElementById('fm'),em=d.getElementById('fe'),s=d.getElementById('fs'),bad=false;
[n,mm].forEach(function(x){var v=!x.value.trim();x.classList.toggle('err',v);x.setAttribute('aria-invalid',String(v));if(v&&!bad){x.focus();bad=true}});
if(bad)return;
var body=mm.value.trim()+'\n\n— '+n.value.trim()+(em.value.trim()?'\n'+em.value.trim():'')+'\n'+s.value;
location.href='mailto:'+cf.dataset.email+'?subject='+encodeURIComponent(cf.dataset.subj+' '+n.value.trim())+'&body='+encodeURIComponent(body)});
})();
