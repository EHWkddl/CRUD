import { NextRequest, NextResponse } from 'next/server'
import connectMongoDB from '../../../../libs/mongodb'
import Topic from '../../../../models/topic'

export async function PUT(request: NextRequest, { params }: any) {
  const { id } = params
  const { title, description } = await request.json()

  await connectMongoDB()
  await Topic.findByIdAndUpdate(id, { title, description })
  return NextResponse.json({ message: 'Topic Updated' }, { status: 200 })
}

export async function DELETE(request: NextRequest, { params }: any) {
  const { id } = params

  await connectMongoDB()
  await Topic.findByIdAndDelete(id)
  return NextResponse.json({ message: 'Topic Deleted' }, { status: 200 })
}
