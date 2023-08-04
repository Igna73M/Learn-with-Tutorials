const challenges = document.querySelector('#Challenges');
const showChallenges = document.querySelector('.show');

showChallenges.addEventListener('click', () =>
{
    challenges.classList.toggle('hide');
    showChallenges.classList.toggle('color');
})