test('isEven()', function() { 
     ok(isEven(0), 'Zero is an even number');  
     ok(isEven(2), 'So is two'); 
     ok(isEven(-4), 'So is negative four');  
     ok(!isEven(1), 'One is not an even number'); 
     ok(!isEven(-7), 'Neither is negative seven');  
 }) 
 
 test('Four instructors per row', function() {
	equals(INSTRUCTORS_PER_ROW, 4);
 })
 
 test('can rotate an array', function() {
	equals(rotate([1, 2, 3, 4], 2), [3, 4, 1, 2] );
 })