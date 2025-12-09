import TopicsList from '@/components/TopicsList'

function getBaseUrl() {
  // Client 환경
  if (typeof window !== 'undefined') {
    return window.location.origin
  }

  // Server 환경 (Vercel)
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  // Dev 환경
  return 'http://localhost:3000'
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
