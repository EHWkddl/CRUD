'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function EditForm({ id }: any) {
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    fetch(`/api/topics/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.topic.title)
        setDescription(data.topic.description)
      })
  }, [id])

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    await fetch(`/api/topics/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description }),
    })

    router.push('/')
    router.refresh()
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        className="border border-slate-500 p-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="border border-slate-500 p-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button className="bg-green-500 text-white p-3 font-bold">Update</button>
    </form>
  )
}
