### JavaScript (game.js)

```javascript
const car = document.getElementById('car');
let position = 0; // Start position
const speed = 10; // Speed of the car

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight') {
        moveRight();
    }
});

function moveRight() {
    if (position < window.innerWidth - 30) { // 30 is the width of the car
        position += speed;
        car.style.left = position + 'px';
    }
}
```
