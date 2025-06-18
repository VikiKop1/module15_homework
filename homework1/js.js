 const btn = document.querySelector('.j-btn-test');

  if (btn) {
    btn.addEventListener('click', () => {
      btn.classList.toggle('btn--magic');

      const icon1 = document.getElementById('icon1');
      const icon2 = document.getElementById('icon2');

      if (icon1 && icon2) {
        icon1.classList.toggle('hidden');
        icon2.classList.toggle('hidden');
      }
    });
  }