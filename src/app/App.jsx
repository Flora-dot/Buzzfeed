import { useState } from 'react'
import './App.css'
import { Logo } from '../components/Logo'
import { Header } from '../components/Header'
import { ArticleInfo } from '../components/ArticleInfo'
import { HeroSection } from '../components/HeroSection'
import { QuoteOne } from '../components/Quotes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <main className='px-16'>
      <ArticleInfo />
      <HeroSection />
      <QuoteOne />
    </main>
    </>
  )
}

export default App
