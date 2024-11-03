let h = 300 * 1.73;
let n;
let buffer = 365;
let xscale;
function setup() {
    createCanvas(1200, 1200); //임시
    stroke(0);
    background(150);
}
function draw() {
    background(150);
    strokeWeight(5);
    line(365, 200, 835, 200);
    fill(255);
    ellipse(buffer, 200, 100, 100);
    n = int((buffer - 365) / 10);
    textSize(50);
    text(n, 600, 100);
    strokeWeight(2);
    fill(0, 0, 255);
    c(0);
    fill(0, 255, 0);
    c(0.5);
    fill(255, 0, 0);
    c(1);
    fill(255, 255, 255, 100);
    arc(600, h + 500, 600, 100, 0, radians(180));
    line(600, 500, 300, h + 500);
    line(600, 500, 900, h + 500);
    stroke(0, 0, 0, 0);
    triangle(600, 500, 300, h + 500, 900, h + 500);
    stroke(0);
}
function mouseDragged() {
    if (
        mouseX <= buffer + 50 &&
        mouseX >= buffer - 50 &&
        mouseY <= 250 &&
        mouseY >= 150
    ) {
        if (mouseX < 365) buffer = 365;
        else if (mouseX > 835) buffer = 835;
        else buffer = mouseX;
    }
}
function c(idot) {
    for (let i = n; i >= 1; i--) {
        xscale = n / (i - idot);
        xscale = 600 / xscale;
        stroke(0);
        ellipse(600, (h / n) * i + 500, xscale, xscale / 6);
        stroke(0, 0, 0, 0);
        rect(600 - xscale / 2, (h / n) * (i - 1) + 500, xscale, h / n);
        stroke(0);
        ellipse(600, (h / n) * (i - 1) + 500, xscale, xscale / 6); //이가은, 생각을 포기하고 복붙하다. 이 코드를 누가 보면 개멍청하다고 놀리겠지...
        line(
            600 - xscale / 2,
            (h / n) * (i - 1) + 500,
            600 - xscale / 2,
            (h / n) * i + 500
        );
        line(
            600 + xscale / 2,
            (h / n) * (i - 1) + 500,
            600 + xscale / 2,
            (h / n) * i + 500
        );
    }
}
