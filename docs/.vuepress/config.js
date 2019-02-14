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
			title : 'linu基础',
			children : [
				'linux/base/base',
				'linux/shell/shell'
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
				'redis/redis-install'
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
