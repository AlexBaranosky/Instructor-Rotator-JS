 function removeWhitespace(s) {
   return s.gsub(/\s+/, "")
}

 function sameIgnoringWhitespace(actual, expected) {
	return same(removeWhitespace(actual), removeWhitespace(expected));
 }
 
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
	sameIgnoringWhitespace(renderTopRowCell(instructor), html);
 })

test('renders bottom row element as link with text of the instructors name', function() {
	var html = 
"  <td>\n\
  <a href=\"http://flowingzen.com/index.html\">USA</a>\n\
</td>\n";	
	sameIgnoringWhitespace(renderBottomRowCell(instructor), html);
 })
 
 test('tables render right with one instructor', function() {
	var html = 
"<table class=\"websites-countries\">\n\
<tr><td>\n\
  <a href=\"http://flowingzen.com/index.html\">\n\
    <img src=\"/images/home/countries/c-usa01.jpg\" alt=\"USA\" />\n\
  </a>\n\
</td>\n\
</tr>\n\
<tr><td>\n\
  <a href=\"http://flowingzen.com/index.html\">USA</a>\n\
</td>\n\
</tr>\n\
</table>\n";	
	sameIgnoringWhitespace(renderTable([instructor]), html);
 })
 
 test('tables render right with two instructors', function() {
	var html = 
"<table class=\"websites-countries\">\n\
  <tr><td>\n\
  <a href=\"http://flowingzen.com/index.html\">\n\
    <img src=\"/images/home/countries/c-usa01.jpg\" alt=\"USA\" />\n\
  </a>\n\
</td>\n\
<td>\n\
  <a href=\"http://flowingzen.com/index.html\">\n\
    <img src=\"/images/home/countries/c-usa01.jpg\" alt=\"USA\" />\n\
  </a>\n\
</td>\n\
</tr>\n\
<tr>\n\
<td>\n\
  <a href=\"http://flowingzen.com/index.html\">USA</a>\n\
</td>\n\
<td>\n\
  <a href=\"http://flowingzen.com/index.html\">USA</a>\n\
</td>\n\
</tr>\n\
</table>\n";	
	sameIgnoringWhitespace(renderTable([instructor, instructor]), html);
 })
 
 var instructors = [
            {   name: "Austria - Guthenstein",
                link: "http://www.maitreya.at/index.php?id_seiten=5",
                imageLink: "/images/home/countries/c-austria02c.jpg"
            },
            {    name: "Austria - Linz",
                link: "http://www.shaolinqigong.at/",
                imageLink: "/images/home/countries/c-austria01.jpg"
            },
            {    name: "Australia",
                link: "http://www.wahnamaustralia.com/index.htm",
                imageLink: "/images/home/countries/c-australia01.jpg"
            },
            {    name: "Costa Rica",
                link: "http://www.shaolin-wahnam-center.org",
                imageLink: "/images/home/countries/c-blue-mountain03.jpg"
            },
            {    name: "Ecuador",
                link: "http://www.wahnam.ec/",
                imageLink: "/images/home/countries/c-quito-02.jpg"
            },
            {    name: "England",
                link: "http://www.shaolinsummercamp.co.uk/",
                imageLink: "/images/home/countries/c-england02.jpg"
            },
            {    name: "England Manchester",
                link: "http://www.innesmaran.com/swm.html",
                imageLink: "/images/home/countries/c-manchester.jpg"
            },
            {    name: "Finland",
                link: "http://www.shaolin-wahnam.fi/",
                imageLink: "/images/home/countries/c-finland01.jpg"
            }, instructor];
 
 test('', function() {
	var html = "";
	sameIgnoringWhitespace(generateInstructorTablesFor(instructors), html);
 })
 
 test('test template', function() {
 
 })
 