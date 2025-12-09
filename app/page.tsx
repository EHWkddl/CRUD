import TopicsList from '@/components/TopicsList'

async function getTopics() {
  const res = await fetch('http://localhost:3001/api/topics', {
    cache: 'no-store',
  })
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
