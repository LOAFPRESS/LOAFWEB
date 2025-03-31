document.getElementById('explore-btn').addEventListener('click', function() {
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('content').style.display = 'block';
});

document.getElementById('back-btn').addEventListener('click', function() {
    document.getElementById('main-page').style.display = 'block';
    document.getElementById('content').style.display = 'none';
});

// 新增添加配方板块的展开功能
document.getElementById('add-recipe-btn').addEventListener('click', function() {
    const recipeContent = document.getElementById('recipe-content');
    if (recipeContent.style.display === 'none') {
        recipeContent.style.display = 'block';
        this.textContent = '收起';
    } else {
        recipeContent.style.display = 'none';
        this.textContent = '展开';
    }
});
