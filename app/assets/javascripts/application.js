// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

var vizyonJs = {

  getVimeoVideo: function(url) {

    var vimeoREGEX = /^http(?:s)?:\/\/(?:player.)?vimeo.com\/(?:video\/)?(?:.*?\.[A-z]{3})?(?:\?clip_id=)?(\d+)(?:(?:\?|&).*)?$/

    var videoId = url.match(vimeoREGEX)

      $('#videoPreview').html("<p>Loading Video Data</p>")


      $.getJSON('http://vimeo.com/api/v2/video/' + videoId[1] + '.json?callback=?', function(data) {

          var video = {
            url: url,
            provider: 'vimeo',
            title: data[0].title,
            description: data[0].description,
            file_url: data[0].thumbnail_large,
            provider_id: data[0].id,
            duration: data[0].duration
          }
          
          $('#videoPreview').html('<iframe src="http://player.vimeo.com/video/'+videoId[1]+'" width="400" height="230" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')

          $('#video_title').val(video.title);
          $('#video_caption').val(video.description);
          $('#video_share_code').val(videoId[1]);
          $('#video_user_id').val(1);
          $('#video_thumbnail').val(video.file_url);
          $('#video_link').val(video.url);
          $('#video_video_type').val("Vimeo"); 
          $('#video-details').show();
          //$('#video_downloadable').val(video.)
             
      }); 
    },

    getYoutubeVideo: function(url) {

    var youtubeREGEX = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/

    var videoId = url.match(youtubeREGEX)[1]

    $('#videoPreview').html("<p>Loading Video Data</p>")

    $.getJSON('https://gdata.youtube.com/feeds/api/videos/' + videoId + '?v=2&alt=json', function(data) {
     
          var video = {
            url: url,
            provider: 'youtube',
            title: data.entry.media$group.media$title.$t,
            description: data.entry.media$group.media$description.$t,
            file_url: data.entry.media$group.media$thumbnail[2].url,
            provider_id: data.entry.media$group.yt$videoid.$t,
            duration: data.entry.media$group.yt$duration.seconds
          }
          
          $('#videoPreview').html('<iframe width="400" height="230" src="http://www.youtube.com/embed/' + videoId + '" frameborder="0" allowfullscreen></iframe>')

          $('#video_title').val(video.title);
          $('#video_caption').val(video.description);
          $('#video_share_code').val(videoId);
          $('#video_user_id').val(1); 
          $('#video_thumbnail').val(video.file_url);
          $('#video_link').val(video.url);
          $('#video-details').show();
          $('#video_video_type').val("Youtube"); 
      }); 
    }
}