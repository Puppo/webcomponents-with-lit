import{o as b,s as c,p as s,n as d,e as l,a as $,l as C,c as g,w as L}from"./vendor.d9811822.js";const B=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const a of e.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerpolicy&&(e.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?e.credentials="include":n.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(n){if(n.ep)return;n.ep=!0;const e=t(n);fetch(n.href,e)}};B();var D=`/* Bulma Utilities */
.box:not(:last-child) {
  margin-bottom: 1.5rem;
}
.box {
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  display: block;
  padding: 1.25rem;
}
a.box:hover, a.box:focus {
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px #485fc7;
}
a.box:active {
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #485fc7;
}`,S=Object.defineProperty,A=Object.getOwnPropertyDescriptor,E=(o,r,t,i)=>{for(var n=i>1?void 0:i?A(r,t):r,e=o.length-1,a;e>=0;e--)(a=o[e])&&(n=(i?a(r,t,n):a(n))||n);return i&&n&&S(r,t,n),n};const F="lit-box";let w=class extends c{render(){return s`<div class="box"><slot></slot></div>`}};w.styles=[b(D)];w=E([d(F)],w);var T=`/* Bulma Utilities */
.button {
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  vertical-align: top;
}
.button:focus, .is-focused.button, .button:active, .is-active.button {
  outline: none;
}
[disabled].button, fieldset[disabled] .button {
  cursor: not-allowed;
}
.button {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.button.is-loading::after {
  animation: spinAround 500ms infinite linear;
  border: 2px solid #dbdbdb;
  border-radius: 9999px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  position: relative;
  width: 1em;
}
.button {
  background-color: white;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
}
.button strong {
  color: inherit;
}
.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {
  height: 1.5em;
  width: 1.5em;
}
.button .icon:first-child:not(:last-child) {
  margin-left: calc(-0.5em - 1px);
  margin-right: 0.25em;
}
.button .icon:last-child:not(:first-child) {
  margin-left: 0.25em;
  margin-right: calc(-0.5em - 1px);
}
.button .icon:first-child:last-child {
  margin-left: calc(-0.5em - 1px);
  margin-right: calc(-0.5em - 1px);
}
.button:hover, .button.is-hovered {
  border-color: #b5b5b5;
  color: #363636;
}
.button:focus, .button.is-focused {
  border-color: #485fc7;
  color: #363636;
}
.button:focus:not(:active), .button.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);
}
.button:active, .button.is-active {
  border-color: #4a4a4a;
  color: #363636;
}
.button.is-text {
  background-color: transparent;
  border-color: transparent;
  color: #4a4a4a;
  text-decoration: underline;
}
.button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {
  background-color: whitesmoke;
  color: #363636;
}
.button.is-text:active, .button.is-text.is-active {
  background-color: #e8e8e8;
  color: #363636;
}
.button.is-text[disabled], fieldset[disabled] .button.is-text {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}
.button.is-ghost {
  background: none;
  border-color: transparent;
  color: #485fc7;
  text-decoration: none;
}
.button.is-ghost:hover, .button.is-ghost.is-hovered {
  color: #485fc7;
  text-decoration: underline;
}
.button.is-white {
  background-color: white;
  border-color: transparent;
  color: #0a0a0a;
}
.button.is-white:hover, .button.is-white.is-hovered {
  background-color: #f9f9f9;
  border-color: transparent;
  color: #0a0a0a;
}
.button.is-white:focus, .button.is-white.is-focused {
  border-color: transparent;
  color: #0a0a0a;
}
.button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);
}
.button.is-white:active, .button.is-white.is-active {
  background-color: #f2f2f2;
  border-color: transparent;
  color: #0a0a0a;
}
.button.is-white[disabled], fieldset[disabled] .button.is-white {
  background-color: white;
  border-color: transparent;
  box-shadow: none;
}
.button.is-white.is-inverted {
  background-color: #0a0a0a;
  color: white;
}
.button.is-white.is-inverted:hover, .button.is-white.is-inverted.is-hovered {
  background-color: black;
}
.button.is-white.is-inverted[disabled], fieldset[disabled] .button.is-white.is-inverted {
  background-color: #0a0a0a;
  border-color: transparent;
  box-shadow: none;
  color: white;
}
.button.is-white.is-loading::after {
  border-color: transparent transparent #0a0a0a #0a0a0a !important;
}
.button.is-white.is-outlined {
  background-color: transparent;
  border-color: white;
  color: white;
}
.button.is-white.is-outlined:hover, .button.is-white.is-outlined.is-hovered, .button.is-white.is-outlined:focus, .button.is-white.is-outlined.is-focused {
  background-color: white;
  border-color: white;
  color: #0a0a0a;
}
.button.is-white.is-outlined.is-loading::after {
  border-color: transparent transparent white white !important;
}
.button.is-white.is-outlined.is-loading:hover::after, .button.is-white.is-outlined.is-loading.is-hovered::after, .button.is-white.is-outlined.is-loading:focus::after, .button.is-white.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #0a0a0a #0a0a0a !important;
}
.button.is-white.is-outlined[disabled], fieldset[disabled] .button.is-white.is-outlined {
  background-color: transparent;
  border-color: white;
  box-shadow: none;
  color: white;
}
.button.is-white.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #0a0a0a;
  color: #0a0a0a;
}
.button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined.is-hovered, .button.is-white.is-inverted.is-outlined:focus, .button.is-white.is-inverted.is-outlined.is-focused {
  background-color: #0a0a0a;
  color: white;
}
.button.is-white.is-inverted.is-outlined.is-loading:hover::after, .button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-white.is-inverted.is-outlined.is-loading:focus::after, .button.is-white.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent white white !important;
}
.button.is-white.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-white.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #0a0a0a;
  box-shadow: none;
  color: #0a0a0a;
}
.button.is-black {
  background-color: #0a0a0a;
  border-color: transparent;
  color: white;
}
.button.is-black:hover, .button.is-black.is-hovered {
  background-color: #040404;
  border-color: transparent;
  color: white;
}
.button.is-black:focus, .button.is-black.is-focused {
  border-color: transparent;
  color: white;
}
.button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);
}
.button.is-black:active, .button.is-black.is-active {
  background-color: black;
  border-color: transparent;
  color: white;
}
.button.is-black[disabled], fieldset[disabled] .button.is-black {
  background-color: #0a0a0a;
  border-color: transparent;
  box-shadow: none;
}
.button.is-black.is-inverted {
  background-color: white;
  color: #0a0a0a;
}
.button.is-black.is-inverted:hover, .button.is-black.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-black.is-inverted[disabled], fieldset[disabled] .button.is-black.is-inverted {
  background-color: white;
  border-color: transparent;
  box-shadow: none;
  color: #0a0a0a;
}
.button.is-black.is-loading::after {
  border-color: transparent transparent white white !important;
}
.button.is-black.is-outlined {
  background-color: transparent;
  border-color: #0a0a0a;
  color: #0a0a0a;
}
.button.is-black.is-outlined:hover, .button.is-black.is-outlined.is-hovered, .button.is-black.is-outlined:focus, .button.is-black.is-outlined.is-focused {
  background-color: #0a0a0a;
  border-color: #0a0a0a;
  color: white;
}
.button.is-black.is-outlined.is-loading::after {
  border-color: transparent transparent #0a0a0a #0a0a0a !important;
}
.button.is-black.is-outlined.is-loading:hover::after, .button.is-black.is-outlined.is-loading.is-hovered::after, .button.is-black.is-outlined.is-loading:focus::after, .button.is-black.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent white white !important;
}
.button.is-black.is-outlined[disabled], fieldset[disabled] .button.is-black.is-outlined {
  background-color: transparent;
  border-color: #0a0a0a;
  box-shadow: none;
  color: #0a0a0a;
}
.button.is-black.is-inverted.is-outlined {
  background-color: transparent;
  border-color: white;
  color: white;
}
.button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined.is-hovered, .button.is-black.is-inverted.is-outlined:focus, .button.is-black.is-inverted.is-outlined.is-focused {
  background-color: white;
  color: #0a0a0a;
}
.button.is-black.is-inverted.is-outlined.is-loading:hover::after, .button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-black.is-inverted.is-outlined.is-loading:focus::after, .button.is-black.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #0a0a0a #0a0a0a !important;
}
.button.is-black.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-black.is-inverted.is-outlined {
  background-color: transparent;
  border-color: white;
  box-shadow: none;
  color: white;
}
.button.is-light {
  background-color: whitesmoke;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light:hover, .button.is-light.is-hovered {
  background-color: #eeeeee;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light:focus, .button.is-light.is-focused {
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);
}
.button.is-light:active, .button.is-light.is-active {
  background-color: #e8e8e8;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light[disabled], fieldset[disabled] .button.is-light {
  background-color: whitesmoke;
  border-color: transparent;
  box-shadow: none;
}
.button.is-light.is-inverted {
  background-color: rgba(0, 0, 0, 0.7);
  color: whitesmoke;
}
.button.is-light.is-inverted:hover, .button.is-light.is-inverted.is-hovered {
  background-color: rgba(0, 0, 0, 0.7);
}
.button.is-light.is-inverted[disabled], fieldset[disabled] .button.is-light.is-inverted {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: transparent;
  box-shadow: none;
  color: whitesmoke;
}
.button.is-light.is-loading::after {
  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}
.button.is-light.is-outlined {
  background-color: transparent;
  border-color: whitesmoke;
  color: whitesmoke;
}
.button.is-light.is-outlined:hover, .button.is-light.is-outlined.is-hovered, .button.is-light.is-outlined:focus, .button.is-light.is-outlined.is-focused {
  background-color: whitesmoke;
  border-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light.is-outlined.is-loading::after {
  border-color: transparent transparent whitesmoke whitesmoke !important;
}
.button.is-light.is-outlined.is-loading:hover::after, .button.is-light.is-outlined.is-loading.is-hovered::after, .button.is-light.is-outlined.is-loading:focus::after, .button.is-light.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}
.button.is-light.is-outlined[disabled], fieldset[disabled] .button.is-light.is-outlined {
  background-color: transparent;
  border-color: whitesmoke;
  box-shadow: none;
  color: whitesmoke;
}
.button.is-light.is-inverted.is-outlined {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.7);
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined.is-hovered, .button.is-light.is-inverted.is-outlined:focus, .button.is-light.is-inverted.is-outlined.is-focused {
  background-color: rgba(0, 0, 0, 0.7);
  color: whitesmoke;
}
.button.is-light.is-inverted.is-outlined.is-loading:hover::after, .button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-light.is-inverted.is-outlined.is-loading:focus::after, .button.is-light.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent whitesmoke whitesmoke !important;
}
.button.is-light.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-light.is-inverted.is-outlined {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.7);
  box-shadow: none;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-dark {
  background-color: #363636;
  border-color: transparent;
  color: #fff;
}
.button.is-dark:hover, .button.is-dark.is-hovered {
  background-color: #2f2f2f;
  border-color: transparent;
  color: #fff;
}
.button.is-dark:focus, .button.is-dark.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);
}
.button.is-dark:active, .button.is-dark.is-active {
  background-color: #292929;
  border-color: transparent;
  color: #fff;
}
.button.is-dark[disabled], fieldset[disabled] .button.is-dark {
  background-color: #363636;
  border-color: transparent;
  box-shadow: none;
}
.button.is-dark.is-inverted {
  background-color: #fff;
  color: #363636;
}
.button.is-dark.is-inverted:hover, .button.is-dark.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-dark.is-inverted[disabled], fieldset[disabled] .button.is-dark.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #363636;
}
.button.is-dark.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-dark.is-outlined {
  background-color: transparent;
  border-color: #363636;
  color: #363636;
}
.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined.is-hovered, .button.is-dark.is-outlined:focus, .button.is-dark.is-outlined.is-focused {
  background-color: #363636;
  border-color: #363636;
  color: #fff;
}
.button.is-dark.is-outlined.is-loading::after {
  border-color: transparent transparent #363636 #363636 !important;
}
.button.is-dark.is-outlined.is-loading:hover::after, .button.is-dark.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-outlined.is-loading:focus::after, .button.is-dark.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-dark.is-outlined[disabled], fieldset[disabled] .button.is-dark.is-outlined {
  background-color: transparent;
  border-color: #363636;
  box-shadow: none;
  color: #363636;
}
.button.is-dark.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined.is-hovered, .button.is-dark.is-inverted.is-outlined:focus, .button.is-dark.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #363636;
}
.button.is-dark.is-inverted.is-outlined.is-loading:hover::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-inverted.is-outlined.is-loading:focus::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #363636 #363636 !important;
}
.button.is-dark.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-dark.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-primary {
  background-color: #00d1b2;
  border-color: transparent;
  color: #fff;
}
.button.is-primary:hover, .button.is-primary.is-hovered {
  background-color: #00c4a7;
  border-color: transparent;
  color: #fff;
}
.button.is-primary:focus, .button.is-primary.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);
}
.button.is-primary:active, .button.is-primary.is-active {
  background-color: #00b89c;
  border-color: transparent;
  color: #fff;
}
.button.is-primary[disabled], fieldset[disabled] .button.is-primary {
  background-color: #00d1b2;
  border-color: transparent;
  box-shadow: none;
}
.button.is-primary.is-inverted {
  background-color: #fff;
  color: #00d1b2;
}
.button.is-primary.is-inverted:hover, .button.is-primary.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-primary.is-inverted[disabled], fieldset[disabled] .button.is-primary.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #00d1b2;
}
.button.is-primary.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-primary.is-outlined {
  background-color: transparent;
  border-color: #00d1b2;
  color: #00d1b2;
}
.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused {
  background-color: #00d1b2;
  border-color: #00d1b2;
  color: #fff;
}
.button.is-primary.is-outlined.is-loading::after {
  border-color: transparent transparent #00d1b2 #00d1b2 !important;
}
.button.is-primary.is-outlined.is-loading:hover::after, .button.is-primary.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-outlined.is-loading:focus::after, .button.is-primary.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-primary.is-outlined[disabled], fieldset[disabled] .button.is-primary.is-outlined {
  background-color: transparent;
  border-color: #00d1b2;
  box-shadow: none;
  color: #00d1b2;
}
.button.is-primary.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined.is-hovered, .button.is-primary.is-inverted.is-outlined:focus, .button.is-primary.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #00d1b2;
}
.button.is-primary.is-inverted.is-outlined.is-loading:hover::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-inverted.is-outlined.is-loading:focus::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #00d1b2 #00d1b2 !important;
}
.button.is-primary.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-primary.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-primary.is-light {
  background-color: #ebfffc;
  color: #00947e;
}
.button.is-primary.is-light:hover, .button.is-primary.is-light.is-hovered {
  background-color: #defffa;
  border-color: transparent;
  color: #00947e;
}
.button.is-primary.is-light:active, .button.is-primary.is-light.is-active {
  background-color: #d1fff8;
  border-color: transparent;
  color: #00947e;
}
.button.is-link {
  background-color: #485fc7;
  border-color: transparent;
  color: #fff;
}
.button.is-link:hover, .button.is-link.is-hovered {
  background-color: #3e56c4;
  border-color: transparent;
  color: #fff;
}
.button.is-link:focus, .button.is-link.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);
}
.button.is-link:active, .button.is-link.is-active {
  background-color: #3a51bb;
  border-color: transparent;
  color: #fff;
}
.button.is-link[disabled], fieldset[disabled] .button.is-link {
  background-color: #485fc7;
  border-color: transparent;
  box-shadow: none;
}
.button.is-link.is-inverted {
  background-color: #fff;
  color: #485fc7;
}
.button.is-link.is-inverted:hover, .button.is-link.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-link.is-inverted[disabled], fieldset[disabled] .button.is-link.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #485fc7;
}
.button.is-link.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-link.is-outlined {
  background-color: transparent;
  border-color: #485fc7;
  color: #485fc7;
}
.button.is-link.is-outlined:hover, .button.is-link.is-outlined.is-hovered, .button.is-link.is-outlined:focus, .button.is-link.is-outlined.is-focused {
  background-color: #485fc7;
  border-color: #485fc7;
  color: #fff;
}
.button.is-link.is-outlined.is-loading::after {
  border-color: transparent transparent #485fc7 #485fc7 !important;
}
.button.is-link.is-outlined.is-loading:hover::after, .button.is-link.is-outlined.is-loading.is-hovered::after, .button.is-link.is-outlined.is-loading:focus::after, .button.is-link.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-link.is-outlined[disabled], fieldset[disabled] .button.is-link.is-outlined {
  background-color: transparent;
  border-color: #485fc7;
  box-shadow: none;
  color: #485fc7;
}
.button.is-link.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined.is-hovered, .button.is-link.is-inverted.is-outlined:focus, .button.is-link.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #485fc7;
}
.button.is-link.is-inverted.is-outlined.is-loading:hover::after, .button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-link.is-inverted.is-outlined.is-loading:focus::after, .button.is-link.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #485fc7 #485fc7 !important;
}
.button.is-link.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-link.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-link.is-light {
  background-color: #eff1fa;
  color: #3850b7;
}
.button.is-link.is-light:hover, .button.is-link.is-light.is-hovered {
  background-color: #e6e9f7;
  border-color: transparent;
  color: #3850b7;
}
.button.is-link.is-light:active, .button.is-link.is-light.is-active {
  background-color: #dce0f4;
  border-color: transparent;
  color: #3850b7;
}
.button.is-info {
  background-color: #3e8ed0;
  border-color: transparent;
  color: #fff;
}
.button.is-info:hover, .button.is-info.is-hovered {
  background-color: #3488ce;
  border-color: transparent;
  color: #fff;
}
.button.is-info:focus, .button.is-info.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(62, 142, 208, 0.25);
}
.button.is-info:active, .button.is-info.is-active {
  background-color: #3082c5;
  border-color: transparent;
  color: #fff;
}
.button.is-info[disabled], fieldset[disabled] .button.is-info {
  background-color: #3e8ed0;
  border-color: transparent;
  box-shadow: none;
}
.button.is-info.is-inverted {
  background-color: #fff;
  color: #3e8ed0;
}
.button.is-info.is-inverted:hover, .button.is-info.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-info.is-inverted[disabled], fieldset[disabled] .button.is-info.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #3e8ed0;
}
.button.is-info.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-info.is-outlined {
  background-color: transparent;
  border-color: #3e8ed0;
  color: #3e8ed0;
}
.button.is-info.is-outlined:hover, .button.is-info.is-outlined.is-hovered, .button.is-info.is-outlined:focus, .button.is-info.is-outlined.is-focused {
  background-color: #3e8ed0;
  border-color: #3e8ed0;
  color: #fff;
}
.button.is-info.is-outlined.is-loading::after {
  border-color: transparent transparent #3e8ed0 #3e8ed0 !important;
}
.button.is-info.is-outlined.is-loading:hover::after, .button.is-info.is-outlined.is-loading.is-hovered::after, .button.is-info.is-outlined.is-loading:focus::after, .button.is-info.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-info.is-outlined[disabled], fieldset[disabled] .button.is-info.is-outlined {
  background-color: transparent;
  border-color: #3e8ed0;
  box-shadow: none;
  color: #3e8ed0;
}
.button.is-info.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined.is-hovered, .button.is-info.is-inverted.is-outlined:focus, .button.is-info.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #3e8ed0;
}
.button.is-info.is-inverted.is-outlined.is-loading:hover::after, .button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-info.is-inverted.is-outlined.is-loading:focus::after, .button.is-info.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #3e8ed0 #3e8ed0 !important;
}
.button.is-info.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-info.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-info.is-light {
  background-color: #eff5fb;
  color: #296fa8;
}
.button.is-info.is-light:hover, .button.is-info.is-light.is-hovered {
  background-color: #e4eff9;
  border-color: transparent;
  color: #296fa8;
}
.button.is-info.is-light:active, .button.is-info.is-light.is-active {
  background-color: #dae9f6;
  border-color: transparent;
  color: #296fa8;
}
.button.is-success {
  background-color: #48c78e;
  border-color: transparent;
  color: #fff;
}
.button.is-success:hover, .button.is-success.is-hovered {
  background-color: #3ec487;
  border-color: transparent;
  color: #fff;
}
.button.is-success:focus, .button.is-success.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);
}
.button.is-success:active, .button.is-success.is-active {
  background-color: #3abb81;
  border-color: transparent;
  color: #fff;
}
.button.is-success[disabled], fieldset[disabled] .button.is-success {
  background-color: #48c78e;
  border-color: transparent;
  box-shadow: none;
}
.button.is-success.is-inverted {
  background-color: #fff;
  color: #48c78e;
}
.button.is-success.is-inverted:hover, .button.is-success.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-success.is-inverted[disabled], fieldset[disabled] .button.is-success.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #48c78e;
}
.button.is-success.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-success.is-outlined {
  background-color: transparent;
  border-color: #48c78e;
  color: #48c78e;
}
.button.is-success.is-outlined:hover, .button.is-success.is-outlined.is-hovered, .button.is-success.is-outlined:focus, .button.is-success.is-outlined.is-focused {
  background-color: #48c78e;
  border-color: #48c78e;
  color: #fff;
}
.button.is-success.is-outlined.is-loading::after {
  border-color: transparent transparent #48c78e #48c78e !important;
}
.button.is-success.is-outlined.is-loading:hover::after, .button.is-success.is-outlined.is-loading.is-hovered::after, .button.is-success.is-outlined.is-loading:focus::after, .button.is-success.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-success.is-outlined[disabled], fieldset[disabled] .button.is-success.is-outlined {
  background-color: transparent;
  border-color: #48c78e;
  box-shadow: none;
  color: #48c78e;
}
.button.is-success.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined.is-hovered, .button.is-success.is-inverted.is-outlined:focus, .button.is-success.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #48c78e;
}
.button.is-success.is-inverted.is-outlined.is-loading:hover::after, .button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-success.is-inverted.is-outlined.is-loading:focus::after, .button.is-success.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #48c78e #48c78e !important;
}
.button.is-success.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-success.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-success.is-light {
  background-color: #effaf5;
  color: #257953;
}
.button.is-success.is-light:hover, .button.is-success.is-light.is-hovered {
  background-color: #e6f7ef;
  border-color: transparent;
  color: #257953;
}
.button.is-success.is-light:active, .button.is-success.is-light.is-active {
  background-color: #dcf4e9;
  border-color: transparent;
  color: #257953;
}
.button.is-warning {
  background-color: #ffe08a;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning:hover, .button.is-warning.is-hovered {
  background-color: #ffdc7d;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning:focus, .button.is-warning.is-focused {
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);
}
.button.is-warning:active, .button.is-warning.is-active {
  background-color: #ffd970;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning[disabled], fieldset[disabled] .button.is-warning {
  background-color: #ffe08a;
  border-color: transparent;
  box-shadow: none;
}
.button.is-warning.is-inverted {
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffe08a;
}
.button.is-warning.is-inverted:hover, .button.is-warning.is-inverted.is-hovered {
  background-color: rgba(0, 0, 0, 0.7);
}
.button.is-warning.is-inverted[disabled], fieldset[disabled] .button.is-warning.is-inverted {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: transparent;
  box-shadow: none;
  color: #ffe08a;
}
.button.is-warning.is-loading::after {
  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}
.button.is-warning.is-outlined {
  background-color: transparent;
  border-color: #ffe08a;
  color: #ffe08a;
}
.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined.is-hovered, .button.is-warning.is-outlined:focus, .button.is-warning.is-outlined.is-focused {
  background-color: #ffe08a;
  border-color: #ffe08a;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning.is-outlined.is-loading::after {
  border-color: transparent transparent #ffe08a #ffe08a !important;
}
.button.is-warning.is-outlined.is-loading:hover::after, .button.is-warning.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-outlined.is-loading:focus::after, .button.is-warning.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}
.button.is-warning.is-outlined[disabled], fieldset[disabled] .button.is-warning.is-outlined {
  background-color: transparent;
  border-color: #ffe08a;
  box-shadow: none;
  color: #ffe08a;
}
.button.is-warning.is-inverted.is-outlined {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.7);
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined.is-hovered, .button.is-warning.is-inverted.is-outlined:focus, .button.is-warning.is-inverted.is-outlined.is-focused {
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffe08a;
}
.button.is-warning.is-inverted.is-outlined.is-loading:hover::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-inverted.is-outlined.is-loading:focus::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #ffe08a #ffe08a !important;
}
.button.is-warning.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-warning.is-inverted.is-outlined {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.7);
  box-shadow: none;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning.is-light {
  background-color: #fffaeb;
  color: #946c00;
}
.button.is-warning.is-light:hover, .button.is-warning.is-light.is-hovered {
  background-color: #fff6de;
  border-color: transparent;
  color: #946c00;
}
.button.is-warning.is-light:active, .button.is-warning.is-light.is-active {
  background-color: #fff3d1;
  border-color: transparent;
  color: #946c00;
}
.button.is-danger {
  background-color: #f14668;
  border-color: transparent;
  color: #fff;
}
.button.is-danger:hover, .button.is-danger.is-hovered {
  background-color: #f03a5f;
  border-color: transparent;
  color: #fff;
}
.button.is-danger:focus, .button.is-danger.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);
}
.button.is-danger:active, .button.is-danger.is-active {
  background-color: #ef2e55;
  border-color: transparent;
  color: #fff;
}
.button.is-danger[disabled], fieldset[disabled] .button.is-danger {
  background-color: #f14668;
  border-color: transparent;
  box-shadow: none;
}
.button.is-danger.is-inverted {
  background-color: #fff;
  color: #f14668;
}
.button.is-danger.is-inverted:hover, .button.is-danger.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-danger.is-inverted[disabled], fieldset[disabled] .button.is-danger.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #f14668;
}
.button.is-danger.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-danger.is-outlined {
  background-color: transparent;
  border-color: #f14668;
  color: #f14668;
}
.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined.is-hovered, .button.is-danger.is-outlined:focus, .button.is-danger.is-outlined.is-focused {
  background-color: #f14668;
  border-color: #f14668;
  color: #fff;
}
.button.is-danger.is-outlined.is-loading::after {
  border-color: transparent transparent #f14668 #f14668 !important;
}
.button.is-danger.is-outlined.is-loading:hover::after, .button.is-danger.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-outlined.is-loading:focus::after, .button.is-danger.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-danger.is-outlined[disabled], fieldset[disabled] .button.is-danger.is-outlined {
  background-color: transparent;
  border-color: #f14668;
  box-shadow: none;
  color: #f14668;
}
.button.is-danger.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined.is-hovered, .button.is-danger.is-inverted.is-outlined:focus, .button.is-danger.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #f14668;
}
.button.is-danger.is-inverted.is-outlined.is-loading:hover::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-inverted.is-outlined.is-loading:focus::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #f14668 #f14668 !important;
}
.button.is-danger.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-danger.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-danger.is-light {
  background-color: #feecf0;
  color: #cc0f35;
}
.button.is-danger.is-light:hover, .button.is-danger.is-light.is-hovered {
  background-color: #fde0e6;
  border-color: transparent;
  color: #cc0f35;
}
.button.is-danger.is-light:active, .button.is-danger.is-light.is-active {
  background-color: #fcd4dc;
  border-color: transparent;
  color: #cc0f35;
}
.button.is-small {
  font-size: 0.75rem;
}
.button.is-small:not(.is-rounded) {
  border-radius: 2px;
}
.button.is-normal {
  font-size: 1rem;
}
.button.is-medium {
  font-size: 1.25rem;
}
.button.is-large {
  font-size: 1.5rem;
}
.button[disabled], fieldset[disabled] .button {
  background-color: white;
  border-color: #dbdbdb;
  box-shadow: none;
  opacity: 0.5;
}
.button.is-fullwidth {
  display: flex;
  width: 100%;
}
.button.is-loading {
  color: transparent !important;
  pointer-events: none;
}
.button.is-loading::after {
  position: absolute;
  left: calc(50% - (1em * 0.5));
  top: calc(50% - (1em * 0.5));
  position: absolute !important;
}
.button.is-static {
  background-color: whitesmoke;
  border-color: #dbdbdb;
  color: #7a7a7a;
  box-shadow: none;
  pointer-events: none;
}
.button.is-rounded {
  border-radius: 9999px;
  padding-left: calc(1em + 0.25em);
  padding-right: calc(1em + 0.25em);
}
.buttons {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.buttons .button {
  margin-bottom: 0.5rem;
}
.buttons .button:not(:last-child):not(.is-fullwidth) {
  margin-right: 0.5rem;
}
.buttons:last-child {
  margin-bottom: -0.5rem;
}
.buttons:not(:last-child) {
  margin-bottom: 1rem;
}
.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large) {
  font-size: 0.75rem;
}
.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large):not(.is-rounded) {
  border-radius: 2px;
}
.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large) {
  font-size: 1.25rem;
}
.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium) {
  font-size: 1.5rem;
}
.buttons.has-addons .button:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.buttons.has-addons .button:not(:last-child) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  margin-right: -1px;
}
.buttons.has-addons .button:last-child {
  margin-right: 0;
}
.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {
  z-index: 2;
}
.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {
  z-index: 3;
}
.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {
  z-index: 4;
}
.buttons.has-addons .button.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.buttons.is-centered {
  justify-content: center;
}
.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth) {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.buttons.is-right {
  justify-content: flex-end;
}
.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth) {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}`,U=Object.defineProperty,H=Object.getOwnPropertyDescriptor,x=(o,r,t,i)=>{for(var n=i>1?void 0:i?H(r,t):r,e=o.length-1,a;e>=0;e--)(a=o[e])&&(n=(i?a(r,t,n):a(n))||n);return i&&n&&U(r,t,n),n};const q="lit-button";let u=class extends c{constructor(){super(...arguments);this.type="button"}onClick(o){o.preventDefault(),o.stopPropagation(),this.click()}onMouseOver(o){o.preventDefault(),o.stopPropagation(),this.dispatchEvent(new CustomEvent("mouseover",{bubbles:!0,detail:this}))}onFocus(o){o.preventDefault(),o.stopPropagation(),this.dispatchEvent(new N({bubbles:!0}))}render(){const o=$({button:!0,[`is-${this.styleType}`]:!!this.styleType});return s`
      <button
        type=${this.type}
        class=${o}
        @click=${this.onClick}
        @mouseover=${this.onMouseOver}
        @focus=${this.onFocus}
      >
        <slot></slot>
      </button>
    `}};u.styles=[b(T)];x([l({reflect:!0,converter:{fromAttribute:o=>(console.log("LitButton -> converter -> fromAttribute",o),o),toAttribute:o=>{if(console.log("LitButton -> converter -> toAttribute",o),["button","submit","reset"].includes(o))return o;throw new Error(`LitButton -> Invalid type: ${o}`)}}})],u.prototype,"type",2);x([l({type:String,attribute:"style-type"})],u.prototype,"styleType",2);u=x([d(q)],u);class N extends Event{constructor(r){super("custom-focus",r||{})}}var R=`/* Bulma Utilities */
.button {
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  vertical-align: top;
}
.button:focus, .is-focused.button, .button:active, .is-active.button {
  outline: none;
}
[disabled].button, fieldset[disabled] .button {
  cursor: not-allowed;
}
.button {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.button.is-loading::after {
  animation: spinAround 500ms infinite linear;
  border: 2px solid #dbdbdb;
  border-radius: 9999px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  position: relative;
  width: 1em;
}
.button {
  background-color: white;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
}
.button strong {
  color: inherit;
}
.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {
  height: 1.5em;
  width: 1.5em;
}
.button .icon:first-child:not(:last-child) {
  margin-left: calc(-0.5em - 1px);
  margin-right: 0.25em;
}
.button .icon:last-child:not(:first-child) {
  margin-left: 0.25em;
  margin-right: calc(-0.5em - 1px);
}
.button .icon:first-child:last-child {
  margin-left: calc(-0.5em - 1px);
  margin-right: calc(-0.5em - 1px);
}
.button:hover, .button.is-hovered {
  border-color: #b5b5b5;
  color: #363636;
}
.button:focus, .button.is-focused {
  border-color: #485fc7;
  color: #363636;
}
.button:focus:not(:active), .button.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);
}
.button:active, .button.is-active {
  border-color: #4a4a4a;
  color: #363636;
}
.button.is-text {
  background-color: transparent;
  border-color: transparent;
  color: #4a4a4a;
  text-decoration: underline;
}
.button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {
  background-color: whitesmoke;
  color: #363636;
}
.button.is-text:active, .button.is-text.is-active {
  background-color: #e8e8e8;
  color: #363636;
}
.button.is-text[disabled], fieldset[disabled] .button.is-text {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}
.button.is-ghost {
  background: none;
  border-color: transparent;
  color: #485fc7;
  text-decoration: none;
}
.button.is-ghost:hover, .button.is-ghost.is-hovered {
  color: #485fc7;
  text-decoration: underline;
}
.button.is-white {
  background-color: white;
  border-color: transparent;
  color: #0a0a0a;
}
.button.is-white:hover, .button.is-white.is-hovered {
  background-color: #f9f9f9;
  border-color: transparent;
  color: #0a0a0a;
}
.button.is-white:focus, .button.is-white.is-focused {
  border-color: transparent;
  color: #0a0a0a;
}
.button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);
}
.button.is-white:active, .button.is-white.is-active {
  background-color: #f2f2f2;
  border-color: transparent;
  color: #0a0a0a;
}
.button.is-white[disabled], fieldset[disabled] .button.is-white {
  background-color: white;
  border-color: transparent;
  box-shadow: none;
}
.button.is-white.is-inverted {
  background-color: #0a0a0a;
  color: white;
}
.button.is-white.is-inverted:hover, .button.is-white.is-inverted.is-hovered {
  background-color: black;
}
.button.is-white.is-inverted[disabled], fieldset[disabled] .button.is-white.is-inverted {
  background-color: #0a0a0a;
  border-color: transparent;
  box-shadow: none;
  color: white;
}
.button.is-white.is-loading::after {
  border-color: transparent transparent #0a0a0a #0a0a0a !important;
}
.button.is-white.is-outlined {
  background-color: transparent;
  border-color: white;
  color: white;
}
.button.is-white.is-outlined:hover, .button.is-white.is-outlined.is-hovered, .button.is-white.is-outlined:focus, .button.is-white.is-outlined.is-focused {
  background-color: white;
  border-color: white;
  color: #0a0a0a;
}
.button.is-white.is-outlined.is-loading::after {
  border-color: transparent transparent white white !important;
}
.button.is-white.is-outlined.is-loading:hover::after, .button.is-white.is-outlined.is-loading.is-hovered::after, .button.is-white.is-outlined.is-loading:focus::after, .button.is-white.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #0a0a0a #0a0a0a !important;
}
.button.is-white.is-outlined[disabled], fieldset[disabled] .button.is-white.is-outlined {
  background-color: transparent;
  border-color: white;
  box-shadow: none;
  color: white;
}
.button.is-white.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #0a0a0a;
  color: #0a0a0a;
}
.button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined.is-hovered, .button.is-white.is-inverted.is-outlined:focus, .button.is-white.is-inverted.is-outlined.is-focused {
  background-color: #0a0a0a;
  color: white;
}
.button.is-white.is-inverted.is-outlined.is-loading:hover::after, .button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-white.is-inverted.is-outlined.is-loading:focus::after, .button.is-white.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent white white !important;
}
.button.is-white.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-white.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #0a0a0a;
  box-shadow: none;
  color: #0a0a0a;
}
.button.is-black {
  background-color: #0a0a0a;
  border-color: transparent;
  color: white;
}
.button.is-black:hover, .button.is-black.is-hovered {
  background-color: #040404;
  border-color: transparent;
  color: white;
}
.button.is-black:focus, .button.is-black.is-focused {
  border-color: transparent;
  color: white;
}
.button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);
}
.button.is-black:active, .button.is-black.is-active {
  background-color: black;
  border-color: transparent;
  color: white;
}
.button.is-black[disabled], fieldset[disabled] .button.is-black {
  background-color: #0a0a0a;
  border-color: transparent;
  box-shadow: none;
}
.button.is-black.is-inverted {
  background-color: white;
  color: #0a0a0a;
}
.button.is-black.is-inverted:hover, .button.is-black.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-black.is-inverted[disabled], fieldset[disabled] .button.is-black.is-inverted {
  background-color: white;
  border-color: transparent;
  box-shadow: none;
  color: #0a0a0a;
}
.button.is-black.is-loading::after {
  border-color: transparent transparent white white !important;
}
.button.is-black.is-outlined {
  background-color: transparent;
  border-color: #0a0a0a;
  color: #0a0a0a;
}
.button.is-black.is-outlined:hover, .button.is-black.is-outlined.is-hovered, .button.is-black.is-outlined:focus, .button.is-black.is-outlined.is-focused {
  background-color: #0a0a0a;
  border-color: #0a0a0a;
  color: white;
}
.button.is-black.is-outlined.is-loading::after {
  border-color: transparent transparent #0a0a0a #0a0a0a !important;
}
.button.is-black.is-outlined.is-loading:hover::after, .button.is-black.is-outlined.is-loading.is-hovered::after, .button.is-black.is-outlined.is-loading:focus::after, .button.is-black.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent white white !important;
}
.button.is-black.is-outlined[disabled], fieldset[disabled] .button.is-black.is-outlined {
  background-color: transparent;
  border-color: #0a0a0a;
  box-shadow: none;
  color: #0a0a0a;
}
.button.is-black.is-inverted.is-outlined {
  background-color: transparent;
  border-color: white;
  color: white;
}
.button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined.is-hovered, .button.is-black.is-inverted.is-outlined:focus, .button.is-black.is-inverted.is-outlined.is-focused {
  background-color: white;
  color: #0a0a0a;
}
.button.is-black.is-inverted.is-outlined.is-loading:hover::after, .button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-black.is-inverted.is-outlined.is-loading:focus::after, .button.is-black.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #0a0a0a #0a0a0a !important;
}
.button.is-black.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-black.is-inverted.is-outlined {
  background-color: transparent;
  border-color: white;
  box-shadow: none;
  color: white;
}
.button.is-light {
  background-color: whitesmoke;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light:hover, .button.is-light.is-hovered {
  background-color: #eeeeee;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light:focus, .button.is-light.is-focused {
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);
}
.button.is-light:active, .button.is-light.is-active {
  background-color: #e8e8e8;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light[disabled], fieldset[disabled] .button.is-light {
  background-color: whitesmoke;
  border-color: transparent;
  box-shadow: none;
}
.button.is-light.is-inverted {
  background-color: rgba(0, 0, 0, 0.7);
  color: whitesmoke;
}
.button.is-light.is-inverted:hover, .button.is-light.is-inverted.is-hovered {
  background-color: rgba(0, 0, 0, 0.7);
}
.button.is-light.is-inverted[disabled], fieldset[disabled] .button.is-light.is-inverted {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: transparent;
  box-shadow: none;
  color: whitesmoke;
}
.button.is-light.is-loading::after {
  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}
.button.is-light.is-outlined {
  background-color: transparent;
  border-color: whitesmoke;
  color: whitesmoke;
}
.button.is-light.is-outlined:hover, .button.is-light.is-outlined.is-hovered, .button.is-light.is-outlined:focus, .button.is-light.is-outlined.is-focused {
  background-color: whitesmoke;
  border-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light.is-outlined.is-loading::after {
  border-color: transparent transparent whitesmoke whitesmoke !important;
}
.button.is-light.is-outlined.is-loading:hover::after, .button.is-light.is-outlined.is-loading.is-hovered::after, .button.is-light.is-outlined.is-loading:focus::after, .button.is-light.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}
.button.is-light.is-outlined[disabled], fieldset[disabled] .button.is-light.is-outlined {
  background-color: transparent;
  border-color: whitesmoke;
  box-shadow: none;
  color: whitesmoke;
}
.button.is-light.is-inverted.is-outlined {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.7);
  color: rgba(0, 0, 0, 0.7);
}
.button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined.is-hovered, .button.is-light.is-inverted.is-outlined:focus, .button.is-light.is-inverted.is-outlined.is-focused {
  background-color: rgba(0, 0, 0, 0.7);
  color: whitesmoke;
}
.button.is-light.is-inverted.is-outlined.is-loading:hover::after, .button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-light.is-inverted.is-outlined.is-loading:focus::after, .button.is-light.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent whitesmoke whitesmoke !important;
}
.button.is-light.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-light.is-inverted.is-outlined {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.7);
  box-shadow: none;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-dark {
  background-color: #363636;
  border-color: transparent;
  color: #fff;
}
.button.is-dark:hover, .button.is-dark.is-hovered {
  background-color: #2f2f2f;
  border-color: transparent;
  color: #fff;
}
.button.is-dark:focus, .button.is-dark.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);
}
.button.is-dark:active, .button.is-dark.is-active {
  background-color: #292929;
  border-color: transparent;
  color: #fff;
}
.button.is-dark[disabled], fieldset[disabled] .button.is-dark {
  background-color: #363636;
  border-color: transparent;
  box-shadow: none;
}
.button.is-dark.is-inverted {
  background-color: #fff;
  color: #363636;
}
.button.is-dark.is-inverted:hover, .button.is-dark.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-dark.is-inverted[disabled], fieldset[disabled] .button.is-dark.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #363636;
}
.button.is-dark.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-dark.is-outlined {
  background-color: transparent;
  border-color: #363636;
  color: #363636;
}
.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined.is-hovered, .button.is-dark.is-outlined:focus, .button.is-dark.is-outlined.is-focused {
  background-color: #363636;
  border-color: #363636;
  color: #fff;
}
.button.is-dark.is-outlined.is-loading::after {
  border-color: transparent transparent #363636 #363636 !important;
}
.button.is-dark.is-outlined.is-loading:hover::after, .button.is-dark.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-outlined.is-loading:focus::after, .button.is-dark.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-dark.is-outlined[disabled], fieldset[disabled] .button.is-dark.is-outlined {
  background-color: transparent;
  border-color: #363636;
  box-shadow: none;
  color: #363636;
}
.button.is-dark.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined.is-hovered, .button.is-dark.is-inverted.is-outlined:focus, .button.is-dark.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #363636;
}
.button.is-dark.is-inverted.is-outlined.is-loading:hover::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-inverted.is-outlined.is-loading:focus::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #363636 #363636 !important;
}
.button.is-dark.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-dark.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-primary {
  background-color: #00d1b2;
  border-color: transparent;
  color: #fff;
}
.button.is-primary:hover, .button.is-primary.is-hovered {
  background-color: #00c4a7;
  border-color: transparent;
  color: #fff;
}
.button.is-primary:focus, .button.is-primary.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);
}
.button.is-primary:active, .button.is-primary.is-active {
  background-color: #00b89c;
  border-color: transparent;
  color: #fff;
}
.button.is-primary[disabled], fieldset[disabled] .button.is-primary {
  background-color: #00d1b2;
  border-color: transparent;
  box-shadow: none;
}
.button.is-primary.is-inverted {
  background-color: #fff;
  color: #00d1b2;
}
.button.is-primary.is-inverted:hover, .button.is-primary.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-primary.is-inverted[disabled], fieldset[disabled] .button.is-primary.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #00d1b2;
}
.button.is-primary.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-primary.is-outlined {
  background-color: transparent;
  border-color: #00d1b2;
  color: #00d1b2;
}
.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused {
  background-color: #00d1b2;
  border-color: #00d1b2;
  color: #fff;
}
.button.is-primary.is-outlined.is-loading::after {
  border-color: transparent transparent #00d1b2 #00d1b2 !important;
}
.button.is-primary.is-outlined.is-loading:hover::after, .button.is-primary.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-outlined.is-loading:focus::after, .button.is-primary.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-primary.is-outlined[disabled], fieldset[disabled] .button.is-primary.is-outlined {
  background-color: transparent;
  border-color: #00d1b2;
  box-shadow: none;
  color: #00d1b2;
}
.button.is-primary.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined.is-hovered, .button.is-primary.is-inverted.is-outlined:focus, .button.is-primary.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #00d1b2;
}
.button.is-primary.is-inverted.is-outlined.is-loading:hover::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-inverted.is-outlined.is-loading:focus::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #00d1b2 #00d1b2 !important;
}
.button.is-primary.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-primary.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-primary.is-light {
  background-color: #ebfffc;
  color: #00947e;
}
.button.is-primary.is-light:hover, .button.is-primary.is-light.is-hovered {
  background-color: #defffa;
  border-color: transparent;
  color: #00947e;
}
.button.is-primary.is-light:active, .button.is-primary.is-light.is-active {
  background-color: #d1fff8;
  border-color: transparent;
  color: #00947e;
}
.button.is-link {
  background-color: #485fc7;
  border-color: transparent;
  color: #fff;
}
.button.is-link:hover, .button.is-link.is-hovered {
  background-color: #3e56c4;
  border-color: transparent;
  color: #fff;
}
.button.is-link:focus, .button.is-link.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);
}
.button.is-link:active, .button.is-link.is-active {
  background-color: #3a51bb;
  border-color: transparent;
  color: #fff;
}
.button.is-link[disabled], fieldset[disabled] .button.is-link {
  background-color: #485fc7;
  border-color: transparent;
  box-shadow: none;
}
.button.is-link.is-inverted {
  background-color: #fff;
  color: #485fc7;
}
.button.is-link.is-inverted:hover, .button.is-link.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-link.is-inverted[disabled], fieldset[disabled] .button.is-link.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #485fc7;
}
.button.is-link.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-link.is-outlined {
  background-color: transparent;
  border-color: #485fc7;
  color: #485fc7;
}
.button.is-link.is-outlined:hover, .button.is-link.is-outlined.is-hovered, .button.is-link.is-outlined:focus, .button.is-link.is-outlined.is-focused {
  background-color: #485fc7;
  border-color: #485fc7;
  color: #fff;
}
.button.is-link.is-outlined.is-loading::after {
  border-color: transparent transparent #485fc7 #485fc7 !important;
}
.button.is-link.is-outlined.is-loading:hover::after, .button.is-link.is-outlined.is-loading.is-hovered::after, .button.is-link.is-outlined.is-loading:focus::after, .button.is-link.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-link.is-outlined[disabled], fieldset[disabled] .button.is-link.is-outlined {
  background-color: transparent;
  border-color: #485fc7;
  box-shadow: none;
  color: #485fc7;
}
.button.is-link.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined.is-hovered, .button.is-link.is-inverted.is-outlined:focus, .button.is-link.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #485fc7;
}
.button.is-link.is-inverted.is-outlined.is-loading:hover::after, .button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-link.is-inverted.is-outlined.is-loading:focus::after, .button.is-link.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #485fc7 #485fc7 !important;
}
.button.is-link.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-link.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-link.is-light {
  background-color: #eff1fa;
  color: #3850b7;
}
.button.is-link.is-light:hover, .button.is-link.is-light.is-hovered {
  background-color: #e6e9f7;
  border-color: transparent;
  color: #3850b7;
}
.button.is-link.is-light:active, .button.is-link.is-light.is-active {
  background-color: #dce0f4;
  border-color: transparent;
  color: #3850b7;
}
.button.is-info {
  background-color: #3e8ed0;
  border-color: transparent;
  color: #fff;
}
.button.is-info:hover, .button.is-info.is-hovered {
  background-color: #3488ce;
  border-color: transparent;
  color: #fff;
}
.button.is-info:focus, .button.is-info.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(62, 142, 208, 0.25);
}
.button.is-info:active, .button.is-info.is-active {
  background-color: #3082c5;
  border-color: transparent;
  color: #fff;
}
.button.is-info[disabled], fieldset[disabled] .button.is-info {
  background-color: #3e8ed0;
  border-color: transparent;
  box-shadow: none;
}
.button.is-info.is-inverted {
  background-color: #fff;
  color: #3e8ed0;
}
.button.is-info.is-inverted:hover, .button.is-info.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-info.is-inverted[disabled], fieldset[disabled] .button.is-info.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #3e8ed0;
}
.button.is-info.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-info.is-outlined {
  background-color: transparent;
  border-color: #3e8ed0;
  color: #3e8ed0;
}
.button.is-info.is-outlined:hover, .button.is-info.is-outlined.is-hovered, .button.is-info.is-outlined:focus, .button.is-info.is-outlined.is-focused {
  background-color: #3e8ed0;
  border-color: #3e8ed0;
  color: #fff;
}
.button.is-info.is-outlined.is-loading::after {
  border-color: transparent transparent #3e8ed0 #3e8ed0 !important;
}
.button.is-info.is-outlined.is-loading:hover::after, .button.is-info.is-outlined.is-loading.is-hovered::after, .button.is-info.is-outlined.is-loading:focus::after, .button.is-info.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-info.is-outlined[disabled], fieldset[disabled] .button.is-info.is-outlined {
  background-color: transparent;
  border-color: #3e8ed0;
  box-shadow: none;
  color: #3e8ed0;
}
.button.is-info.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined.is-hovered, .button.is-info.is-inverted.is-outlined:focus, .button.is-info.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #3e8ed0;
}
.button.is-info.is-inverted.is-outlined.is-loading:hover::after, .button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-info.is-inverted.is-outlined.is-loading:focus::after, .button.is-info.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #3e8ed0 #3e8ed0 !important;
}
.button.is-info.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-info.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-info.is-light {
  background-color: #eff5fb;
  color: #296fa8;
}
.button.is-info.is-light:hover, .button.is-info.is-light.is-hovered {
  background-color: #e4eff9;
  border-color: transparent;
  color: #296fa8;
}
.button.is-info.is-light:active, .button.is-info.is-light.is-active {
  background-color: #dae9f6;
  border-color: transparent;
  color: #296fa8;
}
.button.is-success {
  background-color: #48c78e;
  border-color: transparent;
  color: #fff;
}
.button.is-success:hover, .button.is-success.is-hovered {
  background-color: #3ec487;
  border-color: transparent;
  color: #fff;
}
.button.is-success:focus, .button.is-success.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);
}
.button.is-success:active, .button.is-success.is-active {
  background-color: #3abb81;
  border-color: transparent;
  color: #fff;
}
.button.is-success[disabled], fieldset[disabled] .button.is-success {
  background-color: #48c78e;
  border-color: transparent;
  box-shadow: none;
}
.button.is-success.is-inverted {
  background-color: #fff;
  color: #48c78e;
}
.button.is-success.is-inverted:hover, .button.is-success.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-success.is-inverted[disabled], fieldset[disabled] .button.is-success.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #48c78e;
}
.button.is-success.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-success.is-outlined {
  background-color: transparent;
  border-color: #48c78e;
  color: #48c78e;
}
.button.is-success.is-outlined:hover, .button.is-success.is-outlined.is-hovered, .button.is-success.is-outlined:focus, .button.is-success.is-outlined.is-focused {
  background-color: #48c78e;
  border-color: #48c78e;
  color: #fff;
}
.button.is-success.is-outlined.is-loading::after {
  border-color: transparent transparent #48c78e #48c78e !important;
}
.button.is-success.is-outlined.is-loading:hover::after, .button.is-success.is-outlined.is-loading.is-hovered::after, .button.is-success.is-outlined.is-loading:focus::after, .button.is-success.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-success.is-outlined[disabled], fieldset[disabled] .button.is-success.is-outlined {
  background-color: transparent;
  border-color: #48c78e;
  box-shadow: none;
  color: #48c78e;
}
.button.is-success.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined.is-hovered, .button.is-success.is-inverted.is-outlined:focus, .button.is-success.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #48c78e;
}
.button.is-success.is-inverted.is-outlined.is-loading:hover::after, .button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-success.is-inverted.is-outlined.is-loading:focus::after, .button.is-success.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #48c78e #48c78e !important;
}
.button.is-success.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-success.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-success.is-light {
  background-color: #effaf5;
  color: #257953;
}
.button.is-success.is-light:hover, .button.is-success.is-light.is-hovered {
  background-color: #e6f7ef;
  border-color: transparent;
  color: #257953;
}
.button.is-success.is-light:active, .button.is-success.is-light.is-active {
  background-color: #dcf4e9;
  border-color: transparent;
  color: #257953;
}
.button.is-warning {
  background-color: #ffe08a;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning:hover, .button.is-warning.is-hovered {
  background-color: #ffdc7d;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning:focus, .button.is-warning.is-focused {
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);
}
.button.is-warning:active, .button.is-warning.is-active {
  background-color: #ffd970;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning[disabled], fieldset[disabled] .button.is-warning {
  background-color: #ffe08a;
  border-color: transparent;
  box-shadow: none;
}
.button.is-warning.is-inverted {
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffe08a;
}
.button.is-warning.is-inverted:hover, .button.is-warning.is-inverted.is-hovered {
  background-color: rgba(0, 0, 0, 0.7);
}
.button.is-warning.is-inverted[disabled], fieldset[disabled] .button.is-warning.is-inverted {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: transparent;
  box-shadow: none;
  color: #ffe08a;
}
.button.is-warning.is-loading::after {
  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}
.button.is-warning.is-outlined {
  background-color: transparent;
  border-color: #ffe08a;
  color: #ffe08a;
}
.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined.is-hovered, .button.is-warning.is-outlined:focus, .button.is-warning.is-outlined.is-focused {
  background-color: #ffe08a;
  border-color: #ffe08a;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning.is-outlined.is-loading::after {
  border-color: transparent transparent #ffe08a #ffe08a !important;
}
.button.is-warning.is-outlined.is-loading:hover::after, .button.is-warning.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-outlined.is-loading:focus::after, .button.is-warning.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}
.button.is-warning.is-outlined[disabled], fieldset[disabled] .button.is-warning.is-outlined {
  background-color: transparent;
  border-color: #ffe08a;
  box-shadow: none;
  color: #ffe08a;
}
.button.is-warning.is-inverted.is-outlined {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.7);
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined.is-hovered, .button.is-warning.is-inverted.is-outlined:focus, .button.is-warning.is-inverted.is-outlined.is-focused {
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffe08a;
}
.button.is-warning.is-inverted.is-outlined.is-loading:hover::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-inverted.is-outlined.is-loading:focus::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #ffe08a #ffe08a !important;
}
.button.is-warning.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-warning.is-inverted.is-outlined {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.7);
  box-shadow: none;
  color: rgba(0, 0, 0, 0.7);
}
.button.is-warning.is-light {
  background-color: #fffaeb;
  color: #946c00;
}
.button.is-warning.is-light:hover, .button.is-warning.is-light.is-hovered {
  background-color: #fff6de;
  border-color: transparent;
  color: #946c00;
}
.button.is-warning.is-light:active, .button.is-warning.is-light.is-active {
  background-color: #fff3d1;
  border-color: transparent;
  color: #946c00;
}
.button.is-danger {
  background-color: #f14668;
  border-color: transparent;
  color: #fff;
}
.button.is-danger:hover, .button.is-danger.is-hovered {
  background-color: #f03a5f;
  border-color: transparent;
  color: #fff;
}
.button.is-danger:focus, .button.is-danger.is-focused {
  border-color: transparent;
  color: #fff;
}
.button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);
}
.button.is-danger:active, .button.is-danger.is-active {
  background-color: #ef2e55;
  border-color: transparent;
  color: #fff;
}
.button.is-danger[disabled], fieldset[disabled] .button.is-danger {
  background-color: #f14668;
  border-color: transparent;
  box-shadow: none;
}
.button.is-danger.is-inverted {
  background-color: #fff;
  color: #f14668;
}
.button.is-danger.is-inverted:hover, .button.is-danger.is-inverted.is-hovered {
  background-color: #f2f2f2;
}
.button.is-danger.is-inverted[disabled], fieldset[disabled] .button.is-danger.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #f14668;
}
.button.is-danger.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-danger.is-outlined {
  background-color: transparent;
  border-color: #f14668;
  color: #f14668;
}
.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined.is-hovered, .button.is-danger.is-outlined:focus, .button.is-danger.is-outlined.is-focused {
  background-color: #f14668;
  border-color: #f14668;
  color: #fff;
}
.button.is-danger.is-outlined.is-loading::after {
  border-color: transparent transparent #f14668 #f14668 !important;
}
.button.is-danger.is-outlined.is-loading:hover::after, .button.is-danger.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-outlined.is-loading:focus::after, .button.is-danger.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}
.button.is-danger.is-outlined[disabled], fieldset[disabled] .button.is-danger.is-outlined {
  background-color: transparent;
  border-color: #f14668;
  box-shadow: none;
  color: #f14668;
}
.button.is-danger.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}
.button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined.is-hovered, .button.is-danger.is-inverted.is-outlined:focus, .button.is-danger.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #f14668;
}
.button.is-danger.is-inverted.is-outlined.is-loading:hover::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-inverted.is-outlined.is-loading:focus::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #f14668 #f14668 !important;
}
.button.is-danger.is-inverted.is-outlined[disabled], fieldset[disabled] .button.is-danger.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}
.button.is-danger.is-light {
  background-color: #feecf0;
  color: #cc0f35;
}
.button.is-danger.is-light:hover, .button.is-danger.is-light.is-hovered {
  background-color: #fde0e6;
  border-color: transparent;
  color: #cc0f35;
}
.button.is-danger.is-light:active, .button.is-danger.is-light.is-active {
  background-color: #fcd4dc;
  border-color: transparent;
  color: #cc0f35;
}
.button.is-small {
  font-size: 0.75rem;
}
.button.is-small:not(.is-rounded) {
  border-radius: 2px;
}
.button.is-normal {
  font-size: 1rem;
}
.button.is-medium {
  font-size: 1.25rem;
}
.button.is-large {
  font-size: 1.5rem;
}
.button[disabled], fieldset[disabled] .button {
  background-color: white;
  border-color: #dbdbdb;
  box-shadow: none;
  opacity: 0.5;
}
.button.is-fullwidth {
  display: flex;
  width: 100%;
}
.button.is-loading {
  color: transparent !important;
  pointer-events: none;
}
.button.is-loading::after {
  position: absolute;
  left: calc(50% - (1em * 0.5));
  top: calc(50% - (1em * 0.5));
  position: absolute !important;
}
.button.is-static {
  background-color: whitesmoke;
  border-color: #dbdbdb;
  color: #7a7a7a;
  box-shadow: none;
  pointer-events: none;
}
.button.is-rounded {
  border-radius: 9999px;
  padding-left: calc(1em + 0.25em);
  padding-right: calc(1em + 0.25em);
}
.buttons {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.buttons .button {
  margin-bottom: 0.5rem;
}
.buttons .button:not(:last-child):not(.is-fullwidth) {
  margin-right: 0.5rem;
}
.buttons:last-child {
  margin-bottom: -0.5rem;
}
.buttons:not(:last-child) {
  margin-bottom: 1rem;
}
.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large) {
  font-size: 0.75rem;
}
.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large):not(.is-rounded) {
  border-radius: 2px;
}
.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large) {
  font-size: 1.25rem;
}
.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium) {
  font-size: 1.5rem;
}
.buttons.has-addons .button:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.buttons.has-addons .button:not(:last-child) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  margin-right: -1px;
}
.buttons.has-addons .button:last-child {
  margin-right: 0;
}
.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {
  z-index: 2;
}
.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {
  z-index: 3;
}
.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {
  z-index: 4;
}
.buttons.has-addons .button.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.buttons.is-centered {
  justify-content: center;
}
.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth) {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}
.buttons.is-right {
  justify-content: flex-end;
}
.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth) {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}`,I=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,M=(o,r,t,i)=>{for(var n=i>1?void 0:i?Y(r,t):r,e=o.length-1,a;e>=0;e--)(a=o[e])&&(n=(i?a(r,t,n):a(n))||n);return i&&n&&I(r,t,n),n};const W="lit-button-with-life-cycle";let y=class extends u{constructor(){super();console.log("Button constructor")}connectedCallback(){super.connectedCallback(),console.log("Button connectedCallback")}disconnectedCallback(){super.disconnectedCallback(),console.log("Button disconnectedCallback")}attributeChangedCallback(o,r,t){super.attributeChangedCallback(o,r,t),console.log("Button attributeChangedCallback",{name:o,_old:r,value:t})}};y.styles=[b(R)];y=M([d(W)],y);var K=`/* Bulma Utilities */
.file-cta,
.file-name, .select select, .textarea, .input {
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.5em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.75em - 1px);
  padding-right: calc(0.75em - 1px);
  padding-top: calc(0.5em - 1px);
  position: relative;
  vertical-align: top;
}
.file-cta:focus,
.file-name:focus, .select select:focus, .textarea:focus, .input:focus, .is-focused.file-cta,
.is-focused.file-name, .select select.is-focused, .is-focused.textarea, .is-focused.input, .file-cta:active,
.file-name:active, .select select:active, .textarea:active, .input:active, .is-active.file-cta,
.is-active.file-name, .select select.is-active, .is-active.textarea, .is-active.input {
  outline: none;
}
[disabled].file-cta,
[disabled].file-name, .select select[disabled], [disabled].textarea, [disabled].input, fieldset[disabled] .file-cta,
fieldset[disabled] .file-name, fieldset[disabled] .select select, .select fieldset[disabled] select, fieldset[disabled] .textarea, fieldset[disabled] .input {
  cursor: not-allowed;
}
.file {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.select:not(.is-multiple):not(.is-loading)::after {
  border: 3px solid transparent;
  border-radius: 2px;
  border-right: 0;
  border-top: 0;
  content: " ";
  display: block;
  height: 0.625em;
  margin-top: -0.4375em;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: rotate(-45deg);
  transform-origin: center;
  width: 0.625em;
}
.control.is-loading::after, .select.is-loading::after {
  animation: spinAround 500ms infinite linear;
  border: 2px solid #dbdbdb;
  border-radius: 9999px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  position: relative;
  width: 1em;
}
/* Bulma Form */
.select select, .textarea, .input {
  background-color: white;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: #363636;
}
.select select::-moz-placeholder, .textarea::-moz-placeholder, .input::-moz-placeholder {
  color: rgba(54, 54, 54, 0.3);
}
.select select::-webkit-input-placeholder, .textarea::-webkit-input-placeholder, .input::-webkit-input-placeholder {
  color: rgba(54, 54, 54, 0.3);
}
.select select:-moz-placeholder, .textarea:-moz-placeholder, .input:-moz-placeholder {
  color: rgba(54, 54, 54, 0.3);
}
.select select:-ms-input-placeholder, .textarea:-ms-input-placeholder, .input:-ms-input-placeholder {
  color: rgba(54, 54, 54, 0.3);
}
.select select:hover, .textarea:hover, .input:hover, .select select.is-hovered, .is-hovered.textarea, .is-hovered.input {
  border-color: #b5b5b5;
}
.select select:focus, .textarea:focus, .input:focus, .select select.is-focused, .is-focused.textarea, .is-focused.input, .select select:active, .textarea:active, .input:active, .select select.is-active, .is-active.textarea, .is-active.input {
  border-color: #485fc7;
  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);
}
.select select[disabled], [disabled].textarea, [disabled].input, fieldset[disabled] .select select, .select fieldset[disabled] select, fieldset[disabled] .textarea, fieldset[disabled] .input {
  background-color: whitesmoke;
  border-color: whitesmoke;
  box-shadow: none;
  color: #7a7a7a;
}
.select select[disabled]::-moz-placeholder, [disabled].textarea::-moz-placeholder, [disabled].input::-moz-placeholder, fieldset[disabled] .select select::-moz-placeholder, .select fieldset[disabled] select::-moz-placeholder, fieldset[disabled] .textarea::-moz-placeholder, fieldset[disabled] .input::-moz-placeholder {
  color: rgba(122, 122, 122, 0.3);
}
.select select[disabled]::-webkit-input-placeholder, [disabled].textarea::-webkit-input-placeholder, [disabled].input::-webkit-input-placeholder, fieldset[disabled] .select select::-webkit-input-placeholder, .select fieldset[disabled] select::-webkit-input-placeholder, fieldset[disabled] .textarea::-webkit-input-placeholder, fieldset[disabled] .input::-webkit-input-placeholder {
  color: rgba(122, 122, 122, 0.3);
}
.select select[disabled]:-moz-placeholder, [disabled].textarea:-moz-placeholder, [disabled].input:-moz-placeholder, fieldset[disabled] .select select:-moz-placeholder, .select fieldset[disabled] select:-moz-placeholder, fieldset[disabled] .textarea:-moz-placeholder, fieldset[disabled] .input:-moz-placeholder {
  color: rgba(122, 122, 122, 0.3);
}
.select select[disabled]:-ms-input-placeholder, [disabled].textarea:-ms-input-placeholder, [disabled].input:-ms-input-placeholder, fieldset[disabled] .select select:-ms-input-placeholder, .select fieldset[disabled] select:-ms-input-placeholder, fieldset[disabled] .textarea:-ms-input-placeholder, fieldset[disabled] .input:-ms-input-placeholder {
  color: rgba(122, 122, 122, 0.3);
}
.textarea, .input {
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
  max-width: 100%;
  width: 100%;
}
[readonly].textarea, [readonly].input {
  box-shadow: none;
}
.is-white.textarea, .is-white.input {
  border-color: white;
}
.is-white.textarea:focus, .is-white.input:focus, .is-white.is-focused.textarea, .is-white.is-focused.input, .is-white.textarea:active, .is-white.input:active, .is-white.is-active.textarea, .is-white.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);
}
.is-black.textarea, .is-black.input {
  border-color: #0a0a0a;
}
.is-black.textarea:focus, .is-black.input:focus, .is-black.is-focused.textarea, .is-black.is-focused.input, .is-black.textarea:active, .is-black.input:active, .is-black.is-active.textarea, .is-black.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);
}
.is-light.textarea, .is-light.input {
  border-color: whitesmoke;
}
.is-light.textarea:focus, .is-light.input:focus, .is-light.is-focused.textarea, .is-light.is-focused.input, .is-light.textarea:active, .is-light.input:active, .is-light.is-active.textarea, .is-light.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);
}
.is-dark.textarea, .is-dark.input {
  border-color: #363636;
}
.is-dark.textarea:focus, .is-dark.input:focus, .is-dark.is-focused.textarea, .is-dark.is-focused.input, .is-dark.textarea:active, .is-dark.input:active, .is-dark.is-active.textarea, .is-dark.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);
}
.is-primary.textarea, .is-primary.input {
  border-color: #00d1b2;
}
.is-primary.textarea:focus, .is-primary.input:focus, .is-primary.is-focused.textarea, .is-primary.is-focused.input, .is-primary.textarea:active, .is-primary.input:active, .is-primary.is-active.textarea, .is-primary.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);
}
.is-link.textarea, .is-link.input {
  border-color: #485fc7;
}
.is-link.textarea:focus, .is-link.input:focus, .is-link.is-focused.textarea, .is-link.is-focused.input, .is-link.textarea:active, .is-link.input:active, .is-link.is-active.textarea, .is-link.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);
}
.is-info.textarea, .is-info.input {
  border-color: #3e8ed0;
}
.is-info.textarea:focus, .is-info.input:focus, .is-info.is-focused.textarea, .is-info.is-focused.input, .is-info.textarea:active, .is-info.input:active, .is-info.is-active.textarea, .is-info.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(62, 142, 208, 0.25);
}
.is-success.textarea, .is-success.input {
  border-color: #48c78e;
}
.is-success.textarea:focus, .is-success.input:focus, .is-success.is-focused.textarea, .is-success.is-focused.input, .is-success.textarea:active, .is-success.input:active, .is-success.is-active.textarea, .is-success.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);
}
.is-warning.textarea, .is-warning.input {
  border-color: #ffe08a;
}
.is-warning.textarea:focus, .is-warning.input:focus, .is-warning.is-focused.textarea, .is-warning.is-focused.input, .is-warning.textarea:active, .is-warning.input:active, .is-warning.is-active.textarea, .is-warning.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);
}
.is-danger.textarea, .is-danger.input {
  border-color: #f14668;
}
.is-danger.textarea:focus, .is-danger.input:focus, .is-danger.is-focused.textarea, .is-danger.is-focused.input, .is-danger.textarea:active, .is-danger.input:active, .is-danger.is-active.textarea, .is-danger.is-active.input {
  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);
}
.is-small.textarea, .is-small.input {
  border-radius: 2px;
  font-size: 0.75rem;
}
.is-medium.textarea, .is-medium.input {
  font-size: 1.25rem;
}
.is-large.textarea, .is-large.input {
  font-size: 1.5rem;
}
.is-fullwidth.textarea, .is-fullwidth.input {
  display: block;
  width: 100%;
}
.is-inline.textarea, .is-inline.input {
  display: inline;
  width: auto;
}
.input.is-rounded {
  border-radius: 9999px;
  padding-left: calc(calc(0.75em - 1px) + 0.375em);
  padding-right: calc(calc(0.75em - 1px) + 0.375em);
}
.input.is-static {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
}
.textarea {
  display: block;
  max-width: 100%;
  min-width: 100%;
  padding: calc(0.75em - 1px);
  resize: vertical;
}
.textarea:not([rows]) {
  max-height: 40em;
  min-height: 8em;
}
.textarea[rows] {
  height: initial;
}
.textarea.has-fixed-size {
  resize: none;
}
.radio, .checkbox {
  cursor: pointer;
  display: inline-block;
  line-height: 1.25;
  position: relative;
}
.radio input, .checkbox input {
  cursor: pointer;
}
.radio:hover, .checkbox:hover {
  color: #363636;
}
[disabled].radio, [disabled].checkbox, fieldset[disabled] .radio, fieldset[disabled] .checkbox,
.radio input[disabled],
.checkbox input[disabled] {
  color: #7a7a7a;
  cursor: not-allowed;
}
.radio + .radio {
  margin-left: 0.5em;
}
.select {
  display: inline-block;
  max-width: 100%;
  position: relative;
  vertical-align: top;
}
.select:not(.is-multiple) {
  height: 2.5em;
}
.select:not(.is-multiple):not(.is-loading)::after {
  border-color: #485fc7;
  right: 1.125em;
  z-index: 4;
}
.select.is-rounded select {
  border-radius: 9999px;
  padding-left: 1em;
}
.select select {
  cursor: pointer;
  display: block;
  font-size: 1em;
  max-width: 100%;
  outline: none;
}
.select select::-ms-expand {
  display: none;
}
.select select[disabled]:hover, fieldset[disabled] .select select:hover {
  border-color: whitesmoke;
}
.select select:not([multiple]) {
  padding-right: 2.5em;
}
.select select[multiple] {
  height: auto;
  padding: 0;
}
.select select[multiple] option {
  padding: 0.5em 1em;
}
.select:not(.is-multiple):not(.is-loading):hover::after {
  border-color: #363636;
}
.select.is-white:not(:hover)::after {
  border-color: white;
}
.select.is-white select {
  border-color: white;
}
.select.is-white select:hover, .select.is-white select.is-hovered {
  border-color: #f2f2f2;
}
.select.is-white select:focus, .select.is-white select.is-focused, .select.is-white select:active, .select.is-white select.is-active {
  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);
}
.select.is-black:not(:hover)::after {
  border-color: #0a0a0a;
}
.select.is-black select {
  border-color: #0a0a0a;
}
.select.is-black select:hover, .select.is-black select.is-hovered {
  border-color: black;
}
.select.is-black select:focus, .select.is-black select.is-focused, .select.is-black select:active, .select.is-black select.is-active {
  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);
}
.select.is-light:not(:hover)::after {
  border-color: whitesmoke;
}
.select.is-light select {
  border-color: whitesmoke;
}
.select.is-light select:hover, .select.is-light select.is-hovered {
  border-color: #e8e8e8;
}
.select.is-light select:focus, .select.is-light select.is-focused, .select.is-light select:active, .select.is-light select.is-active {
  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);
}
.select.is-dark:not(:hover)::after {
  border-color: #363636;
}
.select.is-dark select {
  border-color: #363636;
}
.select.is-dark select:hover, .select.is-dark select.is-hovered {
  border-color: #292929;
}
.select.is-dark select:focus, .select.is-dark select.is-focused, .select.is-dark select:active, .select.is-dark select.is-active {
  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);
}
.select.is-primary:not(:hover)::after {
  border-color: #00d1b2;
}
.select.is-primary select {
  border-color: #00d1b2;
}
.select.is-primary select:hover, .select.is-primary select.is-hovered {
  border-color: #00b89c;
}
.select.is-primary select:focus, .select.is-primary select.is-focused, .select.is-primary select:active, .select.is-primary select.is-active {
  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);
}
.select.is-link:not(:hover)::after {
  border-color: #485fc7;
}
.select.is-link select {
  border-color: #485fc7;
}
.select.is-link select:hover, .select.is-link select.is-hovered {
  border-color: #3a51bb;
}
.select.is-link select:focus, .select.is-link select.is-focused, .select.is-link select:active, .select.is-link select.is-active {
  box-shadow: 0 0 0 0.125em rgba(72, 95, 199, 0.25);
}
.select.is-info:not(:hover)::after {
  border-color: #3e8ed0;
}
.select.is-info select {
  border-color: #3e8ed0;
}
.select.is-info select:hover, .select.is-info select.is-hovered {
  border-color: #3082c5;
}
.select.is-info select:focus, .select.is-info select.is-focused, .select.is-info select:active, .select.is-info select.is-active {
  box-shadow: 0 0 0 0.125em rgba(62, 142, 208, 0.25);
}
.select.is-success:not(:hover)::after {
  border-color: #48c78e;
}
.select.is-success select {
  border-color: #48c78e;
}
.select.is-success select:hover, .select.is-success select.is-hovered {
  border-color: #3abb81;
}
.select.is-success select:focus, .select.is-success select.is-focused, .select.is-success select:active, .select.is-success select.is-active {
  box-shadow: 0 0 0 0.125em rgba(72, 199, 142, 0.25);
}
.select.is-warning:not(:hover)::after {
  border-color: #ffe08a;
}
.select.is-warning select {
  border-color: #ffe08a;
}
.select.is-warning select:hover, .select.is-warning select.is-hovered {
  border-color: #ffd970;
}
.select.is-warning select:focus, .select.is-warning select.is-focused, .select.is-warning select:active, .select.is-warning select.is-active {
  box-shadow: 0 0 0 0.125em rgba(255, 224, 138, 0.25);
}
.select.is-danger:not(:hover)::after {
  border-color: #f14668;
}
.select.is-danger select {
  border-color: #f14668;
}
.select.is-danger select:hover, .select.is-danger select.is-hovered {
  border-color: #ef2e55;
}
.select.is-danger select:focus, .select.is-danger select.is-focused, .select.is-danger select:active, .select.is-danger select.is-active {
  box-shadow: 0 0 0 0.125em rgba(241, 70, 104, 0.25);
}
.select.is-small {
  border-radius: 2px;
  font-size: 0.75rem;
}
.select.is-medium {
  font-size: 1.25rem;
}
.select.is-large {
  font-size: 1.5rem;
}
.select.is-disabled::after {
  border-color: #7a7a7a;
}
.select.is-fullwidth {
  width: 100%;
}
.select.is-fullwidth select {
  width: 100%;
}
.select.is-loading::after {
  margin-top: 0;
  position: absolute;
  right: 0.625em;
  top: 0.625em;
  transform: none;
}
.select.is-loading.is-small:after {
  font-size: 0.75rem;
}
.select.is-loading.is-medium:after {
  font-size: 1.25rem;
}
.select.is-loading.is-large:after {
  font-size: 1.5rem;
}
.file {
  align-items: stretch;
  display: flex;
  justify-content: flex-start;
  position: relative;
}
.file.is-white .file-cta {
  background-color: white;
  border-color: transparent;
  color: #0a0a0a;
}
.file.is-white:hover .file-cta, .file.is-white.is-hovered .file-cta {
  background-color: #f9f9f9;
  border-color: transparent;
  color: #0a0a0a;
}
.file.is-white:focus .file-cta, .file.is-white.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);
  color: #0a0a0a;
}
.file.is-white:active .file-cta, .file.is-white.is-active .file-cta {
  background-color: #f2f2f2;
  border-color: transparent;
  color: #0a0a0a;
}
.file.is-black .file-cta {
  background-color: #0a0a0a;
  border-color: transparent;
  color: white;
}
.file.is-black:hover .file-cta, .file.is-black.is-hovered .file-cta {
  background-color: #040404;
  border-color: transparent;
  color: white;
}
.file.is-black:focus .file-cta, .file.is-black.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);
  color: white;
}
.file.is-black:active .file-cta, .file.is-black.is-active .file-cta {
  background-color: black;
  border-color: transparent;
  color: white;
}
.file.is-light .file-cta {
  background-color: whitesmoke;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.file.is-light:hover .file-cta, .file.is-light.is-hovered .file-cta {
  background-color: #eeeeee;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.file.is-light:focus .file-cta, .file.is-light.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);
  color: rgba(0, 0, 0, 0.7);
}
.file.is-light:active .file-cta, .file.is-light.is-active .file-cta {
  background-color: #e8e8e8;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.file.is-dark .file-cta {
  background-color: #363636;
  border-color: transparent;
  color: #fff;
}
.file.is-dark:hover .file-cta, .file.is-dark.is-hovered .file-cta {
  background-color: #2f2f2f;
  border-color: transparent;
  color: #fff;
}
.file.is-dark:focus .file-cta, .file.is-dark.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);
  color: #fff;
}
.file.is-dark:active .file-cta, .file.is-dark.is-active .file-cta {
  background-color: #292929;
  border-color: transparent;
  color: #fff;
}
.file.is-primary .file-cta {
  background-color: #00d1b2;
  border-color: transparent;
  color: #fff;
}
.file.is-primary:hover .file-cta, .file.is-primary.is-hovered .file-cta {
  background-color: #00c4a7;
  border-color: transparent;
  color: #fff;
}
.file.is-primary:focus .file-cta, .file.is-primary.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);
  color: #fff;
}
.file.is-primary:active .file-cta, .file.is-primary.is-active .file-cta {
  background-color: #00b89c;
  border-color: transparent;
  color: #fff;
}
.file.is-link .file-cta {
  background-color: #485fc7;
  border-color: transparent;
  color: #fff;
}
.file.is-link:hover .file-cta, .file.is-link.is-hovered .file-cta {
  background-color: #3e56c4;
  border-color: transparent;
  color: #fff;
}
.file.is-link:focus .file-cta, .file.is-link.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(72, 95, 199, 0.25);
  color: #fff;
}
.file.is-link:active .file-cta, .file.is-link.is-active .file-cta {
  background-color: #3a51bb;
  border-color: transparent;
  color: #fff;
}
.file.is-info .file-cta {
  background-color: #3e8ed0;
  border-color: transparent;
  color: #fff;
}
.file.is-info:hover .file-cta, .file.is-info.is-hovered .file-cta {
  background-color: #3488ce;
  border-color: transparent;
  color: #fff;
}
.file.is-info:focus .file-cta, .file.is-info.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(62, 142, 208, 0.25);
  color: #fff;
}
.file.is-info:active .file-cta, .file.is-info.is-active .file-cta {
  background-color: #3082c5;
  border-color: transparent;
  color: #fff;
}
.file.is-success .file-cta {
  background-color: #48c78e;
  border-color: transparent;
  color: #fff;
}
.file.is-success:hover .file-cta, .file.is-success.is-hovered .file-cta {
  background-color: #3ec487;
  border-color: transparent;
  color: #fff;
}
.file.is-success:focus .file-cta, .file.is-success.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(72, 199, 142, 0.25);
  color: #fff;
}
.file.is-success:active .file-cta, .file.is-success.is-active .file-cta {
  background-color: #3abb81;
  border-color: transparent;
  color: #fff;
}
.file.is-warning .file-cta {
  background-color: #ffe08a;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.file.is-warning:hover .file-cta, .file.is-warning.is-hovered .file-cta {
  background-color: #ffdc7d;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.file.is-warning:focus .file-cta, .file.is-warning.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(255, 224, 138, 0.25);
  color: rgba(0, 0, 0, 0.7);
}
.file.is-warning:active .file-cta, .file.is-warning.is-active .file-cta {
  background-color: #ffd970;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}
.file.is-danger .file-cta {
  background-color: #f14668;
  border-color: transparent;
  color: #fff;
}
.file.is-danger:hover .file-cta, .file.is-danger.is-hovered .file-cta {
  background-color: #f03a5f;
  border-color: transparent;
  color: #fff;
}
.file.is-danger:focus .file-cta, .file.is-danger.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(241, 70, 104, 0.25);
  color: #fff;
}
.file.is-danger:active .file-cta, .file.is-danger.is-active .file-cta {
  background-color: #ef2e55;
  border-color: transparent;
  color: #fff;
}
.file.is-small {
  font-size: 0.75rem;
}
.file.is-normal {
  font-size: 1rem;
}
.file.is-medium {
  font-size: 1.25rem;
}
.file.is-medium .file-icon .fa {
  font-size: 21px;
}
.file.is-large {
  font-size: 1.5rem;
}
.file.is-large .file-icon .fa {
  font-size: 28px;
}
.file.has-name .file-cta {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.file.has-name .file-name {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.file.has-name.is-empty .file-cta {
  border-radius: 4px;
}
.file.has-name.is-empty .file-name {
  display: none;
}
.file.is-boxed .file-label {
  flex-direction: column;
}
.file.is-boxed .file-cta {
  flex-direction: column;
  height: auto;
  padding: 1em 3em;
}
.file.is-boxed .file-name {
  border-width: 0 1px 1px;
}
.file.is-boxed .file-icon {
  height: 1.5em;
  width: 1.5em;
}
.file.is-boxed .file-icon .fa {
  font-size: 21px;
}
.file.is-boxed.is-small .file-icon .fa {
  font-size: 14px;
}
.file.is-boxed.is-medium .file-icon .fa {
  font-size: 28px;
}
.file.is-boxed.is-large .file-icon .fa {
  font-size: 35px;
}
.file.is-boxed.has-name .file-cta {
  border-radius: 4px 4px 0 0;
}
.file.is-boxed.has-name .file-name {
  border-radius: 0 0 4px 4px;
  border-width: 0 1px 1px;
}
.file.is-centered {
  justify-content: center;
}
.file.is-fullwidth .file-label {
  width: 100%;
}
.file.is-fullwidth .file-name {
  flex-grow: 1;
  max-width: none;
}
.file.is-right {
  justify-content: flex-end;
}
.file.is-right .file-cta {
  border-radius: 0 4px 4px 0;
}
.file.is-right .file-name {
  border-radius: 4px 0 0 4px;
  border-width: 1px 0 1px 1px;
  order: -1;
}
.file-label {
  align-items: stretch;
  display: flex;
  cursor: pointer;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
}
.file-label:hover .file-cta {
  background-color: #eeeeee;
  color: #363636;
}
.file-label:hover .file-name {
  border-color: #d5d5d5;
}
.file-label:active .file-cta {
  background-color: #e8e8e8;
  color: #363636;
}
.file-label:active .file-name {
  border-color: #cfcfcf;
}
.file-input {
  height: 100%;
  left: 0;
  opacity: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 100%;
}
.file-cta,
.file-name {
  border-color: #dbdbdb;
  border-radius: 4px;
  font-size: 1em;
  padding-left: 1em;
  padding-right: 1em;
  white-space: nowrap;
}
.file-cta {
  background-color: whitesmoke;
  color: #4a4a4a;
}
.file-name {
  border-color: #dbdbdb;
  border-style: solid;
  border-width: 1px 1px 1px 0;
  display: block;
  max-width: 16em;
  overflow: hidden;
  text-align: inherit;
  text-overflow: ellipsis;
}
.file-icon {
  align-items: center;
  display: flex;
  height: 1em;
  justify-content: center;
  margin-right: 0.5em;
  width: 1em;
}
.file-icon .fa {
  font-size: 14px;
}
.label {
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 700;
}
.label:not(:last-child) {
  margin-bottom: 0.5em;
}
.label.is-small {
  font-size: 0.75rem;
}
.label.is-medium {
  font-size: 1.25rem;
}
.label.is-large {
  font-size: 1.5rem;
}
.help {
  display: block;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}
.help.is-white {
  color: white;
}
.help.is-black {
  color: #0a0a0a;
}
.help.is-light {
  color: whitesmoke;
}
.help.is-dark {
  color: #363636;
}
.help.is-primary {
  color: #00d1b2;
}
.help.is-link {
  color: #485fc7;
}
.help.is-info {
  color: #3e8ed0;
}
.help.is-success {
  color: #48c78e;
}
.help.is-warning {
  color: #ffe08a;
}
.help.is-danger {
  color: #f14668;
}
.field:not(:last-child) {
  margin-bottom: 0.75rem;
}
.field.has-addons {
  display: flex;
  justify-content: flex-start;
}
.field.has-addons .control:not(:last-child) {
  margin-right: -1px;
}
.field.has-addons .control:not(:first-child):not(:last-child) .button,
.field.has-addons .control:not(:first-child):not(:last-child) .input,
.field.has-addons .control:not(:first-child):not(:last-child) .select select {
  border-radius: 0;
}
.field.has-addons .control:first-child:not(:only-child) .button,
.field.has-addons .control:first-child:not(:only-child) .input,
.field.has-addons .control:first-child:not(:only-child) .select select {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}
.field.has-addons .control:last-child:not(:only-child) .button,
.field.has-addons .control:last-child:not(:only-child) .input,
.field.has-addons .control:last-child:not(:only-child) .select select {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}
.field.has-addons .control .button:not([disabled]):hover, .field.has-addons .control .button:not([disabled]).is-hovered,
.field.has-addons .control .input:not([disabled]):hover,
.field.has-addons .control .input:not([disabled]).is-hovered,
.field.has-addons .control .select select:not([disabled]):hover,
.field.has-addons .control .select select:not([disabled]).is-hovered {
  z-index: 2;
}
.field.has-addons .control .button:not([disabled]):focus, .field.has-addons .control .button:not([disabled]).is-focused, .field.has-addons .control .button:not([disabled]):active, .field.has-addons .control .button:not([disabled]).is-active,
.field.has-addons .control .input:not([disabled]):focus,
.field.has-addons .control .input:not([disabled]).is-focused,
.field.has-addons .control .input:not([disabled]):active,
.field.has-addons .control .input:not([disabled]).is-active,
.field.has-addons .control .select select:not([disabled]):focus,
.field.has-addons .control .select select:not([disabled]).is-focused,
.field.has-addons .control .select select:not([disabled]):active,
.field.has-addons .control .select select:not([disabled]).is-active {
  z-index: 3;
}
.field.has-addons .control .button:not([disabled]):focus:hover, .field.has-addons .control .button:not([disabled]).is-focused:hover, .field.has-addons .control .button:not([disabled]):active:hover, .field.has-addons .control .button:not([disabled]).is-active:hover,
.field.has-addons .control .input:not([disabled]):focus:hover,
.field.has-addons .control .input:not([disabled]).is-focused:hover,
.field.has-addons .control .input:not([disabled]):active:hover,
.field.has-addons .control .input:not([disabled]).is-active:hover,
.field.has-addons .control .select select:not([disabled]):focus:hover,
.field.has-addons .control .select select:not([disabled]).is-focused:hover,
.field.has-addons .control .select select:not([disabled]):active:hover,
.field.has-addons .control .select select:not([disabled]).is-active:hover {
  z-index: 4;
}
.field.has-addons .control.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.field.has-addons.has-addons-centered {
  justify-content: center;
}
.field.has-addons.has-addons-right {
  justify-content: flex-end;
}
.field.has-addons.has-addons-fullwidth .control {
  flex-grow: 1;
  flex-shrink: 0;
}
.field.is-grouped {
  display: flex;
  justify-content: flex-start;
}
.field.is-grouped > .control {
  flex-shrink: 0;
}
.field.is-grouped > .control:not(:last-child) {
  margin-bottom: 0;
  margin-right: 0.75rem;
}
.field.is-grouped > .control.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.field.is-grouped.is-grouped-centered {
  justify-content: center;
}
.field.is-grouped.is-grouped-right {
  justify-content: flex-end;
}
.field.is-grouped.is-grouped-multiline {
  flex-wrap: wrap;
}
.field.is-grouped.is-grouped-multiline > .control:last-child, .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {
  margin-bottom: 0.75rem;
}
.field.is-grouped.is-grouped-multiline:last-child {
  margin-bottom: -0.75rem;
}
.field.is-grouped.is-grouped-multiline:not(:last-child) {
  margin-bottom: 0;
}
@media screen and (min-width: 769px), print {
  .field.is-horizontal {
    display: flex;
  }
}
.field-label .label {
  font-size: inherit;
}
@media screen and (max-width: 768px) {
  .field-label {
    margin-bottom: 0.5rem;
  }
}
@media screen and (min-width: 769px), print {
  .field-label {
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    margin-right: 1.5rem;
    text-align: right;
  }
  .field-label.is-small {
    font-size: 0.75rem;
    padding-top: 0.375em;
  }
  .field-label.is-normal {
    padding-top: 0.375em;
  }
  .field-label.is-medium {
    font-size: 1.25rem;
    padding-top: 0.375em;
  }
  .field-label.is-large {
    font-size: 1.5rem;
    padding-top: 0.375em;
  }
}
.field-body .field .field {
  margin-bottom: 0;
}
@media screen and (min-width: 769px), print {
  .field-body {
    display: flex;
    flex-basis: 0;
    flex-grow: 5;
    flex-shrink: 1;
  }
  .field-body .field {
    margin-bottom: 0;
  }
  .field-body > .field {
    flex-shrink: 1;
  }
  .field-body > .field:not(.is-narrow) {
    flex-grow: 1;
  }
  .field-body > .field:not(:last-child) {
    margin-right: 0.75rem;
  }
}
.control {
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: inherit;
}
.control.has-icons-left .input:focus ~ .icon,
.control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,
.control.has-icons-right .select:focus ~ .icon {
  color: #4a4a4a;
}
.control.has-icons-left .input.is-small ~ .icon,
.control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,
.control.has-icons-right .select.is-small ~ .icon {
  font-size: 0.75rem;
}
.control.has-icons-left .input.is-medium ~ .icon,
.control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,
.control.has-icons-right .select.is-medium ~ .icon {
  font-size: 1.25rem;
}
.control.has-icons-left .input.is-large ~ .icon,
.control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,
.control.has-icons-right .select.is-large ~ .icon {
  font-size: 1.5rem;
}
.control.has-icons-left .icon, .control.has-icons-right .icon {
  color: #dbdbdb;
  height: 2.5em;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 2.5em;
  z-index: 4;
}
.control.has-icons-left .input,
.control.has-icons-left .select select {
  padding-left: 2.5em;
}
.control.has-icons-left .icon.is-left {
  left: 0;
}
.control.has-icons-right .input,
.control.has-icons-right .select select {
  padding-right: 2.5em;
}
.control.has-icons-right .icon.is-right {
  right: 0;
}
.control.is-loading::after {
  position: absolute !important;
  right: 0.625em;
  top: 0.625em;
  z-index: 4;
}
.control.is-loading.is-small:after {
  font-size: 0.75rem;
}
.control.is-loading.is-medium:after {
  font-size: 1.25rem;
}
.control.is-loading.is-large:after {
  font-size: 1.5rem;
}
:host {
  display: block;
  margin-bottom: 0.5em;
}
:host + :host {
  margin-top: 7px;
}
:host .control {
  display: flex;
}`,V=Object.defineProperty,G=Object.getOwnPropertyDescriptor,p=(o,r,t,i)=>{for(var n=i>1?void 0:i?G(r,t):r,e=o.length-1,a;e>=0;e--)(a=o[e])&&(n=(i?a(r,t,n):a(n))||n);return i&&n&&V(r,t,n),n};const J="lit-form-field";let f=class extends c{constructor(){super(...arguments);this.type="text"}render(){return s`
      <div class="field">
        <label class="label">${this.label}</label>
        <div class="control">
          <input
            class="input"
            type=${this.type}
            placeholder="${C(this.placeholder)}"
          />
        </div>
      </div>
    `}};f.styles=[b(K)];p([l({type:String})],f.prototype,"label",2);p([l({type:String})],f.prototype,"type",2);p([l({type:String})],f.prototype,"placeholder",2);f=p([d(J)],f);var Q=`/*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
ul {
  list-style: none;
}
button,
input,
select,
textarea {
  margin: 0;
}
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
img,
video {
  height: auto;
  max-width: 100%;
}
iframe {
  border: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
td,
th {
  padding: 0;
}
td:not([align]),
th:not([align]) {
  text-align: inherit;
}
/* Bulma Utilities */
.title:not(:last-child),
.subtitle:not(:last-child) {
  margin-bottom: 1.5rem;
}
.hero-video {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.title,
.subtitle {
  word-break: break-word;
}
.title em,
.title span,
.subtitle em,
.subtitle span {
  font-weight: inherit;
}
.title sub,
.subtitle sub {
  font-size: 0.75em;
}
.title sup,
.subtitle sup {
  font-size: 0.75em;
}
.title .tag,
.subtitle .tag {
  vertical-align: middle;
}
.title {
  color: #363636;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
}
.title strong {
  color: inherit;
  font-weight: inherit;
}
.title:not(.is-spaced) + .subtitle {
  margin-top: -1.25rem;
}
.title.is-1 {
  font-size: 3rem;
}
.title.is-2 {
  font-size: 2.5rem;
}
.title.is-3 {
  font-size: 2rem;
}
.title.is-4 {
  font-size: 1.5rem;
}
.title.is-5 {
  font-size: 1.25rem;
}
.title.is-6 {
  font-size: 1rem;
}
.title.is-7 {
  font-size: 0.75rem;
}
.subtitle {
  color: #4a4a4a;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
}
.subtitle strong {
  color: #363636;
  font-weight: 600;
}
.subtitle:not(.is-spaced) + .title {
  margin-top: -1.25rem;
}
.subtitle.is-1 {
  font-size: 3rem;
}
.subtitle.is-2 {
  font-size: 2.5rem;
}
.subtitle.is-3 {
  font-size: 2rem;
}
.subtitle.is-4 {
  font-size: 1.5rem;
}
.subtitle.is-5 {
  font-size: 1.25rem;
}
.subtitle.is-6 {
  font-size: 1rem;
}
.subtitle.is-7 {
  font-size: 0.75rem;
}
.hero {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.hero .navbar {
  background: none;
}
.hero .tabs ul {
  border-bottom: none;
}
.hero.is-white {
  background-color: white;
  color: #0a0a0a;
}
.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-white strong {
  color: inherit;
}
.hero.is-white .title {
  color: #0a0a0a;
}
.hero.is-white .subtitle {
  color: rgba(10, 10, 10, 0.9);
}
.hero.is-white .subtitle a:not(.button),
.hero.is-white .subtitle strong {
  color: #0a0a0a;
}
@media screen and (max-width: 1023px) {
  .hero.is-white .navbar-menu {
    background-color: white;
  }
}
.hero.is-white .navbar-item,
.hero.is-white .navbar-link {
  color: rgba(10, 10, 10, 0.7);
}
.hero.is-white a.navbar-item:hover, .hero.is-white a.navbar-item.is-active,
.hero.is-white .navbar-link:hover,
.hero.is-white .navbar-link.is-active {
  background-color: #f2f2f2;
  color: #0a0a0a;
}
.hero.is-white .tabs a {
  color: #0a0a0a;
  opacity: 0.9;
}
.hero.is-white .tabs a:hover {
  opacity: 1;
}
.hero.is-white .tabs li.is-active a {
  color: white !important;
  opacity: 1;
}
.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {
  color: #0a0a0a;
}
.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {
  background-color: #0a0a0a;
  border-color: #0a0a0a;
  color: white;
}
.hero.is-white.is-bold {
  background-image: linear-gradient(141deg, #e8e3e4 0%, white 71%, white 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-white.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #e8e3e4 0%, white 71%, white 100%);
  }
}
.hero.is-black {
  background-color: #0a0a0a;
  color: white;
}
.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-black strong {
  color: inherit;
}
.hero.is-black .title {
  color: white;
}
.hero.is-black .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-black .subtitle a:not(.button),
.hero.is-black .subtitle strong {
  color: white;
}
@media screen and (max-width: 1023px) {
  .hero.is-black .navbar-menu {
    background-color: #0a0a0a;
  }
}
.hero.is-black .navbar-item,
.hero.is-black .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-black a.navbar-item:hover, .hero.is-black a.navbar-item.is-active,
.hero.is-black .navbar-link:hover,
.hero.is-black .navbar-link.is-active {
  background-color: black;
  color: white;
}
.hero.is-black .tabs a {
  color: white;
  opacity: 0.9;
}
.hero.is-black .tabs a:hover {
  opacity: 1;
}
.hero.is-black .tabs li.is-active a {
  color: #0a0a0a !important;
  opacity: 1;
}
.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {
  color: white;
}
.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {
  background-color: white;
  border-color: white;
  color: #0a0a0a;
}
.hero.is-black.is-bold {
  background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-black.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);
  }
}
.hero.is-light {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-light strong {
  color: inherit;
}
.hero.is-light .title {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-light .subtitle {
  color: rgba(0, 0, 0, 0.9);
}
.hero.is-light .subtitle a:not(.button),
.hero.is-light .subtitle strong {
  color: rgba(0, 0, 0, 0.7);
}
@media screen and (max-width: 1023px) {
  .hero.is-light .navbar-menu {
    background-color: whitesmoke;
  }
}
.hero.is-light .navbar-item,
.hero.is-light .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-light a.navbar-item:hover, .hero.is-light a.navbar-item.is-active,
.hero.is-light .navbar-link:hover,
.hero.is-light .navbar-link.is-active {
  background-color: #e8e8e8;
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-light .tabs a {
  color: rgba(0, 0, 0, 0.7);
  opacity: 0.9;
}
.hero.is-light .tabs a:hover {
  opacity: 1;
}
.hero.is-light .tabs li.is-active a {
  color: whitesmoke !important;
  opacity: 1;
}
.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: rgba(0, 0, 0, 0.7);
  color: whitesmoke;
}
.hero.is-light.is-bold {
  background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-light.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);
  }
}
.hero.is-dark {
  background-color: #363636;
  color: #fff;
}
.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-dark strong {
  color: inherit;
}
.hero.is-dark .title {
  color: #fff;
}
.hero.is-dark .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-dark .subtitle a:not(.button),
.hero.is-dark .subtitle strong {
  color: #fff;
}
@media screen and (max-width: 1023px) {
  .hero.is-dark .navbar-menu {
    background-color: #363636;
  }
}
.hero.is-dark .navbar-item,
.hero.is-dark .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-dark a.navbar-item:hover, .hero.is-dark a.navbar-item.is-active,
.hero.is-dark .navbar-link:hover,
.hero.is-dark .navbar-link.is-active {
  background-color: #292929;
  color: #fff;
}
.hero.is-dark .tabs a {
  color: #fff;
  opacity: 0.9;
}
.hero.is-dark .tabs a:hover {
  opacity: 1;
}
.hero.is-dark .tabs li.is-active a {
  color: #363636 !important;
  opacity: 1;
}
.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {
  color: #fff;
}
.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #363636;
}
.hero.is-dark.is-bold {
  background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-dark.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);
  }
}
.hero.is-primary {
  background-color: #00d1b2;
  color: #fff;
}
.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-primary strong {
  color: inherit;
}
.hero.is-primary .title {
  color: #fff;
}
.hero.is-primary .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-primary .subtitle a:not(.button),
.hero.is-primary .subtitle strong {
  color: #fff;
}
@media screen and (max-width: 1023px) {
  .hero.is-primary .navbar-menu {
    background-color: #00d1b2;
  }
}
.hero.is-primary .navbar-item,
.hero.is-primary .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-primary a.navbar-item:hover, .hero.is-primary a.navbar-item.is-active,
.hero.is-primary .navbar-link:hover,
.hero.is-primary .navbar-link.is-active {
  background-color: #00b89c;
  color: #fff;
}
.hero.is-primary .tabs a {
  color: #fff;
  opacity: 0.9;
}
.hero.is-primary .tabs a:hover {
  opacity: 1;
}
.hero.is-primary .tabs li.is-active a {
  color: #00d1b2 !important;
  opacity: 1;
}
.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {
  color: #fff;
}
.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #00d1b2;
}
.hero.is-primary.is-bold {
  background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-primary.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);
  }
}
.hero.is-link {
  background-color: #485fc7;
  color: #fff;
}
.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-link strong {
  color: inherit;
}
.hero.is-link .title {
  color: #fff;
}
.hero.is-link .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-link .subtitle a:not(.button),
.hero.is-link .subtitle strong {
  color: #fff;
}
@media screen and (max-width: 1023px) {
  .hero.is-link .navbar-menu {
    background-color: #485fc7;
  }
}
.hero.is-link .navbar-item,
.hero.is-link .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-link a.navbar-item:hover, .hero.is-link a.navbar-item.is-active,
.hero.is-link .navbar-link:hover,
.hero.is-link .navbar-link.is-active {
  background-color: #3a51bb;
  color: #fff;
}
.hero.is-link .tabs a {
  color: #fff;
  opacity: 0.9;
}
.hero.is-link .tabs a:hover {
  opacity: 1;
}
.hero.is-link .tabs li.is-active a {
  color: #485fc7 !important;
  opacity: 1;
}
.hero.is-link .tabs.is-boxed a, .hero.is-link .tabs.is-toggle a {
  color: #fff;
}
.hero.is-link .tabs.is-boxed a:hover, .hero.is-link .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-link .tabs.is-boxed li.is-active a, .hero.is-link .tabs.is-boxed li.is-active a:hover, .hero.is-link .tabs.is-toggle li.is-active a, .hero.is-link .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #485fc7;
}
.hero.is-link.is-bold {
  background-image: linear-gradient(141deg, #2959b3 0%, #485fc7 71%, #5658d2 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-link.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #2959b3 0%, #485fc7 71%, #5658d2 100%);
  }
}
.hero.is-info {
  background-color: #3e8ed0;
  color: #fff;
}
.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-info strong {
  color: inherit;
}
.hero.is-info .title {
  color: #fff;
}
.hero.is-info .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-info .subtitle a:not(.button),
.hero.is-info .subtitle strong {
  color: #fff;
}
@media screen and (max-width: 1023px) {
  .hero.is-info .navbar-menu {
    background-color: #3e8ed0;
  }
}
.hero.is-info .navbar-item,
.hero.is-info .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-info a.navbar-item:hover, .hero.is-info a.navbar-item.is-active,
.hero.is-info .navbar-link:hover,
.hero.is-info .navbar-link.is-active {
  background-color: #3082c5;
  color: #fff;
}
.hero.is-info .tabs a {
  color: #fff;
  opacity: 0.9;
}
.hero.is-info .tabs a:hover {
  opacity: 1;
}
.hero.is-info .tabs li.is-active a {
  color: #3e8ed0 !important;
  opacity: 1;
}
.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {
  color: #fff;
}
.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #3e8ed0;
}
.hero.is-info.is-bold {
  background-image: linear-gradient(141deg, #208fbc 0%, #3e8ed0 71%, #4d83db 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-info.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #208fbc 0%, #3e8ed0 71%, #4d83db 100%);
  }
}
.hero.is-success {
  background-color: #48c78e;
  color: #fff;
}
.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-success strong {
  color: inherit;
}
.hero.is-success .title {
  color: #fff;
}
.hero.is-success .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-success .subtitle a:not(.button),
.hero.is-success .subtitle strong {
  color: #fff;
}
@media screen and (max-width: 1023px) {
  .hero.is-success .navbar-menu {
    background-color: #48c78e;
  }
}
.hero.is-success .navbar-item,
.hero.is-success .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-success a.navbar-item:hover, .hero.is-success a.navbar-item.is-active,
.hero.is-success .navbar-link:hover,
.hero.is-success .navbar-link.is-active {
  background-color: #3abb81;
  color: #fff;
}
.hero.is-success .tabs a {
  color: #fff;
  opacity: 0.9;
}
.hero.is-success .tabs a:hover {
  opacity: 1;
}
.hero.is-success .tabs li.is-active a {
  color: #48c78e !important;
  opacity: 1;
}
.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {
  color: #fff;
}
.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #48c78e;
}
.hero.is-success.is-bold {
  background-image: linear-gradient(141deg, #29b35e 0%, #48c78e 71%, #56d2af 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-success.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #29b35e 0%, #48c78e 71%, #56d2af 100%);
  }
}
.hero.is-warning {
  background-color: #ffe08a;
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-warning strong {
  color: inherit;
}
.hero.is-warning .title {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-warning .subtitle {
  color: rgba(0, 0, 0, 0.9);
}
.hero.is-warning .subtitle a:not(.button),
.hero.is-warning .subtitle strong {
  color: rgba(0, 0, 0, 0.7);
}
@media screen and (max-width: 1023px) {
  .hero.is-warning .navbar-menu {
    background-color: #ffe08a;
  }
}
.hero.is-warning .navbar-item,
.hero.is-warning .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-warning a.navbar-item:hover, .hero.is-warning a.navbar-item.is-active,
.hero.is-warning .navbar-link:hover,
.hero.is-warning .navbar-link.is-active {
  background-color: #ffd970;
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-warning .tabs a {
  color: rgba(0, 0, 0, 0.7);
  opacity: 0.9;
}
.hero.is-warning .tabs a:hover {
  opacity: 1;
}
.hero.is-warning .tabs li.is-active a {
  color: #ffe08a !important;
  opacity: 1;
}
.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {
  color: rgba(0, 0, 0, 0.7);
}
.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: rgba(0, 0, 0, 0.7);
  color: #ffe08a;
}
.hero.is-warning.is-bold {
  background-image: linear-gradient(141deg, #ffb657 0%, #ffe08a 71%, #fff6a3 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-warning.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #ffb657 0%, #ffe08a 71%, #fff6a3 100%);
  }
}
.hero.is-danger {
  background-color: #f14668;
  color: #fff;
}
.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-danger strong {
  color: inherit;
}
.hero.is-danger .title {
  color: #fff;
}
.hero.is-danger .subtitle {
  color: rgba(255, 255, 255, 0.9);
}
.hero.is-danger .subtitle a:not(.button),
.hero.is-danger .subtitle strong {
  color: #fff;
}
@media screen and (max-width: 1023px) {
  .hero.is-danger .navbar-menu {
    background-color: #f14668;
  }
}
.hero.is-danger .navbar-item,
.hero.is-danger .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}
.hero.is-danger a.navbar-item:hover, .hero.is-danger a.navbar-item.is-active,
.hero.is-danger .navbar-link:hover,
.hero.is-danger .navbar-link.is-active {
  background-color: #ef2e55;
  color: #fff;
}
.hero.is-danger .tabs a {
  color: #fff;
  opacity: 0.9;
}
.hero.is-danger .tabs a:hover {
  opacity: 1;
}
.hero.is-danger .tabs li.is-active a {
  color: #f14668 !important;
  opacity: 1;
}
.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {
  color: #fff;
}
.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}
.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #f14668;
}
.hero.is-danger.is-bold {
  background-image: linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%);
}
@media screen and (max-width: 768px) {
  .hero.is-danger.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #fa0a62 0%, #f14668 71%, #f7595f 100%);
  }
}
.hero.is-small .hero-body {
  padding: 1.5rem;
}
@media screen and (min-width: 769px), print {
  .hero.is-medium .hero-body {
    padding: 9rem 4.5rem;
  }
}
@media screen and (min-width: 769px), print {
  .hero.is-large .hero-body {
    padding: 18rem 6rem;
  }
}
.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body, .hero.is-fullheight-with-navbar .hero-body {
  align-items: center;
  display: flex;
}
.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container, .hero.is-fullheight-with-navbar .hero-body > .container {
  flex-grow: 1;
  flex-shrink: 1;
}
.hero.is-halfheight {
  min-height: 50vh;
}
.hero.is-fullheight {
  min-height: 100vh;
}
.hero-video {
  overflow: hidden;
}
.hero-video video {
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.hero-video.is-transparent {
  opacity: 0.3;
}
@media screen and (max-width: 768px) {
  .hero-video {
    display: none;
  }
}
.hero-buttons {
  margin-top: 1.5rem;
}
@media screen and (max-width: 768px) {
  .hero-buttons .button {
    display: flex;
  }
  .hero-buttons .button:not(:last-child) {
    margin-bottom: 0.75rem;
  }
}
@media screen and (min-width: 769px), print {
  .hero-buttons {
    display: flex;
    justify-content: center;
  }
  .hero-buttons .button:not(:last-child) {
    margin-right: 1.5rem;
  }
}
.hero-head,
.hero-foot {
  flex-grow: 0;
  flex-shrink: 0;
}
.hero-body {
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
}
@media screen and (min-width: 769px), print {
  .hero-body {
    padding: 3rem 3rem;
  }
}`,X=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,m=(o,r,t,i)=>{for(var n=i>1?void 0:i?Z(r,t):r,e=o.length-1,a;e>=0;e--)(a=o[e])&&(n=(i?a(r,t,n):a(n))||n);return i&&n&&X(r,t,n),n};const nn="lit-hero";let v=class extends c{render(){const o=$({hero:!0,[`is-${this.type}`]:!!this.type});return s` <section class=${o}>
      <div class="hero-body">
        <p class="title">${this.title}</p>
        ${this.subTitle&&s`<p class="subtitle">${this.subTitle}</p>`}
      </div>
    </section>`}};v.styles=[b(Q)];m([l({type:String,attribute:"title"})],v.prototype,"title",2);m([l({type:String,attribute:"sub-title"})],v.prototype,"subTitle",2);m([l({type:String})],v.prototype,"type",2);v=m([d(nn)],v);var on=`/* Bulma Utilities */
.navbar-link:not(.is-arrowless)::after {
  border: 3px solid transparent;
  border-radius: 2px;
  border-right: 0;
  border-top: 0;
  content: " ";
  display: block;
  height: 0.625em;
  margin-top: -0.4375em;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: rotate(-45deg);
  transform-origin: center;
  width: 0.625em;
}
.navbar-burger {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: none;
  border: none;
  color: currentColor;
  font-family: inherit;
  font-size: 1em;
  margin: 0;
  padding: 0;
}
.navbar {
  background-color: white;
  min-height: 3.25rem;
  position: relative;
  z-index: 30;
}
.navbar.is-white {
  background-color: white;
  color: #0a0a0a;
}
.navbar.is-white .navbar-brand > .navbar-item,
.navbar.is-white .navbar-brand .navbar-link {
  color: #0a0a0a;
}
.navbar.is-white .navbar-brand > a.navbar-item:focus, .navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,
.navbar.is-white .navbar-brand .navbar-link:focus,
.navbar.is-white .navbar-brand .navbar-link:hover,
.navbar.is-white .navbar-brand .navbar-link.is-active {
  background-color: #f2f2f2;
  color: #0a0a0a;
}
.navbar.is-white .navbar-brand .navbar-link::after {
  border-color: #0a0a0a;
}
.navbar.is-white .navbar-burger {
  color: #0a0a0a;
}
@media screen and (min-width: 1024px) {
  .navbar.is-white .navbar-start > .navbar-item,
.navbar.is-white .navbar-start .navbar-link,
.navbar.is-white .navbar-end > .navbar-item,
.navbar.is-white .navbar-end .navbar-link {
    color: #0a0a0a;
  }
  .navbar.is-white .navbar-start > a.navbar-item:focus, .navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,
.navbar.is-white .navbar-start .navbar-link:focus,
.navbar.is-white .navbar-start .navbar-link:hover,
.navbar.is-white .navbar-start .navbar-link.is-active,
.navbar.is-white .navbar-end > a.navbar-item:focus,
.navbar.is-white .navbar-end > a.navbar-item:hover,
.navbar.is-white .navbar-end > a.navbar-item.is-active,
.navbar.is-white .navbar-end .navbar-link:focus,
.navbar.is-white .navbar-end .navbar-link:hover,
.navbar.is-white .navbar-end .navbar-link.is-active {
    background-color: #f2f2f2;
    color: #0a0a0a;
  }
  .navbar.is-white .navbar-start .navbar-link::after,
.navbar.is-white .navbar-end .navbar-link::after {
    border-color: #0a0a0a;
  }
  .navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #f2f2f2;
    color: #0a0a0a;
  }
  .navbar.is-white .navbar-dropdown a.navbar-item.is-active {
    background-color: white;
    color: #0a0a0a;
  }
}
.navbar.is-black {
  background-color: #0a0a0a;
  color: white;
}
.navbar.is-black .navbar-brand > .navbar-item,
.navbar.is-black .navbar-brand .navbar-link {
  color: white;
}
.navbar.is-black .navbar-brand > a.navbar-item:focus, .navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,
.navbar.is-black .navbar-brand .navbar-link:focus,
.navbar.is-black .navbar-brand .navbar-link:hover,
.navbar.is-black .navbar-brand .navbar-link.is-active {
  background-color: black;
  color: white;
}
.navbar.is-black .navbar-brand .navbar-link::after {
  border-color: white;
}
.navbar.is-black .navbar-burger {
  color: white;
}
@media screen and (min-width: 1024px) {
  .navbar.is-black .navbar-start > .navbar-item,
.navbar.is-black .navbar-start .navbar-link,
.navbar.is-black .navbar-end > .navbar-item,
.navbar.is-black .navbar-end .navbar-link {
    color: white;
  }
  .navbar.is-black .navbar-start > a.navbar-item:focus, .navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,
.navbar.is-black .navbar-start .navbar-link:focus,
.navbar.is-black .navbar-start .navbar-link:hover,
.navbar.is-black .navbar-start .navbar-link.is-active,
.navbar.is-black .navbar-end > a.navbar-item:focus,
.navbar.is-black .navbar-end > a.navbar-item:hover,
.navbar.is-black .navbar-end > a.navbar-item.is-active,
.navbar.is-black .navbar-end .navbar-link:focus,
.navbar.is-black .navbar-end .navbar-link:hover,
.navbar.is-black .navbar-end .navbar-link.is-active {
    background-color: black;
    color: white;
  }
  .navbar.is-black .navbar-start .navbar-link::after,
.navbar.is-black .navbar-end .navbar-link::after {
    border-color: white;
  }
  .navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: black;
    color: white;
  }
  .navbar.is-black .navbar-dropdown a.navbar-item.is-active {
    background-color: #0a0a0a;
    color: white;
  }
}
.navbar.is-light {
  background-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.navbar.is-light .navbar-brand > .navbar-item,
.navbar.is-light .navbar-brand .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}
.navbar.is-light .navbar-brand > a.navbar-item:focus, .navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,
.navbar.is-light .navbar-brand .navbar-link:focus,
.navbar.is-light .navbar-brand .navbar-link:hover,
.navbar.is-light .navbar-brand .navbar-link.is-active {
  background-color: #e8e8e8;
  color: rgba(0, 0, 0, 0.7);
}
.navbar.is-light .navbar-brand .navbar-link::after {
  border-color: rgba(0, 0, 0, 0.7);
}
.navbar.is-light .navbar-burger {
  color: rgba(0, 0, 0, 0.7);
}
@media screen and (min-width: 1024px) {
  .navbar.is-light .navbar-start > .navbar-item,
.navbar.is-light .navbar-start .navbar-link,
.navbar.is-light .navbar-end > .navbar-item,
.navbar.is-light .navbar-end .navbar-link {
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-light .navbar-start > a.navbar-item:focus, .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,
.navbar.is-light .navbar-start .navbar-link:focus,
.navbar.is-light .navbar-start .navbar-link:hover,
.navbar.is-light .navbar-start .navbar-link.is-active,
.navbar.is-light .navbar-end > a.navbar-item:focus,
.navbar.is-light .navbar-end > a.navbar-item:hover,
.navbar.is-light .navbar-end > a.navbar-item.is-active,
.navbar.is-light .navbar-end .navbar-link:focus,
.navbar.is-light .navbar-end .navbar-link:hover,
.navbar.is-light .navbar-end .navbar-link.is-active {
    background-color: #e8e8e8;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-light .navbar-start .navbar-link::after,
.navbar.is-light .navbar-end .navbar-link::after {
    border-color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #e8e8e8;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-light .navbar-dropdown a.navbar-item.is-active {
    background-color: whitesmoke;
    color: rgba(0, 0, 0, 0.7);
  }
}
.navbar.is-dark {
  background-color: #363636;
  color: #fff;
}
.navbar.is-dark .navbar-brand > .navbar-item,
.navbar.is-dark .navbar-brand .navbar-link {
  color: #fff;
}
.navbar.is-dark .navbar-brand > a.navbar-item:focus, .navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,
.navbar.is-dark .navbar-brand .navbar-link:focus,
.navbar.is-dark .navbar-brand .navbar-link:hover,
.navbar.is-dark .navbar-brand .navbar-link.is-active {
  background-color: #292929;
  color: #fff;
}
.navbar.is-dark .navbar-brand .navbar-link::after {
  border-color: #fff;
}
.navbar.is-dark .navbar-burger {
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .navbar.is-dark .navbar-start > .navbar-item,
.navbar.is-dark .navbar-start .navbar-link,
.navbar.is-dark .navbar-end > .navbar-item,
.navbar.is-dark .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-dark .navbar-start > a.navbar-item:focus, .navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,
.navbar.is-dark .navbar-start .navbar-link:focus,
.navbar.is-dark .navbar-start .navbar-link:hover,
.navbar.is-dark .navbar-start .navbar-link.is-active,
.navbar.is-dark .navbar-end > a.navbar-item:focus,
.navbar.is-dark .navbar-end > a.navbar-item:hover,
.navbar.is-dark .navbar-end > a.navbar-item.is-active,
.navbar.is-dark .navbar-end .navbar-link:focus,
.navbar.is-dark .navbar-end .navbar-link:hover,
.navbar.is-dark .navbar-end .navbar-link.is-active {
    background-color: #292929;
    color: #fff;
  }
  .navbar.is-dark .navbar-start .navbar-link::after,
.navbar.is-dark .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #292929;
    color: #fff;
  }
  .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {
    background-color: #363636;
    color: #fff;
  }
}
.navbar.is-primary {
  background-color: #00d1b2;
  color: #fff;
}
.navbar.is-primary .navbar-brand > .navbar-item,
.navbar.is-primary .navbar-brand .navbar-link {
  color: #fff;
}
.navbar.is-primary .navbar-brand > a.navbar-item:focus, .navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,
.navbar.is-primary .navbar-brand .navbar-link:focus,
.navbar.is-primary .navbar-brand .navbar-link:hover,
.navbar.is-primary .navbar-brand .navbar-link.is-active {
  background-color: #00b89c;
  color: #fff;
}
.navbar.is-primary .navbar-brand .navbar-link::after {
  border-color: #fff;
}
.navbar.is-primary .navbar-burger {
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .navbar.is-primary .navbar-start > .navbar-item,
.navbar.is-primary .navbar-start .navbar-link,
.navbar.is-primary .navbar-end > .navbar-item,
.navbar.is-primary .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-primary .navbar-start > a.navbar-item:focus, .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,
.navbar.is-primary .navbar-start .navbar-link:focus,
.navbar.is-primary .navbar-start .navbar-link:hover,
.navbar.is-primary .navbar-start .navbar-link.is-active,
.navbar.is-primary .navbar-end > a.navbar-item:focus,
.navbar.is-primary .navbar-end > a.navbar-item:hover,
.navbar.is-primary .navbar-end > a.navbar-item.is-active,
.navbar.is-primary .navbar-end .navbar-link:focus,
.navbar.is-primary .navbar-end .navbar-link:hover,
.navbar.is-primary .navbar-end .navbar-link.is-active {
    background-color: #00b89c;
    color: #fff;
  }
  .navbar.is-primary .navbar-start .navbar-link::after,
.navbar.is-primary .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #00b89c;
    color: #fff;
  }
  .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {
    background-color: #00d1b2;
    color: #fff;
  }
}
.navbar.is-link {
  background-color: #485fc7;
  color: #fff;
}
.navbar.is-link .navbar-brand > .navbar-item,
.navbar.is-link .navbar-brand .navbar-link {
  color: #fff;
}
.navbar.is-link .navbar-brand > a.navbar-item:focus, .navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,
.navbar.is-link .navbar-brand .navbar-link:focus,
.navbar.is-link .navbar-brand .navbar-link:hover,
.navbar.is-link .navbar-brand .navbar-link.is-active {
  background-color: #3a51bb;
  color: #fff;
}
.navbar.is-link .navbar-brand .navbar-link::after {
  border-color: #fff;
}
.navbar.is-link .navbar-burger {
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .navbar.is-link .navbar-start > .navbar-item,
.navbar.is-link .navbar-start .navbar-link,
.navbar.is-link .navbar-end > .navbar-item,
.navbar.is-link .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-link .navbar-start > a.navbar-item:focus, .navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,
.navbar.is-link .navbar-start .navbar-link:focus,
.navbar.is-link .navbar-start .navbar-link:hover,
.navbar.is-link .navbar-start .navbar-link.is-active,
.navbar.is-link .navbar-end > a.navbar-item:focus,
.navbar.is-link .navbar-end > a.navbar-item:hover,
.navbar.is-link .navbar-end > a.navbar-item.is-active,
.navbar.is-link .navbar-end .navbar-link:focus,
.navbar.is-link .navbar-end .navbar-link:hover,
.navbar.is-link .navbar-end .navbar-link.is-active {
    background-color: #3a51bb;
    color: #fff;
  }
  .navbar.is-link .navbar-start .navbar-link::after,
.navbar.is-link .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #3a51bb;
    color: #fff;
  }
  .navbar.is-link .navbar-dropdown a.navbar-item.is-active {
    background-color: #485fc7;
    color: #fff;
  }
}
.navbar.is-info {
  background-color: #3e8ed0;
  color: #fff;
}
.navbar.is-info .navbar-brand > .navbar-item,
.navbar.is-info .navbar-brand .navbar-link {
  color: #fff;
}
.navbar.is-info .navbar-brand > a.navbar-item:focus, .navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,
.navbar.is-info .navbar-brand .navbar-link:focus,
.navbar.is-info .navbar-brand .navbar-link:hover,
.navbar.is-info .navbar-brand .navbar-link.is-active {
  background-color: #3082c5;
  color: #fff;
}
.navbar.is-info .navbar-brand .navbar-link::after {
  border-color: #fff;
}
.navbar.is-info .navbar-burger {
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .navbar.is-info .navbar-start > .navbar-item,
.navbar.is-info .navbar-start .navbar-link,
.navbar.is-info .navbar-end > .navbar-item,
.navbar.is-info .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-info .navbar-start > a.navbar-item:focus, .navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,
.navbar.is-info .navbar-start .navbar-link:focus,
.navbar.is-info .navbar-start .navbar-link:hover,
.navbar.is-info .navbar-start .navbar-link.is-active,
.navbar.is-info .navbar-end > a.navbar-item:focus,
.navbar.is-info .navbar-end > a.navbar-item:hover,
.navbar.is-info .navbar-end > a.navbar-item.is-active,
.navbar.is-info .navbar-end .navbar-link:focus,
.navbar.is-info .navbar-end .navbar-link:hover,
.navbar.is-info .navbar-end .navbar-link.is-active {
    background-color: #3082c5;
    color: #fff;
  }
  .navbar.is-info .navbar-start .navbar-link::after,
.navbar.is-info .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #3082c5;
    color: #fff;
  }
  .navbar.is-info .navbar-dropdown a.navbar-item.is-active {
    background-color: #3e8ed0;
    color: #fff;
  }
}
.navbar.is-success {
  background-color: #48c78e;
  color: #fff;
}
.navbar.is-success .navbar-brand > .navbar-item,
.navbar.is-success .navbar-brand .navbar-link {
  color: #fff;
}
.navbar.is-success .navbar-brand > a.navbar-item:focus, .navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,
.navbar.is-success .navbar-brand .navbar-link:focus,
.navbar.is-success .navbar-brand .navbar-link:hover,
.navbar.is-success .navbar-brand .navbar-link.is-active {
  background-color: #3abb81;
  color: #fff;
}
.navbar.is-success .navbar-brand .navbar-link::after {
  border-color: #fff;
}
.navbar.is-success .navbar-burger {
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .navbar.is-success .navbar-start > .navbar-item,
.navbar.is-success .navbar-start .navbar-link,
.navbar.is-success .navbar-end > .navbar-item,
.navbar.is-success .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-success .navbar-start > a.navbar-item:focus, .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,
.navbar.is-success .navbar-start .navbar-link:focus,
.navbar.is-success .navbar-start .navbar-link:hover,
.navbar.is-success .navbar-start .navbar-link.is-active,
.navbar.is-success .navbar-end > a.navbar-item:focus,
.navbar.is-success .navbar-end > a.navbar-item:hover,
.navbar.is-success .navbar-end > a.navbar-item.is-active,
.navbar.is-success .navbar-end .navbar-link:focus,
.navbar.is-success .navbar-end .navbar-link:hover,
.navbar.is-success .navbar-end .navbar-link.is-active {
    background-color: #3abb81;
    color: #fff;
  }
  .navbar.is-success .navbar-start .navbar-link::after,
.navbar.is-success .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #3abb81;
    color: #fff;
  }
  .navbar.is-success .navbar-dropdown a.navbar-item.is-active {
    background-color: #48c78e;
    color: #fff;
  }
}
.navbar.is-warning {
  background-color: #ffe08a;
  color: rgba(0, 0, 0, 0.7);
}
.navbar.is-warning .navbar-brand > .navbar-item,
.navbar.is-warning .navbar-brand .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}
.navbar.is-warning .navbar-brand > a.navbar-item:focus, .navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,
.navbar.is-warning .navbar-brand .navbar-link:focus,
.navbar.is-warning .navbar-brand .navbar-link:hover,
.navbar.is-warning .navbar-brand .navbar-link.is-active {
  background-color: #ffd970;
  color: rgba(0, 0, 0, 0.7);
}
.navbar.is-warning .navbar-brand .navbar-link::after {
  border-color: rgba(0, 0, 0, 0.7);
}
.navbar.is-warning .navbar-burger {
  color: rgba(0, 0, 0, 0.7);
}
@media screen and (min-width: 1024px) {
  .navbar.is-warning .navbar-start > .navbar-item,
.navbar.is-warning .navbar-start .navbar-link,
.navbar.is-warning .navbar-end > .navbar-item,
.navbar.is-warning .navbar-end .navbar-link {
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-start > a.navbar-item:focus, .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,
.navbar.is-warning .navbar-start .navbar-link:focus,
.navbar.is-warning .navbar-start .navbar-link:hover,
.navbar.is-warning .navbar-start .navbar-link.is-active,
.navbar.is-warning .navbar-end > a.navbar-item:focus,
.navbar.is-warning .navbar-end > a.navbar-item:hover,
.navbar.is-warning .navbar-end > a.navbar-item.is-active,
.navbar.is-warning .navbar-end .navbar-link:focus,
.navbar.is-warning .navbar-end .navbar-link:hover,
.navbar.is-warning .navbar-end .navbar-link.is-active {
    background-color: #ffd970;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-start .navbar-link::after,
.navbar.is-warning .navbar-end .navbar-link::after {
    border-color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #ffd970;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {
    background-color: #ffe08a;
    color: rgba(0, 0, 0, 0.7);
  }
}
.navbar.is-danger {
  background-color: #f14668;
  color: #fff;
}
.navbar.is-danger .navbar-brand > .navbar-item,
.navbar.is-danger .navbar-brand .navbar-link {
  color: #fff;
}
.navbar.is-danger .navbar-brand > a.navbar-item:focus, .navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,
.navbar.is-danger .navbar-brand .navbar-link:focus,
.navbar.is-danger .navbar-brand .navbar-link:hover,
.navbar.is-danger .navbar-brand .navbar-link.is-active {
  background-color: #ef2e55;
  color: #fff;
}
.navbar.is-danger .navbar-brand .navbar-link::after {
  border-color: #fff;
}
.navbar.is-danger .navbar-burger {
  color: #fff;
}
@media screen and (min-width: 1024px) {
  .navbar.is-danger .navbar-start > .navbar-item,
.navbar.is-danger .navbar-start .navbar-link,
.navbar.is-danger .navbar-end > .navbar-item,
.navbar.is-danger .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-danger .navbar-start > a.navbar-item:focus, .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,
.navbar.is-danger .navbar-start .navbar-link:focus,
.navbar.is-danger .navbar-start .navbar-link:hover,
.navbar.is-danger .navbar-start .navbar-link.is-active,
.navbar.is-danger .navbar-end > a.navbar-item:focus,
.navbar.is-danger .navbar-end > a.navbar-item:hover,
.navbar.is-danger .navbar-end > a.navbar-item.is-active,
.navbar.is-danger .navbar-end .navbar-link:focus,
.navbar.is-danger .navbar-end .navbar-link:hover,
.navbar.is-danger .navbar-end .navbar-link.is-active {
    background-color: #ef2e55;
    color: #fff;
  }
  .navbar.is-danger .navbar-start .navbar-link::after,
.navbar.is-danger .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,
.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,
.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #ef2e55;
    color: #fff;
  }
  .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {
    background-color: #f14668;
    color: #fff;
  }
}
.navbar > .container {
  align-items: stretch;
  display: flex;
  min-height: 3.25rem;
  width: 100%;
}
.navbar.has-shadow {
  box-shadow: 0 2px 0 0 whitesmoke;
}
.navbar.is-fixed-bottom, .navbar.is-fixed-top {
  left: 0;
  position: fixed;
  right: 0;
  z-index: 30;
}
.navbar.is-fixed-bottom {
  bottom: 0;
}
.navbar.is-fixed-bottom.has-shadow {
  box-shadow: 0 -2px 0 0 whitesmoke;
}
.navbar.is-fixed-top {
  top: 0;
}
html.has-navbar-fixed-top,
body.has-navbar-fixed-top {
  padding-top: 3.25rem;
}
html.has-navbar-fixed-bottom,
body.has-navbar-fixed-bottom {
  padding-bottom: 3.25rem;
}
.navbar-brand,
.navbar-tabs {
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: 3.25rem;
}
.navbar-brand a.navbar-item:focus, .navbar-brand a.navbar-item:hover {
  background-color: transparent;
}
.navbar-tabs {
  -webkit-overflow-scrolling: touch;
  max-width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
}
.navbar-burger {
  color: #4a4a4a;
  cursor: pointer;
  display: block;
  height: 3.25rem;
  position: relative;
  width: 3.25rem;
  margin-left: auto;
}
.navbar-burger span {
  background-color: currentColor;
  display: block;
  height: 1px;
  left: calc(50% - 8px);
  position: absolute;
  transform-origin: center;
  transition-duration: 86ms;
  transition-property: background-color, opacity, transform;
  transition-timing-function: ease-out;
  width: 16px;
}
.navbar-burger span:nth-child(1) {
  top: calc(50% - 6px);
}
.navbar-burger span:nth-child(2) {
  top: calc(50% - 1px);
}
.navbar-burger span:nth-child(3) {
  top: calc(50% + 4px);
}
.navbar-burger:hover {
  background-color: rgba(0, 0, 0, 0.05);
}
.navbar-burger.is-active span:nth-child(1) {
  transform: translateY(5px) rotate(45deg);
}
.navbar-burger.is-active span:nth-child(2) {
  opacity: 0;
}
.navbar-burger.is-active span:nth-child(3) {
  transform: translateY(-5px) rotate(-45deg);
}
.navbar-menu {
  display: none;
}
.navbar-item,
.navbar-link {
  color: #4a4a4a;
  display: block;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
}
.navbar-item .icon:only-child,
.navbar-link .icon:only-child {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}
a.navbar-item,
.navbar-link {
  cursor: pointer;
}
a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
.navbar-link.is-active {
  background-color: #fafafa;
  color: #485fc7;
}
.navbar-item {
  flex-grow: 0;
  flex-shrink: 0;
}
.navbar-item img {
  max-height: 1.75rem;
}
.navbar-item.has-dropdown {
  padding: 0;
}
.navbar-item.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}
.navbar-item.is-tab {
  border-bottom: 1px solid transparent;
  min-height: 3.25rem;
  padding-bottom: calc(0.5rem - 1px);
}
.navbar-item.is-tab:focus, .navbar-item.is-tab:hover {
  background-color: transparent;
  border-bottom-color: #485fc7;
}
.navbar-item.is-tab.is-active {
  background-color: transparent;
  border-bottom-color: #485fc7;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  color: #485fc7;
  padding-bottom: calc(0.5rem - 3px);
}
.navbar-content {
  flex-grow: 1;
  flex-shrink: 1;
}
.navbar-link:not(.is-arrowless) {
  padding-right: 2.5em;
}
.navbar-link:not(.is-arrowless)::after {
  border-color: #485fc7;
  margin-top: -0.375em;
  right: 1.125em;
}
.navbar-dropdown {
  font-size: 0.875rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}
.navbar-dropdown .navbar-item {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.navbar-divider {
  background-color: whitesmoke;
  border: none;
  display: none;
  height: 2px;
  margin: 0.5rem 0;
}
@media screen and (max-width: 1023px) {
  .navbar > .container {
    display: block;
  }

  .navbar-brand .navbar-item,
.navbar-tabs .navbar-item {
    align-items: center;
    display: flex;
  }

  .navbar-link::after {
    display: none;
  }

  .navbar-menu {
    background-color: white;
    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
    padding: 0.5rem 0;
  }
  .navbar-menu.is-active {
    display: block;
  }

  .navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {
    left: 0;
    position: fixed;
    right: 0;
    z-index: 30;
  }
  .navbar.is-fixed-bottom-touch {
    bottom: 0;
  }
  .navbar.is-fixed-bottom-touch.has-shadow {
    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);
  }
  .navbar.is-fixed-top-touch {
    top: 0;
  }
  .navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {
    -webkit-overflow-scrolling: touch;
    max-height: calc(100vh - 3.25rem);
    overflow: auto;
  }

  html.has-navbar-fixed-top-touch,
body.has-navbar-fixed-top-touch {
    padding-top: 3.25rem;
  }
  html.has-navbar-fixed-bottom-touch,
body.has-navbar-fixed-bottom-touch {
    padding-bottom: 3.25rem;
  }
}
@media screen and (min-width: 1024px) {
  .navbar,
.navbar-menu,
.navbar-start,
.navbar-end {
    align-items: stretch;
    display: flex;
  }

  .navbar {
    min-height: 3.25rem;
  }
  .navbar.is-spaced {
    padding: 1rem 2rem;
  }
  .navbar.is-spaced .navbar-start,
.navbar.is-spaced .navbar-end {
    align-items: center;
  }
  .navbar.is-spaced a.navbar-item,
.navbar.is-spaced .navbar-link {
    border-radius: 4px;
  }
  .navbar.is-transparent a.navbar-item:focus, .navbar.is-transparent a.navbar-item:hover, .navbar.is-transparent a.navbar-item.is-active,
.navbar.is-transparent .navbar-link:focus,
.navbar.is-transparent .navbar-link:hover,
.navbar.is-transparent .navbar-link.is-active {
    background-color: transparent !important;
  }
  .navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link {
    background-color: transparent !important;
  }
  .navbar.is-transparent .navbar-dropdown a.navbar-item:focus, .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {
    background-color: whitesmoke;
    color: #0a0a0a;
  }
  .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {
    background-color: whitesmoke;
    color: #485fc7;
  }

  .navbar-burger {
    display: none;
  }

  .navbar-item,
.navbar-link {
    align-items: center;
    display: flex;
  }

  .navbar-item.has-dropdown {
    align-items: stretch;
  }
  .navbar-item.has-dropdown-up .navbar-link::after {
    transform: rotate(135deg) translate(0.25em, -0.25em);
  }
  .navbar-item.has-dropdown-up .navbar-dropdown {
    border-bottom: 2px solid #dbdbdb;
    border-radius: 6px 6px 0 0;
    border-top: none;
    bottom: 100%;
    box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);
    top: auto;
  }
  .navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {
    display: block;
  }
  .navbar.is-spaced .navbar-item.is-active .navbar-dropdown, .navbar-item.is-active .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .navbar-menu {
    flex-grow: 1;
    flex-shrink: 0;
  }

  .navbar-start {
    justify-content: flex-start;
    margin-right: auto;
  }

  .navbar-end {
    justify-content: flex-end;
    margin-left: auto;
  }

  .navbar-dropdown {
    background-color: white;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top: 2px solid #dbdbdb;
    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);
    display: none;
    font-size: 0.875rem;
    left: 0;
    min-width: 100%;
    position: absolute;
    top: 100%;
    z-index: 20;
  }
  .navbar-dropdown .navbar-item {
    padding: 0.375rem 1rem;
    white-space: nowrap;
  }
  .navbar-dropdown a.navbar-item {
    padding-right: 3rem;
  }
  .navbar-dropdown a.navbar-item:focus, .navbar-dropdown a.navbar-item:hover {
    background-color: whitesmoke;
    color: #0a0a0a;
  }
  .navbar-dropdown a.navbar-item.is-active {
    background-color: whitesmoke;
    color: #485fc7;
  }
  .navbar.is-spaced .navbar-dropdown, .navbar-dropdown.is-boxed {
    border-radius: 6px;
    border-top: none;
    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    display: block;
    opacity: 0;
    pointer-events: none;
    top: calc(100% + (-4px));
    transform: translateY(-5px);
    transition-duration: 86ms;
    transition-property: opacity, transform;
  }
  .navbar-dropdown.is-right {
    left: auto;
    right: 0;
  }

  .navbar-divider {
    display: block;
  }

  .navbar > .container .navbar-brand,
.container > .navbar .navbar-brand {
    margin-left: -0.75rem;
  }
  .navbar > .container .navbar-menu,
.container > .navbar .navbar-menu {
    margin-right: -0.75rem;
  }

  .navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {
    left: 0;
    position: fixed;
    right: 0;
    z-index: 30;
  }
  .navbar.is-fixed-bottom-desktop {
    bottom: 0;
  }
  .navbar.is-fixed-bottom-desktop.has-shadow {
    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);
  }
  .navbar.is-fixed-top-desktop {
    top: 0;
  }

  html.has-navbar-fixed-top-desktop,
body.has-navbar-fixed-top-desktop {
    padding-top: 3.25rem;
  }
  html.has-navbar-fixed-bottom-desktop,
body.has-navbar-fixed-bottom-desktop {
    padding-bottom: 3.25rem;
  }
  html.has-spaced-navbar-fixed-top,
body.has-spaced-navbar-fixed-top {
    padding-top: 5.25rem;
  }
  html.has-spaced-navbar-fixed-bottom,
body.has-spaced-navbar-fixed-bottom {
    padding-bottom: 5.25rem;
  }

  a.navbar-item.is-active,
.navbar-link.is-active {
    color: #0a0a0a;
  }
  a.navbar-item.is-active:not(:focus):not(:hover),
.navbar-link.is-active:not(:focus):not(:hover) {
    background-color: transparent;
  }

  .navbar-item.has-dropdown:focus .navbar-link, .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #fafafa;
  }
}
.hero.is-fullheight-with-navbar {
  min-height: calc(100vh - 3.25rem);
}`,rn=Object.defineProperty,en=Object.getOwnPropertyDescriptor,an=(o,r,t,i)=>{for(var n=i>1?void 0:i?en(r,t):r,e=o.length-1,a;e>=0;e--)(a=o[e])&&(n=(i?a(r,t,n):a(n))||n);return i&&n&&rn(r,t,n),n};const tn="lit-navbar";let z=class extends c{render(){return s`
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="#/">
            <img
              src="https://lit.dev/images/logo.svg"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item" href="#/">Home</a>

            <a class="navbar-item" href="#/example-one">One</a>
            <a class="navbar-item" href="#/example-two">Two</a>
            <a class="navbar-item" href="#/example-three">Three</a>
          </div>
        </div>
      </nav>
    `}};z.styles=[b(on)];z=an([d(tn)],z);var sn=`/* Bulma Utilities */
.table-container:not(:last-child), .table:not(:last-child) {
  margin-bottom: 1.5rem;
}
.table {
  background-color: white;
  color: #363636;
}
.table td,
.table th {
  border: 1px solid #dbdbdb;
  border-width: 0 0 1px;
  padding: 0.5em 0.75em;
  vertical-align: top;
}
.table td.is-white,
.table th.is-white {
  background-color: white;
  border-color: white;
  color: #0a0a0a;
}
.table td.is-black,
.table th.is-black {
  background-color: #0a0a0a;
  border-color: #0a0a0a;
  color: white;
}
.table td.is-light,
.table th.is-light {
  background-color: whitesmoke;
  border-color: whitesmoke;
  color: rgba(0, 0, 0, 0.7);
}
.table td.is-dark,
.table th.is-dark {
  background-color: #363636;
  border-color: #363636;
  color: #fff;
}
.table td.is-primary,
.table th.is-primary {
  background-color: #00d1b2;
  border-color: #00d1b2;
  color: #fff;
}
.table td.is-link,
.table th.is-link {
  background-color: #485fc7;
  border-color: #485fc7;
  color: #fff;
}
.table td.is-info,
.table th.is-info {
  background-color: #3e8ed0;
  border-color: #3e8ed0;
  color: #fff;
}
.table td.is-success,
.table th.is-success {
  background-color: #48c78e;
  border-color: #48c78e;
  color: #fff;
}
.table td.is-warning,
.table th.is-warning {
  background-color: #ffe08a;
  border-color: #ffe08a;
  color: rgba(0, 0, 0, 0.7);
}
.table td.is-danger,
.table th.is-danger {
  background-color: #f14668;
  border-color: #f14668;
  color: #fff;
}
.table td.is-narrow,
.table th.is-narrow {
  white-space: nowrap;
  width: 1%;
}
.table td.is-selected,
.table th.is-selected {
  background-color: #00d1b2;
  color: #fff;
}
.table td.is-selected a,
.table td.is-selected strong,
.table th.is-selected a,
.table th.is-selected strong {
  color: currentColor;
}
.table td.is-vcentered,
.table th.is-vcentered {
  vertical-align: middle;
}
.table th {
  color: #363636;
}
.table th:not([align]) {
  text-align: inherit;
}
.table tr.is-selected {
  background-color: #00d1b2;
  color: #fff;
}
.table tr.is-selected a,
.table tr.is-selected strong {
  color: currentColor;
}
.table tr.is-selected td,
.table tr.is-selected th {
  border-color: #fff;
  color: currentColor;
}
.table thead {
  background-color: transparent;
}
.table thead td,
.table thead th {
  border-width: 0 0 2px;
  color: #363636;
}
.table tfoot {
  background-color: transparent;
}
.table tfoot td,
.table tfoot th {
  border-width: 2px 0 0;
  color: #363636;
}
.table tbody {
  background-color: transparent;
}
.table tbody tr:last-child td,
.table tbody tr:last-child th {
  border-bottom-width: 0;
}
.table.is-bordered td,
.table.is-bordered th {
  border-width: 1px;
}
.table.is-bordered tr:last-child td,
.table.is-bordered tr:last-child th {
  border-bottom-width: 1px;
}
.table.is-fullwidth {
  width: 100%;
}
.table.is-hoverable tbody tr:not(.is-selected):hover {
  background-color: #fafafa;
}
.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {
  background-color: #fafafa;
}
.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even) {
  background-color: whitesmoke;
}
.table.is-narrow td,
.table.is-narrow th {
  padding: 0.25em 0.5em;
}
.table.is-striped tbody tr:not(.is-selected):nth-child(even) {
  background-color: #fafafa;
}
.table-container {
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  overflow-y: hidden;
  max-width: 100%;
}`,ln=Object.defineProperty,dn=Object.getOwnPropertyDescriptor,k=(o,r,t,i)=>{for(var n=i>1?void 0:i?dn(r,t):r,e=o.length-1,a;e>=0;e--)(a=o[e])&&(n=(i?a(r,t,n):a(n))||n);return i&&n&&ln(r,t,n),n};const bn="lit-table";let h=class extends c{renderHeadOrFoot(o){return typeof o=="string"?s`<th>${o}</th>`:s`<th><abbr title="${o.title}">${o.label}</abbr></th>`}renderRow(o){return g(o,r=>s`<td>${r}</td>`)}render(){return s`<table class="table">
      ${this.header?s`<thead>
            <tr>
              ${g(this.header,this.renderHeadOrFoot)}
            </tr>
          </thead>`:null}
      ${this.footer?s`<tfoot>
            <tr>
              ${g(this.footer,this.renderHeadOrFoot)}
            </tr>
          </tfoot>`:null}
      <tbody>
        ${g(this.data,o=>s`<tr>
              ${this.renderRow(o)}
            </tr>`)}
      </tbody>
    </table>`}};h.styles=[b(sn)];k([l({type:Array})],h.prototype,"header",2);k([l({type:Array})],h.prototype,"footer",2);k([l({type:Array})],h.prototype,"data",2);h=k([d(bn)],h);const cn="modulepreload",_={},un="/",fn=function(r,t){return!t||t.length===0?r():Promise.all(t.map(i=>{if(i=`${un}${i}`,i in _)return;_[i]=!0;const n=i.endsWith(".css"),e=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${e}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":cn,n||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),n)return new Promise((O,P)=>{a.addEventListener("load",O),a.addEventListener("error",P)})})).then(()=>r())};var vn=Object.defineProperty,hn=Object.getOwnPropertyDescriptor,gn=(o,r,t,i)=>{for(var n=i>1?void 0:i?hn(r,t):r,e=o.length-1,a;e>=0;e--)(a=o[e])&&(n=(i?a(r,t,n):a(n))||n);return i&&n&&vn(r,t,n),n};const pn="lit-app";let j=class extends c{async connectedCallback(){super.connectedCallback();const{mount:o}=await fn(()=>import("./LitApp.route.429b3127.js"),["assets/LitApp.route.429b3127.js","assets/vendor.d9811822.js"]);o(this.shadowRoot.querySelector("#app"))}render(){return s`<div>
      <lit-navbar></lit-navbar>
      <div id="app"></div>
    </div>`}};j=gn([d(pn)],j);const mn=()=>L(s`<lit-app></lit-app>`,document.querySelector("#app"));mn();export{fn as _};
