1. File > Preference > User Snippets 메뉴 이동
2. 검색창에 vue 입력 -> vue 선택
3. 아래 코드 입력

`"Generate Basic Vue Code" : {
		"prefix": "vue-start",
		"body": [
				"<template>\n\t<div></div>\n</template>\n<script>\nexport default {\n\tname: '',\n\tcomponents: {},\n\tdata() {\n\t\treturn {\n\t\t\tsampleData: ''\n\t\t}\n\t},\n\tsetup() {},\n\tcreated() {},\n\tmounted() {},\n\tunmounted() {},\n\tmethods: {}\n}\n</script>"
		],
		"description": "Generate Basic Vue Code"
	}`