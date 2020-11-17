//我的 --通知界面
import PcLayout from "../../components/layouts/PcLayout";

export default function Message() {
  return (
    <PcLayout showFooter={true} isBlack={false}>
      <div>这是系统通知</div>
    </PcLayout>
  );
}
