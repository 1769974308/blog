const sidebar = {
	'/service/':[
		{
			title : 'java基础',
			children : [
				'java/base/base'
			]
		},
		{
			title : 'java集合',
			children : [
				'java/collection/map'
			]
		},
		{
			title : 'linux基础',
			children : [
				'linux/base/base',
				'linux/base/Centos7安装和配置Mysql5.7',
				'linux/base/crontab',
				'linux/base/vim',
				'linux/nature/linux性能优化实战之平均负载',
				'linux/nature/Linux性能监控工具sysstat介绍与安装',
				'linux/shell/sed工具',
				'linux/shell/shell变量',
				'linux/shell/shell脚本'
				'linux/shell/正则表达式之grep'
			]
		}

	],
	'/database/':[
		{
			title : 'sql',
			children : [
				'sql/sql-base'
			]

		},
		{
			title : 'mysql',
			children : [
				'mysql/mysql-base'
			]
		},
		{
			title : 'redis',
			children : [
				'redis/redis-install',
				'redis/redis-setpassword',
			]
		}


	]




}


const nav = [

	{
		text : '服务端',
		items : [
			{text : 'java',link : '/service/java/base/base'},
		        {text : 'linux',link : '/service/linux/base/base'}

		]
	},
	{
		text : '数据库',
		items : [
			{text : 'sql',link : '/database/sql/sql-base'},
			{text : 'mysql',link : '/database/mysql/mysql-base'},
			{text : 'redis',link : '/database/redis/redis-install'},
		]
	}

]


module.exports = {

	title : '笔记--博客',
	description : '自律给我自由--有时候坚持比努力更重要',
	base : '/blog/',
	repo : 'https://github.com/1769974308/blog.git',
	head : [
		['link',{rel:'icon',href:'/favicon.ico'}]
	],
	markdown:{
		lineNumbers:true
	},
	themeConfig:{
		sidebarDepth:2,
		lastUpdated:'最后一次更新',
		nav,
		sidebar,
	}
}
