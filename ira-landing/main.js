
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    dotsEach: true,
});
});

const tabHeaderInclude = document.querySelector('.tab-header .include');
const tabHeaderExclude = document.querySelector('.tab-header .exclude');
const tabBodyInclude = document.querySelector('.tab-body-include');
const tabBodyExclude = document.querySelector('.tab-body-exclude');
const tabHeader = document.querySelector('.tab-header');

tabHeader.addEventListener('click', (e) => {
  const target = e.target;
  
  if (target?.className?.includes('include') && !target?.className?.includes('active')) {
    target.classList.add('active');
    tabBodyInclude.classList.add('tab-body-active');
    tabBodyExclude.classList.remove('tab-body-active');
    return tabHeaderExclude.classList.remove('active');
  }
  if (target?.className?.includes('exclude') && !target?.className?.includes('active')) {
    target.classList.add('active');
    tabBodyExclude.classList.add('tab-body-active');
    tabBodyInclude.classList.remove('tab-body-active');
    return tabHeaderInclude.classList.remove('active');
  }
});

const faqBody = document.querySelector('.faq-body');

faqBody.addEventListener('click', (e) => {
  const target = e.target;

  if (!target?.parentElement?.className?.includes('item-container')) { return; }
  const faqItem = target?.parentElement?.parentElement;
  console.log(faqItem)
  if (faqItem?.className?.includes('active')) {
    faqItem.classList.remove('active');
  } else if (faqItem?.className?.includes('faq-item')) {
    const activeFaq = faqBody.querySelector('.faq-item.active');

    if (activeFaq) {
      activeFaq.classList.remove('active');
    }
    faqItem.classList.add('active');
  }
});