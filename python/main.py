import sys
sys.path.append('c:/python27/lib/site-packages')
import cv2

# direction: 'x' or 'y'
def grad(img, direction):
    return img

def load(path):
    img = cv2.imread(path)
    return img

def main():
    img = load('Z:/zhoubowei/Pictures/Lenna.png')
    img_grad = grad(img, 'x')
    cv2.imshow('', img_grad)

main()
