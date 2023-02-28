window.onload=function(){
    // находим иконку настроек
    let icon = document.getElementById("top-block-switch");

    // считываем все наши пункты левого меню
    let generalItem = document.getElementById("menu-item-general");
    let mainItem = document.getElementById("menu-item-main");
    let headerItem = document.getElementById("menu-item-header");
    let topItem = document.getElementById("menu-item-top");
    let regionItem = document.getElementById("menu-item-region");
    let catalogItem = document.getElementById("menu-item-catalog");
    let basketItem = document.getElementById("menu-item-basket");
    let sectionsItem = document.getElementById("menu-item-sections");
    let footerItem = document.getElementById("menu-item-footer");
    let bannersItem = document.getElementById("menu-item-banners");
    let mobileItem = document.getElementById("menu-item-mobile");
    let lkItem = document.getElementById("menu-item-lk");

    // считываем кнопку выхода
    let closeBut = document.getElementById("close-block");

    // добавляем события на иконку: навели мышку, убрали, кликнули
    icon.addEventListener("mouseover", openToolTip);
    icon.addEventListener("mouseout", closeToolTip);
    icon.addEventListener("click", closeToolTip);
    icon.addEventListener("click", openLeftMenu);

    // добавляем события по клику на пункты левого меню
    generalItem.addEventListener("click", openRightBlock);
    mainItem.addEventListener("click", openRightBlock);
    headerItem.addEventListener("click", openRightBlock);
    topItem.addEventListener("click", openRightBlock);
    regionItem.addEventListener("click", openRightBlock);
    catalogItem.addEventListener("click", openRightBlock);
    basketItem.addEventListener("click", openRightBlock);
    sectionsItem.addEventListener("click", openRightBlock);
    footerItem.addEventListener("click", openRightBlock);
    bannersItem.addEventListener("click", openRightBlock);
    mobileItem.addEventListener("click", openRightBlock);
    lkItem.addEventListener("click", openRightBlock);

    // событие при нажатии на выход
    closeBut.addEventListener("click", closeModalWin);
}

// функция открытия подсказки
function openToolTip(){
    let tooltip = document.getElementById("tooltip");

    tooltip.style.display = "block";
}

// функция закрыть подсказку
function closeToolTip(){
    let tooltip = document.getElementById("tooltip");
    tooltip.style.display = "none";
}
// функция открыть левое меню
function openLeftMenu(){
    // находим левый блок меню
    let leftBlock = document.getElementById("left-block");
    // находим левую точку у пункта "общее"
    let dotGeneral = document.getElementById("dot-general");
    // находим содержимое пункта "общее"
    let generalBlock = document.getElementById("right-block-general");
    // находим кнопку закрыть
    let closeBut = document.getElementById("close-block");
    // иконка настроек
    let icon = document.getElementById("top-block-switch");
    // конкретно правый блок меню
    let rightBlock = document.getElementById("right-block");

    // говорим показать левый блок меню
    leftBlock.style.display = "block";
    // показываем точку у пункта общие
    dotGeneral.style.visibility = "visible";
    // показываем правый блок меню
    rightBlock.style.display = "block";
    // показываем содержимое пункта в правом блоке
    generalBlock.style.display = "block";
    // показываем кнопку закрыть
    closeBut.style.display = "block";
    // скрываем большую иконку настроек
    icon.style.display = "none";
}

// функция открывает правый блок меню
function openRightBlock(menuItem){
    // считываем как пункт левого меню был нажат и просим его айди
    let menuId = this.id;
    // дробим, чтобы получить название пункта менб
    let arr = menuId.split('-');
    // нам нужен 3й элемент в названии айдишника
    let menuItemId = arr[2];

    // находим элемент с таким же названием в правом блоке меню
    let rightItemId = "right-block-" + menuItemId;
    let rightItem = document.getElementById(rightItemId);

    // считываем все возможные значения для правого блока меню
    let generalBlock = document.getElementById("right-block-general");
    let mainItem = document.getElementById("right-block-main");
    let headerItem = document.getElementById("right-block-header");
    let topItem = document.getElementById("right-block-top");
    let regionItem = document.getElementById("right-block-region");
    let catalogItem = document.getElementById("right-block-catalog");
    let basketItem = document.getElementById("right-block-basket");
    let sectionsItem = document.getElementById("right-block-sections");
    let footerItem = document.getElementById("right-block-footer");
    let bannersItem = document.getElementById("right-block-banners");
    let mobileItem = document.getElementById("right-block-mobile");
    let lkItem = document.getElementById("right-block-lk");

    // считываем все точки у пунктов меню
    let dotGeneral = document.getElementById("dot-general");
    let dotMain = document.getElementById("dot-main");
    let dotHeader = document.getElementById("dot-header");
    let dotTop = document.getElementById("dot-top");
    let dotRegion = document.getElementById("dot-region");
    let dotCatalog = document.getElementById("dot-catalog");
    let dotBasket = document.getElementById("dot-basket");
    let dotSections = document.getElementById("dot-sections");
    let dotFooter = document.getElementById("dot-footer");
    let dotBanners = document.getElementById("dot-banners");
    let dotMobile = document.getElementById("dot-mobile");
    let dotLk = document.getElementById("dot-lk");

    // находим точку у нажатого пункта меню
    let dotId = "dot-" + menuItemId;
    let dot = document.getElementById(dotId);

    // скрываем все блоки содержимого, чтобы не было наслоения
    generalBlock.style.display = "none";
    mainItem.style.display = "none";
    headerItem.style.display = "none";
    topItem.style.display = "none";
    regionItem.style.display = "none";
    catalogItem.style.display = "none";
    basketItem.style.display = "none";
    sectionsItem.style.display = "none";
    footerItem.style.display = "none";
    bannersItem.style.display = "none";
    mobileItem.style.display = "none";
    lkItem.style.display = "none";

    // скрываем все точки у пунктов, чтобы не было сразу несколько горящих
    dotGeneral.style.visibility = "hidden";
    dotMain.style.visibility = "hidden";
    dotHeader.style.visibility = "hidden";
    dotTop.style.visibility = "hidden";
    dotRegion.style.visibility = "hidden";
    dotCatalog.style.visibility = "hidden";
    dotBasket.style.visibility = "hidden";
    dotSections.style.visibility = "hidden";
    dotFooter.style.visibility = "hidden";
    dotBanners.style.visibility = "hidden";
    dotMobile.style.visibility = "hidden";
    dotLk.style.visibility = "hidden";

    // показываем содержимого выбранного пункта меню и  показываем точку у этого пункта
    rightItem.style.display = "block";
    dot.style.visibility = "visible";

}
// функция закрытия модального окна
function closeModalWin(){
    let leftBlock = document.getElementById("left-block");
    let rightBlock = document.getElementById("right-block");
    let closeBut = document.getElementById("close-block");
    let icon = document.getElementById("top-block-switch");

    let dotGeneral = document.getElementById("dot-general");
    let dotMain = document.getElementById("dot-main");
    let dotHeader = document.getElementById("dot-header");
    let dotTop = document.getElementById("dot-top");
    let dotRegion = document.getElementById("dot-region");
    let dotCatalog = document.getElementById("dot-catalog");
    let dotBasket = document.getElementById("dot-basket");
    let dotSections = document.getElementById("dot-sections");
    let dotFooter = document.getElementById("dot-footer");
    let dotBanners = document.getElementById("dot-banners");
    let dotMobile = document.getElementById("dot-mobile");
    let dotLk = document.getElementById("dot-lk");

    dotGeneral.style.visibility = "hidden";
    dotMain.style.visibility = "hidden";
    dotHeader.style.visibility = "hidden";
    dotTop.style.visibility = "hidden";
    dotRegion.style.visibility = "hidden";
    dotCatalog.style.visibility = "hidden";
    dotBasket.style.visibility = "hidden";
    dotSections.style.visibility = "hidden";
    dotFooter.style.visibility = "hidden";
    dotBanners.style.visibility = "hidden";
    dotMobile.style.visibility = "hidden";
    dotLk.style.visibility = "hidden";

    leftBlock.style.display = "none";
    rightBlock.style.display = "none";
    closeBut.style.display = "none";
    icon.style.display = "block";
}

// выбор базового цвета в пункте "общие"
function chooseCl_btn(cl_btnId){
    let btns = document.querySelectorAll(".cl_btn");
    btns.forEach(btn => {
        btn.classList.remove('active');
  });

    let actBtn = document.getElementById(cl_btnId);
    actBtn.classList.add('active');
}


function chooseBtn(elem){
    let countClass = elem.classList.length;

    if(countClass == "1"){
        let elemClass = elem.classList[0];
        let elCl = "." + elemClass;
        let btns = document.querySelectorAll(elCl);
        btns.forEach(btn => {
            btn.classList.remove('active');
  });
    }
    else{
        let elemClass = elem.classList[1];
        let elCl = "." + elemClass;
        let btns = document.querySelectorAll(elCl);
        btns.forEach(btn => {
            btn.classList.remove('active');
    });}

    let actBtn = document.getElementById(elem.id);
    actBtn.classList.add('active');
}