import os
import sys
sys.path.append('/usr/local/lib/python2.7/site-packages')
import cv2
import time
from PIL import Image
import numpy as np


# direction: 'x' or 'y'
def grad(img, direction):
    kernel = np.zeros((1, 3))
    kernel[0][0] = -1
    kernel[0][2] = 1
    if direction == 'y':
        kernel = np.zeros((3, 1))
        kernel[0][0] = -1
        kernel[2][0] = 1

    dst = cv2.filter2D(img, -1, kernel)

    return dst

def load(path):
    img = cv2.imread(path)
    return img

def main():
    img = load('/Users/zhoubowei/Pictures/excited.jpeg')
    img_grad = grad(img, 'x')
    cv2.imshow('', img_grad)
    cv2.waitKey()

main()
