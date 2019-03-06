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
				'linux/base/vim'
			]
		},
		{
			title: 'linux性能优化',
			children :[
				'linux/nature/linux性能优化实战之平均负载',
				'linux/nature/Linux性能监控工具sysstat介绍与安装'
			]

		},
		{
			title: 'shell脚本',
			children:[
				'linux/shell/sed工具',
				'linux/shell/shell变量',
				'linux/shell/shell脚本',
				'linux/shell/grep正则表达式'
			]
		}

	],
	'/database/':[
		{
			title : 'sql',
			children : [
				'sql/sql-base',
				'sql/sql执行顺序',
				'sql/explain'
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
	],
	'/frame/':[
		{
			title : 'SpringBoot',
			children :[
				'springboot/build-springboot-project',
				'springboot/SpringBoot-config-explain',
				'springboot/springboot-thymeleaf',
			]
		},
		{
			title : 'Git',
			children :[
				'git/git-command',
			]
		},
		{
			title : 'HttpClient',
			children :[
				'httpclient/httpclient-introduce',
				'httpclient/httpclient-upload',
			]
		},
		{
			title : 'Json',
			children :[
				'json/json-course',
				'json/json-order-output',
			]
		},
		{
			title : 'Mybatis',
			children :[
				'mybatis/mybatis-batch-insert',
				'mybatis/mybatis-mapper-example',
				'mybatis/mybatis-object-list',
			]
		},
		{
			title : 'Nginx',
			children :[
				'nginx/nginx-install',
				'nginx/nginx-function-introduce',
				'nginx/nginx-config',
				'nginx/nginx-start-stop-reload',
				'nginx/nginx-virtual-host',
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
	},
	{
		text : '框架',
		items : [
			{text : 'spring-boot',link : '/frame/springboot/build-springboot-project'},
			{text : 'git',        link : '/frame/git/git-command'},
			{text : 'httpclient', link : '/frame/httpclient/httpclient-introduce'},
			{text : 'Json',       link : '/frame/json/json-course'},
			{text : 'mybatis',    link : '/frame/mybatis/mybatis-mapper-example'},
			{text : 'nginx',      link : '/frame/nginx/nginx-install'},
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
