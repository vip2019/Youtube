// YOUTUBE API 
//https://stackoverflow.com/questions/43839217/how-do-i-retrieve-my-youtube-channel-playlists
// BY CHANNEL
//https://content.googleapis.com/youtube/v3/channels?id=UC_x5XG1OV2P6uZZ5FSM9Ttw&part=snippet%2CcontentDetails%2Cstatistics&key=12345
// FOR USERNAME
//https://content.googleapis.com/youtube/v3/channels?forUsername=ginocote&part=snippet%2CcontentDetails%2Cstatistics&key=12345
// THEN GET BY UPLOAD ID AND LOAD API playlistItems 

// BY CHANNEL ID GET ALL
//https://content.googleapis.com/youtube/v3/playlists?channelId=UC-VKI9vpl2tSyv0FK9E1-KA&maxResults=50&part=snippet&key=12345

var addbuttons = true ;

var players = plyr.setup(".js-player");

/* PLAYLIST  */
var myPlaylist = [
  {
    type: "youtube",
    title: "Charlie Puth - Attention [Official Video]",
    author: "Charlie Puth",
    sources: [{ 
      src: "nfs8NYg7yQM", 
      type: "youtube"
    }],
    src: "nfs8NYg7yQM",
    poster: "https://img.youtube.com/vi/nfs8NYg7yQM/hqdefault.jpg"
  },
  {
    type: "youtube",
    title: "Armin van Buuren live at Ultra Music Festival Miami 2017",
    author: "Armin van Buuren",
    sources: [{ 
      src: "cLcKew4cQq4", 
      type: "youtube"
    }],
    poster: "https://img.youtube.com/vi/cLcKew4cQq4/hqdefault.jpg"
  },
  {
    type: "youtube",
    title: "2 hours Trance Music - Armin Van Buuren",
    author: "Armin van Buuren",
    sources: [{ 
      src: "https://www.youtube.com/watch?v=r6KXy0j85AM", 
      type: "youtube"
    }],
    poster: "https://img.youtube.com/vi/r6KXy0j85AM/hqdefault.jpg"
  },
  {
    type: "audio",
    title: "Clublife by Tiësto 542 podcast ",
    author: "Tiësto",
    sources: [{ 
      src: "http://feed.pippa.io/public/streams/593eded1acfa040562f3480b/episodes/59c0c870ed6a93163c0a193d.m4a", 
      type: "m4v"
    }],
    poster: "https://img.youtube.com/vi/r6KXy0j85AM/hqdefault.jpg"
  },
  {
    type: "audio",
    title: "Vocal Trance Vol 261",
    author: "Sonnydeejay",
    sources: [{ 
      src: "http://archive.org/download/SonnydeejayVocalTranceVol261/Sonnydeejay%20-Vocal%20Trance%20vol%20261.mp3", 
      type: "mp3"
    }],
    poster: "http://4.bp.blogspot.com/-d6IPBUIj6YE/ThpRaIGJXtI/AAAAAAAABQ8/54RNlCrKCv4/s1600/podcast.jpg"
  },
  {
    type: "youtube",
    title: "2 hours Trance Music - Armin Van Buuren",
    author: "Armin van Buuren",
    sources: [{ 
      src: "https://www.youtube.com/watch?v=r6KXy0j85AM", 
      type: "youtube"
    }],
    poster: "https://img.youtube.com/vi/r6KXy0j85AM/hqdefault.jpg"
  },
  {
    type: "youtube",
    title: "2 hours Trance Music - Armin Van Buuren",
    author: "Armin van Buuren",
    sources: [{ 
      src: "https://www.youtube.com/watch?v=r6KXy0j85AM", 
      type: "youtube"
    }],
    poster: "https://img.youtube.com/vi/r6KXy0j85AM/hqdefault.jpg"
  },
  {
    type: "youtube",
    title: "2 hours Trance Music - Armin Van Buuren",
    author: "Armin van Buuren",
    sources: [{ 
      src: "https://www.youtube.com/watch?v=r6KXy0j85AM", 
      type: "youtube"
    }],
    poster: "https://img.youtube.com/vi/r6KXy0j85AM/hqdefault.jpg"
  },
  {
    type: "youtube",
    title: "2 hours Trance Music - Armin Van Buuren",
    author: "Armin van Buuren",
    sources: [{ 
      src: "https://www.youtube.com/watch?v=r6KXy0j85AM", 
      type: "youtube"
    }],
    poster: "https://img.youtube.com/vi/r6KXy0j85AM/hqdefault.jpg"
  },
  {
    type: "youtube",
    title: "2 hours Trance Music - Armin Van Buuren",
    author: "Armin van Buuren",
    sources: [{ 
      src: "https://www.youtube.com/watch?v=r6KXy0j85AM", 
      type: "youtube"
    }],
    poster: "https://img.youtube.com/vi/r6KXy0j85AM/hqdefault.jpg"
  },
  {
    type: "youtube",
    title: "2 hours Trance Music - Armin Van Buuren",
    author: "Armin van Buuren",
    sources: [{ 
      src: "https://www.youtube.com/watch?v=r6KXy0j85AM", 
      type: "youtube"
    }],
    poster: "https://img.youtube.com/vi/r6KXy0j85AM/hqdefault.jpg"
  },
  {
    type: "youtube",
    title: "2 hours Trance Music - Armin Van Buuren",
    author: "Armin van Buuren",
    sources: [{ 
      src: "https://www.youtube.com/watch?v=r6KXy0j85AM", 
      type: "youtube"
    }],
    poster: "https://img.youtube.com/vi/r6KXy0j85AM/hqdefault.jpg"
  }
];

/****************************************************************************************/
//var myPlaylist = ""; // Load json playlist OR Youtube api 3 Playlist
/****************************************************************************************/

// setTimeout(function(){

//   //$("li.pls-playing").removeClass("pls-playing");
//   //$(".plyr-playlist-wrapper").remove();

//   var target = ".js-player";
//   //var limit = 50;
//   var apikey = "AIzaSyDDBk8tAkod1VRRNyFZF09fgQyMpnSe5HI";

//   loadPlaylist(target, apikey, 10, myPlaylist); 
  
// }, 5000);
//   // scrollTo BUG


var apikey = "AIzaSyDDBk8tAkod1VRRNyFZF09fgQyMpnSe5HI";
//var apikey = ""; // ONLY FOR MY CUSTOM PLAYLIST NO NEED FOR YOUTUBE API KEY
var target = ".js-player";
var limit = 30;

$(document).ready(function(){
  // loadPlaylist(target, apikey, limit = 20, myPlaylist); // LOAD JSON PLAYLIST
  loadPlaylist(target, apikey, limit, myPlaylist);  // LOAD YOUTUBE OR USER VIDEO LIST
  
}); // JQUERY READY END

function loadPlaylist(target, apikey, limit = 20, myPlaylist) {
  
  $("li.pls-playing").removeClass("pls-playing");
  $(".plyr-playlist-wrapper").remove();
  
  
  limit = limit-1;
  
  // GET YOUTUBE PLAYLIST
  //var getPlaylist = $("div[data-type='youtube']").eq(0).data("playlist");
  //var getPlaylist = $("[data-type='youtube']").data("playlist");
  //var getPlaylist = $(".js-player").eq(0).data("playlist");
  
  if (myPlaylist) {

    PlyrPlaylist(".plyr-playlist", myPlaylist, limit);
    //return 
  } else{
    
    var ytplaylist = $(target).attr("data-ytpls");
    var ytuser = $(target).attr("data-user");

    //if ($('.js-player[data-ytpls]').length > 0){
    if (ytplaylist) {
      getTYPlaylist(ytplaylist, apikey, limit)
      //alert(ytplaylist);
    } else if (ytuser) {
      alert(ytuser);
    }
    
  }
    
//typeof $getYTPls === "undefined") return;

  //var getPlaylist = $(".js-player").eq(0).data("playlist");
//   var $getData = $(".js-player").eq(0);

//   var $getYTPls = $getData.data("ytpls");

  //alert(getPlaylist);
  //console.log(myPlaylist[0]);

  //if (typeof $getYTPls === "undefined") return;

  //var apikey = "AIzaSyB64VbCIHW48wwarovz64tcsRaZrciFkWM";
  //
  //var playlistId = "RDQMyFModNyxXx8";
  //var playlistId = $getYTPls;

  //"https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&id=YOUR-PLAYLIST-ID&key={YOUR_API_KEY}"

function getTYPlaylist(playlistId, apikey, limit) {
  
  $.ajax({
    url:
      "https://content.googleapis.com/youtube/v3/playlistItems?&key=" +
      apikey +
      "&maxResults=" +
      limit +
      "&part=id,snippet&playlistId=" +
      playlistId +
      "&type=video",
    dataType: "jsonp",
    success: function(data) {
      console.log(data.items);
      //console.log(data.items[0].snippet.title);

      resultData = youtubeParser(data);

      console.log(resultData);

      PlyrPlaylist(".plyr-playlist", resultData, limit);
    },
    error: function(jqXHR, textStatus, errorThrown) {
      alert(textStatus, +" | " + errorThrown);
    }
  });
  
}

  //PlyrPlaylist(".plyr-playlist", myPlaylist);

  function PlyrPlaylist(target, myPlaylist, limit) {
    $('<div class="plyr-playlist-wrapper"><ul class="plyr-playlist"></ul></div>').insertAfter("#player");

    var startwith = 0; // Maybe a playlist option to start with choosen video

    var playingclass = "";
    var items = [];
    //var playing == 1 ;
    $.each(myPlaylist, function(id, val) {
      //items.push('<li>' + option.title + '</li>');
      //alert(id)

      //console.log(val);

      if (0 === id) playingclass = "pls-playing";
      else playingclass = "";

      items.push(
        '<li class="' +playingclass +'"><a href="#" data-type="' +val.sources[0].type +'" data-video-id="' +val.sources[0].src +'"><img class="plyr-miniposter" src="' + val.poster + '"> ' +
val.title +" - " +val.author +"</a></li> ");
      
      if (id == limit) 
        return false;
      
    });
    $(target).html(items.join(""));
    
    setTimeout(function(){ 
      //$(target+" .pls-playing").find("a").trigger("click");
      
    }, 500);
    
    // players[0].on("isReady", function(event) {
    //   alert("isReady")
    //   $(target+" .pls-playing").find("a").trigger("click");
    // });
    
  // players[0].on("ready", function(event) {
  //   //$(".plyr-playlist .pls-playing").find("a").one().trigger("click");
  //   //players[0].play();
  //   $(target+" .pls-playing").find("a").trigger("click");
  // });

    // hack, play the first video in the playlist
    // setTimeout(function(){ 
    //       $(target).find("a").trigger("click");
    // }, 500);

    //   var getObj = myPlaylist[startwith];

    //   var video_id = getObj.youtube;
    //   var video_title = getObj.title;

    //   alert(video_id)

    //   console.log(video_id);

    //   //console.log(myPlaylist[0]);

    //   players[0].source({
    //     type: "video",
    //     title: "video_title",
    //     sources: [{ src: "cLcKew4cQq4", type: "youtube" }]
    //   });

    //console.log(items[0]);
  }

  players[0].on("ready", function(event) {
    //$(".plyr-playlist .pls-playing").find("a").one().trigger("click");
    console.log("Ready.....................................................");
    players[0].play();
    
    
    if(addbuttons){
      
      $(".plyr-playlist .pls-playing").find("a").trigger("click");
      
      $('<button type="button" class="plyr-prev"><i class="fa fa-step-backward fa-lg"></i></button>').insertBefore('.plyr__controls [data-plyr="play"]');

      $('<button type="button" class="plyr-next"><i class="fa fa-step-forward fa-lg"></i></button>').insertAfter('.plyr__controls [data-plyr="pause"]');
      
      addbuttons = false ;
    }
    
  }).on("ended", function(event) {
    var $next = $(".plyr-playlist .pls-playing")
      .next()
      .find("a")
      .trigger("click");
    //$next.parent().addClass("pls-playing");
  });

    // hack, play the first video in the playlist
    //$(".plyr-playlist .pls-playing").find("a").trigger("click");
    //$(target).find("pls-playing a").trigger("click");
    // setTimeout(function(){ 
    //       $(".plyr-playlist .pls-playing").find("a").trigger("click");
    // }, 500);

  $(document).on("click", "ul.plyr-playlist li a", function(event) {
    //$("ul.plyr-playlist li a").on("click", function(event) {
    event.preventDefault();

    $("li.pls-playing").removeClass("pls-playing");
    $(this)
      .parent()
      .addClass("pls-playing");

    var video_id = $(this).data("video-id");
    var video_type = $(this).data("type");
    var video_title = $(this).text();

    //alert(video_id);

    players[0].source({
      type: "video",
      title: "video_title",
      sources: [{ src: video_id, type: video_type }]
    });

    //ScrollTo($(".pls-playing").attr("href"), 500,0,10);

    $(".plyr-playlist").scrollTo(".pls-playing", 300);

    // players[0].on("ended", function(event) {
    //   console.log("test");
    // });
  })
  .on("click", ".plyr-prev", function(event) {
    var $next = $(".plyr-playlist .pls-playing")
      .prev()
      .find("a")
      .trigger("click");
  })
  .on("click", ".plyr-next", function(event) {
    var $next = $(".plyr-playlist .pls-playing")
      .next()
      .find("a")
      .trigger("click");
  });

  ///////////////////////

  // GET YOUTUBE PLAYLIST
  /* YOUTUBE PLAYLIST PARSER */
  // http://jsfiddle.net/onigetoc/cb2u1y4k/
  function youtubeParser(data) {
    var new_Data = data.items.map(function(item) {
      var thumb;

      if (item.snippet.thumbnails) {
        if (item.snippet.thumbnails.default)
          //live?
          thumb = item.snippet.thumbnails.default.url;

        if (item.snippet.thumbnails.medium)
          //live?
          thumb = item.snippet.thumbnails.default.url;
      }

      return {
        //type: "youtube",
        title: item.snippet.title,
        description: item.snippet.description,
        author: item.snippet.channelTitle,
        sources: [{ 
          src: item.snippet.resourceId.videoId, 
          type: item.kind.split('#')[0] 
        }],
        poster: thumb
      };
    });

    console.log(new_Data);

    // var output = {
    //   item: new_Data
    // };

    return new_Data;
  }
}

/****** GC ScrollTo **********/
// mine: https://jsfiddle.net/onigetoc/5kh0e5f4/
// https://stackoverflow.com/questions/2346011/how-do-i-scroll-to-an-element-within-an-overflowed-div
jQuery.fn.scrollTo = function(elem, speed, margin) {
  jQuery(this).animate(
    {
      scrollTop:
        jQuery(this).scrollTop() -
        jQuery(this).offset().top +
        jQuery(elem).offset().top
    },
    speed == undefined ? 1000 : speed
  );
  return this;
};
