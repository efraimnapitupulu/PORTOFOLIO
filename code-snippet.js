// Toggle Menu
const menuToggle = document.getElementById('menuToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

menuToggle.addEventListener('click', () => {
  const isOpen = dropdownMenu.classList.contains('open');
  dropdownMenu.classList.toggle('open', !isOpen);
  if (!isOpen) {
    // Menutup jika tombol diklik di luar
    document.addEventListener('click', closeMenuOutside, { once: true });
  }
});

function closeMenuOutside(e) {
  if (!dropdownMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    dropdownMenu.classList.remove('open');
  }
}

// Fungsi klik pada menu item: tutup menu
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    dropdownMenu.classList.remove('open');
  });
});
