import React from "react";
import ReactDOM from "react-dom";
import MagicBell, { FloatingNotificationInbox } from "@magicbell/magicbell-react";

const theme = {"icon":{"borderColor":"#5225C1","width":"24px"},"banner":{"fontSize":"14px","backgroundColor":"#F8F5FF","textColor":"#3A424D","backgroundOpacity":1},"unseenBadge":{"backgroundColor":"#F80808"},"header":{"fontSize":"15px","backgroundColor":"#FFFFFF","textColor":"#5225C1","borderRadius":"16px"},"footer":{"fontSize":"15px","backgroundColor":"#FFFFFF","textColor":"#5225C1","borderRadius":"16px"},"notification":{"default":{"fontSize":"14px","textColor":"#3A424D","borderRadius":"16px","backgroundColor":"#FFFFFF","hover":{"backgroundColor":"#F2EDFC"},"state":{"color":"transparent"},"margin":"8px"},"unseen":{"textColor":"#3A424D","backgroundColor":"#F8F5FF","hover":{"backgroundColor":"#F2EDFC"},"state":{"color":"#5225C1"}},"unread":{"textColor":"#3A424D","backgroundColor":"#F8F5FF","hover":{"backgroundColor":"#F2EDFC"},"state":{"color":"#5225C1"}}}};

ReactDOM.render(
  <MagicBell
    apiKey=""
    userEmail=""
    theme={theme}
    locale="en"
  >
    {(props) => <FloatingNotificationInbox width={400} height={500} {...props} />}
  </MagicBell>,
  document.body,
);
