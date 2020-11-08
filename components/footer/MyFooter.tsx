import { useEffect } from "react";
import FooterContent from './FooterContent/FooterContent'
import "./MyFooter.css";

export default function MyFooter({ props }: { props: object }) {
  useEffect(() => {
    console.log("MyFooter 页面的props", props);
  });

  return (
    <div>
      {props["isBlack"] ? (
        <footer className="footer">
          <div className="footerBox">
            {props["showMoreFooter"] ? <FooterContent></FooterContent> : null}
            <div className="copyright">
              领课网络 Copyright © 2015-现在
            </div>
            <div className="icp_num">
              <a
                href="http://www.beian.miit.gov.cn/"
                className="c_ccc"
                target="_blank"
              >
                粤ICP备00000000号-1
              </a>
              <span>&nbsp;|&nbsp;</span>
              <a
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=000000000000"
                target="_blank"
                className="c_ccc"
              >
                <img src="/imgs/prn_icon.png" alt="" className="prn_icon" />
                &nbsp;粤公网安备000000000000号
              </a>
            </div>
          </div>
        </footer>
      ) : (
        <footer className="footer blueMode">
          <div className="footerBox blueMode">
            <div className="copyright blueMode">
              <span>领课网络 Copyright © 2015-现在</span>
            </div>
            <div className="icp_num blueMode">
              <a
                href="http://www.beian.miit.gov.cn/"
                className="c_ccc blueMode"
                target="_blank"
              >
                粤ICP备00000000号-1
              </a>
              <span>&nbsp;|&nbsp;</span>
              <a
                href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=000000000000"
                target="_blank"
                className="c_ccc blueMode blueMode"
              >
                <img src="/imgs/prn_icon.png" alt="" className="prn_icon" />
                &nbsp;粤公网安备000000000000号
              </a>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
