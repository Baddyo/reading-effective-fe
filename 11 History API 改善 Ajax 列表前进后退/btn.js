function prev() {
    go(-1);
}

function next() {
    go(1);
}

function go(direction) {
    let oldPageNo = pageNo;
    pageNo += direction;
    if (pageNo > 3) {
        pageNo = 3;
    }
    if (pageNo < 1) {
        pageNo = 1;
    }
    if (pageNo !== oldPageNo) {
        console.log('go', pageNo);
        changePage(pageNo);
    }
}