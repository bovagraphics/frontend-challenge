// Module
var myApp = angular.module('myApp', []);

// Controller
myApp.controller('searchCtrl', function($http){
	var srchCtrl = this;
	$http.get('http://private-a73e-aquentuxsociety.apiary-mock.com/members').success(function(data,status,headers,config) {
		srchCtrl.members = data;
	}).error(function(data,status,headers,config) {
		console.log("No members found")
    });
});

// Content height
$(window).on('load resize',function() {
	var scrollerHeight = $(window).height() - 480;
	$('.content-container').css('height', scrollerHeight + 40);
	$('.content, .selected-member').css('max-height', scrollerHeight);
});