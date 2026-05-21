import { useState } from 'react'
import { Calculator } from './components/Calculator'
import { Graph } from './components/Graph'

type Tab = 'calculator' | 'graph'

export default function App() {
  const [tab, setTab] = useState<Tab>('calculator')

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-100 via-indigo-50 to-slate-100 px-4 py-10">
      <main className="w-full max-w-lg">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Exprose Solve
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Calculator & graph — fully static, no backend
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
              className={`px-4 py-3.5 text-sm font-semibold transition ${
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
              className={`px-4 py-3.5 text-sm font-semibold transition ${
                tab === 'graph'
                  ? 'border-b-2 border-indigo-600 bg-indigo-50/80 text-indigo-700'
                  : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
              }`}
            >
              Graph
            </button>
          </nav>

          <div className="p-6" role="tabpanel">
            {tab === 'calculator' ? <Calculator /> : <Graph />}
          </div>
        </div>
      </main>
    </div>
  )
}
