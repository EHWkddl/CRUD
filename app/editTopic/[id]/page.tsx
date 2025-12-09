import TopicsList from '@/components/TopicsList'
import { headers } from 'next/headers'

async function getTopics() {
  const headerList = await headers()
  const host = headerList.get('host') || 'localhost:3000'
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'

  const res = await fetch(`${protocol}://${host}/api/topics`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    throw new Error('Failed to fetch topics')
  }

  return res.json()
}

export default async function Home() {
  const { topics } = await getTopics()

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold my-1">WebDev Topics</h1>
      <p className="mb-8">MongoDB CRUD examples</p>
      <TopicsList topics={topics} />
    </div>
  )
}
