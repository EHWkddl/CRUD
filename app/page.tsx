import TopicsList from '@/components/TopicsList'
import connectMongoDB from '@/libs/mongodb'
import Topic from '@/models/topic'

export default async function Home() {
  await connectMongoDB()
  const topics = await Topic.find().lean()

  return (
    <div className="mt-8">
      <h1 className="text-3xl font-bold my-1">WebDev Topics</h1>
      <p className="mb-8">MongoDB CRUD examples</p>
      <TopicsList topics={JSON.parse(JSON.stringify(topics))} />
    </div>
  )
}
