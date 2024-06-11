const breakfastMenu = ['Pancake - $12','Eggs Benedict - $22.99','Oatmeal - $21.99','Frittata - $15'];
const mainCourseMenu = ['Steak - $35','Pasta - $24.99','Burger - $30','Salmon - $28'];
const dessertMenu = ['Cake - $11','Ice Cream - $8','Pudding - $5','Fruit Salad - $10'];

// using map() to manipulate breakfast menu (iterates through)
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index+1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// using forEach method to manipulate main course menu
let mainCourseItem = '';
mainCourseMenu.forEach((item, index)=>{
    mainCourseItem += `<p>Item ${index+1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;


// using for loop to manipulate dessert menu
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i+1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

