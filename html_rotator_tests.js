 
 test('Four instructors per row', function() {
	same(INSTRUCTORS_PER_ROW, 4);
 })
 
 test('confirming eachSlice method works as I expect', function() {
	same([1, 2, 3, 4].eachSlice(2), [[1, 2], [3, 4]]);
 })
 
 test('can rotate an array', function() {
	same(rotate([1, 2, 3, 4], 0), [1, 2, 3, 4]);
	same(rotate([1, 2, 3, 4], 1), [2, 3, 4, 1]);
	same(rotate([1, 2, 3, 4], 2), [3, 4, 1, 2]);
	same(rotate([1, 2, 3, 4], 3), [4, 1, 2, 3]);
	same(rotate([1, 2, 3, 4], 4), [1, 2, 3, 4]);
 })

var instructor = { name: "USA", link: "http://flowingzen.com/index.html", imageLink: "/images/home/countries/c-usa01.jpg"};

test('renders top row element as a link with an image in it', function() {
	var html = 
"<td>\n\
  <a href=\"http://flowingzen.com/index.html\">\n\
    <img src=\"/images/home/countries/c-usa01.jpg\" alt=\"USA\" />\n\
  </a>\n\
</td>\n";	
	same(Jaml.render('topRow', instructor), html);
 })

test('renders bottom row element as link with text of the instructors name', function() {
	var html = 
"<td>\n\
  <a href=\"http://flowingzen.com/index.html\">USA</a>\n\
</td>\n";	
	same(Jaml.render('bottomRow', instructor), html);
 })
 
 test('test template', function() {
 
 })
 