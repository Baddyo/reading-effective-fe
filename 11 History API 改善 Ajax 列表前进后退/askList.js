function askList(pageNo) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState !== 4) {
                return;
            }

            if (this.status >= 200 && this.status < 300 || this.status === 304) {
                let res = JSON.parse(request.responseText);
                resolve(res);
            }
        };

        request.open('GET', `${pageNo}.json`, true);
        request.send(null);
    });
}