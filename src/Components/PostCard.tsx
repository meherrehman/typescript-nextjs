import { PostProps } from '@/types/types'
import React from 'react'

const PostCard = ({ title, body }: PostProps) => {
    return (
        <div style={{ margin: "20px 0px", border: "2px solid white", padding: "10px" }}>
            <h1>{title}</h1>
            <span>{body}</span>
        </div>
    )
}

export default PostCard