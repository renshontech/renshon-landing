import renshonLogo from '@/images/logos/renshon.svg'
import Image from 'next/image'

export function Logo() {
  return (
    <Image src={renshonLogo} alt="Renshon" width={120} height={40} unoptimized />
  )
}
