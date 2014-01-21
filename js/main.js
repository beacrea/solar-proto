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
 */





/*
 * -------------------------------------------
 *	$_CONTENT COMPONENT
 * -------------------------------------------
 */

// News Ticker

var ticker = $('.news-articleWrap');
ticker.children(':first').show().siblings().hide();

setInterval(function() {
    ticker.find(':visible').fadeOut(1000, function() {
        $(this).appendTo(ticker);
        ticker.children(':first').fadeIn(1000);
    });
},5000);

