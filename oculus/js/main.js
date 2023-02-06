'use strict'
// Знаходимо всі кнопки, на які ми можемо натискати
const tabItem = document.querySelectorAll('.tabs__btn-item');
// ------------------------------------------------
// Знаходимо всі блоки, які можна показувати при натисканні на кнопки
const tabContent = document.querySelectorAll('.tabs__content-item');
// -----------------------------------------------------------------
// Шукаємо кнопку на яку ми клікнули
tabItem.forEach(function(element){
    element.addEventListener('click', open);
});
// ---------------------------------
// Опис функції open
function open(evt){
    const tabTarget = evt.currentTarget; //Знаходимо ел. по якому клікнули
    const button = tabTarget.dataset.button; //Знаходимо ел. якому будемо додавати клас active

    // Прибираємо у всіх кнопках клас tabs__btn-item--active
    tabItem.forEach(function(item){
        item.classList.remove('tabs__btn-item--active');
    });
    // --------------------------------------------------------
    // Прибираємо у всіх блоках клас tabs__content-item--active
    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active');
    });
    // --------------------------------------------------------
    // Додаємо клас tabs__btn-item--active для тієї кнопки, на яку натиснули
    tabTarget.classList.add('tabs__btn-item--active');
    // ---------------------------------------------------------------------
    // Знаходимо блок який співпадає з ID кнопки на яку ми натиснули
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
    // -------------------------------------------------------------
}
// -----------------
