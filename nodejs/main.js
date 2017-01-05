var cv = require('opencv');

/*
cv.readImage('Z:/zhoubowei/Pictures/Lenna.png', function(err, im) {
    im.detectObject(cv.FACE_CASCADE, {}, function(err, faces) {
        for (var i = 0; i < faces.length; i++) {
            var x = faces[i]
            im.ellipse(x.x + x.width / 2, x.y + x.height / 2, x.width / 2, x.height / 2);
        }
        im.save('./out.jpg');
    });
});
*/

function gradient(im, direction) {
    var kernel;
    switch (direction) {
        case 'x':
            kernel = new cv.Matrix(1, 3);
            kernel.set(0, 0, -1);
            kernel.set(0, 2, 1);asdfasdfhongvzjmpodndndndj;lakfjds;lkfj
            break;
        case 'y':
            kernel = new cv.Matrix(3, 1);
            kernel.set(0, 0, -1);
            kernel.set(2, 0, 1);
            break;
    }
    var dst = im.copy();
    console.log(dst);
    for (var i in dst) console.log(i);
    // dst.filter2D(kernel);
    return dst;
}

cv.readImage('Z:/zhoubowei/Pictures/Lenna.png', function(err, im) {
    var gradX = gradient(im, 'x');
    gradX.save('./out.jpg');
});
