// 用来指定grunt要执行的任务
module.exports = function(grunt){
    grunt.initConfig({
        uglify: {
            my_targe: {
                files: {
                    'docs/src/js.mis.js':['docs/src/app.js']
                }
            }
        },
        markdown: {
            all: {
              files: [
                {
                  expand: true,
                  src: './docs/src/*.md',
                  ext: '.html'
                },
              ]
            },
            options: {
                gfm: true,
                template: './docs/template/index.html',
                highlight: 'manual',
                codeLines: {
                  before: '<span>',
                  after: '</span>'
                }
            }
        },
        watch :{
            scripts :{
              files : ['docs/src/app.js','docs/src/test.md'],
              tasks : ['uglify','markdown']
            }
        }
        
    });

    // 加载插件
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-markdown');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // 指定为默认任务
    grunt.registerTask('default', ['uglify','markdown']);
};