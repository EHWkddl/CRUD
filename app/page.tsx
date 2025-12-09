import TopicsList from '@/components/TopicsList'

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    // Client 환경
    return window.location.origin
  }

  // Server 환경
  if (process.env.VERCEL_URL) {
    return `https://crud-r19o.vercel.app/${process.env.VERCEL_URL}`
  }

  // Development
  return 'http://localhost:3001'
}

async function getTopics() {
  const baseUrl = getBaseUrl()

  const res = await fetch(`${baseUrl}/api/topics`, {
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
