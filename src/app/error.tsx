"use client"
import Link from "next/link";
const ErrorPage = () => {
  return (
 
<div className="grid h-screen place-content-center bg-white px-4">
<svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 768"
      className="mx-auto h-56 w-auto text-black sm:h-64"
    />
  <div className="text-center">
    <h1 className="text-9xl font-black text-gray-200">404</h1>

    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>

    <p className="mt-4 text-gray-500">We cant find that page.</p>

    <Link
      href="/"
      className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
    >
      Go Back Home
    </Link>
  </div>
</div>
  )
}

export default ErrorPage;