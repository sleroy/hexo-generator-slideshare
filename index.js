/**
 * hexo-generator-slideshare
 * https://github.com/sleroy/hexo-generator-slideshare
 * Copyright (c) 2017, Sylvain Leroy
 * Licensed under the Apache license 2.
 *
 * Syntax:
 *{ % slideshare[video_id] %}
 or { % [video_id[width[height[allowfullscreen]]]] %
 }
 */

hexo.extend.tag.register('slideshare', function(args) {
    var base = '//www.slideshare.net/slideshow/embed_code/key/',
        video_id = args[0],
        width = args[1],
        height = args[2],
        style = "border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;",
        marginheight = 0,
        marginwidth = 0,
        frameborder = 0,
        allowfullscreen = args[3];

    var config = hexo.config.slideshare || {};

    width = config.width || 510;
    height = config.height || 400;

    var tag = '<iframe src="' + base + video_id + '" frameborder=' + frameborder + ' marginwidth=' + marginwidth + ' marginheight=' + marginheight + ' width=' + width + ' height=' + height + ' scrolling="no" style="' + style + '"> </iframe>';

    return tag;

    /**
     *
     * < iframe src = "//www.slideshare.net/slideshow/embed_code/key/qtGS6vJHCYXQ80"
     width = "595"
     height = "485"
     frameborder = "0"
     marginwidth = "0"
     marginheight = "0"
     scrolling = "no"
     style = "border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;"
     allowfullscreen > < /iframe>
     
     <div style="margin-bottom:5px"> <strong> <a href="/ / www.slideshare.net / SylvainLeroy / rappels - modularisation - application - cc " title="
     Rappels Modularisation application C / C++" target="
     _blank ">Rappels Modularisation application C/C++</a> </strong> from <strong><a target="
     _blank " href=" //www.slideshare.net/SylvainLeroy">Sylvain Leroy</a></strong> </div>
     *
     */
});