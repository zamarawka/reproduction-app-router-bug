'use client';

export default function HomeContent({ tab }: { tab: string }) {
  return <div>{tab ? `Tab content: ${tab}` : 'Home'}</div>
}