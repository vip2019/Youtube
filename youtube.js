var default_user_name = "PixiesOfficialTV";
selectChannel(default_user_name);
/* API shits */
function selectChannel(n3arquran) {
	$.ajax({
		url: "https://www.googleapis.com/youtube/v3/channels",
		type: "GET",
		dataType: "json",
		data: {
			part: "contentDetails",
			forUsername: user_name,
			key: $("meta[name=yt-api-k]").attr("value")
		},
		success: function(d) {
			$("#yt_list").html("");
			if (d.pageInfo.totalResults > 0) {
				console.dir(d.items);
				for (let item of d.items) {
					var uploads = item.contentDetails.relatedPlaylists.uploads;
					getVideos(uploads);
				}
			} else {
				$("input#user_name").addClass("error");
				$("div#channel_input > .info")
					.show()
					.html("This user not exists");
			}
		},
		error: function(x) {
			console.dir(x);
		}
	});
}
function getVideos(yt_id, next_page = "") {
	var limit = 10;
	var more = "";
	var xhr = $.ajax({
		url: "https://www.googleapis.com/youtube/v3/playlistItems",
		type: "GET",
		dataType: "json",
		data: {
			part: "snippet",
			playlistId: yt_id,
			maxResults: limit,
			pageToken: next_page,
			key: $("meta[name=yt-api-k]").attr("value")
		},
		success: function(data) {
			console.dir(data);
			if (data.nextPageToken) {
				console.log(data.nextPageToken);
				more =
					'<button id="load-more" data-next-page="' +
					data.nextPageToken +
					'" data-yt-id="' +
					yt_id +
					'">...</button>';
			}

			if (next_page === "") {
				$("#yt_player").attr(
					"src",
					"https://youtube.com/embed/" +
						data.items[0].snippet.resourceId.videoId +
						"?controls=0&showinfo=0&rel=0"
				);
			}
			for (var i = 0; i < limit; i++) {
				var title = $("<h3>").append(data.items[i].snippet.title);
				var thumb = $("<img>").attr(
					"src",
					data.items[i].snippet.thumbnails.medium.url
				);
				var video_id = data.items[i].snippet.resourceId.videoId;
				var link = $("<a class='video-link' href='#'>")
					.data("videoid", video_id)
					.append(thumb);
				var holder = $("<div class='item'>").append(link, title);
				$("#yt_list").append(holder);
			}
			$("#yt_list").append(more);
		}
	});
	console.dir(xhr);
}

/* load more shits */
$("#yt_list").on("click", "#load-more", function() {
	$(this)
		.animate(
			{
				"transform":"scaleX(4)",
				"opacity":"0.1"
			},
			function(){
				getVideos($(this).data("yt-id"), $(this).data("next-page"));
				$(this).remove();
			});
});

/* embeds shits */
$("#yt_list").on("click", "a.video-link", function() {
	var video_id = $(this).data("videoid");
	$("#yt_player").attr(
		"src",
		"https://youtube.com/embed/" +
			video_id +
			"?controls=0&showinfo=0&rel=0&autoplay=1"
	);
});

/* UI shits */
$("#user_name").on({
	keyup: function(e) {
		$(this).removeClass("error");
		$("div#channel_input > .info")
			.hide()
			.html("");
		if (e.keyCode === 13) {
			selectChannel($(this).val());
		}
	},
	click: function() {
		$(this).removeClass("error");
		$("div#channel_input > .info")
			.hide()
			.html("");
		$("#user_name").select();
	}
});
$("#sbm").on("click", function() {
	selectChannel($("#user_name").val());
});
$(window).on("load", function() {
	$("#user_name").val(default_user_name);
	$("#user_name").focus();
});
// lazy load
$("#yt_list").on("scroll", function() {
	if (
		Math.round($(this).scrollTop() + $(this).innerHeight(), 10) >=
		Math.round($(this)[0].scrollHeight, 10) - 5
	) {
		$("#load-more").trigger("click");
	}
});
