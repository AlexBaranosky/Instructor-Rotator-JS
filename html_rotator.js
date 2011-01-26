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

    $(navigation_html).insertAfter("#header");
}

function makeSubNavsDynamic() {
    var expandSubnavs = function() {
        $(this).children('.subnav').show()
    };

    var collapseSubnavs = function() {
        $(this).children('.subnav').hide()
    };

    $("#navigation li.main").bind('mouseover', expandSubnavs)
            .bind('mouseout', collapseSubnavs);
}

var INSTRUCTORS_PER_ROW = 4;

var INSTRUCTORS =
        [
            {    name: "Austria - Guthenstein",
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
            },
            {    name: "France",
                link: "http://www.shaolinwahnamfrance.com/",
                imageLink: "/images/home/countries/c-eiffel02.jpg"
            },
            {    name: "Germany",
                link: "http://www.shaolin-wahnam.de/hauptrahmen.htm",
                imageLink: "/images/home/countries/c-germany01.jpg"
            },
            {    name: "Germany Nord",
                link: "http://www.shaolinwahnam-nord.de/",
                imageLink: "/images-3/places/lubeck01.jpg"
            },
            {    name: "Happy Healthy Centre",
                link: "http://www.happyhealthcentre.co.uk/index.html",
                imageLink: "/images/home/countries/c-happy-health-centre.jpg"
            },
            {    name: "Holland",
                link: "http://www.shaolinholland.com/",
                imageLink: "/images/home/countries/c-holland01.jpg"
            },
            {    name: "Ireland",
                link: "http://www.smilefromtheheart.ie/",
                imageLink: "/images/home/countries/c-ireland01.jpg"
            },
            {    name: "Italy",
                link: "http://www.puntaest.com/",
                imageLink: "/images/home/countries/c-italy01.jpg"
            },
            {    name: "Kuala Lumpur",
                link: "http://shaolinwahnammalaysia.wordpress.com/",
                imageLink: "/images-general/places/kuala-lumpur01.jpg"
            },
            {    name: "Las Vegas",
                link: "http://www.eliteqigong.com/results.html",
                imageLink: "/images/home/countries/c-las-vegas01.jpg"
            },
            {    name: "London",
                link: "http://www.wahnam.blogspot.com/",
                imageLink: "/images/home/countries/c-london01.jpg"
            },
            {    name: "Malaysia",
                link: "http://www.shaolin-wahnam.org",
                imageLink: "/images/home/countries/c-malaysia01.jpg"
            },
            {    name: "Mississauga, Canada",
                link: "http://www.shaolinwm.com/",
                imageLink: "/images/home/countries/c-mississauga.jpg"
            },
            {    name: "Netherlands",
                link: "http://www.shaolinwahnam.nl/index_main.html",
                imageLink: "/images/home/countries/c-amsterdam01.jpg"
            },
            {    name: "New York City",
                link: "http://www.grandmasterwong.com/",
                imageLink: "/images/home/countries/c-new-york04.jpg"
            },
            {    name: "Portugal",
                link: "http://www.shaolin-wahnam-portugal.com/contactos.htm",
                imageLink: "/images/home/countries/c-portugal01.jpg"
            },
            {    name: "Qigong Private Clinic",
                link: "http://www.qigongprivateclinic.com/",
                imageLink: "/images/home/countries/qigong-clinic01.jpg"
            },
            {    name: "Russia",
                link: "http://www.chiflow.ru/",
                imageLink: "/images/home/countries/russia-160.jpg"
            },
            {    name: "Sabah Malaysia",
                link: "http://shaolinwahnamsabah.com",
                imageLink: "/images/home/countries/sabah07a.jpg"
            },
            {    name: "Shaolin Healing",
                link: "http://shaolinhealing.com/",
                imageLink: "/images/home/countries/shaolin-healing01.jpg"
            },
            {    name: "Singapore",
                link: "http://www.wahnamsg.com/",
                imageLink: "/images/home/countries/c-singapore.jpg"
            },
            {    name: "Southern England",
                link: "http://www.cosmosarts.com/",
                imageLink: "/images/home/countries/c-dorset01.jpg"
            },
            {    name: "Spain - Alicante",
                link: "http://www.chikungalicante.es/",
                imageLink: "/images/home/countries/alicante01.jpg"
            },
            {
                name: "Spain - Barcelona 1",
                link: "http://www.chikung-bcn.com/",
                imageLink: "/images/home/countries/c-barcelona01.jpg"
            },
            {    name: "Spain - Barcelona 2",
                link: "http://www.shaolinbcn.com/",
                imageLink: "/images/home/countries/c-barcelona02.jpg"
            },
            {    name: "Spain - Madrid",
                link: "http://www.wahnammadrid.org/",
                imageLink: "/images/home/countries/c-madrid01.jpg"
            },
            {    name: "Spain - San Sebastian",
                link: "http://www.euskalnet.net/psicosalud/andorra.htm",
                imageLink: "/images/home/countries/c-san-sebastian01.jpg"
            },
            {    name: "Switzerland",
                link: "http://www.shaolin-wahnam.ch",
                imageLink: "/images/home/countries/c-switzerland01.jpg"
            },
            {    name: "Switzerland 2",
                link: "http://www.enerqi.ch/",
                imageLink: "/images/home/countries/c-enerqi.jpg"
            },
            {    name: "Switzerland 3",
                link: "http://www.taichichuan-wahnam.ch/",
                imageLink: "/images/home/countries/switzerland04a.jpg"
            },
            {    name: "USA",
                link: "http://flowingzen.com/index.html",
                imageLink: "/images/home/countries/c-usa01.jpg"
            },
            {    name: "USA - West",
                link: "http://www.eliteqigong.com/",
                imageLink: "/images/home/countries/c-california01.jpg"
            },
            {    name: "Venezuela",
                link: "http://www.shaolinwahnam.com.ve/",
                imageLink: "/images/home/countries/venezuela02.jpg"
            },
            {    name: "Wahnam Tai Chi Chuan Thailand",
                link: "http://taichichuanthailand.com/",
                imageLink: "/images/home/countries/thailand01.jpg"
            },
            {    name: "Zen Treasures",
                link: "http://www.zentreasures.com/",
                imageLink: "/images/home/countries/c-edinburgh03.jpg"
            }
        ];

function renderTopRowCell(instructor) {
	return "<td>\n\
  <a href=\"" + instructor.link + "\">\n\
    <img src=\"" + instructor.imageLink + "\" alt=\"" + instructor.name + "\" />\n\
  </a>\n\
</td>\n";
}

function renderBottomRowCell(instructor) {
	return "<td>\n\
  <a href=\""+ instructor.link + "\">" + instructor.name + "</a>\n\
</td>\n";
}

function renderTable(instructors) {
	var topRow = instructors.inject("", function(acc, intructor) {
        return acc + renderTopRowCell(instructor)
    });
    var bottomRow = instructors.inject("", function(acc, intructor) {
        return acc + renderBottomRowCell(instructor)
    });
	
	return "<table class=\"websites-countries\">\n" +
		"<tr>" + topRow + "</tr>\n" +
		"<tr>" + bottomRow + "</tr>\n" +
	"</table>\n";
}

function weeksSinceAugust262010() {
    var milliSecondsInWeek = 604800000;
    var august262010inMillis = 9;
    var now = getTime();
    return Math.abs(now - august262010inMillis) / milliSecondsInWeek
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

function generateInstructorTablesFor(instructors) {
    var rows = instructors.eachSlice(INSTRUCTORS_PER_ROW);
    var numRowsToRotate = 1; //weeksSinceAugust262010();
    var rotatedRows = rotate(rows, INSTRUCTORS_PER_ROW * numRowsToRotate);

    return rotatedRows.inject("", function(acc, rowOfInstructors) {
        return acc + renderTable(rowOfInstructors);   
    });
}

function replaceInstructorTablesWith(instructors) {
    var instructorTables = generateInstructorTablesFor(instructors);
    $(instructorTables).insertBefore("table.websites-countries:first");
    $("table.websites-countries").remove();
}

function applyAllJavascript() {
    insertNavigation();
    makeSubNavsDynamic();
    replaceInstructorTablesWith(INSTRUCTORS);
}

$(document).ready(applyAllJavascript);







