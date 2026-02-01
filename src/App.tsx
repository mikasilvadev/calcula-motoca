// src/App.tsx
import { Button } from './components/Button'
import { Card } from './components/Card'

function App() {
  return (
    <div className="min-h-screen bg-brand-dark p-6 flex flex-col items-center">
      {/* Header com Saudação */}
      <header className="w-full max-w-md mb-8 mt-4">
        <h1 className="text-2xl font-bold">Olá, Piloto! 🏍️</h1>
        <p className="text-zinc-400">Sua DK 160 está cada vez mais perto.</p>
      </header>

      <main className="w-full max-w-md space-y-6">
        {/* Card de Situação Financeira */}
        <Card title="Saldo Total">
          <div className="flex items-baseline gap-2">
            <span className="text-brand-green text-4xl font-black">R$ 1.250</span>
            <span className="text-zinc-500 font-medium">.00</span>
          </div>
          <div className="mt-4 bg-zinc-800 h-3 rounded-full overflow-hidden">
            <div className="bg-brand-green h-full w-[35%] transition-all duration-1000" />
          </div>
          <p className="text-xs text-zinc-500 mt-2 text-right">35% da meta concluída</p>
        </Card>

        {/* Card de Meta do Dia */}
        <Card title="Meta de Hoje">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-2xl font-bold text-white">R$ 180,00</p>
              <p className="text-sm text-zinc-500">Faltam R$ 45,00</p>
            </div>
            <div className="h-12 w-12 border-4 border-brand-accent rounded-full flex items-center justify-center text-[10px] font-bold">
              75%
            </div>
          </div>
        </Card>

        {/* Ações Rápidas */}
        <div className="grid grid-cols-2 gap-4">
          <Button label="Ganho" variant="primary" />
          <Button label="Gasto" variant="secondary" />
        </div>
      </main>
    </div>
  )
}

export default App