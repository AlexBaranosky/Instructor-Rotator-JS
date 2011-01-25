 
 test('Four instructors per row', function() {
	equals(INSTRUCTORS_PER_ROW, 4);
 })
 
 test('can rotate an array', function() {
	equals(rotate([1, 2, 3], 1), [2, 3, 1] );
	equals(rotate([1, 2, 3, 4], 0), [1, 2, 3, 4] );
	equals(rotate([1, 2, 3, 4], 1), [2, 3, 4, 1] );
	equals(rotate([1, 2, 3, 4], 2), [3, 4, 1, 2] );
	equals(rotate([1, 2, 3, 4], 3), [4, 1, 2, 3] );
	equals(rotate([1, 2, 3, 4], 4), [1, 2, 3, 4] );
 })