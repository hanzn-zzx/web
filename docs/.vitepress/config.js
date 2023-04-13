export default {
	title: 'hanzn-zzx的个人首页', 
	description: 'hanzn-zzx的个人静态网站', 
	lang: 'zh-CN',
	base: "/personal-website/",
	themeConfig: {
		siteTitle: 'hanzn-zzx',
		nav: [
			{ text: 'deepin论坛个人首页', link: 'https://bbs.deepin.org/user/284017'}
		],
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/hanzn-zzx' }
		],
		sidebar: [
			{ text: '主导航',
			  items: [
				{ text: '首页', link: '/'},
				{ text: '文档主页',link: '/home'}
			  ]
			},
			{ text: '班会资料', link:'/class-meeting'}
		],
		outlineTitle: '页面目录',
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

