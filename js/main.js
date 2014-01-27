/*!
 *
 *	SOLAR Interaction and Functionality
 * 	Initially created by Coty Beasley @beacrea
 *	Email: cdbeasley@naic.org
 * 
 * -------------------------------------------
 * 
 *  TABLE OF CONTENTS
 *
 * -------------------------------------------
 *
 *	$_CONTENT COMPONENTS
 *		- News Ticker
 *
 *  $_NAVIGATION TABLE
 *      - Application Content Loader
 *
 *	$_STATE INFORMATION
 *		- State Listing
 *		- State Contact Information
 *		- Service Listing
 *		- Application Functions
 *
 */





/*
 * -------------------------------------------
 *	$_CONTENT COMPONENT
 * -------------------------------------------
 */

// News Ticker

var ticker = $('.news-articleWrap');
ticker.children().hide();
ticker.children(':first').show();

setInterval(function() {
    ticker.find(':visible').fadeOut(400, function() {
        $(this).appendTo(ticker);
        ticker.children(':first').fadeIn(800);
    });
},4500);





/*
 * -------------------------------------------
 *  $_NAVIGATION TABLE
 * -------------------------------------------
 */

// Application Content Loader

var appContentPath = 'modules/';
var router =  
{  
    nav : {
        modulePath: appContentPath + 'nav-aux.html',
        trigger: {
            tasks: appContentPath + 'content-tasks.html',
            messages: appContentPath + 'content-messages.html',
            reports: appContentPath + 'content-reports.html',
            search_licensee: appContentPath + 'content-search_licensee.html',
            account: appContentPath + 'content-account.html'
        }
    }

};

// Navigation Loaders

var wrapper = $(".contentWrapper");
var contentFade = function (triggerClass) {
    wrapper.hide();
    wrapper.load(router.nav.trigger[triggerClass]);
    wrapper.fadeIn(400);
};

wrapper.load(router.nav.trigger.tasks, function() {
    var table = $('#tech-companies');
    table.addClass("enhanced");
    var container = $('<div class="table-menu table-menu-hidden"><ul></div>');
    $( ".taskWrapper thead th" ).each(function(i){
        var th = $(this),
            id = th.attr("id"),
            classes = th.attr("class");  // essential, optional (or other content identifiers)

        // assign an ID to each header, if none is in the markup
        if (!id) {
            id = ( "col-" ) + i;
            th.attr("id", id);
        };

        // loop through each row to assign a "headers" attribute and any classes (essential, optional) to the matching cell
        // the "headers" attribute value = the header's ID
        $( ".taskWrapper tbody tr" ).each(function(){
            var cell = $(this).find("th, td").eq(i);
            cell.attr("headers", id);
            if (classes) {cell.addClass(classes);};
        });
        // create the menu hide/show toggles
        if ( !th.is(".persist") ) {

            // note that each input's value matches the header's ID;
            // later we'll use this value to control the visibility of that header and it's associated cells
            var toggle = $('<li><input type="checkbox" name="toggle-cols" id="toggle-col-'+i+'" value="'+id+'" /> <label for="toggle-col-'+i+'">'+th.text()+'</label></li>');

            // append each toggle to the container
            container.find("ul").append(toggle);
            toggle.find("input")
                .change(function(){
                    var input = $(this),
                        val = input.val(),  // this equals the header's ID, i.e. "company"
                        cols = $("#" + val + ", [headers="+ val +"]"); // so we can easily find the matching header (id="company") and cells (headers="company")

                    if (input.is(":checked")) {cols.show();}
                    else {cols.hide();};
                })
                .bind("updateCheck", function(){
                    if ( th.css("display") ==  "table-cell") {
                        $(this).prop('checked', true);
                    }
                    else {
                        $(this).prop('checked', false);
                    };
                })

                // call the custom event on load
                .trigger("updateCheck");

        }; // end conditional statement ( !th.is(".persist") )
    }); // end headers loop

    $(window).bind("orientationchange resize", function(){container.find("input").trigger("updateCheck");});

    var menuWrapper = $('<div class="table-menu-wrapper">'),
        menuBtn = $('<a href="#" class="table-menu-btn btn btn-default">Display Specific Columns</a>');

    menuBtn.click(function(){
        container.toggleClass("table-menu-hidden");
        return false;
    });

    menuWrapper.append(menuBtn).append(container);
    $('.table-scroll').before(menuWrapper);  // append the menu immediately before the table

    // assign click-away-to-close event
    $(document).click(function(e){
        if ( !$(e.target).is( container ) && !$(e.target).is( container.find("*") ) ) {container.addClass("table-menu-hidden");}
    });
});

$('a, .btn').click(function (event) {
    if ($(this).hasClass('triggerView-tasks')) {
        contentFade('tasks');
    } else if ($(this).hasClass('triggerView-messages')) {
        contentFade('messages');
    } else if ($(this).hasClass('triggerView-reports')) {
        contentFade('reports');
    } else if ($(this).hasClass('triggerView-search_licensee')) {
        contentFade('search_licensee');
    } else if ($(this).hasClass('triggerView-account')) {
        contentFade('account');
    } 
});

$('.panelbar a').not('.nav-category > a').addClass('triggerView-search_licensee');
$('.panelbar a').removeAttr("href").css('cursor', 'pointer');

// SBS Service Naviation

$('.panelbar ul').hide();
$('.nav-category > a').addClass('clearfix').prepend('<span class="button-toggle glyphicon glyphicon-collapse-down btn btn-xs pull-right"></span>');
$( ".nav-category a" ).click(function() {
    $(this).next('ul').stop().slideToggle();
});





/*
 * -------------------------------------------
 *	$_CONTENT COMPONENT
 * -------------------------------------------
 */

// State Listing

var stateList = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },{
        "name": "Alaska",
        "abbreviation": "AK"
    },{
        "name": "Arizona",
        "abbreviation": "AZ"
    },{
        "name": "Arkansas",
        "abbreviation": "AR"
    },{
        "name": "California",
        "abbreviation": "CA"
    },{
        "name": "Colorado",
        "abbreviation": "CO"
    },{
        "name": "Connecticut",
        "abbreviation": "CT"
    },{
        "name": "Delaware",
        "abbreviation": "DE"
    },{
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },{
        "name": "Florida",
        "abbreviation": "FL"
    },{
        "name": "Georgia",
        "abbreviation": "GA"
    },{
        "name": "Hawaii",
        "abbreviation": "HI"
    },{
        "name": "Idaho",
        "abbreviation": "ID"
    },{
        "name": "Illinois",
        "abbreviation": "IL"
    },{
        "name": "Indiana",
        "abbreviation": "IN"
    },{
        "name": "Iowa",
        "abbreviation": "IA"
    },{
        "name": "Kansas",
        "abbreviation": "KS"
    },{
        "name": "Kentucky",
        "abbreviation": "KY"
    },{
        "name": "Louisiana",
        "abbreviation": "LA"
    },{
        "name": "Maine",
        "abbreviation": "ME"
    },{
        "name": "Maryland",
        "abbreviation": "MD"
    },{
        "name": "Massachusetts",
        "abbreviation": "MA"
    },{
        "name": "Michigan",
        "abbreviation": "MI"
    },{
        "name": "Minnesota",
        "abbreviation": "MN"
    },{
        "name": "Mississippi",
        "abbreviation": "MS"
    },{
        "name": "Missouri",
        "abbreviation": "MO"
    },{
        "name": "Montana",
        "abbreviation": "MT"
    },{
        "name": "Nebraska",
        "abbreviation": "NE"
    },{
        "name": "Nevada",
        "abbreviation": "NV"
    },{
        "name": "New Hampshire",
        "abbreviation": "NH"
    },{
        "name": "New Jersey",
        "abbreviation": "NJ"
    },{
        "name": "New Mexico",
        "abbreviation": "NM"
    },{
        "name": "New York",
        "abbreviation": "NY"
    },{
        "name": "North Carolina",
        "abbreviation": "NC"
    },{
        "name": "North Dakota",
        "abbreviation": "ND"
    },{
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },{
        "name": "Ohio",
        "abbreviation": "OH"
    },{
        "name": "Oklahoma",
        "abbreviation": "OK"
    },{
        "name": "Oregon",
        "abbreviation": "OR"
    },{
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },{
        "name": "Rhode Island",
        "abbreviation": "RI"
    },{
        "name": "South Carolina",
        "abbreviation": "SC"
    },{
        "name": "South Dakota",
        "abbreviation": "SD"
    },{
        "name": "Tennessee",
        "abbreviation": "TN"
    },{
        "name": "Texas",
        "abbreviation": "TX"
    },{
        "name": "Utah",
        "abbreviation": "UT"
    },{
        "name": "Vermont",
        "abbreviation": "VT"
    },{
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },{
        "name": "Virginia",
        "abbreviation": "VA"
    },{
        "name": "Washington",
        "abbreviation": "WA"
    },{
        "name": "West Virginia",
        "abbreviation": "WV"
    },{
        "name": "Wisconsin",
        "abbreviation": "WI"
    },{
        "name": "Wyoming",
        "abbreviation": "WY"
    }
];

// State Contact Information

var contactInfo = [
    {
        "picture": "http://placehold.it/32x32",
        "company": "Sequitur",
        "street": "849 Kimball Street",
        "city": "Marienthal",
        "state": "Louisiana",
        "zip": 5597,
        "phone": "+1 (859) 511-2850",
        "fax": "+1 (871) 510-2441"
    },{
        "picture": "http://placehold.it/32x32",
        "company": "Corecom",
        "street": "324 Elm Place",
        "city": "Yonah",
        "state": "Illinois",
        "zip": 6527,
        "phone": "+1 (858) 593-3993",
        "fax": "+1 (840) 514-3873"
    },{
        "picture": "http://placehold.it/32x32",
        "company": "Zytrek",
        "street": "952 Elliott Place",
        "city": "Carlton",
        "state": "California",
        "zip": 2572,
        "phone": "+1 (992) 597-2396",
        "fax": "+1 (937) 446-2585"
    },{
        "picture": "http://placehold.it/32x32",
        "company": "Isotrack",
        "street": "796 Woodside Avenue",
        "city": "Juntura",
        "state": "North Carolina",
        "zip": 8580,
        "phone": "+1 (997) 504-3498",
        "fax": "+1 (971) 455-3005"
    },{
        "picture": "http://placehold.it/32x32",
        "company": "Tubalum",
        "street": "638 Wilson Street",
        "city": "Hegins",
        "state": "Pennsylvania",
        "zip": 4230,
        "phone": "+1 (838) 416-2316",
        "fax": "+1 (917) 465-2353"
    },{
        "picture": "http://placehold.it/32x32",
        "company": "Bovis",
        "street": "447 Coyle Street",
        "city": "Eureka",
        "state": "Arizona",
        "zip": 6495,
        "phone": "+1 (886) 510-3062",
        "fax": "+1 (865) 554-2180"
    }
];

// State Service Listing

var stateServices = [
    'Address Change Request (Business Entities) via OLS',
    'Address Change Request (Individuals) via NIPR',
    'Company Lookup',
    'Course Lookup with Offerings',
    'Email Maintenance',
    'Generate a Report', 
    'Licensee Lookup',
    'NIPR Attachment Warehouse',
    'Nonresident Original Application',
    'Nonresident Renewals',
    'Print Your Education Transcript',
    'Print Your License',
    'Prometric (Check Your CE)',
    'PSI (Exam Information)',
    'Resident Original Application',
    'Resident Renewals'
];

// Application Functionality

var stateWrite = function (array) {
    var statesHTML = "<option class=\'option-default\'>Choose a State</option>";
    
    for (var i=0; i<array.length; i++){
        statesHTML += "<option>" + stateList[i].name + "</option>";
    }
    
    return statesHTML;
};

var stateData = stateWrite(stateList);

var contactWrite = function (obj, index) {
    var contactHTML =
        "<p class='contact-address'>" + 
            "<span class='dataTitle'>Mailing Address</span>" +
            "<span>" + obj[index].state + " Division of Insurance" + "</span>" + 
            "<span>" + obj[index].street +"</span>" +
            "<span>" + obj[index].city + ", " + obj[index].state + " " + obj[index].zip + "</span>" +
        "</p>" +
        "<p class='contact-phone'>" +
            "<span class='dataTitle'>Phone</span>" +
            "<span>" + obj[index].phone +"</span>" +
        "</p>" +
        "<p class='contact-fax'>" +
            "<span class='dataTitle'>Fax</span>" +
            "<span>" + obj[index].fax +"</span>" +
        "</p>" +
        "<p class='contact-email'>" +
            "<span class='dataTitle'>Email</span>" +
            "<span>insurance@" + obj[index].state.toLowerCase().replace(/\s/g, '') + ".gov</span>" +
        "</p>" +
        "<p class='contact-website'>" +
            "<span class='dataTitle'>Website</span>" +
            "<span>http://insurance." + obj[index].state.toLowerCase().replace(/\s/g, '') + ".gov</span>" + 
        "<p>";
    
    return contactHTML;
};

var contactData = contactWrite(contactInfo, 3);           

$(".listofStates").html(stateData);
$(".state-contact").html(contactData);

$('.qTools-miniApp, .qTool-app').hide();    
$('.qTools-list a[class*=qTool-trigger]').click(function (event) {
    $('.qTools-miniApp, .qTool-app').hide();
    if ($(event.target).is('.qTool-trigger-stateInfo')) {
        $('.qTool-app-stateInfo').show();
    } else if ($(event.target).is('.qTool-trigger-stateServices')) {
        $('.qTool-app-stateServices').show();
    }
    $('.qTools-miniApp').slideDown();
    $('html, body').animate({
        scrollTop: $(".qTools-miniApp").offset().top - 80
    }, 600);
});
$('.qTools-miniApp .btn-cancel').click(function () {
    $('.qTools-miniApp').slideUp();
    $('html, body').animate({
        scrollTop: $(".qTools-list").offset().top - 80
    }, 600);
});



