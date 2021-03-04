import { useState, useEffect, useImperativeHandle } from 'react';
import { useRouter } from 'next/router';
import {
  MessageOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import {Tag } from 'antd';
import { _get_all_categorys } from '@/server/categorys';

const { CheckableTag } = Tag;

export default function CategoryTags({
  hasAll,
  cRef,
  changeFunc,
}: {
  hasAll: boolean;
  cRef: any;
  changeFunc?:any;
}) {
  const [currentTag, setCurrentTag] = useState<string>('');
  const [tagsData, setTagsData] = useState([]);

  useImperativeHandle(cRef, () => ({
    getCurrentTag: () => {
      return currentTag;
    },
    clearTag: () => {
      setCurrentTag('');
      
    },
  }));
  const getCategoryList = async () => {
    await _get_all_categorys().then((data) => {
      if (data.status === 200) {
        setTagsData(data.data);
      }
    });
  };
  useEffect(() => {
    getCategoryList();
  }, []);

  const handleChange = (tag, e) => {
    if (e) {
      if (tag === '') {
        setCurrentTag('');
        changeFunc('');
      } else {
        setCurrentTag(tag._id);
        changeFunc(tag._id);
      }
    }
  };

  return (
    <div className="CategoryTags_page">
      {hasAll && (
        <CheckableTag
          key=""
          checked={currentTag === ''}
          onChange={(e) => handleChange('', e)}
        >
          所有
        </CheckableTag>
      )}
      {tagsData.map((tag) => (
        <CheckableTag
          key={tag._id}
          checked={currentTag === tag._id}
          onChange={(e) => handleChange(tag, e)}
        >
          {tag.name}
        </CheckableTag>
      ))}
    </div>
  );
}
