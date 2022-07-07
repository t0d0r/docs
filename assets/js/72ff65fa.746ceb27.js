"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[908],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8081:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"High Availability with Embedded DB",weight:40},s=void 0,d={unversionedId:"installation/ha-embedded",id:"installation/ha-embedded",title:"High Availability with Embedded DB",description:"Notice:",source:"@site/docs/installation/ha-embedded.md",sourceDirName:"installation",slug:"/installation/ha-embedded",permalink:"/installation/ha-embedded",draft:!1,editUrl:"https://github.com/k3s-io/k3s/docs/edit/main/docs/installation/ha-embedded.md",tags:[],version:"current",lastUpdatedAt:1657220395,formattedLastUpdatedAt:"7/7/2022",frontMatter:{title:"High Availability with Embedded DB",weight:40},sidebar:"mySidebar",previous:{title:"High Availability with an External DB",permalink:"/installation/ha"},next:{title:"Cluster Datastore Options",permalink:"/installation/datastore"}},c={},u=[{value:"Existing clusters",id:"existing-clusters",level:2}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Notice:"),"\nK3s has added full support for embedded etcd as of release v1.19.5+k3s1. Versions v1.19.1 thru v1.19.4 provide only experimental support for embedded etcd.\nEmbedded etcd replaced experimental Dqlite in the K3s v1.19.1 release. This is a breaking change. Please note that upgrades from experimental Dqlite to embedded etcd are not supported. If you attempt an upgrade it will not succeed and data will be lost.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warning:"),"\nEmbedded etcd (HA) may have performance issues on slower disks such as Raspberry Pis running with SD cards.")),(0,i.kt)("p",null,"To run K3s in this mode, you must have an odd number of server nodes. We recommend starting with three nodes."),(0,i.kt)("p",null,"To get started, first launch a server node with the ",(0,i.kt)("inlineCode",{parentName:"p"},"cluster-init")," flag to enable clustering and a token that will be used as a shared secret to join additional servers to the cluster."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -sfL https://get.k3s.io | K3S_TOKEN=SECRET sh -s - server --cluster-init\n")),(0,i.kt)("p",null,"After launching the first server, join the second and third servers to the cluster using the shared secret:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"K3S_TOKEN=SECRET k3s server --server https://<ip or hostname of server1>:6443\n")),(0,i.kt)("p",null,"Now you have a highly available control plane. Joining additional worker nodes to the cluster follows the same procedure as a single server cluster."),(0,i.kt)("p",null,"There are a few config flags that must be the same in all server nodes:         "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Network related flags: ",(0,i.kt)("inlineCode",{parentName:"li"},"--cluster-dns"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"--cluster-domain"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"--cluster-cidr"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"--service-cidr")),(0,i.kt)("li",{parentName:"ul"},"Flags controlling the deployment of certain components: ",(0,i.kt)("inlineCode",{parentName:"li"},"--disable-helm-controller"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"--disable-kube-proxy"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"--disable-network-policy")," and any component passed to ",(0,i.kt)("inlineCode",{parentName:"li"},"--disable")),(0,i.kt)("li",{parentName:"ul"},"Feature related flags: ",(0,i.kt)("inlineCode",{parentName:"li"},"--secrets-encryption"))),(0,i.kt)("h2",{id:"existing-clusters"},"Existing clusters"),(0,i.kt)("p",null,"If you have an existing cluster using the default embedded SQLite database, you can convert it to etcd by simply restarting your K3s server with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--cluster-init")," flag. Once you've done that, you'll be able to add additional instances as described above."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Important:")," K3s v1.22.2 and newer support migration from SQLite to etcd. Older versions will create a new empty datastore if you add ",(0,i.kt)("inlineCode",{parentName:"p"},"--cluster-init")," to an existing server.")))}m.isMDXComponent=!0}}]);