document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('addButton');
    const shoppingList = document.getElementById('shoppingList');
    const removeOption = document.getElementById('removeOption');

    const updateRemoveOption = () => {
        removeOption.disabled = shoppingList.children.length === 0;
    };

    addButton.addEventListener('click', () => {
        const item = itemInput.value.trim();
        if (item) {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            shoppingList.appendChild(listItem);
            itemInput.value = '';
            updateRemoveOption();
        }
    });

    removeOption.addEventListener('click', () => {
        const itemToRemove = prompt('Digite o item que deseja remover:');
        if (itemToRemove) {
            let itemFound = false;
            for (let i = 0; i < shoppingList.children.length; i++) {
                if (shoppingList.children[i].textContent === itemToRemove) {
                    shoppingList.removeChild(shoppingList.children[i]);
                    itemFound = true;
                    break;
                }
            }
            if (itemFound) {
                alert(`O item "${itemToRemove}" foi removido da lista.`);
            } else {
                alert('Não foi possível encontrar o item dentro da lista!');
            }
            updateRemoveOption();
        }
    });
});
