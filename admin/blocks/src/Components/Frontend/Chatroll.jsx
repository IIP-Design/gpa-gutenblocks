const FrontendChatroll = () => (
  <div className="iip_chatroll">
    <div className="chatroll_topbar">
      <div className="iip_toggle">
        <div className="iip_one" />
        <div className="iip_two" />
      </div>
    </div>
    <iframe
      className=""
      width="'400"
      height="400"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      allowTransparency="true"
      src="https://'.$domain.'/embed/chat/'.$name.'?id='.$id.'&platform=html"
      title="IIP Chatroll"
    />
  </div>
);

export default FrontendChatroll;
