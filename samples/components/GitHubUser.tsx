import * as React from 'react';
import { Item, Avatar, Col } from '@universe-ui/core'

export const GithubUserItem = ({ data, focused, onClick }) => {
  return (
    <Item onClick={onClick} focused={focused}>
      <Avatar imageUrl={data.avatar_url} />
      <Col fill gap='2px'>
        <strong>{data.login}</strong>
      </Col>
    </Item>
  )
}
