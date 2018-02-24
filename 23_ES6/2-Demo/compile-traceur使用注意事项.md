# 注意事项

## Uasge

```javascript
// 必须引入这三个文件
<script src="./lib/traceur/traceur.js"></script>
<script src="./lib/traceur/BrowserSystem.js"></script>
<script src="./lib/traceur/bootstrap.js"></script>

// js文件写到下边的script中
<script type="module">
    // ES6 code
</script>

// 也可以这么写,这种方式没有代码智能提示
<script type="text/traceur">
    // ES6 code
</script>
```