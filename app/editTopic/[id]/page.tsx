import TopicsList from '@/components/TopicsList'

async function getTopics() {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://crud-6ngk.vercel.app/'
  const res = await fetch(`${baseUrl}/api/topics`, {
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
