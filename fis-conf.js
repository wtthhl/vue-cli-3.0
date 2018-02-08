// 1 基于commonjs规范开发
fis.hook('commonjs')
// 2 库文件打包在一起
fis.match('lib/**.js', {
	packTo:'pack/lib.js'
})
// 3 模块文件打包在一起
fis.match('module/**.js',{
	isMod: true,
	packTo:'pack/module.js'
})
// 4 css文件打包在一起
fis.match('**.css', {
	packTo:'pack/all.css',
	optimizer: 'clean-css'
})
	// 7 css文件要压缩

// 5 js， css文件都发布到static目录下
fis.match('**.{js,css}', {
	release: 'static/$0',
	useHash: true
})
	// 9 js文件加指纹
	// 10 css文件加指纹
fis.match('*.html', {
	release:true
})

// 6 js文件要压缩
fis.match('**.js', {
	optimizer: 'uglify-js'
})
// 8 png图片要压缩
fis.match('**.png', {
	optimizer:'png-compressor'
})
// 资源定位
fis.match('::package',{
	postpackager:'loader'
})