$(document).ready(function(){
	let date = new Date();
	let dayWeek = date.getDay();
	let day = date.getDate();
	let month = date.getMonth();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let second = date.getSeconds();
	let hourConversion = 360 / 12 * hour;
	let minuteConversion = 360 / 60 * minute;
	let secondConversion = (360 / 360 * second) * 6;
	let i = 0;

	const d = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];
	const m = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'];

	if(day < 10){
		day = '0'+ day;
	} else {
		day = day;
	};
	if(hour < 10){
		hh = '0'+ hour;
	} else {
		hh = hour;
	};
	if(minute < 10){
		mm = '0'+ minute;
	} else {
		mm = minute;
	};
	
	setInterval( function(){
		++second;
		if (second >= 60) {
			second = 0;
			ss = '0' + second;
			++mm;
			if ( mm >= 60 ) {
				++hh;
				if( hh >= 24 ) {
					++day;
				}
			}
		} else if (second < 10) {
			ss = '0' + second;
		} else {
			ss = second;
		}

		$('#time').text(d[dayWeek] + ' ' + day + ' ' + m[month] + ' | ' + hh + ' : ' + mm + ' : ' + ss );

	}, 1000 );


	$('#dayString').text(d[dayWeek]);
	$('#dayInt').text(day);

	$('#hours img').css('transform', 'rotate('+ hourConversion + 'deg)');
	$('#minutes img').css('transform', 'rotate('+ minuteConversion + 'deg)');
	$('#seconds img').css('transform', 'rotate('+ secondConversion + 'deg)');

});