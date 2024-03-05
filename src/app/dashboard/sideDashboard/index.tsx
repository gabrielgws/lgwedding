import { Button } from '@/components/ui/button'
import { Boxes, Gauge, Home } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const SideDashboard = ({ onSelect, selectedOption  }: any) => {
  const router = useRouter();

  const handleHomePage = () => {
    router.push("/");
  }

  return (
    <>
      <div className="p-0">
        <Button onClick={() => onSelect('dashboard')} variant='ghost' className={
          `gap-2 justify-start p-0 text-base ${selectedOption === 'dashboard' ? 'text-primary' : 'text-secondary'} hover:text-primary hover:bg-0`
        }>
          <Gauge width={20} />
          <h4 className="">Dashboard</h4>
        </Button>

        <Button onClick={() => onSelect('estoque')} variant='ghost' className={
          `gap-2 justify-start p-0 text-base ${selectedOption === 'estoque' ? 'text-primary' : 'text-secondary'} hover:text-primary hover:bg-0`
        }>
          <Boxes width={20} />
          <h4 className="">Estoque</h4>
        </Button>
      </div>

      <Button onClick={handleHomePage} variant='ghost' className={
          `bottom-0 absolute mb-12 justify-start p-0 gap-2 text-base text-secondary hover:text-primary hover:bg-0`
        }>
        <Home width={20}/>
        <h4>Página Inicial</h4>
      </Button>
    </>
  )
}

export default SideDashboard