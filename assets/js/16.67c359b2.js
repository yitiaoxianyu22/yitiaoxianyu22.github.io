(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{369:function(s,a,n){"use strict";n.r(a);var t=n(42),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"git-checkout的分支没有与远程分支关联"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-checkout的分支没有与远程分支关联"}},[s._v("#")]),s._v(" git checkout的分支没有与远程分支关联")]),s._v(" "),n("h2",{attrs:{id:"git-checkout的分支没有与远程分支关联-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#git-checkout的分支没有与远程分支关联-2"}},[s._v("#")]),s._v(" git checkout的分支没有与远程分支关联")]),s._v(" "),n("p",[s._v("今天改一个问题，需要拉取远程的一个分支，然后拉下来了，但是提交的时候发现我的本地分支并没有跟远程的分支关联，这就很迷惑了，查了一下后，发现我在checkout分支的时候没有track远程分支，而且分支名称多加了一个origin，也就是origin/branchname，这样命名的一个问题就是在与远端分支关联的时候会报出一个错误")]),s._v(" "),n("blockquote",[n("p",[s._v("warning： refname 'origin/v2.1.20200724.spd-poc' is ambiguous.\nfatal: Ambiguous object name: 'origin/v2.1.20200724.spd-poc'")])]),s._v(" "),n("p",[s._v("因此需要重新对本地分支命名（这里我是在idea中直接重命名的，没有用命令），然后再关联")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch --set-upstream-to"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("origin/"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("remote branch_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("local branch_name"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n//或者\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -u origin/branch_name\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[n("strong",[s._v("注意，如果想在checkout的时候就与远程分支关联需要使用")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout --track origin/branch_name\n//或者\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v(" origin/test\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("解决问题的过程中了解到的几个命令")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[s._v("//查看本地分支\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n//查看远端分支\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -r\n//查看所有分支（红色表示远端分支）\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -a\n//查看所有分支映射"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("两个v"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -vv\n//删除分支\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d branch_name\n//删除远程分支\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin --delete branch_name\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);