
const slider = document.getElementById('slider')

const price = document.getElementById('price');
const pageview = document.getElementById('pageview');
const yearly = document.getElementById('toggle');
// const toggle = document.getElementById('toggle');

slider.addEventListener('input', function(){
    var value = slider.value;
    this.style.background = ` linear-gradient(to right, var(--full) 0%, var(--full) ${value}%, var(--empty) ${value}%, var(--empty) 100%)`;

console.log(value);

    if (value < 20) {
        pageview.innerHTML = '10K';
        price.innerHTML = yearly.checked ? '6.00': '8.00';
      } else if (20 < value && value < 40) {
        pageview.innerHTML = '50K';
        price.innerHTML = yearly.checked ? '9.00': '12.00';
      } else if (40 < value && value < 60) {
        pageview.innerHTML = '100K';
        price.innerHTML = yearly.checked ? '12.00': '16.00';
      } else if (60 < value && value < 80) {
        pageview.innerHTML = '500K';
        price.innerHTML = yearly.checked ? '18.00': '24.00';
      } else {
        pageview.innerHTML = '1M';
        price.innerHTML = yearly.checked ? '27.00': '36.00';
      }

})






// Here are the different page view ranges and the corresponding monthly price totals:

// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

// If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.
