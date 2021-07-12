import React from 'react';
import VideoEmbed from '../showcase/VideoEmbed';

class Patrick extends React.Component {

  render() {
    return (
      <div className="showcase__content Patrick-Robinson">
        <h1 className="showcase__artwork-title">Intermedium (2021)</h1>
        <VideoEmbed url="https://www.youtube.com/watch?v=ysz5S6PUM-U" subtitle="Trailer Video"/>

        <h1 className="showcase__author-subtitle">By Patrick</h1>
        <p className="showcase__paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent laoreet fermentum consequat. Aenean faucibus interdum magna nec ullamcorper. Donec consectetur nec tortor vitae pellentesque. Proin consectetur consequat nibh id posuere. In iaculis, augue eu auctor congue, nulla odio commodo sem, viverra viverra sapien magna ac lacus. Vivamus ut accumsan ante. Nunc sit amet nisl id massa pharetra volutpat at vel leo. Maecenas scelerisque congue laoreet. Sed sed elit in massa condimentum vulputate. Morbi a enim in eros commodo malesuada id vitae eros. Cras nec dolor enim. </p>
        <VideoEmbed url="https://www.youtube.com/watch?v=ysz5S6PUM-U" subtitle="Playthrough Video"/>
      </div>
    );
  }
  
}

export default Patrick;