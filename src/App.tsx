import { useState } from 'react'
import { useLiveQuery } from 'dexie-react-hooks'
import { db } from './db'
import { Button } from './components/Button'
import { Card } from './components/Card'
import { Input } from './components/Input'

function App() {
  // 1. Estados para controlar o que o usuário digita e o que aparece na tela
  const [valor, setValor] = useState<string>('')
  const [mostrarInput, setMostrarInput] = useState<'income' | 'expense' | null>(null)

  // 2. "Gancho" que lê o banco de dados em tempo real
  const entries = useLiveQuery(() => db.entries.toArray()) || []

  // 3. Cálculos Dinâmicos baseados no que está salvo no SQLite (IndexedDB)
  const totalGanhos = entries.filter(e => e.type === 'income').reduce((sum: number, e) => sum + e.amount, 0)
  const totalGastos = entries.filter(e => e.type === 'expense').reduce((sum, e) => sum + e.amount, 0)
  const saldoAtual = totalGanhos - totalGastos
  
  const metaTotal = 3500; // Exemplo: Valor da moto DK 160
  const porcentagemMeta = Math.min(Math.round((saldoAtual / metaTotal) * 100), 100)

  // 4. Função para salvar no banco de dados
  async function handleSalvar() {
    const valorNumerico = parseFloat(valor.replace(',', '.'))
    
    if (isNaN(valorNumerico) || valorNumerico <= 0) {
      alert("Insira um valor válido")
      return
    }

    await db.entries.add({
      amount: valorNumerico,
      type: mostrarInput!,
      date: new Date()
    })

    // Limpa os campos após salvar
    setValor('')
    setMostrarInput(null)
  }

  return (
    <div className="min-h-screen bg-brand-dark p-6 flex flex-col items-center">
      <header className="w-full max-w-md mb-8 mt-4">
        <h1 className="text-2xl font-bold">Olá, Piloto! 🏍️</h1>
        <p className="text-zinc-400">Sua DK 160 está cada vez mais perto.</p>
      </header>

      <main className="w-full max-w-md space-y-6">
        {/* Card de Saldo Real - Agora os valores vêm do banco! */}
        <Card title="Saldo Total">
          <div className="flex items-baseline gap-2">
            <span className="text-brand-green text-4xl font-black">
              R$ {saldoAtual.toLocaleString('pt-BR')}
            </span>
          </div>
          <div className="mt-4 bg-zinc-800 h-3 rounded-full overflow-hidden">
            <div 
              className="bg-brand-green h-full transition-all duration-1000" 
              style={{ width: `${porcentagemMeta}%` }}
            />
          </div>
          <p className="text-xs text-zinc-500 mt-2 text-right">{porcentagemMeta}% da meta concluída</p>
        </Card>

        {/* Interface de Lançamento Rápido */}
        {mostrarInput ? (
          <Card title={mostrarInput === 'income' ? "Novo Ganho" : "Novo Gasto"}>
            <Input 
              label="Valor (R$)" 
              type="number"
              placeholder="0,00"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              autoFocus
            />
            <div className="flex gap-2">
              <Button label="Confirmar" onClick={handleSalvar} variant="primary" />
              <button 
                onClick={() => setMostrarInput(null)}
                className="w-full text-zinc-500 font-bold"
              >
                Cancelar
              </button>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            <Button label="Ganho" onClick={() => setMostrarInput('income')} variant="primary" />
            <Button label="Gasto" onClick={() => setMostrarInput('expense')} variant="secondary" />
          </div>
        )}
      </main>
    </div>
  )
}

export default App