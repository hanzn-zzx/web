export default {
	title: 'hanzn-zzx的个人首页', 
	description: 'hanzn-zzx的个人静态网站', 
	lang: 'zh-CN',
	base: "/web/",
	themeConfig: {
		siteTitle: 'hanzn-zzx',
		nav: [
			{ text: 'deepin论坛个人首页', link: 'https://bbs.deepin.org/user/284017'}
		],
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/hanzn-zzx' }
		],
		sidebar: [
			{ text: '文档主页',link: '/home'},
			{ text: 'deepin常用资源整理',link: '/deepin-src-col'}
		],
		outlineTitle: '页面目录',
		outline: [2, 4], 
		docFooter: {
			prev: '上一页',
			next: '下一页'
		},
		returnToTopLabel: '返回顶部',
		darkModeSwitchLabel: '外观',
		sidebarMenuLabel: '导航栏',
		footer:{
			message:'hanzn-zzx，一个初二学生，deepin用户'
		},
	},	
}

