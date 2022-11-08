const tabsBtn = document.querySelectorAll(".greenrate-tab");
const tabsItems = document.querySelectorAll(".tab-item")

const onTabClick = (item) => {
    item.addEventListener("click", () => {
        let currBtn = item;
        let tabId = currBtn.getAttribute("data-tab");
        let currTab = document.querySelector(tabId);


        tabsBtn.forEach(item => {
            item.classList.remove('active-tab');
        });

        tabsItems.forEach(item => {
            item.classList.remove('tab-item-active');
        });

        currBtn.classList.add('active-tab');
        currTab.classList.add('tab-item-active');
    });
}

tabsBtn.forEach(onTabClick)
