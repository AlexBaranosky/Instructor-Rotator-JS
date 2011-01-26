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
 
 test('weeks since Jan 1, 2011', function() {
	same(weeksSinceJan012011(), 4);
 })
 
 test('week for now', function() {
	same(getWeek(new Date()), 5);
 })
 
 test('week for Jan 1 2011', function() {
	same(getWeek(new Date(2011, 0, 1)), 1);
 })
 
 test('confirming inject works as I expect', function() {
	same(["a", "b", "c", "d"].inject("", function(acc, letter) { return acc + letter; } ), "abcd");
 })
 
 test('can rotate an array', function() {
	same(rotate([1, 2, 3, 4], 0), [1, 2, 3, 4]);
	same(rotate([1, 2, 3, 4], 1), [2, 3, 4, 1]);
	same(rotate([1, 2, 3, 4], 2), [3, 4, 1, 2]);
	same(rotate([1, 2, 3, 4], 3), [4, 1, 2, 3]);
	same(rotate([1, 2, 3, 4], 4), [1, 2, 3, 4]);
 })

var instructor = { name: "USA", link: "http://flowingzen.com/index.html", imageLink: "/images/home/countries/c-usa01.jpg"};

var instructor2 = { name: "Venezuela", link: "http://www.shaolinwahnam.com.ve/", imageLink: "/images/home/countries/venezuela02.jpg" };

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
  <a href=\"http://www.shaolinwahnam.com.ve/\">\n\
    <img src=\"/images/home/countries/venezuela02.jpg\" alt=\"Venezuela\" />\n\
  </a>\n\
</td>\n\
</tr>\n\
<tr>\n\
<td>\n\
  <a href=\"http://flowingzen.com/index.html\">USA</a>\n\
</td>\n\
<td>\n\
  <a href=\"http://www.shaolinwahnam.com.ve/\">Venezuela</a>\n\
</td>\n\
</tr>\n\
</table>\n";	
	sameIgnoringWhitespace(renderTable([instructor, instructor2]), html);
 })
 
 
 
test('can generate instructor tables for a list of instructors, with no rotation applied', function() {
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
	var html = "<table class=\"websites-countries\">\n\
<tr><td>\n\
 <a href=\"http://www.maitreya.at/index.php?id_seiten=5\">\n\
   <img src=\"/images/home/countries/c-austria02c.jpg\" alt=\"Austria - Guthenstein\" />\n\
 </a>\n\
   </td>\n\
<td>\n\
 <a href=\"http://www.shaolinqigong.at/\">\n\
   <img src=\"/images/home/countries/c-austria01.jpg\" alt=\"Austria - Linz\" />\n\
 </a>\n\
   </td>\n\
<td>\n\
 <a href=\"http://www.wahnamaustralia.com/index.htm\">\n\
   <img src=\"/images/home/countries/c-australia01.jpg\" alt=\"Australia\" />\n\
 </a>\n\
   </td>\n\
<td>\n\
 <a href=\"http://www.shaolin-wahnam-center.org\">\n\
   <img src=\"/images/home/countries/c-blue-mountain03.jpg\" alt=\"Costa Rica\" />\n\
 </a>\n\
   </td>\n\
</tr>\n\
<tr><td>\n\
 <a href=\"http://www.maitreya.at/index.php?id_seiten=5\">Austria - Guthenstein</a>\n\
   </td>\n\
<td>\n\
 <a href=\"http://www.shaolinqigong.at/\">Austria - Linz</a>\n\
   </td>\n\
<td>\n\
 <a href=\"http://www.wahnamaustralia.com/index.htm\">Australia</a>\n\
   </td>\n\
<td>\n\
 <a href=\"http://www.shaolin-wahnam-center.org\">Costa Rica</a>\n\
   </td>\n\
</tr>\n\
</table>\n\
<table class=\"websites-countries\">\n\
<tr><td>\n\
 <a href=\"http://www.wahnam.ec/\">\n\
   <img src=\"/images/home/countries/c-quito-02.jpg\" alt=\"Ecuador\" />\n\
 </a>\n\
   </td>\n\
<td>\n\
 <a href=\"http://www.shaolinsummercamp.co.uk/\">\n\
   <img src=\"/images/home/countries/c-england02.jpg\" alt=\"England\" />\n\
 </a>\n\
   </td>\n\
<td>\n\
 <a href=\"http://www.innesmaran.com/swm.html\">\n\
   <img src=\"/images/home/countries/c-manchester.jpg\" alt=\"England Manchester\" />\n\
 </a>\n\
   </td>\n\
<td>\n\
 <a href=\"http://www.shaolin-wahnam.fi/\">\n\
   <img src=\"/images/home/countries/c-finland01.jpg\" alt=\"Finland\" />\n\
 </a>\n\
   </td>\n\
</tr>\n\
<tr><td>\n\
 <a href=\"http://www.wahnam.ec/\">Ecuador</a>\n\
   </td>\n\
<td>\n\
 <a href=\"http://www.shaolinsummercamp.co.uk/\">England</a>\n\
   </td>\n\
<td>\n\
 <a href=\"http://www.innesmaran.com/swm.html\">England Manchester</a>\n\
   </td>\n\
<td>\n\
 <a href=\"http://www.shaolin-wahnam.fi/\">Finland</a>\n\
   </td>\n\
</tr>\n\
</table>\n\
<table class=\"websites-countries\">\n\
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
</table>\n\
";
	same(generateInstructorTablesFor(instructors, 0), html);
 })
 
 test('test template', function() {
 
 })
 