var app =angular.module('app', ["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
		.when('/albums',{ controller: "AlbumListCtrl", templateUrl: 'partials/album_list_partial.html'})
		.when("/", {redirectTo: "/albums" })
		.when('/404_page',{ controller: "Controller404", templateUrl: '404_page_partial.html'})
		.otherwise("/", {redirectTo: "/404.html" });
});



app.controller('UserController', function($scope){
	$scope.user = {username: "SAsa", fullname:"Topolino sasa"};
});















app.controller('AlbumListCtrl', function($scope){
	$scope.add_album_error='';
	$scope.albums = [{name:'madrid1309', title: 'Weekend Madrid', date:'2016-12-14',description:'è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo'},
		{name:'iceland140', title:'A holiday in Iceland', date: '2017-11-22',description:'è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo'},
		{name:'thailandia2923', title:'Sun and fun in Thailandia', date: '2012-06-22',description:'è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo'},
		{name:'australia2017', title:'A wedding in Melburne', date:'2020-04-11', description:'è un testo segnaposto utilizzato nel settore della tipografia e della stampa. Lorem Ipsum è considerato il testo segnaposto standard sin dal sedicesimo secolo'}
	];



	$scope.addAlbum = function(new_album)
	{
		if(!new_album.title)
			$scope.add_album_error = "Missing Title";
		else if(!new_album.date || new_album.date.length <10)
			$scope.add_album_error = "Date not correct";
		else if(!new_album.description)
			$scope.add_album_error = "Missing description";
		else if(!new_album.name)
			$scope.add_album_error = "Missing short name";
		else
		{
			$scope.albums.push(new_album);
			$scope.new_album ={};	
			add_album_error = "";
		}
		
	}

	$scope.is_validate_date =function(data)
	{
		if (data.match(/[0-9]{2,4}[\-\/\. ,][0-9]{1,2}[\-\/\. ,][0-9]{1,2}$/))
		{
			var d = new Date(data);
			return !isNaN(data);
			
		}else
		{
			return false;	
		}

		
	}


	function is_valid_phone(phone)
	{
		phone = phone.trim();
		var out ="";
		if(phone[0] =='+')
			out += '+';

		for(var i = 0; i <phone.length; i++)
		{
			if(!isNaN( parseInt( phone[i] )))
			{
				out += phone[i];
			}
			return out;
		}
	}


});