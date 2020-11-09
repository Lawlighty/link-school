import PcLayout from "../components/layouts/PcLayout";
import Link from "next/link";
import "./register.css";

export default function Register() {
  return (
    <PcLayout showFooter={false}>
      <div className="register_box">
        <div className="center_box">
          <div className="register_form">
            <div className="title">
              <div>这是登录页面</div>
              <Link href="/login">
                <a>已有账号，立即登录</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PcLayout>
  );
}
