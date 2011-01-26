jQuery.noConflict();

Date.prototype.getWeek = function() {
    var determinedate = new Date();
    determinedate.setFullYear(this.getFullYear(), this.getMonth(), this.getDate());
    var D = determinedate.getDay();
    if(D == 0) D = 7;
    determinedate.setDate(determinedate.getDate() + (4 - D));
    var YN = determinedate.getFullYear();
    var ZBDoCY = Math.floor((determinedate.getTime() - new Date(YN, 0, 1, -6)) / 86400000);
    var WN = 1 + Math.floor(ZBDoCY / 7);
    return WN;
}

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
    var quotes =
            ["A Shaolin disciple, for example, is trained to be courteous and considerate, brave and righteous, assess problems and situations with calmness and clarity, and attend to duties with zest and loyalty. While the philosophy of many martial arts mainly focuses on how to be stoic and hurt the opponent, Shaolin philosophy teaches gentleness and a love for life. The twin pillars of Shaolin philosophy are compassion and wisdom.",

                "Daily practise the apparently simple exercise of breathing in and out slowly and deeply. At the end of this exercise, close your eyes gently (if you have not closed them earlier), and gently visualize that you are radiating good energy so powerful that - in some mysterious ways which you need not have to know why or how - even if the crooks found you, they could not harm you. Meanwhile, think of good thoughts and do good deeds whenever you can. Good energy is simply incompatible with minds and deeds that are evil.",

                "Goodness always triumphs.",

                "Very good. Carry on!",

                "When masters of the past attained a real breakthrough of Small Universe, they would never become sick anymore, or more accurately, they would have overcome 100 diseases. Furthermore, when a Master attained a real breakthrough in the Big Universe, he would live up to a 100 years, or never die. This (the big Universe) is what we are going to learn tomorrow.",

                "Relax, relax and relax.",

                "And this is very important: smile from your heart...",

                "Smiiiiiiiiiiiiiiiiile from the heart... Dont ask how, just do it.",

                "Now let go.",

                "To err is human, to forgive is divine!",

                "Think how wonderful you are!",

                "Feel how wonderful it feels just to be alive!",

                "Give yourself a few seconds to feel relaxed. Then smile from your heart. Don't worry how you do it; just do it. Just smile from your heart and feel, really feel, how relaxed, cheerful and happy you are. It is a big mistake to think I am being farcical. But I can tell you, in my capacity as a chi kung grandmaster, that this feeling of relaxation and cheerfulness from your heart may possibly be the best benefit of this exercise.",

                "This exercise can be performed in different ways, depending on your needs, aspirations, whims and fancies.",

                "A good speach is comparatively the same like a miniskirt: it must be long enough to cover the important things and short enough to keep things interessting.",

                "Enjoy the stillness, just be.",

                "Depending on your perspective, the answer can be yes, no, yes and no, neither yes nor no.",

                "The mind works in marvelous ways.",

                "In our school, we cannot just talk. We must be prepared to walk our talk.",

                "Safety First, Victory Second.",

                "Once you know the map all routes become clear.",

                "Of course there are female Monkeys in kung fu. How else could monkeys get babies?",

                "Enjoy the flow of life.",

                "Don't worry about it. Doesn't mean it is not important, but don't worry about it.",

                "When you give, you open your heart and your spirit expands.",

                "This is Shaolin Kung Fu and not opium smoking.",

                "There are only 2 kinds of food in Malaysia; good food and excellent food.",

                "Good health is your birthright. It is natural to be healthy.",

                "Life is a meaningful flow of energy.",

                "After the chi flow you have had, and after every chi flow you have, your soul is slightly purer.",

                "Hence, anyone who has the very rare opportunity to be born a human, and a rarer opportunity to come accross Amitabha's generosity, should not waste this golden chance.",

                "Student: I don't know how to not worry. Sifu: if you were running to the edge of a cliff and i yell 'cliff...stop' do you have to know anything or do you just stop.... Cease.",

                "I would like to share with you a great cosmic truth. What you are and will be, is what you think. If one constantly thinks of himself as being sick and unhappy, he will be sick and unhappy. It is very important that you must always have noble thoughts — of yourself and of others. And especially when your mind has become powerful, you must always use it for good.",

                "Many people mistakenly believe that if they clear their mind of all thoughts, they will become a moron.",

                "The conceptual world is a function of the mind.",

                "Where is the Kingdom of God? Jesus answers clearly in the Bible, &ldquo;The Kingdom of God is in your heart.&rdquo; An excellent way to have a glimpse of God's Kingdom is to stand upright, be totally relaxed, close your eyes gently, and smile from your heart. As your heart opens, feel the presence of Jesus with you, and let the Grace of God flow over you. Conclude the session by giving a blessing to whoever you wish.  Practice this every morning. You will grow spiritually, and as a result you will feel free, peaceful and happy.",

                "Thoughts arise, events materialize.",

                "How does a Shaolin master defend against black magic? If you know Chinese, especially Cantonese, you may have come across this expression: if your luck is good, evil cannot come near you. &ldquo;Good luck&rdquo; in Chinese is &ldquo;hao yun qi&rdquo;, or &ldquo;ho wan hei&rdquo; in Cantonese, which is word for word &ldquo;good-circulation-energy&rdquo;. A Shaolkin master has not only good circulation of energy, but also a powerful, trained mind. The good circulation of energy around your body acts like electricity, into which evil forces may not penetrate. Low level spirits, like ghosts, are actually scared of the radiant energy of a vibrant person. But that does not mean a Shaolin master would go about fighting black magicians. Shaolin teachings also place much importance on another principle: live and let live.",

                "It is important to always have good thoughts.",

                "While many martial arts tend to make their practitioners belligerent and aggressive, Tai Chi Chuan helps its adepts to become calm and composed. This comes about not through moralizing by instructors, but through the nature of Tai Chi Chuan practice itself. It is more suitable than most other martial arts for character development, as the very nature of its training, with its emphasis on gracefulness, gentleness, and harmonious energy flow, is intrinsic to the development of mental freshness and cosmic harmony.",

                "Your form must be good......Tiger claw not prawn!",

                "When you have attained a heightened state of mind, you will have a sense of tranquility, joy, and inner peace, yet you will be mentally sharp and fresh at all times. Your emotional and mental dimension will have widened and deepened, and the sort of pettyness with which many people are preoccupied, like gossip and envy will appear very childish. You will be amazed at the depth and clarity with which you perceive and solve problems which appeared formidable before. And your friends will also feel the calmness and confidence that you inspire.",

                "Black tiger steals heart, not opium smoker reaches for pipe.",

                "You need not wait to live your life fully in the future; you live your life fully now. This is Zen, an essential aspect of our Shaolin training. For example, when you eat your breakfast every morning, you are fully aware of your eating your breakfast and enjoying it. You don't have to enjoy your breakfast the next day. If you have something important to do, you do it now and enjoy doing it; you don't say you will do it tomorrow. This is living our Shaolin arts.",

                "There is plenty of energy in the universe. And it's free!",

                "There are two ways to do anything: The negative way, and the Shaolin Wahnam way.",

                "With the right information, you can attain in six months what uninformed students would not attain in many years."];

    var whichQuote = Math.round(Math.random() * (quotes.length - 1));

    jQuery("p#sifu-quote").html(quotes[whichQuote]);
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

