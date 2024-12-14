import React, { useEffect, useState } from 'react'
import { feedFollowedTopics } from '../../../services/feed'
import PostsView from '../common/posts-view'

export default function FollowedTopicsView() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await feedFollowedTopics()
        if (res) {
          setData(
            res.map((post) => ({
              ...post,
              isLiked: post.isLikedByUser,
              isDisliked: post.isDislikedByUser,
              author: {
                ...post.author,
                title: post.name,
                username: post.createdBy,
              },
            }))
          )
          setLoading(false)
        } else {
          setError('Failed to fetch data')
        }
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return <PostsView data={data} loading={loading} />
}
