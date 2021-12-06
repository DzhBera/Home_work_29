nextPrime:
for (var i = 2; i < 10; i++) {

  for (var n = 2; n < i; n++) {
    if (i % n == 0) continue nextPrime;
  }

  console.log ( i ); 
}




