function addItem() {
    var inputField = document.getElementById('itemInput');
    var item = inputField.value;

    if (item.trim() !== '') {
        var itemList = document.getElementById('itemList');
        var listItem = document.createElement('li');
        listItem.textContent = item;
        itemList.appendChild(listItem);
        inputField.value = '';
    }
}
