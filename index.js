let buybuddy=[];
    const iteminput =document.getElementById('iteminput');
    const additem = document.getElementById('additem');
    const purchased = document.getElementById('purchased');
    const clear = document.getElementById('clear');
    function additems() {
        const newitem = iteminput.value.trim();
        if (newitem) {
            buybuddy.push({ name: newitem, purchased: false });
            iteminput.value = '';
            updatelist();
        }
    }
    
    function updatelist() {
        purchased.innerHTML = ''; 
    
        buybuddy.forEach((item, index) => {
            const li = document.createElement('li');
            li.textContent = item.name;
            
            if (item.purchased) {
                li.style.textDecoration = 'line-through';
            }
    
            li.addEventListener('click', () => togglePurchased(index));
            purchased.appendChild(li);
        });
    }
    function togglePurchased(index) {
        buybuddy[index].purchased = !buybuddy[index].purchased;
        updatelist();
    }
    
    
    function removeItem(event, index) {
        event.preventDefault(); 
        buybuddy.splice(index, 1);
        updatelist();
    }
    function clearList() {
        buybuddy = [];
        updatelist(); 
    }
    
    additem.addEventListener('click', additems);
    clear.addEventListener('click', clearList);
    