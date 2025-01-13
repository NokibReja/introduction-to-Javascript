let num=0;
while (num <= 20) {
    num++;
    if (num%4 !== 0) {
        continue;
    }
    console.log(num);
}