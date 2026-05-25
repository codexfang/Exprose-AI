export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Exprose AI
        </h1>
        <p className="text-sm text-slate-500 sm:text-right">
          Matematics &amp; Graphing Engine
        </p>
      </div>
    </header>
  )
}
