/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
/*		document.addEventListener('deviceready', function() {
			var exitApp = false, intval = setInterval(function (){exitApp = false;}, 1000);
			document.addEventListener("backbutton", function (e){
				e.preventDefault();
				if (exitApp) {
					clearInterval(intval) 
					(navigator.app && navigator.app.exitApp()) || (device && device.exitApp())
				}
				else {
					exitApp = true
					history.back(1);
				} 
			}, false);
		}, false);
	*/	}
			$(document).ready(function(){
				$('a').click(function(e){
					e.preventDefault();
					$('body').prepend("<div class='loading'></div>");
					window.location = $(this).attr('href');;
				});
				$('#menu').click(function(e){
					e.preventDefault();
					$('.menu_container').toggle('slide',{direction:'right'},400);
				});
				$('.share').click(function(e){
					e.preventDefault();
					$('.social_share').fadeIn();
				});
				$(".social_share").click(function(e){
					e.preventDefault();
					$(".social_share").hide();
				});
				$("#logout").click(function(e){
					e.preventDefault();
					localStorage.removeItem("hobby_userID");
					window.location = "login.html";
				})
			});
