  const ratingItems = document.querySelectorAll('.ratings li');
  let selectedRating = null;

  ratingItems.forEach((item) => {
    item.addEventListener('click', () => {
      ratingItems.forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');
      selectedRating = item.textContent;
    });
  });

  const button = document.querySelector('button');

  button.addEventListener('click',() => {
    if(selectedRating === null) alert("Please select a rating");
    else{
        document.getElementById('card').style.display = 'none';
        document.getElementById('thank-you-card').style.display = 'block';
        document.getElementById('selected').textContent = 'You selected ' + selectedRating + ' out of 5'

    }
  })
