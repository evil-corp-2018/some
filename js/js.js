if (window.applicationCache==undefined) {
    console.log('API is not available');
} else {
    console.log('API available');
}
if (navigator.onLine) {
  console.log('online')
} else {
  console.log('offline');
}
