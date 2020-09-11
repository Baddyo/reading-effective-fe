let pageNo = 1;
window.onload = () => {
    init();
    document.getElementById('prev').addEventListener('click', e => {
        prev();
    });
    document.getElementById('next').addEventListener('click', e => {
        next();
    });
    // window.history.replaceState({
    //     pageNo: 1 // 用户刷新页面后更正当前的 history 记录
    // }, '', location.href);
};
window.addEventListener('popstate', e => {
    if (e.state) {
        pageNo = e.state.pageNo;
        changePage(pageNo);
    }
})

function init() {
    let no = window.history.state ? window.history.state.pageNo : 1; // 如果用户希望刷新页面后显示刷新之前的列表页，而不是一个列表页
    changePage(no);
}

function changePage(pageNo) {
    askList(pageNo).then((res) => {
        // console.table(res);
        window.history.pushState({
            pageNo
        }, '', location.href);

        render(res.list)
    }).catch((err) => {
        console.log(err);
    });
}