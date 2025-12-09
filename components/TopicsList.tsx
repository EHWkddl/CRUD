'use client'

import Link from 'next/link'
import { HiPencilAlt } from 'react-icons/hi'
import RemoveBtn from './RemoveBtn'

interface Topic {
  _id: string
  title: string
  description: string
  createdAt?: string
  updatedAt?: string
}

export default function TopicsList({ topics }: { topics: Topic[] }) {
  return (
    <div className="mt-8">
      {topics.map((topic) => (
        <div key={topic._id} className="mb-6">
          <div className="border p-6 rounded-md shadow-sm flex justify-between items-start">
            {/* 왼쪽 내용 영역 */}
            <div>
              <h2 className="text-2xl font-bold">{topic.title}</h2>
              <p className="text-base">{topic.description}</p>

              {topic.createdAt && topic.updatedAt && (
                <p className="text-xs text-gray-500 mt-2">
                  Created: {new Date(topic.createdAt).toISOString()}{' '}
                  &nbsp;&nbsp; Updated:{' '}
                  {new Date(topic.updatedAt).toISOString()}
                </p>
              )}
            </div>

            <div className="flex items-center gap-4">
              <RemoveBtn id={topic._id} />
              <Link href={`/editTopic/${topic._id}`}>
                <HiPencilAlt size={24} className="cursor-pointer" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
