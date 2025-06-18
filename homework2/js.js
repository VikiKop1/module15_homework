const btn = document.querySelector('.j-btn-test');

btn.addEventListener('click', () => {
  alert(`Ширина: ${document.documentElement.clientWidth}\nВысота: ${document.documentElement.clientHeight}`);
});