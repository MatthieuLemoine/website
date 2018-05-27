if (
  process.env.NODE_ENV === 'production' &&
  typeof window !== 'undefined' &&
  'serviceWorker' in navigator
) {
  navigator.serviceWorker
    .register('/sw.js', {
      scope: './',
    })
    .then(() => console.log('Service Worker registered'))
    .catch(e => console.error('Error during service worker registration:', e));
}
