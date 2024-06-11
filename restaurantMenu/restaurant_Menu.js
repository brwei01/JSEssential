const breakfastMenu = ['Pancake','Eggs Benedict','Oatmeal','Frittata'];
const mainCourseMenu = ['Steak','Pasta','Burger','Salmon'];
const dessertMenu = ['Cake','Ice Cream','Pudding','Fruit Salad'];

// using map() to manipulate breakfast menu (iterates through)
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index+1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// using forEach method to manipulate main course menu
let mainCourseItem = '';
mainCourseMenu.forEach((item, index)=>{
    mainCourseItem += `<p>Item ${index+1}: ${item}</p>`;
});
document.getElementById('mainCourseMenuItems').innerHTML = mainCourseItem;

// using for loop to manipulate dessert menu
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i+1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

