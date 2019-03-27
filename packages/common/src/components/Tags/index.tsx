/* @flow */
import * as React from 'react';
import Margin from '../spacing/Margin';

import { TagContainer } from './elements';

import Tag from './Tag';

type Props = {
  tags: Array<string>;
  align?: 'right' | 'left';
};

function Tags({ tags, align = 'left', ...props }: Props) {
  return (
    <TagContainer align={align} {...props}>
      {tags.sort().map(tag => (
        <Margin key={tag} vertical={0.5} horizontal={0.2}>
          <Tag tag={tag} />
        </Margin>
      ))}
    </TagContainer>
  );
}

export default Tags;
