const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.querySelectorAll('.enquiry-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const subject = `CyWareGroups enquiry — ${data.get('service') || 'Security consultation'}`;
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Work email: ${data.get('email') || ''}`,
      `Company: ${data.get('company') || 'Not provided'}`,
      `Service: ${data.get('service') || 'Not selected'}`,
      `Timeline: ${data.get('timeline') || 'Not provided'}`,
      '',
      'Goals / context:',
      data.get('message') || 'Not provided'
    ].join('\n');

    const formNote = form.querySelector('.form-note');
    if (formNote) {
      formNote.textContent = 'Your email app is opening with the enquiry prepared.';
      formNote.style.color = '#13743b';
    }
    window.location.href = `mailto:hello@cywaregroups.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
