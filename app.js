const card = document.querySelector('.card');
const container = document.querySelector('.container');
const info = document.querySelector('.info');
const sneaker = document.querySelector('.sneaker img');
const purchaseBtn = document.querySelector('.purchase');
const SizesBtns = document.querySelector('.sizes');


function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

  const add3DAnimation = el =>  el.style.transform = 'translateZ(150px)';
  const remove3DAnimation = el =>  el.style.transform = 'translateZ(0px)';

container.addEventListener("mousemove", (e) => {
    const squareBox = getOffset(container);
    
    let xAxis = ((container.offsetWidth/2) - (e.pageX - squareBox.left))/15;
    let yAxis = ((container.offsetHeight/2) - ( e.pageY - squareBox.top))/15;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

container.addEventListener('mouseenter', (e) => {
    card.style.transition = 'none';
    sneaker.style.transform = 'translateX(200px)';
    add3DAnimation(info);
    add3DAnimation(sneaker);
    add3DAnimation(purchaseBtn);
    add3DAnimation(SizesBtns);
})

container.addEventListener('mouseleave', (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';

    remove3DAnimation(info);
    remove3DAnimation(sneaker);
    remove3DAnimation(purchaseBtn);
    remove3DAnimation(SizesBtns);
})