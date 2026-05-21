import { useState } from 'react'
import { Calculator } from './components/Calculator'
import { Graph } from './components/Graph'

type Tab = 'calculator' | 'graph'

export default function App() {
  const [tab, setTab] = useState<Tab>('calculator')

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-indigo-50 to-slate-100 px-6 py-10 sm:px-10">
      <main className="w-full max-w-4xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Exprose-AI
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-slate-600 sm:text-lg">
            Calculate math expressions and graph equations instantly in your
            browser.
          </p>
        </header>

        <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-xl shadow-slate-200/50">
          <nav
            className="grid grid-cols-2 border-b border-slate-100"
            role="tablist"
            aria-label="Main"
          >
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'calculator'}
              onClick={() => setTab('calculator')}
              className={`px-6 py-4 text-base font-semibold transition ${
                tab === 'calculator'
                  ? 'border-b-2 border-indigo-600 bg-indigo-50/80 text-indigo-700'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
              }`}
            >
              Calculator
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={tab === 'graph'}
              onClick={() => setTab('graph')}
              className={`px-6 py-4 text-base font-semibold transition ${
                tab === 'graph'
                  ? 'border-b-2 border-indigo-600 bg-indigo-50/80 text-indigo-700'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
              }`}
            >
              Graph
            </button>
          </nav>

          <div className="p-8 sm:p-10" role="tabpanel">
            {tab === 'calculator' ? <Calculator /> : <Graph />}
          </div>
        </div>
      </main>
    </div>
  )
}
