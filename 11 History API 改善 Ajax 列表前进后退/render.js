function render(list) {
    let box = document.getElementById('box');
    box.innerHTML = '';
    let ul = document.createElement('ul');
    let html = '';
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        html += `<li class="item">${item.title}</li>`;
    }
    ul.innerHTML = html;
    box.appendChild(ul);
}