 
 test('Four instructors per row', function() {
	same(INSTRUCTORS_PER_ROW, 4);
 })
 
 test('', function() {
	same([1, 2, 3, 4].min(), 1);
 })
 
 test('', function() {
	same([1, 2, 3, 4].eachSlice(2), [[1, 2], [3, 4]]);
 })
 
 test('can rotate an array', function() {
	same(rotate([1, 2, 3, 4], 0), [1, 2, 3, 4] );
	same(rotate([1, 2, 3, 4], 1), [2, 3, 4, 1] );
	same(rotate([1, 2, 3, 4], 2), [3, 4, 1, 2] );
	same(rotate([1, 2, 3, 4], 3), [4, 1, 2, 3] );
	same(rotate([1, 2, 3, 4], 4), [1, 2, 3, 4] );
 })