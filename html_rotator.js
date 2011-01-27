jQuery.noConflict();

function insertNavigation() {
    var navigation_html = "<div id=\"navigation\">\n" +
                          "    <ul>\n" +
                          "        <li class=\"main has-no-subnavs last\"><a href=\"/general/healers-list.html\" title=\"Shaolin Wahnam Chi Kung Healers\">Healers</a></li>\n" +
                          "        <li class=\"main has-no-subnavs\"><a href=\"/general/instructors-list.html\" title=\"Find a Shaolin Wahnam Instructor Near You\">Instructors</a></li>\n" +
                          "        <li class=\"main\">\n" +
                          "            <a title=\"Questions and Answers by Grandmaster Wong Kiew Kit\">Q & A</a>\n" +
                          "            <ul class=\"subnav\">\n" +
                          "                <li><a href=\"/answers/overview.html\">Overview</a></li>\n" +
                          "                <li><a href=\"/answers/sp-issues/title.html\">Special Issues</a></li>\n" +
                          "                <li class=\"last\"><a href=\"/general/question-index.html\">Index</a></li>\n" +
                          "            </ul>\n" +
                          "        </li>\n" +
                          "        <li class=\"main\">\n" +
                          "            <a title=\"Wahnam Video Clips\">Videos</a>\n" +
                          "            <ul class=\"subnav\">\n" +
                          "                <li><a href=\"/general/videos.html\">Overview</a></li>\n" +
                          "                <li><a href=\"/general/videos-course-reviews.html\">Course Reviews</a></li>\n" +
                          "                <li class=\"last\"><a href=\"/general/videos-kungfu-sets.html\">Kungfu Sets</a></li>\n" +
                          "            </ul>\n" +
                          "        </li>\n" +
                          "        <li class=\"main\">\n" +
                          "            <a title=\"Courses With Grandmaster Wong Kiew Kit\">Courses</a>\n" +
                          "            <ul class=\"subnav\">\n" +
                          "                <li><a href=\"/general/ck-course.html\">Intensive Chi Kung Course</a></li>\n" +
                          "                <li><a href=\"/general/kf-course.html\">Intensive Shaolin Kungfu Course</a></li>\n" +
                          "                <li class=\"last\"><a href=\"/#regional-courses\">Regional Courses</a></li>\n" +
                          "            </ul>\n" +
                          "        </li>\n" +
                          "        <li class=\"main\">\n" +
                          "            <a title=\"Discussion With Other Students at the Shaolin Wahnam Virtual Kwoon\">Discussion</a>\n" +
                          "            <ul class=\"subnav\">\n" +
                          "                <li><a href=\"http://wongkiewkit.com/forum/\">Virtual Kwoon & Discussion Forum</a></li>\n" +
                          "                <li class=\"last\"><a href=\"/discussion/discussion.html\">Discussion Archives</a></li>\n" +
                          "            </ul>\n" +
                          "        </li>\n" +
                          "        <li class=\"main\">\n" +
                          "            <a>Content</a>\n" +
                          "            <ul class=\"subnav\">\n" +
                          "                <li><a href=\"/general/table.html\">Table of Contents</a></li>\n" +
                          "                <li><a href=\"/review/review.html\">Instructional Review</a></li>\n" +
                          "                <li><a href=\"/combat/combat.html\">Combat Applications</a></li>\n" +
                          "                <li class=\"last\"><a href=\"/comments/comments.html\">Student's Comments</a></li>\n" +
                          "            </ul>\n" +
                          "        </li>\n" +
                          "        <li class=\"main has-no-subnavs\"><a href=\"/\" title=\"Shaolin Wahnam: Shaolin Kungfu, Chi Kung, Taijiquan and Zen\">Home</a></li>\n" +
                          "    </ul>\n" +
                          "</div>";

    jQuery(navigation_html).insertAfter("#header");
}

function makeSubNavsDynamic() {
    var expandSubnavs = function() {
        jQuery(this).children('.subnav').show()
    };

    var collapseSubnavs = function() {
        jQuery(this).children('.subnav').hide()
    };

    jQuery("#navigation li.main").bind('mouseover', expandSubnavs)
            .bind('mouseout', collapseSubnavs);
};

function showRandomQuote() {  
    var whichQuote = Math.round(Math.random() * (SIFU_QUOTES.length - 1));
    jQuery("p#sifu-quote").html(SIFU_QUOTES[whichQuote]);
}

function renderTopRowCell(instructor) {
    return "<td>\n\
 <a href=\"" + instructor.link + "\">\n\
   <img src=\"" + instructor.imageLink + "\" alt=\"" + instructor.name + "\" />\n\
 </a>\n\
   </td>\n";
}

function renderBottomRowCell(instructor) {
    return "<td>\n\
 <a href=\"" + instructor.link + "\">" + instructor.name + "</a>\n\
   </td>\n";
}

function renderTable(instructors) {
    var topRow = instructors.inject("", function(cells, instructor) {
        return cells + renderTopRowCell(instructor)
    });

    var bottomRow = instructors.inject("", function(cells, instructor) {
        return cells + renderBottomRowCell(instructor)
    });

    return "<table class=\"websites-countries\">\n" +
           "<tr>" + topRow + "</tr>\n" +
           "<tr>" + bottomRow + "</tr>\n" +
           "</table>\n";
}

function rotate(arr, numToRotate) {
    var rotated = [];
    var i;
    for (i = 0; i < arr.length; i++) {
        var rotated_i = (i + numToRotate) % arr.length;
        rotated[i] = arr[rotated_i];
    }
    return rotated;
}

var INSTRUCTORS_PER_ROW = 4;

function generateInstructorTablesFor(instructors, numRowsToRotate) {
    var rotatedInstructors = rotate(instructors, INSTRUCTORS_PER_ROW * numRowsToRotate);
    var rows = rotatedInstructors.eachSlice(INSTRUCTORS_PER_ROW);
  
    return rows.inject("", function(tables, row) {
        return tables + renderTable(row);
    });
}

function getWeek(date) {
	var onejan = new Date(date.getFullYear(),0,1);
	return Math.ceil((((date - onejan) / 86400000) + onejan.getDay()+1)/7);
}

function weeksSinceJan012011() {
	var jan012011 = new Date(2011, 0, 1);
	var janWeek = getWeek(jan012011);

	var today = new Date();
	var thisWeek = getWeek(today);

	var extraYears = today.getYear() - jan012011.getYear();

    return thisWeek - janWeek + (52 * extraYears);
}

function replaceInstructorTablesWith(instructors) {
    var instructorTables = generateInstructorTablesFor(instructors, weeksSinceJan012011());
    jQuery("#instructor-websites").after("<div>" + instructorTables + "</div>").remove();
}

function applyAllJavascript() {
    insertNavigation();
    makeSubNavsDynamic();
    showRandomQuote();
    replaceInstructorTablesWith(INSTRUCTORS);
}

jQuery(document).ready(applyAllJavascript);

