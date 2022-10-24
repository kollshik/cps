//Площадь___________________

const squareForm = document.forms.square__form; //Общая переменная формы для площади (захват формы через дом-дерево)


const square = {  //Ссылочные переменные формы для площади
    
    widthSquare:squareForm.width, //Ширина
    heighSquare:squareForm.heigh,   //Высота
    resultSquare:squareForm.result, //Вывод результата вычисления площади 

    countSquare:document.querySelector('.square__count'), // Кнопка подсчет
    clearSquare:document.querySelector('.square__clear') // Кнопка очистить поля

}


square.countSquare.onclick=function(){ // Функция для умножения ширины на длинну
    square.resultSquare.value = Math.round(square.widthSquare.value*square.heighSquare.value);
};

square.clearSquare.onclick=function(){ // Функция очистки полей
    square.widthSquare.value='';
    square.heighSquare.value='';
    square.resultSquare.value='';
    };




//Толщина слоя______________

const thicknessForm = document.forms.thickness__form;  //общая переменная формы для толщины (захват формы через дом-дерево)

const thickness = thicknessForm.thickness; //Переменная толщины 



//Тип цемента______________

const tipeСement = document.forms.tipeCement__form;  //Общая переменная формы для марки цемента (захват формы через дом-дерево)

const radioCement = document.querySelectorAll('.tipeCement'); //Массив из радиокнопок


//Тип раствора_______________

const tipeMixture = document.forms.tipeMixture__form;  //Общая переменная формы для марки цемента (захват формы через дом-дерево)

const radioMixture = document.querySelectorAll('.tipeMixture__radio'); //Массив из радиокнопок



//вес мешков_______________

const bagForm = document.forms.bag__form; //Форма с весом мешков

const oneBagCement = bagForm.one_bag__cement; // Переменная для веса одногог мешка цемента
const oneBagSand = bagForm.one_bag__sand;  // Переменная для веса одногог мешка песка




//Результат_____________

const resultForm = document.forms.result__form; //Форма с результатом

const resultVolume = resultForm.result__volume; // Переменная с бъемом раствора 

const resultCementKg = resultForm.result__cement_kg; //Количество килограмм цемента
const resultCementBag = resultForm.result__cement_bag; //Количество мешков цемента

const resultSandtKg = resultForm.result__sand_kg; //Количество килограм песка
const resultSandtBag = resultForm.result__sand_bag; //количество мешков песка

const resultCount = document.querySelector('.result__count'); // Подсчет фоормы с результатом




//Подсчет объема____________



resultCount.onclick = function(){

    resultVolume.value = (square.resultSquare.value * thickness.value)/100 // Объем раствора (м3)


    for (let i = 0 ; i < radioMixture.length; i++) { // Цыкл для перебора массива раствора
    
        if (radioMixture[0].checked) {
            for (let i = 0 ; i < radioCement.length; i++) { // Цыкл для перебора массива радиокнопок
                                                            // и подсчета веса цемента
                if (radioCement[0].checked) {
                resultCementKg.value = Math.round (406 * resultVolume.value);
                resultSandtKg.value = Math.round(1720 * resultVolume.value);
                }  
                else if (radioCement[1].checked) {
                resultCementKg.value = Math.round(325 * resultVolume.value);
                resultSandtKg.value = Math.round(1600 * resultVolume.value);

                }  
                else if (radioCement[2].checked) {
                resultCementKg.value =Math.round (276 * resultVolume.value);
                resultSandtKg.value = Math.round(1600 * resultVolume.value);

                }
                else {
                resultCementKg.value = Math.round(228 * resultVolume.value);
                resultSandtKg.value = Math.round(1500 * resultVolume.value);

                } 
            }
        }
        else if (radioMixture[1].checked){
            for (let i = 0 ; i < radioCement.length; i++) { // Цыкл для перебора массива радиокнопок
                                                            // и подсчета веса цемента
                if (radioCement[0].checked) {
                resultCementKg.value = Math.round (813 * resultVolume.value);
                resultSandtKg.value = Math.round(1000 * resultVolume.value);
                }  
                else if (radioCement[1].checked) {
                resultCementKg.value = Math.round(536 * resultVolume.value);
                resultSandtKg.value = Math.round(1340 * resultVolume.value);

                }  
                else if (radioCement[2].checked) {
                resultCementKg.value =Math.round (358 * resultVolume.value);
                resultSandtKg.value = Math.round(1560 * resultVolume.value);

                }
                else {
                resultCementKg.value = Math.round(325 * resultVolume.value);
                resultSandtKg.value = Math.round(1600 * resultVolume.value);

                } 
            }
        }
        else {
            for (let i = 0 ; i < radioCement.length; i++) { // Цыкл для перебора массива радиокнопок
                                                            // и подсчета веса цемента
                if (radioCement[0].checked) {
                resultCementKg.value = Math.round (813 * resultVolume.value);
                resultSandtKg.value = Math.round(1000 * resultVolume.value);
                }  
                else if (radioCement[1].checked) {
                resultCementKg.value = Math.round(5365 * resultVolume.value);
                resultSandtKg.value = Math.round(1340 * resultVolume.value);

                }  
                else if (radioCement[2].checked) {
                resultCementKg.value =Math.round (406 * resultVolume.value);
                resultSandtKg.value = Math.round(1500 * resultVolume.value);

                }
                else {
                resultCementKg.value = Math.round(325 * resultVolume.value);
                resultSandtKg.value = Math.round(1600 * resultVolume.value);

                } 
            }
        }
    }






    resultCementBag.value = (resultCementKg.value / oneBagCement.value); // Количество мешков цемента
    resultSandtBag.value = (resultSandtKg.value / oneBagSand.value); // Количество мешков песка
}





