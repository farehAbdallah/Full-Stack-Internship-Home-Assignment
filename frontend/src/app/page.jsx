import JobListPage from '@/components/JobListPage';

export default function HomePage() {
  return (
    <div className='flex pt-40 justify-center h-screen bg-gray-50'>
      {/*<h1 className='text-4xl font-bold'>Welcome to My Next.js App!</h1>*/}
      <div className="w-1/2">
        <JobListPage />
      </div>
    </div>
  );
}
