// 用来指定grunt要执行的任务
module.exports = function(grunt){
    grunt.initConfig({
        uglify: {
            my_targe: {
                files: {
                    'dist/js.mis.js':['/app.js']
                }
            }
        }

    });

    // 加载插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // 指定为默认任务
    grunt.registerTask('default', ['uglify']);
};