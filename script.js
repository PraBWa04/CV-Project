document.querySelectorAll('.benefit-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

function updateLearningDuration() {
    const startDate = new Date('2023-10-01');
    const currentDate = new Date();
    const differenceInTime = currentDate.getTime() - startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    const months = Math.floor(differenceInDays / 30);
    const days = Math.floor(differenceInDays % 30);
    
    document.querySelector('.learning-duration').textContent = `Started learning frontend development: ${months} months and ${days} days ago.`;
}

document.addEventListener('DOMContentLoaded', updateLearningDuration);