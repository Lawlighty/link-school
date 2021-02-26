import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  MessageOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import {Tag } from 'antd';


const { CheckableTag } = Tag;

export default function CategoryTags({
  hasAll
}:{hasAll:boolean}) {
  const [currentTag, setCurrentTag] = useState<string>('');

  const tagsData = [
    'PHP',
    'JAVA',
    'GO',
    'C',
    'JavaScript',
    'Python',
    'PHP2',
    'JAVA3',
    'GO4',
    'C5',
    'JavaScript6',
    'Python7',
    'PHP6',
    'JAVA7',
    'GO8',
    'C9',
    'JavaScript00',
    'Python--',
  ];

  const handleChange = (tag, e) => {
    if (e) {
        setCurrentTag(tag);
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
            key={tag}
            checked={currentTag === tag}
            onChange={(e) => handleChange(tag, e)}
          >
            {tag}
          </CheckableTag>
        ))}
      </div>
    );
}
