export default function Loading() {
    return (
        <main className="bg-gradient-to-b from-dark to-lighterDark min-h-screen grid place-items-center p-7 md:p-10">
            <div className="w-72 h-14 bg-gray-700 rounded-lg animate-pulse flex items-center justify-center">
                <p className='text-gray-400 font-medium'>Loading...</p>
            </div>
        </main>
    );
}