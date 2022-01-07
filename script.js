const items = document.querySelectorAll('.item');

let lock = false;

const handleOpen = cur => {
  if (lock) {
    return;
  }

  lock = true;

  setTimeout(() => {
    lock = false;
  }, 500);

  items.forEach(item => {
    if (item === cur) {
      item.classList.toggle('open');
    } else {
      item.classList.remove('open');
    }
  });
};

items.forEach(item => {
  const btn = item.querySelector('.open-btn');
  btn.addEventListener('click', function () {
    handleOpen(item);
  });
});
