# coding: utf-8
def choose(num, l):
    random.shuffle(l)
    print l[num % len(l)]
    
