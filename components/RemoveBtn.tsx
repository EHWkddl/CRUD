'use client'

import { HiTrash } from 'react-icons/hi'

export default function RemoveBtn({ id }: any) {
  const removeTopic = async () => {
    const confirmed = confirm('정말 삭제하시겠습니까?')
    if (!confirmed) return

    await fetch(`/api/topics?id=${id}`, {
      method: 'DELETE',
    })

    window.location.reload()
  }

  return (
    <button onClick={removeTopic} className="text-red-400">
      <HiTrash size={24} />
    </button>
  )
}
