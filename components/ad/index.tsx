import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { _get_banners } from '@/server/banners';
import Link from 'next/link';
import { CloseCircleOutlined } from '@ant-design/icons';
// 广告栏
export default function AdDiv() {
  const [adList, setAdList] = useState([]);
  const [show, setShow] = useState(true);
   const getBanners = async () => {
     const query = {
       type: 'AD',
     };
     await _get_banners(JSON.stringify(query)).then((data) => {
       if (data.status === 200) {
         setAdList(data.data);
       }
     });
   };
  useEffect(() => {
    getBanners();
  }, []);

  return (
    <div>
      {adList.length > 0&& show && (
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', right: '100px', fontSize:'20px', cursor:'pointer', margin:10 }} onClick={(e)=>{
            setShow(false)
          }}>
            <CloseCircleOutlined />
          </div>
          <a href={adList[0].targeturl || ''}>
            <img src={adList[0].img} alt="" style={{ width: '100%' }} />
          </a>
        </div>
      )}
    </div>
  );
}
