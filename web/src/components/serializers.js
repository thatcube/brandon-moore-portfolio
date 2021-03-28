import React from "react";
import Figure from "./figure";
import LargeImage from "./largeImage";
import getYouTubeId from 'get-youtube-id';
import YouTube from 'react-youtube';
import { buildImageObj } from "../lib/helpers";

const serializers = {
  types: {
    figure: Figure,
    largeImage: LargeImage,
    youtube: ({ node }) => {
      const opts = {
        width: '374',
        height: '810',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          // autoplay: 1,
          // iv_load_policy: 3,
          modestbranding: 1,
          rel: 0,
          // color: 'white',
          // controls: 0,
        },
      };
      const { url } = node
      const id = getYouTubeId(url)
      return (<div className="youtubeVideoContainer"><YouTube className="youtubeVideo" opts={opts} videoId={id} /></div>)
    }
  }
};

export default serializers;
